# PVC Voices

A patient-led advocacy and education platform for people living with
premature ventricular contractions (PVCs). Built with Next.js (App Router)
and Supabase, deployed on Vercel.

## Stack

- **Next.js 16** (App Router, TypeScript) — pages, layouts, Server Actions
- **Supabase** — auth (email/password), Postgres database, row-level security
- **Vercel** — hosting

No Tailwind — styling is plain CSS (`app/globals.css` for the shared design
system + a small CSS Module per page for page-specific layout), matching the
original design mockups in `../pvc-voices-drafts`.

## 1. Local setup

```bash
npm install
cp .env.example .env.local
```

Fill in `.env.local` with your Supabase project's URL and anon key (see
below), then:

```bash
npm run dev
```

## 2. Supabase setup

1. Create a project at [supabase.com](https://supabase.com).
2. In **Project Settings → API**, copy the **Project URL** and the
   **anon / public** key into `.env.local` (and later into Vercel's
   environment variables — same two values, same names).
3. Open **SQL Editor → New query**, paste the contents of
   [`supabase/schema.sql`](supabase/schema.sql), and run it. This creates:
   - `profiles` — first name + city, auto-created on signup via a trigger
   - `stories` — patient story submissions (starts as `status = 'pending'`;
     flip a row to `'published'` in the Table Editor to make it public —
     matches the site's "submissions are reviewed before publishing" policy)
   - `story_replies` — threaded replies (self-referencing `parent_id`)
   - `contact_messages` — the general contact form
   - `letter_requests` — "Send a Letter on My Behalf" requests
   - Row-level security policies for all of the above
4. In **Authentication → Providers**, email/password is enabled by default.
   In **Authentication → Sign In / Providers → Email**, make sure
   **Confirm email** is turned **Off**. This site does not send any
   confirmation emails — the registration form logs people in
   immediately after signup, so Confirm email must stay off or new
   accounts will be stuck waiting on a link that never arrives.

Moderation for stories/replies/contact/letter requests happens in the
Supabase **Table Editor** — there's no admin UI in the app itself.

## 3. Deploy: GitHub → Vercel

1. Push this project to a new GitHub repository.
2. In Vercel, **Add New Project** → import that repository.
3. In the Vercel project's **Settings → Environment Variables**, add the
   same two variables from `.env.local`:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy. No other configuration is needed — Vercel auto-detects Next.js.

## Project structure

```
app/                    Routes (App Router)
  actions.ts            Server Actions used by forms (stories, replies, contact, letters)
components/             Shared components (Nav, Footer, PageHero, SubNav, forms, auth)
lib/supabase/           Supabase client helpers (browser, server, proxy/session refresh)
lib/types.ts            Shared TypeScript types for stories/replies
proxy.ts                Refreshes the Supabase auth session on every request
                         (Next.js 16 renamed "Middleware" to "Proxy")
supabase/schema.sql     Full database schema + RLS policies
```

## Notes

- The homepage uses the "Concept B — Editorial Warmth" design, which the
  original design bundle's brand skill (`pvcbrand`) is based on. The
  alternate "Concept A — Clinical Teal" homepage mockup was not carried
  over.
- The "Take Action" letter builder is entirely client-side (no data is
  sent anywhere) — matching the original mockup's design intent.
- The "Send a Letter on My Behalf" form on the Contact page only records
  the request in Supabase; actually emailing HRS/ACC/AHA is a manual step
  for whoever runs the site, per the on-page copy.
