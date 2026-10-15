"use client";

import { useEffect, useState } from "react";
import { reportContent } from "@/app/actions";
import styles from "@/app/patient-stories/[id]/story-detail.module.css";

export default function ReportButton({
  contentType,
  contentId,
}: {
  contentType: "story" | "reply";
  contentId: string;
}) {
  const key = `reported:${contentType}:${contentId}`;
  const [done, setDone] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Remember (in this browser only) that this item was already reported.
  useEffect(() => {
    try {
      if (localStorage.getItem(key)) setDone(true);
    } catch {
      /* storage unavailable — fine */
    }
  }, [key]);

  async function report() {
    if (!window.confirm("Report this to the PVC Voices team as inappropriate content?")) return;
    setPending(true);
    setError(null);
    const result = await reportContent(contentType, contentId);
    setPending(false);
    if (!result.ok) {
      setError("Sorry, that didn't go through. Please try again.");
      return;
    }
    try {
      localStorage.setItem(key, "1");
    } catch {
      /* ignore */
    }
    setDone(true);
  }

  if (done) {
    return <span className={styles.reportedNote}>Reported — thank you.</span>;
  }

  return (
    <>
      <button type="button" className={styles.reportLink} onClick={report} disabled={pending}>
        {pending ? "Reporting…" : "Report inappropriate content"}
      </button>
      {error && (
        <span role="alert" style={{ color: "var(--rose-deep)", fontSize: ".8rem" }}>
          {error}
        </span>
      )}
    </>
  );
}
