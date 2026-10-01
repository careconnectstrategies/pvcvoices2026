import type { MetadataRoute } from "next";
import { createClient } from "@supabase/supabase-js";
import { getSiteUrl } from "@/lib/site";

const STATIC_ROUTES = [
  "",
  "/about",
  "/patient-stories",
  "/resources",
  "/contact",
  "/advocacy",
  "/advocacy/take-action",
  "/advocacy/who-makes-the-rules",
  "/treatment-technology",
  "/treatment-technology/ablation-basics",
  "/treatment-technology/is-ablation-right-for-me",
  "/treatment-technology/find-a-specialist",
  "/treatment-technology/mapping-solutions",
  "/treatment-technology/emerging-technology",
  "/treatment-technology/industry-technology-partners",
  "/treatment-technology/safety-evidence",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  // Best-effort: include published patient stories too. If Supabase env
  // vars aren't configured at build time, fall back to the static routes.
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return staticEntries;
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const { data: stories } = await supabase
      .from("stories")
      .select("id, created_at");

    const storyEntries: MetadataRoute.Sitemap = (stories ?? []).map(
      (story) => ({
        url: `${siteUrl}/patient-stories/${story.id}`,
        lastModified: story.created_at
          ? new Date(story.created_at)
          : new Date(),
        changeFrequency: "monthly",
        priority: 0.5,
      })
    );

    return [...staticEntries, ...storyEntries];
  } catch {
    return staticEntries;
  }
}
