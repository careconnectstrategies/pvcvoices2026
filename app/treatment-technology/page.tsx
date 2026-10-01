import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import styles from "./treatment-technology.module.css";

export const metadata: Metadata = {
  title: "Treatment & Technology",
  description:
    "Explore PVC treatment and technology: ablation basics, mapping solutions, emerging tech, industry partners, and how to find the right specialist.",
};

export default function TreatmentTechnologyPage() {
  return (
    <>
      <PageHero
        current="Treatment & Technology"
        kicker="Evidence, options, and where the field is heading"
        title="Treatment & technology"
      >
        <p>
          Everything from what ablation actually is, to whether it&apos;s
          right for you, to the emerging tools trying to close the gap for
          patients guidelines still leave behind.
        </p>
      </PageHero>

      <main>
        <div className="wrap" style={{ paddingTop: 56, paddingBottom: 76 }}>
          {/* QUICK OVERVIEW */}
          <section id="overview" style={{ marginBottom: 60 }}>
            <span className="kicker">The big picture</span>
            <h2>Three ways doctors typically manage PVCs</h2>
            <div className="rule" aria-hidden="true"></div>
            <div className={styles.tierGrid}>
              <div className={styles.tierCard}>
                <div className={styles.step}>Option 1</div>
                <h4>Monitoring only</h4>
                <p>
                  No medication or procedure, typically when PVCs are
                  considered low risk.
                </p>
              </div>
              <div className={styles.tierCard}>
                <div className={styles.step}>Option 2</div>
                <h4>Medication</h4>
                <p>Antiarrhythmic drugs when symptoms or risk factors warrant it.</p>
              </div>
              <div className={`${styles.tierCard} ${styles.highlight}`}>
                <div className={styles.step}>Option 3</div>
                <h4>Ablation</h4>
                <p>
                  Locating and eliminating the PVC trigger site — usually
                  offered when medications fail or burden is very high.
                </p>
              </div>
            </div>
            <div className="callout">
              <strong>Where PVC Voices comes in:</strong>
              <p style={{ marginTop: 6 }}>
                &ldquo;Usually offered when burden is high&rdquo; is exactly
                what this site pushes back on. Burden isn&apos;t the only
                reason ablation should be on the table — explore the pages
                below for the fuller picture.
              </p>
            </div>
          </section>

          {/* SUBPAGE GRID */}
          <section id="explore" style={{ marginBottom: 60 }}>
            <span className="kicker rose">Explore this section</span>
            <h2>Seven pages, one goal: better answers</h2>
            <div className="rule" aria-hidden="true"></div>

            <div className={styles.subGrid}>
              <Link className={styles.subCard} href="/treatment-technology/ablation-basics">
                <div className={`${styles.icon} ${styles.c1}`} aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3E7CB1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19V5a2 2 0 0 1 2-2h13v18H6a2 2 0 0 1-2-2z"/><path d="M4 17h15"/></svg>
                </div>
                <div>
                  <span className={styles.num}>Start here</span>
                  <h3>Ablation Basics</h3>
                  <p>What ablation is, how it works, and the language you&apos;ll hear once you start looking into treatment.</p>
                </div>
              </Link>

              <Link className={styles.subCard} href="/treatment-technology/is-ablation-right-for-me">
                <div className={`${styles.icon} ${styles.c3}`} aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#CE4B59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                </div>
                <div>
                  <span className={styles.num}>The decision guide</span>
                  <h3>Is Ablation Right for Me?</h3>
                  <p>Not how guidelines are written — how the EPs who actually treat low-burden, high-symptom patients think.</p>
                </div>
              </Link>

              <Link className={styles.subCard} href="/treatment-technology/safety-evidence">
                <div className={`${styles.icon} ${styles.c2}`} aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C77F14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <span className={styles.num}>The evidence</span>
                  <h3>Safety &amp; Evidence</h3>
                  <p>What the guidelines actually say, and how safe and effective ablation really is — even at low burden.</p>
                </div>
              </Link>

              <Link className={styles.subCard} href="/treatment-technology/emerging-technology">
                <div className={`${styles.icon} ${styles.c4}`} aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1F6B3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                </div>
                <div>
                  <span className={styles.num}>What&apos;s changing</span>
                  <h3>Emerging Technology</h3>
                  <p>From VHPSD and pulsed-field ablation to noninvasive mapping and vagus-nerve stimulation.</p>
                </div>
              </Link>

              <Link className={styles.subCard} href="/treatment-technology/mapping-solutions">
                <div className={`${styles.icon} ${styles.c1}`} aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3E7CB1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                </div>
                <div>
                  <span className={styles.num}>A specific fix</span>
                  <h3>Mapping Solutions</h3>
                  <p>What happens when your PVCs won&apos;t cooperate during the EP study — and the technique built for exactly that.</p>
                </div>
              </Link>

              <Link className={styles.subCard} href="/treatment-technology/find-a-specialist">
                <div className={`${styles.icon} ${styles.c3}`} aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#CE4B59" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <div>
                  <span className={styles.num}>Finding help</span>
                  <h3>Find a Specialist</h3>
                  <p>Why online research is only a starting point, screening questions to ask, and our EP Hall of Recognition.</p>
                </div>
              </Link>

              <Link
                className={`${styles.subCard} ${styles.subCardWide}`}
                href="/treatment-technology/industry-technology-partners"
              >
                <div className={`${styles.icon} ${styles.c2}`} aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C77F14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z"/><path d="M9 22V12h6v10"/></svg>
                </div>
                <div>
                  <span className={styles.num}>For companies &amp; clinicians</span>
                  <h3>Industry &amp; Technology Partners</h3>
                  <p>Who&apos;s building the mapping and ablation tools shaping this field — and how to get new technology featured here.</p>
                </div>
              </Link>
            </div>
          </section>

          {/* DECISION TEASER */}
          <section id="decision-teaser" style={{ marginBottom: 60 }}>
            <div className={styles.decisionTeaser}>
              <span className="kicker">Wondering if you&apos;re a candidate?</span>
              <h2>See the real decision flow</h2>
              <p>
                Guidelines don&apos;t spell out the low-burden, high-symptom
                path clearly — but the small subset of EPs who treat these
                cases have a real, consistent way of thinking through it. We
                mapped it out step by step.
              </p>
              <div className={styles.miniFlow}>
                <span className={styles.miniStep}>Symptoms felt?</span>
                <span className={styles.miniArrow}>→</span>
                <span className={styles.miniStep}>Burden quantified?</span>
                <span className={styles.miniArrow}>→</span>
                <span className={styles.miniStep}>Morphology consistent?</span>
                <span className={styles.miniArrow}>→</span>
                <span className={styles.miniStep}>Location acceptable risk?</span>
              </div>
              <Link className="btn btn-amber" href="/treatment-technology/is-ablation-right-for-me">
                See the full decision guide →
              </Link>
            </div>
          </section>

          {/* CLOSING LINKS */}
          <section id="closing">
            <span className="kicker">Beyond treatment</span>
            <h2>If access is still the problem</h2>
            <div className="rule" aria-hidden="true"></div>
            <div className="next-links" style={{ marginTop: 0 }}>
              <Link className="next-card" href="/advocacy">
                <span className="lbl">Take action</span>
                <h4>Advocacy</h4>
                <p>Help push the organizations that write these guidelines to modernize them.</p>
              </Link>
              <Link className="next-card" href="/resources">
                <span className="lbl">Read further</span>
                <h4>Resources</h4>
                <p>Every guideline, study, and source cited across this section, in one place.</p>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
