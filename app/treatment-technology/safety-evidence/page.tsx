import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SubNav from "@/components/SubNav";
import { TREATMENT_TECH_LINKS } from "@/lib/nav";
import styles from "./safety-evidence.module.css";

export const metadata: Metadata = { title: "Safety & Evidence" };

export default function SafetyEvidencePage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/treatment-technology", label: "Treatment & Technology" }]}
        current="Safety & Evidence"
        kicker="Treatment & Technology · The clinical evidence"
        title="Safety & evidence"
      >
        <p>
          What the guidelines actually say about ablating symptomatic PVCs
          — and how safe and effective it really is, even at low burden.
        </p>
      </PageHero>

      <SubNav
        label="Treatment & Technology section pages"
        items={TREATMENT_TECH_LINKS}
        current="/treatment-technology/safety-evidence"
      />

      <main>
        <div className="wrap" style={{ paddingTop: 52, paddingBottom: 76 }}>
          <article>
            {/* 1. OVERVIEW */}
            <section id="overview">
              <span className="kicker">Overview</span>
              <h2>Ablation is safer than many patients are told</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>
                For low-burden but symptomatic PVCs, ablation is generally
                considered safe — especially when left ventricular (LV)
                function is intact. Modern techniques such as pace mapping
                have made ablation both feasible and low-risk, even when
                PVCs are infrequent during the procedure.
              </p>
              <p>
                Some advanced centers now use medication or targeted nerve
                stimulation to provoke PVCs that stay quiet during an EP
                study, which is a major advance for exactly the patients
                this site advocates for. Only a limited number of EPs and
                clinics currently offer these methods; see our{" "}
                <Link href="/treatment-technology/mapping-solutions" style={{ color: "var(--sky)", fontWeight: 700 }}>
                  Mapping Solutions
                </Link>{" "}
                page for the specific technique and evidence behind it.
              </p>
              <p>
                Because these advanced practices remain concentrated at a
                handful of centers, finding an experienced doctor is
                essential — which is exactly why we&apos;re building a
                directory of specialists who treat highly symptomatic,
                low-burden PVCs. See{" "}
                <Link href="/treatment-technology/find-a-specialist" style={{ color: "var(--sky)", fontWeight: 700 }}>
                  Find a Specialist
                </Link>
                .
              </p>
            </section>

            {/* 2. GUIDELINES */}
            <section id="guidelines">
              <span className="kicker rose">Documented evidence</span>
              <h2>What the guidelines say</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>Two major guideline bodies have already moved past a strict burden cutoff for treatment decisions:</p>

              <div className={styles.evidenceCard}>
                <span className={styles.sourceTag}>European Society of Cardiology · 2022</span>
                <p>
                  The ESC&apos;s 2022 guideline names catheter ablation as a
                  first-line treatment for symptomatic idiopathic PVCs or VT
                  originating from the right ventricular outflow tract or
                  left fascicles, without requiring a minimum burden.
                  <a className="src" href="#ref-1" title="Insert source link">[1]</a>
                </p>
              </div>

              <div className={styles.evidenceCard}>
                <span className={styles.sourceTag}>HRS / EHRA / APHRS / LAHRS Consensus · 2019</span>
                <p>
                  This joint consensus statement endorses ablation for
                  symptomatic idiopathic PVCs generally, particularly when
                  medications fail, aren&apos;t tolerated, or simply
                  aren&apos;t preferred by the patient.
                  <a className="src" href="#ref-2" title="Insert source link">[2]</a>
                </p>
              </div>
            </section>

            {/* 3. OUTCOMES */}
            <section id="outcomes">
              <span className="kicker">Safety &amp; outcomes</span>
              <h2>How safe and effective ablation actually is</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>Across multiple published studies, PVC ablation consistently shows high success rates and a low, well-characterized complication profile:</p>

              <div className={styles.statGrid}>
                <div className={styles.statCard}>
                  <div className={styles.figs}>
                    <div className={styles.fig}><div className={styles.num}>84–93%</div><div className={styles.lbl}>Success rate</div></div>
                    <div className={styles.fig}><div className={styles.num}>~5%</div><div className={styles.lbl}>Complications</div></div>
                  </div>
                  <div className={styles.cite}><strong>Multicenter study, JACC EP 2015</strong> — 1,185 patients; complications split roughly 2.4% major, 2.8% minor.<a className="src" href="#ref-3" title="Insert source link">[3]</a></div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.figs}>
                    <div className={styles.fig}><div className={styles.num}>80–94%</div><div className={styles.lbl}>Success rate</div></div>
                    <div className={styles.fig}><div className={styles.num}>≤5.6%</div><div className={styles.lbl}>Complications</div></div>
                  </div>
                  <div className={styles.cite}><strong>Han, 2021 review</strong> — RVOT-origin ablations showed the highest success and lowest risk of the locations studied.<a className="src" href="#ref-4" title="Insert source link">[4]</a></div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.figs}>
                    <div className={styles.fig}><div className={styles.num}>97–98%</div><div className={styles.lbl}>Acute success</div></div>
                  </div>
                  <div className={styles.cite}><strong>Outflow-tract-specific outcomes</strong> — very high success with low complication rates comparing RVOT and LVOT origins.<a className="src" href="#ref-5" title="Insert source link">[5]</a></div>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.figs}>
                    <div className={styles.fig}><div className={styles.num}>~90%</div><div className={styles.lbl}>Success rate</div></div>
                    <div className={styles.fig}><div className={styles.num}>~3.1%</div><div className={styles.lbl}>Complications</div></div>
                  </div>
                  <div className={styles.cite}><strong>Contemporary outcomes, JACC EP 2025</strong> — the most recent published figures in this evidence set.<a className="src" href="#ref-6" title="Insert source link">[6]</a></div>
                </div>
              </div>
            </section>

            {/* 4. LOW BURDEN EVIDENCE */}
            <section id="low-burden">
              <span className="kicker amber">Specific to low burden</span>
              <h2>Evidence for low-burden, highly symptomatic patients</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>The studies above cover PVC ablation broadly. These focus specifically on patients like the ones PVC Voices advocates for — low count, high suffering:</p>

              <div className={styles.evidenceCard}>
                <span className={styles.sourceTag}>Rillig et al., 2014 (review)</span>
                <p>
                  Found that patients with fewer than 5,000 PVCs per 24
                  hours can still be highly symptomatic, and concluded that
                  ablation in these cases is justified, safe, and improves
                  quality of life.
                  <a className="src" href="#ref-7" title="Insert source link">[7]</a>
                </p>
              </div>
              <div className={styles.evidenceCard}>
                <span className={styles.sourceTag}>Jáuregui et al., 2021 (pace-mapping protocol)</span>
                <p>
                  Demonstrated that ablation is feasible and effective for
                  low-burden PVCs specifically when specialized mapping
                  strategies are used.
                  <a className="src" href="#ref-8" title="Insert source link">[8]</a>
                </p>
              </div>
              <div className={styles.evidenceCard}>
                <span className={styles.sourceTag}>Contemporary mapping/ablation review, 2024</span>
                <p>
                  A recent review focused specifically on strategies for the
                  scenario where PVCs are infrequent — directly relevant to
                  low-burden patients.
                  <a className="src" href="#ref-9" title="Insert source link">[9]</a>
                </p>
              </div>
            </section>

            {/* 5. BOTTOM LINE */}
            <section id="bottom-line">
              <span className="kicker rose">Bottom line</span>
              <h2>Putting it together</h2>
              <div className="rule" aria-hidden="true"></div>
              <div className={styles.bottomLine}>
                <h3>What the evidence supports</h3>
                <ul>
                  <li><strong>Guidelines:</strong> both the ESC and HRS consensus support ablation for symptomatic idiopathic PVCs, with no burden threshold required.</li>
                  <li><strong>Outcomes:</strong> idiopathic PVC ablation achieves roughly 80–94% success with about 3–5% complication rates; RVOT cases see the highest success and lowest risk.</li>
                  <li><strong>Low burden:</strong> even patients with fewer than 5,000 PVCs per day can safely benefit from ablation when symptoms are severe, given modern mapping methods.</li>
                </ul>
              </div>

              <div className={styles.caveat}>
                <h4>An honest caveat</h4>
                <p>
                  Ablation isn&apos;t always feasible for low-burden,
                  symptomatic PVCs. Multiple PVC origins can make
                  localization difficult, and PVCs near the heart&apos;s
                  natural conduction system can make ablation too risky to
                  attempt. Only a small number of electrophysiologists at
                  high-volume centers are willing to take on these complex
                  cases — many others default to drug therapy, if a
                  suitable medication can be found at all. This evidence
                  supports pursuing treatment; it doesn&apos;t guarantee
                  every case will find a willing, safe path to it.
                </p>
              </div>
            </section>
          </article>

          <div className="next-links">
            <Link className="next-card" href="/treatment-technology/mapping-solutions">
              <span className="lbl">Related</span>
              <h4>Mapping Solutions</h4>
              <p>The specific technique some centers use to provoke PVCs that stay quiet during an EP study.</p>
            </Link>
            <Link className="next-card" href="/treatment-technology/find-a-specialist">
              <span className="lbl">Keep going</span>
              <h4>Find a Specialist</h4>
              <p>Start building your list of EPs and centers experienced with complex, low-burden cases.</p>
            </Link>
          </div>

          <section className="refs" id="references">
            <h2>References</h2>
            <p><em>Numbered citations above link here. Final URLs to be confirmed and inserted before publishing.</em></p>
            <ol>
              <li id="ref-1">European Society of Cardiology, 2022 Guidelines for the Management of Patients with Ventricular Arrhythmias and the Prevention of Sudden Cardiac Death.</li>
              <li id="ref-2">2019 HRS/EHRA/APHRS/LAHRS Expert Consensus Statement on Catheter Ablation of Ventricular Arrhythmias. (PMC)</li>
              <li id="ref-3">Multicenter outcomes study, JACC: Clinical Electrophysiology, 2015 (1,185 patients). (ScienceDirect)</li>
              <li id="ref-4">Han, 2021 — review of idiopathic PVC ablation success and complication rates by origin. (PMC)</li>
              <li id="ref-5">Outflow-tract-specific PVC ablation outcomes (RVOT vs. LVOT). (PMC)</li>
              <li id="ref-6">Contemporary PVC ablation outcomes, JACC: Clinical Electrophysiology, 2025.</li>
              <li id="ref-7">Rillig et al., 2014 — review of ablation outcomes in low-burden, highly symptomatic PVC patients. (PMC)</li>
              <li id="ref-8">Jáuregui et al., 2021 — pace-mapping protocol for low-burden PVC ablation. (PubMed / ScienceDirect)</li>
              <li id="ref-9">Contemporary mapping/ablation review, 2024 — strategies for infrequent PVCs. (JACC)</li>
            </ol>
          </section>
        </div>
      </main>
    </>
  );
}
