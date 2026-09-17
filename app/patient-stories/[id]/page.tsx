import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ReplyThread from "@/components/ReplyThread";
import { createClient } from "@/lib/supabase/server";
import { nestReplies, pvcTypeLabel, type Story, type StoryReply } from "@/lib/types";
import styles from "./story-detail.module.css";

function byline(story: Story) {
  if (story.display_name && story.display_city) return `${story.display_name}, ${story.display_city}`;
  if (story.display_name) return `${story.display_name} (location not shown by request)`;
  if (story.display_city) return `Anonymous from ${story.display_city}`;
  return "Anonymous community member";
}

export async function generateMetadata(
  props: PageProps<"/patient-stories/[id]">
): Promise<Metadata> {
  const { id } = await props.params;
  const supabase = await createClient();
  const { data: story } = await supabase.from("stories").select("title").eq("id", id).single();
  return { title: story?.title ?? "Story" };
}

export default async function StoryDetailPage(props: PageProps<"/patient-stories/[id]">) {
  const { id } = await props.params;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: story } = await supabase
    .from("stories")
    .select("*")
    .eq("id", id)
    .single();

  if (!story) notFound();
  const s = story as Story;

  if (s.status !== "published" && s.author_id !== user?.id) notFound();

  const { data: replies } = await supabase
    .from("story_replies")
    .select("*")
    .eq("story_id", id)
    .order("created_at", { ascending: true });

  const thread = nestReplies((replies ?? []) as StoryReply[]);

  return (
    <main>
      <div className="wrap-narrow">
        <p className="breadcrumb" style={{ color: "var(--slate)" }}>
          <Link href="/">Home</Link> › <Link href="/patient-stories">Patient Stories</Link> › {s.title}
        </p>

        <div className={styles.articleMeta}>
          <span className={styles.tag}>{pvcTypeLabel(s.pvc_type)}</span>
          <span className={styles.date}>
            {new Date(s.created_at).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>

        <h1 className={styles.title}>{s.title}</h1>

        <div className={styles.byline}>
          <div className={styles.bylineAvatar}>
            {(s.display_name || "A").charAt(0).toUpperCase()}
          </div>
          <div>
            <div className={styles.bylineName}>{byline(s)}</div>
            <div className={styles.bylineSub}>PVC Voices community member</div>
          </div>
        </div>

        <article className={styles.body}>
          {s.body.split(/\n{2,}/).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </article>

        {(s.burden || s.outcome) && (
          <div className="threshold" style={{ marginTop: 0 }}>
            <div className="txt">
              {s.burden && (
                <p style={{ marginBottom: s.outcome ? 8 : 0 }}>
                  <strong>PVC burden:</strong> {s.burden}
                </p>
              )}
              {s.outcome && (
                <p style={{ marginBottom: 0 }}>
                  <strong>Outcome so far:</strong> {s.outcome}
                </p>
              )}
            </div>
          </div>
        )}

        <div className={styles.relatedCta}>
          <div>
            <h3>Have a story like this one?</h3>
            <p>
              Your experience could be exactly what another patient — or
              their doctor — needs to read today.
            </p>
          </div>
          <Link className="btn btn-amber" href="/patient-stories#submit">
            Share your story
          </Link>
        </div>

        <ReplyThread storyId={s.id} initialThread={thread} />
      </div>
    </main>
  );
}
