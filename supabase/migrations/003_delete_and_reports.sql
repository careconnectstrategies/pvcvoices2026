-- PVC Voices — author delete + "Report inappropriate content".
-- Run once in Supabase → SQL Editor. Safe to re-run.

-- 1. Authors can delete their own stories and replies.
--    (Deleting a story also deletes its replies; deleting a reply also
--    deletes replies nested under it — both already cascade.)
drop policy if exists "stories: delete own" on public.stories;
create policy "stories: delete own"
  on public.stories for delete
  to authenticated
  using (author_id = auth.uid());

drop policy if exists "replies: delete own" on public.story_replies;
create policy "replies: delete own"
  on public.story_replies for delete
  to authenticated
  using (author_id = auth.uid());

-- 2. Report log. One row per click on "Report inappropriate content".
--    Anyone (logged in or not) can add a row; nobody can read the log from
--    the website — view it in the Supabase Table Editor.
create table if not exists public.content_reports (
  id uuid primary key default gen_random_uuid(),
  content_type text not null check (content_type in ('story', 'reply')),
  content_id uuid not null,
  story_id uuid,
  reporter_id uuid references auth.users (id) on delete set null,
  created_at timestamptz not null default now()
);

alter table public.content_reports enable row level security;

drop policy if exists "content_reports: insert public" on public.content_reports;
create policy "content_reports: insert public"
  on public.content_reports for insert
  to anon, authenticated
  with check (true);

notify pgrst, 'reload schema';
