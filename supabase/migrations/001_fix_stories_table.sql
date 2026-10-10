-- PVC Voices — bring the live `stories` table in line with the site code.
-- Run once in Supabase → SQL Editor. Safe to re-run.
--   pvc_burden            -> renamed to burden (keeps existing data)
--   show_name / show_city -> replaced by display_name / display_city, then dropped
--   pvc_type, status      -> custom enum types converted to plain text
begin;

-- 1. burden
do $$
begin
  if exists (select 1 from information_schema.columns
             where table_schema='public' and table_name='stories' and column_name='pvc_burden')
     and not exists (select 1 from information_schema.columns
             where table_schema='public' and table_name='stories' and column_name='burden') then
    alter table public.stories rename column pvc_burden to burden;
  end if;
end $$;
alter table public.stories add column if not exists burden text;

-- 2. display_name / display_city (backfilled from the old toggles), then drop old columns
alter table public.stories add column if not exists display_name text;
alter table public.stories add column if not exists display_city text;

do $$
begin
  if exists (select 1 from information_schema.columns
             where table_schema='public' and table_name='stories' and column_name='show_name') then
    update public.stories s
       set display_name = case when s.show_name then coalesce(p.first_name, 'Friend') else 'Anonymous' end,
           display_city = case when s.show_city then p.city else null end
      from public.profiles p
     where p.id = s.author_id and s.display_name is null;
    update public.stories set display_name = 'Anonymous' where display_name is null;
    alter table public.stories drop column show_name, drop column show_city;
  end if;
end $$;

-- 3. enums -> text (policies that reference status must be dropped first)
do $$
declare r record;
begin
  for r in select policyname from pg_policies where schemaname='public' and tablename='stories' loop
    execute format('drop policy %I on public.stories', r.policyname);
  end loop;
end $$;

alter table public.stories alter column pvc_type type text using pvc_type::text;
alter table public.stories alter column status drop default;
alter table public.stories alter column status type text using status::text;
alter table public.stories alter column status set default 'pending';
alter table public.stories alter column status set not null;
alter table public.stories drop constraint if exists stories_status_check;
alter table public.stories add constraint stories_status_check
  check (status in ('pending', 'published', 'rejected')) not valid;

-- 4. policies (same as schema.sql)
alter table public.stories enable row level security;
create policy "stories: read published or own"
  on public.stories for select
  using (status = 'published' or author_id = auth.uid());
create policy "stories: insert own"
  on public.stories for insert
  to authenticated
  with check (author_id = auth.uid());

notify pgrst, 'reload schema';
commit;
