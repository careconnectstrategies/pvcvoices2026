"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function ForgotPasswordForm({ expired }: { expired?: boolean }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPending(true);
    setError(null);
    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/reset-password`,
    });
    setPending(false);
    if (error) {
      setError(error.message);
      return;
    }
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-card">
        <div className="success-banner">
          Check your email — if an account exists for {email}, we&apos;ve sent
          a link to reset your password.
        </div>
        <p style={{ color: "var(--slate)", fontSize: ".92rem" }}>
          Open the link in this same browser. Didn&apos;t get it? Check your
          spam folder, or{" "}
          <button
            type="button"
            onClick={() => setSent(false)}
            style={{ background: "none", border: 0, padding: 0, cursor: "pointer", color: "var(--rose-deep)", fontWeight: 800, font: "inherit" }}
          >
            try again
          </button>
          .
        </p>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      {expired && (
        <p className="error-banner" style={{ marginBottom: 16 }}>
          That reset link has expired or was already used. Enter your email
          to get a new one.
        </p>
      )}
      <p className="sub">
        Enter the email you registered with and we&apos;ll send you a link to
        choose a new password.
      </p>
      <div className="field full">
        <label htmlFor="fp-email">Email</label>
        <input
          type="email"
          id="fp-email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button className="btn btn-amber" type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send reset link"}
      </button>
      {error && <p className="error-banner" style={{ marginTop: 16 }}>{error}</p>}
      <p style={{ marginTop: 20, fontSize: ".92rem", color: "var(--slate)" }}>
        Remembered it?{" "}
        <Link href="/login" style={{ color: "var(--rose-deep)", fontWeight: 800 }}>
          Back to log in →
        </Link>
      </p>
    </form>
  );
}
