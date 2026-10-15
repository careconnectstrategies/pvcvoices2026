-- PVC Voices — Supabase schema
-- Run this once in the Supabase SQL editor (Project → SQL Editor → New query)
-- for a fresh project. Safe to re-run: uses IF NOT EXISTS / OR REPLACE.

-- ============================================================
-- PROFILES — one row per auth.users, holds the display info a
-- story author chooses at signup (first name + city). Created
-- automatically by the trigger below when someone signs up.
-- ============================================================
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  first_name text not null,
  city text not null,
  email text,
  created_at timestamptz not null default now()
);

-- For projects created before the email column existed.
alter table public.profiles add column if not exists email text;

alter table public.profiles enable row level security;

drop policy if exists "profiles: read own" on public.profiles;
create policy "profiles: read own"
  on public.profiles for select
  to authenticated
  using (id = auth.uid());

drop policy if exists "profiles: update own" on public.profiles;
create policy "profiles: update own"
  on public.profiles for update
  to authenticated
  using (id = auth.uid());

-- Auto-create a profile row from the first_name/city passed in
-- supabase.auth.signUp({ options: { data: { first_name, city } } }).
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, first_name, city, email)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'first_name', 'Friend'),
    coalesce(new.raw_user_meta_data ->> 'city', 'your city'),
    new.email
  )
  on conflict (id) do update
    set email = excluded.email;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- One-time backfill: fill in email (and any missing profile row) for
-- people who signed up before this trigger/column existed.
insert into public.profiles (id, first_name, city, email)
select
  u.id,
  coalesce(u.raw_user_meta_data ->> 'first_name', 'Friend'),
  coalesce(u.raw_user_meta_data ->> 'city', 'your city'),
  u.email
from auth.users u
on conflict (id) do update
  set email = excluded.email;

-- ============================================================
-- STORIES — patient story submissions. display_name / display_city
-- are a snapshot taken at submission time (the author's show/hide
-- toggles), independent from the live profile, so a later profile
-- edit never silently changes what a published story shows.
-- ============================================================
create table if not exists public.stories (
  id uuid primary key default gen_random_uuid(),
  author_id uuid not null references auth.users (id) on delete cascade,
  title text not null,
  body text not null,
  burden text,
  outcome text,
  pvc_type text,
  display_name text,
  display_city text,
  status text not null default 'published' check (status in ('pending', 'published', 'rejected')),
  created_at timestamptz not null default now()
);

alter table public.stories enable row level security;

drop policy if exists "stories: read published or own" on public.stories;
create policy "stories: read published or own"
  on public.stories for select
  using (status = 'published' or author_id = auth.uid());

drop policy if exists "stories: insert own" on public.stories;
create policy "stories: insert own"
  on public.stories for insert
  to authenticated
  with check (author_id = auth.uid());

-- ============================================================
-- STORY REPLIES — threaded, one level of self-reference for
-- arbitrary-depth nesting (parent_id -> another reply's id).
-- ============================================================
create table if not exists public.story_replies (
  id uuid primary key default gen_random_uuid(),
  story_id uuid not null references public.stories (id) on delete cascade,
  parent_id uuid references public.story_replies (id) on delete cascade,
  author_id uuid not null references auth.users (id) on delete cascade,
  author_name text not null,
  body text not null,
  created_at timestamptz not null default now()
);

alter table public.story_replies enable row level security;

drop policy if exists "replies: read all" on public.story_replies;
create policy "replies: read all"
  on public.story_replies for select
  using (true);

drop policy if exists "replies: insert own" on public.story_replies;
create policy "replies: insert own"
  on public.story_replies for insert
  to authenticated
  with check (author_id = auth.uid());

-- ============================================================
-- CONTACT MESSAGES — general contact form (app/contact).
-- Insert-only from the public site; read via the Supabase
-- dashboard Table Editor (no anon/authenticated select policy).
-- ============================================================
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

drop policy if exists "contact_messages: insert public" on public.contact_messages;
create policy "contact_messages: insert public"
  on public.contact_messages for insert
  to anon, authenticated
  with check (true);

-- ============================================================
-- LETTER REQUESTS — "Send a letter on my behalf" (app/contact).
-- Handled manually by the site manager, per the on-page copy —
-- this table is just the inbox for those requests.
-- ============================================================
create table if not exists public.letter_requests (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  city text not null,
  note text,
  send_to_hrs boolean not null default true,
  send_to_acc boolean not null default true,
  send_to_aha boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.letter_requests enable row level security;

drop policy if exists "letter_requests: insert public" on public.letter_requests;
create policy "letter_requests: insert public"
  on public.letter_requests for insert
  to anon, authenticated
  with check (true);

-- ============================================================
-- SELF-HEAL — if a table was created earlier with a different
-- shape (CREATE TABLE IF NOT EXISTS never alters an existing
-- table), make sure every column the site writes to exists.
-- Safe to re-run.
-- ============================================================
alter table public.profiles add column if not exists first_name text;
alter table public.profiles add column if not exists city text;
alter table public.profiles add column if not exists email text;

alter table public.stories add column if not exists author_id uuid references auth.users (id) on delete cascade;
alter table public.stories add column if not exists title text;
alter table public.stories add column if not exists body text;
alter table public.stories add column if not exists burden text;
alter table public.stories add column if not exists outcome text;
alter table public.stories add column if not exists pvc_type text;
alter table public.stories add column if not exists display_name text;
alter table public.stories add column if not exists display_city text;
alter table public.stories add column if not exists status text not null default 'published';

alter table public.story_replies add column if not exists parent_id uuid references public.story_replies (id) on delete cascade;
alter table public.story_replies add column if not exists author_name text;

alter table public.contact_messages add column if not exists subject text;

alter table public.letter_requests add column if not exists note text;
alter table public.letter_requests add column if not exists send_to_hrs boolean not null default true;
alter table public.letter_requests add column if not exists send_to_acc boolean not null default true;
alter table public.letter_requests add column if not exists send_to_aha boolean not null default true;

-- Tell Supabase's API to pick up any new columns immediately
-- (otherwise it can keep saying a column "does not exist").
notify pgrst, 'reload schema';
