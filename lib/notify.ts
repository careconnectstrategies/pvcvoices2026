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

type ReportAlert = {
  id: string;
  contentType: "story" | "reply";
  contentId: string;
  storyId: string;
  storyTitle: string;
  contentText: string;
  reporterLoggedIn: boolean;
};

type ReplyAlert = {
  id: string;
  storyId: string;
  storyTitle: string;
  authorName: string;
  body: string;
  isNested: boolean;
};

type ContactAlert = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Sends one alert email to the site owner(s) via Resend's REST API.
 * Never throws: a failed alert must not break story or reply submission.
 * If the env vars aren't set, it quietly does nothing.
 *
 * Env vars (set in Vercel):
 *   RESEND_API_KEY      — from resend.com
 *   STORY_ALERT_EMAIL   — where alerts go (comma-separate for several)
 *   RESEND_FROM         — optional, e.g. "PVC Voices <alerts@mail.pvcvoices.org>"
 *                         (needs a domain verified in Resend; defaults to
 *                         Resend's test sender, which only delivers to the
 *                         email on your Resend account)
 */
async function sendOwnerEmail(email: {
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.STORY_ALERT_EMAIL;
  if (!apiKey || !to) {
    console.warn("Alert skipped: RESEND_API_KEY or STORY_ALERT_EMAIL not set.");
    return;
  }
  const from = process.env.RESEND_FROM || "PVC Voices <onboarding@resend.dev>";

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
        subject: email.subject,
        text: email.text,
        html: email.html,
        ...(email.replyTo ? { reply_to: email.replyTo } : {}),
      }),
    });
    if (!res.ok) {
      console.error("Alert failed:", res.status, await res.text());
    }
  } catch (err) {
    console.error("Alert error:", err);
  }
}

/** Emails the site owner when a story is published. */
export async function sendStoryAlert(story: StoryAlert): Promise<void> {
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

  await sendOwnerEmail({
    subject: `New PVC Voices story: ${story.title}`,
    html,
    text,
  });
}

/** Emails the site owner when a reply is posted. */
export async function sendReplyAlert(reply: ReplyAlert): Promise<void> {
  const url = `${getSiteUrl()}/patient-stories/${reply.storyId}`;
  const kind = reply.isNested ? "reply to a reply" : "reply";

  const text = [
    `A new ${kind} was just posted on PVC Voices.`,
    ``,
    `Story: ${reply.storyTitle}`,
    `From: ${reply.authorName}`,
    ``,
    reply.body,
    ``,
    `View it: ${url}`,
    `To remove it: Supabase → Table Editor → story_replies → find reply ${reply.id} → delete the row.`,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:620px;color:#22303F">
      <p style="color:#41546A">A new <strong>${esc(kind)}</strong> was just posted on PVC Voices.</p>
      <p style="margin:0 0 4px"><strong>Story:</strong> ${esc(reply.storyTitle)}</p>
      <p style="margin:0 0 12px"><strong>From:</strong> ${esc(reply.authorName)}</p>
      <div style="white-space:pre-wrap;background:#EAF2F9;border-radius:8px;padding:14px 16px">${esc(reply.body)}</div>
      <p><a href="${esc(url)}" style="color:#CE4B59;font-weight:bold">View the story →</a></p>
      <p style="font-size:13px;color:#41546A">
        To remove it: Supabase → Table Editor → <em>story_replies</em> → find reply
        <code>${esc(reply.id)}</code> → delete the row.
      </p>
    </div>`;

  await sendOwnerEmail({
    subject: `New PVC Voices reply on: ${reply.storyTitle}`,
    html,
    text,
  });
}

/** Emails the site owner when a visitor reports content as inappropriate. */
export async function sendReportAlert(r: ReportAlert): Promise<void> {
  const url = `${getSiteUrl()}/patient-stories/${r.storyId}`;
  const what = r.contentType === "story" ? "story" : "reply";
  const table = r.contentType === "story" ? "stories" : "story_replies";
  const who = r.reporterLoggedIn ? "a logged-in member" : "a visitor who was not logged in";

  const text = [
    `A ${what} was reported as inappropriate by ${who}.`,
    ``,
    `Story: ${r.storyTitle}`,
    ``,
    `Reported ${what}:`,
    r.contentText,
    ``,
    `View it: ${url}`,
    `To remove it: Supabase → Table Editor → ${table} → find ${what} ${r.contentId} → delete the row.`,
    `Report log: Supabase → Table Editor → content_reports (report ${r.id}).`,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:620px;color:#22303F">
      <p style="color:#41546A">A <strong>${esc(what)}</strong> was <strong>reported as inappropriate</strong> by ${esc(who)}.</p>
      <p style="margin:0 0 12px"><strong>Story:</strong> ${esc(r.storyTitle)}</p>
      <p style="margin:0 0 4px"><strong>Reported ${esc(what)}:</strong></p>
      <div style="white-space:pre-wrap;background:#FCEEDC;border-radius:8px;padding:14px 16px">${esc(r.contentText)}</div>
      <p><a href="${esc(url)}" style="color:#CE4B59;font-weight:bold">View it →</a></p>
      <p style="font-size:13px;color:#41546A">
        To remove it: Supabase → Table Editor → <em>${esc(table)}</em> → find ${esc(what)}
        <code>${esc(r.contentId)}</code> → delete the row.<br>
        Report log: <em>content_reports</em> (report <code>${esc(r.id)}</code>).
      </p>
    </div>`;

  await sendOwnerEmail({
    subject: `Reported on PVC Voices: ${r.storyTitle}`,
    html,
    text,
  });
}

/** Emails the site owner when someone submits the contact form. */
export async function sendContactAlert(c: ContactAlert): Promise<void> {
  const subject = c.subject || "(none)";

  const text = [
    `New contact form message on PVC Voices.`,
    ``,
    `Name: ${c.name}`,
    `Email: ${c.email}`,
    `Subject: ${subject}`,
    ``,
    `Message:`,
    c.message,
    ``,
    `Reply directly to this email to respond to ${c.name}.`,
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:620px;color:#22303F">
      <p style="color:#41546A">New <strong>contact form</strong> message on PVC Voices.</p>
      <p style="margin:0 0 4px"><strong>Name:</strong> ${esc(c.name)}</p>
      <p style="margin:0 0 4px"><strong>Email:</strong> <a href="mailto:${esc(c.email)}" style="color:#3E7CB1">${esc(c.email)}</a></p>
      <p style="margin:0 0 12px"><strong>Subject:</strong> ${esc(subject)}</p>
      <p style="margin:0 0 4px"><strong>Message:</strong></p>
      <div style="white-space:pre-wrap;background:#EAF2F9;border-radius:8px;padding:14px 16px">${esc(c.message)}</div>
      <p style="font-size:13px;color:#41546A">Reply directly to this email to respond to ${esc(c.name)}.</p>
    </div>`;

  await sendOwnerEmail({
    subject: `PVC Voices contact: ${subject} — ${c.name}`,
    html,
    text,
    replyTo: c.email,
  });
}
