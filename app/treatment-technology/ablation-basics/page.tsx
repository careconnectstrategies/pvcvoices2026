import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SubNav from "@/components/SubNav";
import { TREATMENT_TECH_LINKS } from "@/lib/nav";
import styles from "./ablation-basics.module.css";

export const metadata: Metadata = {
  title: "Ablation Basics",
  description:
    "What cardiac ablation for PVCs is, how the procedure works, success rates, and what to expect \u2014 explained in plain language.",
};

export default function AblationBasicsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/treatment-technology", label: "Treatment & Technology" }]}
        current="Ablation Basics"
        kicker="Treatment & Technology · Start here"
        title="Ablation basics"
      >
        <p>
          What ablation actually is, how it works, and the everyday medical
          language you&apos;ll hear once you start looking into treatment.
        </p>
      </PageHero>

      <SubNav
        label="Treatment & Technology section pages"
        items={TREATMENT_TECH_LINKS}
        current="/treatment-technology/ablation-basics"
      />

      <main>
        <div className="wrap" style={{ paddingTop: 52, paddingBottom: 76 }}>
          <article>
            {/* 1. THREE WAYS PVCs ARE MANAGED */}
            <section id="three-tiers">
              <span className="kicker">The big picture</span>
              <h2>Three ways doctors typically manage PVCs</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>
                Most cardiologists and electrophysiologists approach PVCs in
                one of three ways, roughly in order of how invasive they are:
              </p>

              <div className={styles.tierGrid}>
                <div className={styles.tierCard}>
                  <div className={styles.step}>Option 1</div>
                  <h4>Monitoring only</h4>
                  <p>
                    No medication or procedure, typically when PVCs are
                    considered low risk and not significantly symptomatic.
                  </p>
                </div>
                <div className={styles.tierCard}>
                  <div className={styles.step}>Option 2</div>
                  <h4>Medication</h4>
                  <p>
                    Antiarrhythmic drugs prescribed when symptoms or risk
                    factors warrant it — often the first step before
                    considering a procedure.
                  </p>
                </div>
                <div className={`${styles.tierCard} ${styles.highlight}`}>
                  <div className={styles.step}>Option 3</div>
                  <h4>Ablation</h4>
                  <p>
                    An electrophysiology study to locate and eliminate the
                    PVC trigger site — usually offered when medications
                    fail, aren&apos;t tolerated, or burden is very high
                    (often cited as 10,000+/day).
                  </p>
                </div>
              </div>

              <div className="callout">
                <strong>Where PVC Voices comes in:</strong>
                <p style={{ marginTop: 6 }}>
                  That &ldquo;usually offered when...&rdquo; language is
                  exactly what this site pushes back on. Burden isn&apos;t
                  the only reason ablation should be on the table — see{" "}
                  <Link
                    href="/treatment-technology/is-ablation-right-for-me"
                    style={{ color: "var(--sky)", fontWeight: 700 }}
                  >
                    Is Ablation Right for Me?
                  </Link>{" "}
                  for the fuller picture beyond a simple burden cutoff.
                </p>
              </div>
            </section>

            {/* 2. WHAT IS ABLATION */}
            <section id="what-is-ablation">
              <span className="kicker rose">The procedure itself</span>
              <h2>What is ablation, exactly?</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>
                Ablation is a procedure used to find and eliminate the
                source of a PVC. It&apos;s usually considered when
                medications don&apos;t work, medications cause intolerable
                side effects, or a patient has a very high number of PVCs
                (often quoted as 10,000 or more per day).
              </p>
              <p>
                During the procedure, an electrophysiologist threads thin
                tubes called catheters through a vein and into the heart.
                Once the PVC&apos;s origin is identified, that tiny area of
                tissue is destroyed using either heat (radiofrequency
                ablation) or cold (cryoablation) to stop the abnormal
                electrical signal for good.
              </p>
            </section>

            {/* 3. KEY TERMS */}
            <section id="key-terms">
              <span className="kicker amber">Language you&apos;ll hear</span>
              <h2>Key terms, in plain language</h2>
              <div className="rule" aria-hidden="true"></div>

              <div className={styles.termCard}>
                <h4>EP (Electrophysiologist)</h4>
                <p>
                  A cardiologist with specialized training in diagnosing and
                  treating heart rhythm problems — including PVCs and PACs.
                  This is the specialist you&apos;ll want for anything
                  beyond monitoring or basic medication.
                </p>
              </div>

              <div className={styles.termCard}>
                <h4>EP Study (Electrophysiology Study)</h4>
                <p>
                  A test that examines the heart&apos;s electrical system
                  from the inside. Multiple catheters are placed inside the
                  heart to record electrical signals and look for abnormal
                  rhythms. This study is the foundation both mapping and
                  ablation are built on.
                </p>
              </div>

              <div className={styles.termCard}>
                <h4>Mapping</h4>
                <p>
                  Mapping uses catheters and specialized software to build a
                  3D map of the heart&apos;s electrical activity, pinpointing
                  exactly where abnormal beats like PVCs are starting.
                </p>

                <div className={styles.miniTermGrid}>
                  <div className={styles.miniTerm}>
                    <h5>Active mapping</h5>
                    <p>
                      Used when PVCs occur naturally during the EP study, so
                      doctors can track their origin in real time.
                    </p>
                  </div>
                  <div className={styles.miniTerm}>
                    <h5>Pace mapping</h5>
                    <p>
                      Used when PVCs aren&apos;t firing during the study —
                      the EP paces different areas and compares the pattern
                      to the patient&apos;s known PVC shape.
                    </p>
                  </div>
                </div>
                <p style={{ marginTop: 4 }}>
                  Want the deeper trade-offs between these two — and what
                  happens when PVCs won&apos;t cooperate at all? See{" "}
                  <Link
                    href="/treatment-technology/mapping-solutions"
                    style={{ color: "var(--sky)", fontWeight: 700 }}
                  >
                    Mapping Solutions
                  </Link>
                  .
                </p>
              </div>
            </section>

            {/* 4. LEARN MORE */}
            <section id="learn-more">
              <span className="kicker">Go deeper</span>
              <h2>Learn more</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>
                For a clinical overview of ventricular arrhythmias and
                treatment options beyond what&apos;s covered here:
              </p>

              <a
                className={styles.resLink}
                href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/ventricular-tachycardia"
                target="_blank"
                rel="noopener"
              >
                <span className={styles.resIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3E7CB1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>
                </span>
                <span>
                  <span className={styles.resTitle}>Ventricular Tachycardia — Johns Hopkins Medicine</span>
                  <span className={styles.resDomain}>hopkinsmedicine.org</span>
                </span>
              </a>
            </section>
          </article>

          <div className="next-links next-links-3">
            <Link className="next-card" href="/treatment-technology/is-ablation-right-for-me">
              <span className="lbl">Continue reading</span>
              <h4>Is Ablation Right for Me?</h4>
              <p>The fuller decision guide, beyond a simple burden cutoff.</p>
            </Link>
            <Link className="next-card" href="/treatment-technology/mapping-solutions">
              <span className="lbl">Related</span>
              <h4>Mapping Solutions</h4>
              <p>Active vs. pace mapping, and what to do when PVCs stay quiet.</p>
            </Link>
            <Link className="next-card" href="/treatment-technology/safety-evidence">
              <span className="lbl">The evidence</span>
              <h4>Safety &amp; Evidence</h4>
              <p>Guidelines and outcomes behind treating symptomatic PVCs.</p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
