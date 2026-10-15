-- New stories now publish immediately (the site also sets status explicitly).
alter table public.stories alter column status set default 'published';

-- OPTIONAL: publish any stories still waiting in "pending" (e.g. test posts).
-- Uncomment to run:
-- update public.stories set status = 'published' where status = 'pending';

notify pgrst, 'reload schema';
