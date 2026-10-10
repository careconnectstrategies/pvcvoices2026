"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

export default function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [done, setDone] = useState(false);

  const passwordsTyped = password2.length > 0;
  const passwordsMatch = password === password2;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!passwordsMatch) {
      setError("Passwords do not match.");
      return;
    }
    setPending(true);
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ password });
    setPending(false);
    if (error) {
      setError(error.message);
      return;
    }
    setDone(true);
  }

  if (done) {
    return (
      <div className="form-card">
        <div className="success-banner">
          Password updated — you&apos;re logged in.
        </div>
        <Link className="btn btn-amber" href="/patient-stories">
          Continue →
        </Link>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="field full">
        <label htmlFor="rp-password">New password</label>
        <input
          type="password"
          id="rp-password"
          minLength={8}
          required
          autoComplete="new-password"
          placeholder="At least 8 characters"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="field full">
        <label htmlFor="rp-password2">Confirm new password</label>
        <input
          type="password"
          id="rp-password2"
          minLength={8}
          required
          autoComplete="new-password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        {passwordsTyped && (
          <span
            className="pw-hint"
            style={{ color: passwordsMatch ? "#1F6B3B" : "#C77F14", fontSize: ".78rem" }}
          >
            {passwordsMatch ? "✓ Passwords match" : "Passwords do not match yet"}
          </span>
        )}
      </div>
      <button className="btn btn-amber" type="submit" disabled={pending}>
        {pending ? "Saving…" : "Set new password"}
      </button>
      {error && <p className="error-banner" style={{ marginTop: 16 }}>{error}</p>}
    </form>
  );
}
