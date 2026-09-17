"use client";

import { useActionState } from "react";
import { submitContactMessage, type ActionResult } from "@/app/actions";

const initialState: ActionResult | { ok: null } = { ok: null };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    async (_prev: typeof initialState, formData: FormData) => submitContactMessage(formData),
    initialState
  );

  if (state.ok) {
    return (
      <div className="form-card">
        <div className="success-banner" style={{ marginBottom: 0 }}>
          Thanks — your message is on its way. We typically respond within
          a few days.
        </div>
      </div>
    );
  }

  return (
    <form className="form-card" action={formAction}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="c-name">Your name</label>
          <input type="text" id="c-name" name="name" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="c-email">Email</label>
          <input type="email" id="c-email" name="email" required autoComplete="email" />
        </div>
        <div className="field full">
          <label htmlFor="c-subject">Subject</label>
          <select id="c-subject" name="subject" defaultValue="General question">
            <option>General question</option>
            <option>Feedback about the site</option>
            <option>Report a broken link or error</option>
            <option>Nominate a doctor for the Hall of Recognition</option>
            <option>Company / clinic technology submission</option>
            <option>Press or media inquiry</option>
            <option>Other</option>
          </select>
        </div>
        <div className="field full">
          <label htmlFor="c-message">Message</label>
          <textarea id="c-message" name="message" required placeholder="How can we help?"></textarea>
        </div>
      </div>
      <button className="btn btn-amber" type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send message"}
      </button>
      <p className="form-note">
        We typically respond within a few days. This is a small,
        patient-run site — thank you for your patience.
      </p>
      {state.ok === false && <p className="error-banner" style={{ marginTop: 16 }}>{state.error}</p>}
    </form>
  );
}
