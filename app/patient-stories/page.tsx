import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import StorySubmitSection from "@/components/StorySubmitSection";
import { createClient } from "@/lib/supabase/server";
import { tagClassFor, pvcTypeLabel, type Story } from "@/lib/types";
import styles from "./patient-stories.module.css";

export const metadata: Metadata = { title: "Patient Stories" };

function byline(story: Story) {
  if (story.display_name && story.display_city) return `${story.display_name}, ${story.display_city}`;
  if (story.display_name) return `${story.display_name} (location not shown by request)`;
  if (story.display_city) return `Anonymous from ${story.display_city}`;
  return "Anonymous community member";
}

export default async function PatientStoriesPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: stories } = await supabase
    .from("stories")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(30);

  const list = (stories ?? []) as Story[];

  return (
    <>
      <PageHero
        current="Patient Stories"
        kicker="Community · Real experiences · No venting, just voices"
        title="Patient stories"
      >
        <p>
          Every entry here is data doctors can&apos;t ignore — a real
          account of what it&apos;s like to feel every beat. Read what
          others are living through, then add your own.
        </p>
      </PageHero>

      <main>
        <div className="wrap">
          <div className={styles.introStrip}>
            <h2>Recent stories from the PVC Voices community</h2>
            <a className={styles.jumpBtn} href="#submit">Share your story ↓</a>
          </div>

          <div className={styles.storiesList}>
            {list.length === 0 && (
              <div className={`${styles.storyPost} ${styles.pending}`}>
                <p>
                  <em>
                    No stories yet — be the first to share yours below.
                    Submissions are moderated for the Terms of Use before
                    publishing, and each poster controls whether their
                    first name and city appear.
                  </em>
                </p>
              </div>
            )}

            {list.map((story) => (
              <article key={story.id} className={styles.storyPost}>
                <div className={styles.storyMeta}>
                  <span className={`${styles.tag} ${styles[tagClassFor(story.pvc_type)]}`}>
                    {pvcTypeLabel(story.pvc_type)}
                  </span>
                  <span className={styles.date}>
                    {new Date(story.created_at).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  {story.status !== "published" && story.author_id === user?.id && (
                    <span className={styles.date} style={{ color: "var(--rose-deep)" }}>
                      Pending review — only visible to you
                    </span>
                  )}
                </div>
                <h3>{story.title}</h3>
                <p className={styles.by}>— {byline(story)}</p>
                <p className="excerpt" style={{ color: "var(--slate)", maxWidth: "65em" }}>
                  {story.body.length > 320 ? `${story.body.slice(0, 320)}…` : story.body}
                </p>
                <Link className={styles.readMore} href={`/patient-stories/${story.id}`}>
                  Read the full story →
                </Link>
              </article>
            ))}
          </div>
        </div>

        <StorySubmitSection />
      </main>
    </>
  );
}
