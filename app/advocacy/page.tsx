import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import styles from "./advocacy.module.css";

export const metadata: Metadata = {
  title: "Advocacy",
  description:
    "How PVC Voices is pushing HRS, ACC, and AHA to weigh symptom burden alongside PVC count in treatment guidelines \u2014 and how you can get involved.",
};

export default function AdvocacyPage() {
  return (
    <>
      <PageHero
        current="Advocacy"
        kicker="Beyond your own treatment"
        title="Advocacy"
      >
        <p>
          Understanding your PVCs and finding the right doctor only gets
          one patient so far. Real change means the guidelines themselves
          have to catch up — here&apos;s how that actually happens, and how
          to push it forward.
        </p>
      </PageHero>

      <main>
        <div className="wrap" style={{ paddingTop: 56, paddingBottom: 76 }}>
          {/* WHY THIS MATTERS */}
          <section id="why" style={{ marginBottom: 60 }}>
            <span className="kicker">Why this section exists</span>
            <h2>The guidelines are older than you&apos;d expect</h2>
            <div className="rule" aria-hidden="true"></div>
            <p className="lead">
              The most recent full joint U.S. guideline on ventricular
              arrhythmias dates to 2017. Mapping technology, provocation
              techniques, and ablation tools have all moved forward
              significantly since — but the guidelines that shape whether
              you get treated haven&apos;t kept pace in the same way.
            </p>

            <div className={styles.statRow}>
              <div className={styles.statBox}>
                <div className={styles.num}>2017</div>
                <div className={styles.lbl}>The most recent full joint AHA/ACC/HRS guideline on ventricular arrhythmias — still current today.</div>
              </div>
              <div className={styles.statBox}>
                <div className={styles.num}>3</div>
                <div className={styles.lbl}>Organizations that jointly govern it — meaning real change means reaching all three, not just one.</div>
              </div>
            </div>

            <div className="callout amber">
              <strong>The good news:</strong>
              <p style={{ marginTop: 6 }}>
                You don&apos;t need to be a policy expert to push on this.
                This section explains exactly who&apos;s involved and hands
                you a ready-to-send letter — most of the work is already
                done.
              </p>
            </div>
          </section>

          {/* EXPLORE THIS SECTION */}
          <section id="explore" style={{ marginBottom: 60 }}>
            <span className="kicker rose">Explore this section</span>
            <h2>Two pages, one path to action</h2>
            <div className="rule" aria-hidden="true"></div>

            <div className={styles.featureGrid}>
              <Link className={styles.featureCard} href="/advocacy/who-makes-the-rules">
                <span className={styles.stepNum}>1</span>
                <h3>Who Makes the Rules?</h3>
                <p>
                  There&apos;s no single office to call. Understand how
                  HRS, ACC, and AHA jointly govern the guidelines that
                  decide when ablation gets offered — and why reaching one
                  alone isn&apos;t enough.
                </p>
                <span className={styles.go}>Understand the system →</span>
              </Link>
              <Link className={styles.featureCard} href="/advocacy/take-action">
                <span className={styles.stepNum}>2</span>
                <h3>Take Action</h3>
                <p>
                  Direct contact information for all three organizations,
                  plus a template advocacy letter that fills itself in as
                  you type — copy it, print it, or have us send it for you.
                </p>
                <span className={styles.go}>Send your letter →</span>
              </Link>
            </div>
          </section>

          {/* LETTER TEASER */}
          <section id="letter-teaser" style={{ marginBottom: 60 }}>
            <div className={styles.letterTeaser}>
              <div>
                <span className="kicker" style={{ color: "var(--amber)" }}>Your voice matters</span>
                <h2>Your letter is already written</h2>
                <p>
                  Fill in your name and city, and a complete advocacy
                  letter — addressed to the right committees, with the
                  right language — is ready to copy, print, or send in
                  minutes.
                </p>
              </div>
              <Link className="btn btn-amber" href="/advocacy/take-action">
                Build my letter →
              </Link>
            </div>
          </section>

          {/* CLOSING LINKS */}
          <section id="closing">
            <span className="kicker">Keep going</span>
            <h2>More ways to make a difference</h2>
            <div className="rule" aria-hidden="true"></div>
            <div className="next-links next-links-3" style={{ marginTop: 0 }}>
              <Link className="next-card" href="/patient-stories">
                <span className="lbl">Add your voice</span>
                <h4>Patient Stories</h4>
                <p>Your story is data doctors and guideline committees can&apos;t ignore.</p>
              </Link>
              <Link className="next-card" href="/contact">
                <span className="lbl">Prefer not to DIY?</span>
                <h4>Contact Us</h4>
                <p>Have our site manager send your advocacy letter on your behalf.</p>
              </Link>
              <Link className="next-card" href="/resources">
                <span className="lbl">Read further</span>
                <h4>Resources</h4>
                <p>The actual guideline documents, studies, and sources behind this section.</p>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
