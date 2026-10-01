import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import styles from "./resources.module.css";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Curated PVC resources: clinical trial updates, patient education links, a glossary of terms, and trusted sources on premature ventricular contractions and ablation.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero current="Resources" kicker="Every claim, one click away" title="Resources">
        <p>
          Every guideline, study, and external source cited across this
          site, gathered in one place — plus a quick-reference glossary and
          links back into PVC Voices itself.
        </p>
      </PageHero>

      <div className="subnav" aria-label="Jump to section">
        <div className="subnav-scroll">
          <a href="#guidelines">Official Guidelines</a>
          <a href="#research">Research &amp; Evidence</a>
          <a href="#patient-ed">Patient Education</a>
          <a href="#glossary">Glossary</a>
          <a href="#internal">More on PVC Voices</a>
        </div>
      </div>

      <main>
        <div className="wrap" style={{ paddingTop: 52, paddingBottom: 76 }}>
          <article>
            {/* 1. OFFICIAL GUIDELINES */}
            <section id="guidelines">
              <span className="kicker">Straight from the source</span>
              <h2>Official guidelines &amp; clinical societies</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>
                The documents that actually govern when ablation gets
                offered — read them directly rather than taking any single
                summary&apos;s word for it, including ours. Full background
                on how these are written lives on{" "}
                <Link href="/advocacy/who-makes-the-rules" style={{ color: "var(--sky)", fontWeight: 700 }}>
                  Who Makes the Rules?
                </Link>
              </p>

              <div className={styles.resList}>
                <a className={styles.resLink} href="https://www.ahajournals.org/doi/10.1161/CIR.0000000000000549" target="_blank" rel="noopener">
                  <span className={styles.dot}></span>
                  <span className={styles.body}>
                    <span className={styles.title}>2017 AHA/ACC/HRS Guideline for Management of Ventricular Arrhythmias — full text</span>
                    <span className={styles.desc}>The most recent full joint U.S. guideline on ventricular arrhythmias and sudden cardiac death — confirmed still current as of this writing, with no newer full replacement published.</span>
                    <span className={styles.domain}>ahajournals.org</span>
                  </span>
                </a>
                <a className={styles.resLink} href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7223859/" target="_blank" rel="noopener">
                  <span className={styles.dot}></span>
                  <span className={styles.body}>
                    <span className={styles.title}>2019 HRS/EHRA/APHRS/LAHRS Expert Consensus on Catheter Ablation of Ventricular Arrhythmias</span>
                    <span className={styles.desc}>Procedure-focused consensus statement — the most direct guidance on when and how to ablate.</span>
                    <span className={styles.domain}>pmc.ncbi.nlm.nih.gov</span>
                  </span>
                </a>
                <a className={styles.resLink} href="https://www.escardio.org/guidelines/clinical-practice-guidelines/all-esc-practice-guidelines/ventricular-arrhythmias-and-the-prevention-of-sudden-cardiac-death/" target="_blank" rel="noopener">
                  <span className={styles.dot}></span>
                  <span className={styles.body}>
                    <span className={styles.title}>2022 ESC Guideline for Ventricular Arrhythmias &amp; Sudden Cardiac Death</span>
                    <span className={styles.desc}>Europe&apos;s current guideline — notably recommends ablation as first-line for symptomatic idiopathic PVCs, no burden threshold required.</span>
                    <span className={styles.domain}>escardio.org</span>
                  </span>
                </a>
                <a className={styles.resLink} href="https://www.acc.org/latest-in-cardiology/ten-points-to-remember/2022/09/02/14/23/2022-esc-guidelines-for-vas-esc-2022" target="_blank" rel="noopener">
                  <span className={styles.dot}></span>
                  <span className={styles.body}>
                    <span className={styles.title}>ACC — 2022 ESC Guidelines, Ten Points to Remember</span>
                    <span className={styles.desc}>A condensed, practitioner-oriented summary of the ESC guideline above.</span>
                    <span className={styles.domain}>acc.org</span>
                  </span>
                </a>
              </div>
            </section>

            {/* 2. RESEARCH & EVIDENCE */}
            <section id="research">
              <span className="kicker rose">The studies behind the claims</span>
              <h2>Research &amp; evidence</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>
                Outcome data, low-burden-specific studies, and
                emerging-technology research referenced across{" "}
                <Link href="/treatment-technology/safety-evidence" style={{ color: "var(--sky)", fontWeight: 700 }}>
                  Safety &amp; Evidence
                </Link>{" "}
                and{" "}
                <Link href="/treatment-technology/emerging-technology" style={{ color: "var(--sky)", fontWeight: 700 }}>
                  Emerging Technology
                </Link>
                .
              </p>

              <h3>Ablation outcomes &amp; safety</h3>
              <div className={styles.resList}>
                <a className={styles.resLink} href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12941039/" target="_blank" rel="noopener">
                  <span className={styles.dot}></span>
                  <span className={styles.body}>
                    <div className={styles.catRow}><span className={`${styles.catTag} ${styles.evidence}`}>Outcomes</span></div>
                    <span className={styles.title}>Contemporary PVC ablation mapping &amp; outcomes research</span>
                    <span className={styles.domain}>pmc.ncbi.nlm.nih.gov</span>
                  </span>
                </a>
                <a className={styles.resLink} href="https://academic.oup.com/europace/article/27/9/euaf139/8182687" target="_blank" rel="noopener">
                  <span className={styles.dot}></span>
                  <span className={styles.body}>
                    <div className={styles.catRow}><span className={`${styles.catTag} ${styles.evidence}`}>Outcomes</span></div>
                    <span className={styles.title}>Lattice-tip ventricular ablation study (21 of 23 PVC cases, acute success)</span>
                    <span className={styles.domain}>academic.oup.com</span>
                  </span>
                </a>
              </div>

              <h3>Low-burden, highly symptomatic PVCs</h3>
              <div className={styles.resList}>
                <a className={styles.resLink} href="https://www.ahajournals.org/doi/10.1161/CIRCULATIONAHA.119.042434" target="_blank" rel="noopener">
                  <span className={styles.dot}></span>
                  <span className={styles.body}>
                    <div className={styles.catRow}><span className={`${styles.catTag} ${styles.lowburden}`}>Low burden</span></div>
                    <span className={styles.title}>PVC burden and cardiomyopathy risk association</span>
                    <span className={styles.domain}>ahajournals.org</span>
                  </span>
                </a>
                <a className={styles.resLink} href="https://clinicaltrials.gov/study/NCT07445334" target="_blank" rel="noopener">
                  <span className={styles.dot}></span>
                  <span className={styles.body}>
                    <div className={styles.catRow}><span className={`${styles.catTag} ${styles.lowburden}`}>Ongoing trial</span></div>
                    <span className={styles.title}>Catheter Ablation Versus Anti-arrhythmic Drugs for Premature Ventricular Complexes (CAAD-PVC)</span>
                    <span className={styles.desc}>Confirmed via ClinicalTrials.gov: a pilot trial comparing ablation vs. medical therapy in patients with meaningful PVC burden and normal ejection fraction.</span>
                    <span className={styles.domain}>clinicaltrials.gov</span>
                  </span>
                </a>
              </div>

              <h3>Emerging technology</h3>
              <div className={styles.resList}>
                <a className={styles.resLink} href="https://www.mdpi.com/2077-0383/15/4/1360" target="_blank" rel="noopener">
                  <span className={styles.dot}></span>
                  <span className={styles.body}>
                    <div className={styles.catRow}><span className={`${styles.catTag} ${styles.tech}`}>PFA</span></div>
                    <span className={styles.title}>2026 systematic review — pulsed-field ablation in ventricular arrhythmias</span>
                    <span className={styles.domain}>mdpi.com</span>
                  </span>
                </a>
                <a className={styles.resLink} href="https://abbott.mediaroom.com/2025-12-22-Abbotts-Volt-TM-Pulsed-Field-Ablation-System-Receives-FDA-Approval-to-Treat-Patients-with-Atrial-Fibrillation" target="_blank" rel="noopener">
                  <span className={styles.dot}></span>
                  <span className={styles.body}>
                    <div className={styles.catRow}><span className={`${styles.catTag} ${styles.tech}`}>PFA</span></div>
                    <span className={styles.title}>Abbott Volt™ PFA System — FDA approval announcement (AFib), Dec 2025</span>
                    <span className={styles.domain}>abbott.mediaroom.com</span>
                  </span>
                </a>
                <a className={styles.resLink} href="https://pubmed.ncbi.nlm.nih.gov/40392172/" target="_blank" rel="noopener">
                  <span className={styles.dot}></span>
                  <span className={styles.body}>
                    <div className={styles.catRow}><span className={`${styles.catTag} ${styles.tech}`}>Neuromodulation</span></div>
                    <span className={styles.title}>NoVa-PVC — published results, vagus nerve stimulation crossover trial</span>
                    <span className={styles.desc}>Confirmed: this trial has already published findings (JACC: Clinical Electrophysiology) — a statistically significant reduction in median PVC burden vs. sham stimulation in medication-refractory patients.</span>
                    <span className={styles.domain}>pubmed.ncbi.nlm.nih.gov</span>
                  </span>
                </a>
              </div>
            </section>

            {/* 3. PATIENT EDUCATION */}
            <section id="patient-ed">
              <span className="kicker amber">Plain-language external reading</span>
              <h2>Patient education</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>
                General, well-established sources for background reading
                alongside — not instead of — a conversation with your own
                physician.
              </p>

              <div className={styles.resList}>
                <a className={styles.resLink} href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/ventricular-tachycardia" target="_blank" rel="noopener">
                  <span className={styles.dot}></span>
                  <span className={styles.body}>
                    <span className={styles.title}>Ventricular Tachycardia — Johns Hopkins Medicine</span>
                    <span className={styles.domain}>hopkinsmedicine.org</span>
                  </span>
                </a>
                <a className={styles.resLink} href="https://www.mayoclinic.org/diseases-conditions/premature-ventricular-contractions/diagnosis-treatment/drc-20376762" target="_blank" rel="noopener">
                  <span className={styles.dot}></span>
                  <span className={styles.body}>
                    <span className={styles.title}>Premature Ventricular Contractions — Mayo Clinic</span>
                    <span className={styles.domain}>mayoclinic.org</span>
                  </span>
                </a>
              </div>
            </section>

            {/* 4. GLOSSARY QUICK REFERENCE */}
            <section id="glossary">
              <span className="kicker">Quick reference</span>
              <h2>Glossary</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>
                Short definitions for fast lookup. For the fuller
                explanations, visit{" "}
                <Link href="/about" style={{ color: "var(--sky)", fontWeight: 700 }}>About PVCs</Link>{" "}
                and{" "}
                <Link href="/treatment-technology/ablation-basics" style={{ color: "var(--sky)", fontWeight: 700 }}>Ablation Basics</Link>.
              </p>

              <div className={styles.glossaryGrid}>
                <div className={styles.glosCard}>
                  <h5>PVC</h5>
                  <p>A premature ventricular contraction — an extra heartbeat starting in the ventricles instead of the heart&apos;s natural pacemaker.</p>
                </div>
                <div className={styles.glosCard}>
                  <h5>PVC burden</h5>
                  <p>The percentage (or daily count) of your heartbeats that are PVCs, usually measured with ambulatory monitoring.</p>
                </div>
                <div className={styles.glosCard}>
                  <h5>Ablation</h5>
                  <p>A procedure that finds and destroys the tissue triggering PVCs, using heat (RF) or cold (cryoablation).</p>
                </div>
                <div className={styles.glosCard}>
                  <h5>EP (Electrophysiologist)</h5>
                  <p>A cardiologist specialized in diagnosing and treating heart rhythm problems.</p>
                </div>
                <div className={styles.glosCard}>
                  <h5>Monomorphic / Polymorphic</h5>
                  <p>Whether PVCs come from one consistent origin (monomorphic) or multiple different origins (polymorphic/multifocal).</p>
                </div>
                <div className={styles.glosCard}>
                  <h5>Ejection fraction (EF)</h5>
                  <p>The percentage of blood the left ventricle pumps out with each heartbeat — a key measure of heart function.</p>
                  <a href="#">Full definition →</a>
                </div>
                <div className={styles.glosCard}>
                  <h5>Activation mapping / Pace mapping</h5>
                  <p>Two ways to locate a PVC&apos;s origin — tracking it live as it fires (activation) versus reproducing its shape by pacing (pace).</p>
                  <Link href="/treatment-technology/mapping-solutions">Compare in depth →</Link>
                </div>
                <div className={styles.glosCard}>
                  <h5>PFA (Pulsed-field ablation)</h5>
                  <p>A non-thermal ablation method using brief electrical pulses instead of heat or cold — emerging, not yet routine for PVCs.</p>
                  <Link href="/treatment-technology/emerging-technology">Read more →</Link>
                </div>
              </div>
            </section>

            {/* 5. INTERNAL LINKS */}
            <section id="internal">
              <span className="kicker rose">More on PVC Voices</span>
              <h2>Where to go next on this site</h2>
              <div className="rule" aria-hidden="true"></div>
              <div className="next-links" style={{ marginTop: 14 }}>
                <Link className="next-card" href="/treatment-technology/is-ablation-right-for-me">
                  <h4>Is Ablation Right for Me?</h4>
                  <p>The decision guide, beyond a simple burden cutoff.</p>
                </Link>
                <Link className="next-card" href="/advocacy/take-action">
                  <h4>Take Action</h4>
                  <p>Contact the guideline committees, with a letter already written for you.</p>
                </Link>
                <Link className="next-card" href="/treatment-technology/find-a-specialist">
                  <h4>Find a Specialist</h4>
                  <p>How to vet a doctor or clinic before you book.</p>
                </Link>
                <Link className="next-card" href="/patient-stories">
                  <h4>Patient Stories</h4>
                  <p>Real accounts from people who feel every beat.</p>
                </Link>
              </div>
            </section>

            <div className="callout">
              <strong>Verified via live web research, August 2026:</strong>
              <p style={{ marginTop: 6 }}>
                The 2017 AHA/ACC/HRS guideline is confirmed still the
                current full U.S. guideline, with no newer replacement
                published. The earlier trial-ID conflict between our
                source documents has been resolved — NCT07445334 is
                confirmed to be the CAAD-PVC ablation-vs-medication trial,
                not NoVa-PVC, and the NoVa-PVC citation now points to its
                actual published results. Not every individual link on
                this page has been re-verified; if you spot one that&apos;s
                gone stale, let us know through{" "}
                <Link href="/contact" style={{ color: "var(--sky)", fontWeight: 700 }}>Contact</Link>.
              </p>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
