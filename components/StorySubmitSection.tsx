"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useActionState } from "react";
import { useAuth } from "./AuthProvider";
import { createClient } from "@/lib/supabase/client";
import { submitStory, type ActionResult } from "@/app/actions";
import styles from "@/app/patient-stories/patient-stories.module.css";

const initialState: ActionResult | { ok: null } = { ok: null };

export default function StorySubmitSection() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [profile, setProfile] = useState<{ first_name: string; city: string } | null>(null);
  const [showName, setShowName] = useState(true);
  const [showCity, setShowCity] = useState(true);

  useEffect(() => {
    if (!user) return;
    const supabase = createClient();
    supabase
      .from("profiles")
      .select("first_name, city")
      .eq("id", user.id)
      .single()
      .then(({ data }) => setProfile(data));
  }, [user]);

  const [state, formAction, pending] = useActionState(
    async (_prev: typeof initialState, formData: FormData) => {
      formData.set("show_name", showName ? "on" : "off");
      formData.set("show_city", showCity ? "on" : "off");
      const result = await submitStory(formData);
      if (result.ok) router.refresh();
      return result;
    },
    initialState
  );

  const preview = !profile
    ? ""
    : showName && showCity
    ? `${profile.first_name} from ${profile.city}`
    : showName
    ? `${profile.first_name} (location not shown)`
    : showCity
    ? `Anonymous from ${profile.city}`
    : "Anonymous community member";

  return (
    <section id="submit" className={styles.submitSection} aria-labelledby="submit-h">
      <div className="wrap">
        <div className={styles.submitHead}>
          <span className="kicker">Your turn</span>
          <h2 id="submit-h">Share your story</h2>
          <p>
            Tell us how you learned you had PVCs, what your symptoms are,
            what treatment(s) you&apos;ve tried, and what&apos;s helped or
            hasn&apos;t. To keep this a trusted space, we ask everyone to
            create a free account before posting.
          </p>
        </div>

        {!loading && !user && (
          <div className={`form-card ${styles.gateCard}`}>
            <div className={styles.gateIcon} aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3E7CB1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <h3>Log in or create a free account to share your story</h3>
            <p>
              An account keeps the community accountable to our Terms of
              Use and lets you choose exactly what&apos;s shown alongside
              your story — including whether your first name and city
              appear at all.
            </p>
            <div className={styles.gateActions}>
              <Link className="btn btn-amber" href="/register?next=/patient-stories%23submit">
                Create an account
              </Link>
              <Link className="btn-pill-outline" href="/login?next=/patient-stories%23submit">
                Log in
              </Link>
            </div>
          </div>
        )}

        {!loading && user && (
          <form action={formAction} className="form-card" aria-describedby="form-terms">
            <h3>Story submission</h3>
            <p className="sub">
              You&apos;re logged in — thank you. Fields marked
              &ldquo;optional&rdquo; can be left blank.
            </p>

            <div className="posting-as">
              <span className="label-sm">Posting as</span>
              <div className="preview">{preview || "…"}</div>

              <div className="switch-row">
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={showName}
                    onChange={(e) => setShowName(e.target.checked)}
                  />
                  <span className="slider"></span>
                </label>
                <span>Show my first name on this post</span>
              </div>
              <div className="switch-row" style={{ marginBottom: 0 }}>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={showCity}
                    onChange={(e) => setShowCity(e.target.checked)}
                  />
                  <span className="slider"></span>
                </label>
                <span>Show my city / location on this post</span>
              </div>
            </div>

            <div className="field full">
              <label htmlFor="title">Story title</label>
              <input
                type="text"
                id="title"
                name="title"
                required
                placeholder="e.g., Less than 1% burden, but I can't sleep through a night"
              />
            </div>

            <div className="form-grid">
              <div className="field">
                <label htmlFor="burden">PVC burden, if known <span className="opt">(optional)</span></label>
                <input type="text" id="burden" name="burden" placeholder="e.g., 0.7%, or 2,000/day" />
              </div>
              <div className="field">
                <label htmlFor="outcome">Outcome so far <span className="opt">(optional)</span></label>
                <select id="outcome" name="outcome" defaultValue="">
                  <option value="">Select one…</option>
                  <option>Still searching for answers</option>
                  <option>Managing with medication</option>
                  <option>Considering or scheduled for ablation</option>
                  <option>Had ablation — helped</option>
                  <option>Had ablation — did not help / partial relief</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <fieldset>
              <legend>Which best describes your PVCs? <span className="opt">(optional)</span></legend>
              <div className="radio-row">
                <input type="radio" id="type-uni" name="pvc_type" value="unifocal" />
                <label htmlFor="type-uni" style={{ fontWeight: 600 }}>Unifocal — one location</label>
              </div>
              <div className="radio-row">
                <input type="radio" id="type-multi" name="pvc_type" value="multifocal" />
                <label htmlFor="type-multi" style={{ fontWeight: 600 }}>Multifocal — more than one location</label>
              </div>
              <div className="radio-row">
                <input type="radio" id="type-his" name="pvc_type" value="parahisian" />
                <label htmlFor="type-his" style={{ fontWeight: 600 }}>Near the AV node / His bundle / parahisian region</label>
              </div>
              <div className="radio-row">
                <input type="radio" id="type-unsure" name="pvc_type" value="unsure" />
                <label htmlFor="type-unsure" style={{ fontWeight: 600 }}>Not sure</label>
              </div>
            </fieldset>

            <div className="field full">
              <label htmlFor="body">Story details</label>
              <textarea
                id="body"
                name="body"
                required
                placeholder="How did you learn you had PVCs? What are your symptoms? What doctors have you seen and what treatment(s) have you tried? What helped — or didn't?"
              ></textarea>
              <span className="hint">
                If you mention a doctor who helped you, feel free to
                include their name — it may be added to our EP Hall of
                Recognition. Please do not name any provider in a negative
                light; see the Terms of Use below.
              </span>
            </div>

            <div className="terms-box" id="form-terms">
              <h4>Before you submit: Terms of Use &amp; User Responsibility Agreement</h4>
              <p>By posting on PVC Voices, you agree not to include:</p>
              <ul>
                <li>Defamatory, false, or misleading statements</li>
                <li>Personal attacks or negative commentary targeting medical professionals</li>
                <li>Threats, harassment, or abusive language</li>
                <li>Content that violates someone&apos;s privacy or confidentiality</li>
                <li>Illegal, obscene, or otherwise unlawful material</li>
                <li>Spam or unauthorized advertisements</li>
              </ul>
              <p>
                By submitting, you confirm that your story reflects your
                honest experience or opinion to the best of your knowledge,
                that you accept full responsibility for what you submit,
                and that you agree to comply with our full Legal Policy and
                Terms of Use.
              </p>
            </div>

            <label className="agree-row">
              <input type="checkbox" id="agree" name="agree" required />
              <span>
                I have read and agree to the Terms of Use and User
                Responsibility Agreement above, and I confirm my story is
                honest to the best of my knowledge.
              </span>
            </label>

            <div style={{ marginTop: "6px" }}>
              <button className="btn btn-amber" type="submit" disabled={pending}>
                {pending ? "Submitting…" : "Submit my story"}
              </button>
              <p className="form-note">
                Submissions are reviewed before publishing, typically
                within a few days. We may lightly edit for length or
                clarity without changing your meaning.
              </p>
              {state.ok === true && (
                <p className="success-banner" style={{ marginTop: 16 }}>
                  Thank you — your story was submitted and is pending
                  review.
                </p>
              )}
              {state.ok === false && (
                <p className="error-banner" style={{ marginTop: 16 }}>{state.error}</p>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
