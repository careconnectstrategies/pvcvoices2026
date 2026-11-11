"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./AuthProvider";
import { deleteStory } from "@/app/actions";
import styles from "@/app/patient-stories/[id]/story-detail.module.css";

/** Shown to the story's author and to admins. */
export default function DeleteStoryButton({
  storyId,
  authorId,
}: {
  storyId: string;
  authorId: string;
}) {
  const { user, isAdmin } = useAuth();
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!user || (user.id !== authorId && !isAdmin)) return null;
  const asAdmin = user.id !== authorId;

  async function handleDelete() {
    if (
      !window.confirm(
        `${asAdmin ? "Remove this story" : "Delete your story"} permanently? This also deletes every reply to it, and it can't be undone.`
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
        {pending ? "Deleting…" : asAdmin ? "Remove story (admin)" : "Delete my story"}
      </button>
      {error && (
        <span role="alert" style={{ color: "var(--rose-deep)", fontSize: ".8rem" }}>
          {error}
        </span>
      )}
    </>
  );
}
