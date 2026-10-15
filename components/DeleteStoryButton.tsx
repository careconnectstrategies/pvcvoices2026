"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./AuthProvider";
import { deleteStory } from "@/app/actions";
import styles from "@/app/patient-stories/[id]/story-detail.module.css";

/** Shown only to the story's author. */
export default function DeleteStoryButton({
  storyId,
  authorId,
}: {
  storyId: string;
  authorId: string;
}) {
  const { user } = useAuth();
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!user || user.id !== authorId) return null;

  async function handleDelete() {
    if (
      !window.confirm(
        "Delete your story permanently? This also deletes every reply to it, and it can't be undone."
      )
    ) {
      return;
    }
    setPending(true);
    setError(null);
    const result = await deleteStory(storyId);
    if (!result.ok) {
      setPending(false);
      setError(result.error);
      return;
    }
    router.push("/patient-stories");
    router.refresh();
  }

  return (
    <>
      <button type="button" className={styles.dangerLink} onClick={handleDelete} disabled={pending}>
        {pending ? "Deleting…" : "Delete my story"}
      </button>
      {error && (
        <span role="alert" style={{ color: "var(--rose-deep)", fontSize: ".8rem" }}>
          {error}
        </span>
      )}
    </>
  );
}
