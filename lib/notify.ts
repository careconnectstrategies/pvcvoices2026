import { getSiteUrl } from "@/lib/site";

type StoryAlert = {
  id: string;
  title: string;
  body: string;
  burden: string | null;
  outcome: string | null;
  pvcType: string | null;
  displayName: string;
  displayCity: string | null;
};

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Emails the site owner when a story is published.
 * Uses Resend's REST API. Never throws: a failed alert must not break
 * story submission. If the env vars aren't set, it quietly does nothing.
 *
 * Env vars (set in Vercel):
 *   RESEND_API_KEY      — from resend.com
 *   STORY_ALERT_EMAIL   — where alerts go (comma-separate for several)
 *   RESEND_FROM         — optional, e.g. "PVC Voices <alerts@pvcvoices.org>"
 *                         (needs a domain verified in Resend; defaults to
 *                         Resend's test sender, which only delivers to the
 *                         email on your Resend account)
 */
export async function sendStoryAlert(story: StoryAlert): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.STORY_ALERT_EMAIL;
  if (!apiKey || !to) {
    console.warn("Story alert skipped: RESEND_API_KEY or STORY_ALERT_EMAIL not set.");
    return;
  }

  const from = process.env.RESEND_FROM || "PVC Voices <onboarding@resend.dev>";
  const url = `${getSiteUrl()}/patient-stories/${story.id}`;
  const byline = [story.displayName, story.displayCity].filter(Boolean).join(", ");

  const details = [
    ["Posted as", byline],
    ["PVC type", story.pvcType],
    ["Burden", story.burden],
    ["Outcome", story.outcome],
  ].filter(([, v]) => v) as [string, string][];

  const text = [
    `A new story was just published on PVC Voices.`,
    ``,
    `Title: ${story.title}`,
    ...details.map(([k, v]) => `${k}: ${v}`),
    ``,
    story.body,
    ``,
    `View it: ${url}`,
    `To remove it: Supabase → Table Editor → stories → find story ${story.id} → delete the row (or set status to "rejected" to hide it).`,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:620px;color:#22303F">
      <p style="color:#41546A">A new story was just <strong>published</strong> on PVC Voices.</p>
      <h2 style="margin:8px 0;color:#14355F">${esc(story.title)}</h2>
      <p style="color:#41546A;margin:0 0 12px">
        ${details.map(([k, v]) => `<strong>${esc(k)}:</strong> ${esc(v)}`).join("<br>")}
      </p>
      <div style="white-space:pre-wrap;background:#EAF2F9;border-radius:8px;padding:14px 16px">${esc(story.body)}</div>
      <p><a href="${esc(url)}" style="color:#CE4B59;font-weight:bold">View the story →</a></p>
      <p style="font-size:13px;color:#41546A">
        To remove it: Supabase → Table Editor → <em>stories</em> → find story
        <code>${esc(story.id)}</code> → delete the row (or set <code>status</code>
        to <code>rejected</code> to hide it).
      </p>
    </div>`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: to.split(",").map((s) => s.trim()).filter(Boolean),
        subject: `New PVC Voices story: ${story.title}`,
        html,
        text,
      }),
    });
    if (!res.ok) {
      console.error("Story alert failed:", res.status, await res.text());
    }
  } catch (err) {
    console.error("Story alert error:", err);
  }
}
