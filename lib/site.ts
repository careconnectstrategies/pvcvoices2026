// Central source of truth for the site's canonical public URL.
// Used for metadataBase, sitemap.xml, robots.txt, and Open Graph image URLs.
//
// Resolution order:
// 1. NEXT_PUBLIC_SITE_URL — set this in Vercel (Project Settings → Environment
//    Variables) once you have a final domain (custom domain or vercel.app URL).
// 2. VERCEL_PROJECT_PRODUCTION_URL — set automatically by Vercel on every
//    deployment, so links still resolve correctly even before step 1 is set.
// 3. A localhost fallback for local development.
//
// Values are normalized (https:// added if missing, trailing slash removed)
// and validated, so a typo in the env var can never break the build.
function normalize(raw: string | undefined): string | null {
  const trimmed = raw?.trim();
  if (!trimmed) return null;
  const withProtocol = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;
  try {
    return new URL(withProtocol).origin;
  } catch {
    return null;
  }
}

export function getSiteUrl(): string {
  return (
    normalize(process.env.NEXT_PUBLIC_SITE_URL) ??
    normalize(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
    "http://localhost:3000"
  );
}
