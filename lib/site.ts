// Central source of truth for the site's canonical public URL.
// Used for metadataBase, sitemap.xml, robots.txt, and Open Graph image URLs.
//
// Resolution order:
// 1. NEXT_PUBLIC_SITE_URL — set this in Vercel (Project Settings → Environment
//    Variables) once you have a final domain (custom domain or vercel.app URL).
// 2. VERCEL_PROJECT_PRODUCTION_URL — set automatically by Vercel on every
//    deployment, so links still resolve correctly even before step 1 is set.
// 3. A localhost fallback for local development.
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/+$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}
