-- PVC Voices — admin role.
-- Run once in Supabase → SQL Editor. Safe to re-run.
--
-- Each admin must have registered on the site with the emails in step 5
-- and confirmed them. Re-run this file after any of them registers.

-- 1. A role on every profile: 'user' (default) or 'admin'.
alter table public.profiles add column if not exists role text not null default 'user';
alter table public.profiles drop constraint if exists profiles_role_check;
alter table public.profiles add constraint profiles_role_check check (role in ('user', 'admin'));

-- 2. SECURITY: members may edit only their name and city — never their own
--    role. (Without this, anyone could make themselves an admin.)
revoke update on public.profiles from authenticated, anon;
grant update (first_name, city) on public.profiles to authenticated;

-- 3. Admin check used by the policies below.
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer set search_path = public
as $$
  select exists (
    select 1 from public.profiles where id = auth.uid() and role = 'admin'
  );
$$;

-- 4. Admins can delete any story or reply.
drop policy if exists "stories: admin delete" on public.stories;
create policy "stories: admin delete"
  on public.stories for delete
  to authenticated
  using (public.is_admin());

drop policy if exists "replies: admin delete" on public.story_replies;
create policy "replies: admin delete"
  on public.story_replies for delete
  to authenticated
  using (public.is_admin());

-- 5. The three admins.
update public.profiles
set role = 'admin'
where lower(email) in (
  'paige@careconnectstrategies.com',
  'raymond.dettinger@comcast.net',
  'support@pvcvoices.org'
);

notify pgrst, 'reload schema';

-- 6. Check (keep this last so the result shows): every admin that is set up.
select email, role from public.profiles where role = 'admin' order by email;
