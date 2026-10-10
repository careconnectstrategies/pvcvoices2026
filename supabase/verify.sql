-- PVC Voices — verify the live database matches what the site writes to.
-- Run in Supabase SQL Editor. Every row returned = something is MISSING.
with expected(tbl, col) as (values
  ('profiles','id'),('profiles','first_name'),('profiles','city'),('profiles','email'),
  ('stories','id'),('stories','author_id'),('stories','title'),('stories','body'),
  ('stories','burden'),('stories','outcome'),('stories','pvc_type'),
  ('stories','display_name'),('stories','display_city'),('stories','status'),('stories','created_at'),
  ('story_replies','id'),('story_replies','story_id'),('story_replies','parent_id'),
  ('story_replies','author_id'),('story_replies','author_name'),('story_replies','body'),
  ('contact_messages','name'),('contact_messages','email'),('contact_messages','subject'),('contact_messages','message'),
  ('letter_requests','full_name'),('letter_requests','email'),('letter_requests','city'),
  ('letter_requests','note'),('letter_requests','send_to_hrs'),('letter_requests','send_to_acc'),('letter_requests','send_to_aha')
)
select e.tbl as "table", e.col as missing_column
from expected e
left join information_schema.columns c
  on c.table_schema = 'public' and c.table_name = e.tbl and c.column_name = e.col
where c.column_name is null
order by 1, 2;

-- Second check: any EXTRA required (NOT NULL, no default) columns the site
-- doesn't fill in — these would also make inserts fail (e.g. a leftover pvc_burden).
select c.table_name as "table", c.column_name as unexpected_required_column
from information_schema.columns c
where c.table_schema = 'public'
  and c.table_name in ('profiles','stories','story_replies','contact_messages','letter_requests')
  and c.is_nullable = 'NO' and c.column_default is null
  and c.column_name not in (
    'id','first_name','city','author_id','title','body','story_id','author_name',
    'name','email','subject','message','full_name')
order by 1, 2;
