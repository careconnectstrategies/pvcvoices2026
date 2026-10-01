"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

type Step = "form" | "check-email" | "done";

export default function RegisterForm({ next }: { next: string }) {
  const [firstName, setFirstName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [step, setStep] = useState<Step>("form");

  const passwordsTyped = password2.length > 0;
  const passwordsMatch = password === password2;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (password !== password2) {
      setError("Passwords do not match.");
      return;
    }

    setPending(true);
    const supabase = createClient();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { first_name: firstName, city } },
    });
    setPending(false);

    if (error) {
      setError(error.message);
      return;
    }

    setStep(data.session ? "done" : "check-email");
  }

  if (step === "check-email") {
    return (
      <div className="form-card">
        <div className="success-banner">
          Almost there — check {email} for a confirmation link, then log in.
        </div>
        <p style={{ color: "var(--slate)", fontSize: ".92rem" }}>
          Once you&apos;ve confirmed your email,{" "}
          <Link href={`/login?next=${encodeURIComponent(next)}`} style={{ color: "var(--rose-deep)", fontWeight: 800 }}>
            log in here →
          </Link>
        </p>
      </div>
    );
  }

  if (step === "done") {
    return (
      <div className="form-card">
        <div className="success-banner">
          Account created! You&apos;re logged in and ready to share your
          story.
        </div>
        <Link className="btn btn-amber" href={next}>
          Continue →
        </Link>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h2>Create your account</h2>
      <p className="sub">
        Free, and takes under a minute. We only ask for what we need to
        keep this a trusted, accountable community.
      </p>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="reg-first">First name</label>
          <input
            type="text"
            id="reg-first"
            required
            autoComplete="given-name"
            placeholder="Sally"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="reg-city">City &amp; state / location</label>
          <input
            type="text"
            id="reg-city"
            required
            autoComplete="address-level2"
            placeholder="Portland, OR"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="field full" style={{ marginTop: -10, marginBottom: 6 }}>
          <span className="hint">
            Your first name and location are only ever used for optional
            display on your story — you&apos;ll choose whether to show
            either one, or post anonymously, when you submit a story.
          </span>
        </div>
        <div className="field full">
          <label htmlFor="reg-email">Email</label>
          <input
            type="email"
            id="reg-email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="reg-password">Password</label>
          <input
            type="password"
            id="reg-password"
            minLength={8}
            required
            autoComplete="new-password"
            placeholder="At least 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="reg-password2">Confirm password</label>
          <input
            type="password"
            id="reg-password2"
            minLength={8}
            required
            autoComplete="new-password"
            placeholder="Re-enter your password"
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
      </div>

      <div className="opt-in-box">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3E7CB1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        <span>
          Your email address is for your username only. We will never use
          your contact information for marketing purposes.
        </span>
      </div>

      <p className="hint" style={{ marginBottom: 16 }}>
        By creating an account you agree to our Terms of Use and Privacy
        Policy.
      </p>

      <button className="btn btn-amber" type="submit" disabled={pending}>
        {pending ? "Creating account…" : "Create my account"}
      </button>
      {error && <p className="error-banner" style={{ marginTop: 16 }}>{error}</p>}

      <p style={{ marginTop: 20, fontSize: ".92rem", color: "var(--slate)" }}>
        Already have an account?{" "}
        <Link href={`/login?next=${encodeURIComponent(next)}`} style={{ color: "var(--rose-deep)", fontWeight: 800 }}>
          Log in instead →
        </Link>
      </p>
    </form>
  );
}
