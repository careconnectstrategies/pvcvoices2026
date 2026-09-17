"use client";

import { useActionState } from "react";
import { submitLetterRequest, type ActionResult } from "@/app/actions";

const initialState: ActionResult | { ok: null } = { ok: null };

export default function LetterRequestForm() {
  const [state, formAction, pending] = useActionState(
    async (_prev: typeof initialState, formData: FormData) => submitLetterRequest(formData),
    initialState
  );

  if (state.ok) {
    return (
      <div className="form-card accent">
        <div className="success-banner" style={{ marginBottom: 0 }}>
          Got it — we&apos;ll email your advocacy letter and CC you once
          it&apos;s sent. Please allow a few days.
        </div>
      </div>
    );
  }

  return (
    <form className="form-card accent" action={formAction}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="l-name">Full name</label>
          <input type="text" id="l-name" name="full_name" required autoComplete="name" placeholder="Used as your signature on the letter" />
        </div>
        <div className="field">
          <label htmlFor="l-email">Email</label>
          <input type="email" id="l-email" name="email" required autoComplete="email" placeholder="We'll CC you on the email we send" />
        </div>
        <div className="field full">
          <label htmlFor="l-city">City &amp; state</label>
          <input type="text" id="l-city" name="city" required autoComplete="address-level2" placeholder="Portland, OR" />
        </div>
      </div>

      <div className="privacy-note">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3E7CB1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        <span>
          Your name, city/state, and email are used only to complete,
          send, and CC you on this email. We will never use your contact
          information for marketing purposes.
        </span>
      </div>

      <label style={{ fontWeight: 800, fontSize: ".87rem", color: "var(--navy)", display: "block", marginBottom: 8 }}>
        Send my letter to:
      </label>
      <div className="recipient-row">
        <label><input type="checkbox" name="send_to_hrs" defaultChecked /> Heart Rhythm Society (HRS)</label>
        <label><input type="checkbox" name="send_to_acc" defaultChecked /> American College of Cardiology (ACC)</label>
        <label><input type="checkbox" name="send_to_aha" defaultChecked /> American Heart Association (AHA)</label>
      </div>

      <div className="field full">
        <label htmlFor="l-note">Anything you&apos;d like to add? <span className="opt">(optional)</span></label>
        <textarea id="l-note" name="note" placeholder="A personal line or detail you'd like included, if any."></textarea>
      </div>

      <label className="agree-row">
        <input type="checkbox" required />
        <span>
          I confirm I am giving you permission to send an email on my
          behalf to the organizations selected.
        </span>
      </label>

      <button className="btn btn-amber" type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send this email for me"}
      </button>
      <p className="form-note">
        We&apos;ll CC you the moment your email is sent. Want to see
        exactly what you&apos;re sending first? Read the full letter
        template on the{" "}
        <a href="/advocacy/take-action" style={{ color: "var(--sky)", fontWeight: 700 }}>
          Take Action
        </a>{" "}
        page.
      </p>
      {state.ok === false && <p className="error-banner" style={{ marginTop: 16 }}>{state.error}</p>}
    </form>
  );
}
