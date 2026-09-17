"use client";

import { useActionState } from "react";
import { subscribeNewsletter, type ActionResult } from "@/app/actions";

const initialState: ActionResult | { ok: null } = { ok: null };

export default function NewsletterForm({ className }: { className?: string }) {
  const [state, formAction, pending] = useActionState(
    async (_prev: typeof initialState, formData: FormData) =>
      subscribeNewsletter(formData),
    initialState
  );

  if (state.ok) {
    return <p className={className}>Thanks — you&apos;re on the list.</p>;
  }

  return (
    <form action={formAction} className={className}>
      <label htmlFor="newsletter-email" style={{ position: "absolute", left: "-9999px" }}>
        Email address
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        placeholder="you@example.com"
        autoComplete="email"
        required
      />
      <button className="btn btn-amber" type="submit" disabled={pending}>
        {pending ? "Subscribing…" : "Subscribe"}
      </button>
      {state.ok === false && (
        <p style={{ color: "#FBDFA6", fontSize: ".8rem", width: "100%" }}>{state.error}</p>
      )}
    </form>
  );
}
