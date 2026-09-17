"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "./AuthProvider";
import { submitReply } from "@/app/actions";
import type { ReplyNode } from "@/lib/types";
import styles from "@/app/patient-stories/[id]/story-detail.module.css";

function countAll(nodes: ReplyNode[]): number {
  return nodes.reduce((n, c) => n + 1 + countAll(c.children), 0);
}

function timeAgo(iso: string): string {
  const seconds = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

function CommentNode({ node, storyId }: { node: ReplyNode; storyId: string }) {
  const { user } = useAuth();
  const router = useRouter();
  const [replying, setReplying] = useState(false);
  const [text, setText] = useState("");
  const [pending, setPending] = useState(false);

  async function post() {
    if (!text.trim() || !user) return;
    setPending(true);
    const result = await submitReply(storyId, text, node.id);
    setPending(false);
    if (result.ok) {
      setText("");
      setReplying(false);
      router.refresh();
    }
  }

  return (
    <div className={styles.comment}>
      <div className={styles.avatar}>{node.author_name.charAt(0).toUpperCase()}</div>
      <div className={styles.commentBody}>
        <div className={styles.commentCard}>
          <div className={styles.commentTop}>
            <span className={styles.commentName}>{node.author_name}</span>
            <span className={styles.commentTime}>{timeAgo(node.created_at)}</span>
          </div>
          <div className={styles.commentText}>{node.body}</div>
        </div>
        <div className={styles.commentRowActions}>
          <button
            className={styles.replyLink}
            onClick={() => (user ? setReplying((r) => !r) : undefined)}
          >
            Reply
          </button>
        </div>

        {replying && (
          <div className={styles.inlineComposer}>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={`Reply to ${node.author_name}…`}
              autoFocus
            />
            <div className={styles.composerActions}>
              <button className={styles.btnSoftSm} onClick={() => setReplying(false)}>
                Cancel
              </button>
              <button className={styles.btnRoseSm} onClick={post} disabled={pending}>
                {pending ? "Posting…" : "Post reply"}
              </button>
            </div>
          </div>
        )}

        {node.children.length > 0 && (
          <div className={styles.nested}>
            {node.children.map((child) => (
              <CommentNode key={child.id} node={child} storyId={storyId} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ReplyThread({
  storyId,
  initialThread,
}: {
  storyId: string;
  initialThread: ReplyNode[];
}) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [text, setText] = useState("");
  const [pending, setPending] = useState(false);

  async function postTopLevel() {
    if (!text.trim() || !user) return;
    setPending(true);
    const result = await submitReply(storyId, text, null);
    setPending(false);
    if (result.ok) {
      setText("");
      router.refresh();
    }
  }

  return (
    <section className={styles.repliesSection} aria-labelledby="replies-h">
      <div className={styles.repliesHead}>
        <h2 id="replies-h">Replies</h2>
        <span className={styles.repliesCount}>{countAll(initialThread)}</span>
      </div>

      {initialThread.length === 0 ? (
        <div className={styles.emptyReplies}>No replies yet — be the first to respond.</div>
      ) : (
        <div>
          {initialThread.map((node) => (
            <CommentNode key={node.id} node={node} storyId={storyId} />
          ))}
        </div>
      )}

      <div className={styles.guidelines}>
        <h4>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C77F14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          Keep replies respectful
        </h4>
        <p>
          This is a space for support, shared experience, and honest
          questions — not debate or venting at each other. Please
          don&apos;t post personal attacks, harassment, or negative
          commentary about specific medical professionals. Disagree with
          care; assume good faith.
        </p>
        <p>
          PVC Voices reserves the right to remove any reply — or restrict
          an account — that it deems inappropriate, at its sole
          discretion, without prior notice.
        </p>
      </div>

      {!loading && !user && (
        <div className={styles.replyGate}>
          <p>Log in or create a free account to add a reply.</p>
          <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <Link className="btn-pill-outline" href={`/login?next=/patient-stories/${storyId}`}>
              Log in
            </Link>
            <Link className="btn-pill-outline" href={`/register?next=/patient-stories/${storyId}`}>
              Create an account
            </Link>
          </div>
        </div>
      )}

      {!loading && user && (
        <div className={styles.composer}>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Share your thoughts, support, or a question…"
          />
          <div className={styles.composerActions}>
            <button className={styles.btnRoseSm} onClick={postTopLevel} disabled={pending}>
              {pending ? "Posting…" : "Post reply"}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
