import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SubNav from "@/components/SubNav";
import { TREATMENT_TECH_LINKS } from "@/lib/nav";
import styles from "./is-ablation-right-for-me.module.css";

export const metadata: Metadata = {
  title: "Is Ablation Right for Me?",
  description:
    "A decision guide for low-burden, high-symptom, and complex multifocal PVC cases that standard treatment guidelines often overlook.",
};

export default function IsAblationRightForMePage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/treatment-technology", label: "Treatment & Technology" }]}
        current="Is Ablation Right for Me?"
        kicker="Treatment & Technology · The decision guide"
        title="Is ablation right for me?"
      >
        <p>
          Not how the guidelines are written — how the small subset of EPs
          who actually treat low-burden, highly symptomatic PVCs really
          think about your case.
        </p>
      </PageHero>

      <SubNav
        label="Treatment & Technology section pages"
        items={TREATMENT_TECH_LINKS}
        current="/treatment-technology/is-ablation-right-for-me"
      />

      <main>
        <div className="wrap" style={{ paddingTop: 52, paddingBottom: 76 }}>
          <article>
            {/* 1. RISK / BENEFIT */}
            <section id="risk-benefit">
              <span className="kicker">Start here</span>
              <h2>Weighing the risk against the benefit</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>
                Ablation eliminates the abnormal heart tissue triggering
                PVCs. It&apos;s generally safe — roughly a 1% complication
                risk — though not risk-free; many patients go through more
                than one ablation without any life-threatening issues.
              </p>
              <p>
                Because of this risk-benefit calculation, many EPs still
                lean on the 10,000-PVC/day threshold before recommending
                ablation. That number was originally meant to flag patients
                at risk for cardiomyopathy — not to serve as a universal
                cutoff for who deserves treatment. Patients with low burden
                but high symptoms were simply left out of the criteria. (See
                our full{" "}
                <Link href="/treatment-technology/safety-evidence" style={{ color: "var(--sky)", fontWeight: 700 }}>
                  Safety &amp; Evidence
                </Link>{" "}
                page for the outcome data behind this.)
              </p>

              <h3>Why low-burden PVCs can still be disabling</h3>
              <ul>
                <li>Even with under 1% burden, patients may feel every single skipped beat.</li>
                <li>Symptoms can trigger anxiety, insomnia, fatigue, terror, depression, or worse.</li>
                <li>Daily tasks and exercise can become genuinely difficult.</li>
                <li>Patients are often dismissed for not meeting the 10,000/day threshold.</li>
                <li>
                  The system tends to value counts and ejection fraction
                  over mental, social, and physical suffering — though a
                  small number of EPs will treat highly symptomatic patients
                  regardless. They&apos;re just hard to find.
                </li>
              </ul>

              <h3>Why patients get denied</h3>
              <p>
                Low-burden but severely symptomatic patients are often
                denied ablation because they aren&apos;t considered at risk
                for cardiomyopathy — a framing that ignores real
                quality-of-life harm: anxiety, depression, isolation, even
                suicidal thoughts.
              </p>
              <p>Broadly, being considered for ablation comes down to three things:</p>
              <ul>
                <li>
                  <strong style={{ color: "var(--navy)" }}>High burden and/or reduced LV function</strong>, with a real chance of developing cardiomyopathy.
                </li>
                <li>
                  <strong style={{ color: "var(--navy)" }}>Symptoms severe enough to justify intervention</strong> when medications haven&apos;t worked.
                </li>
                <li>
                  <strong style={{ color: "var(--navy)" }}>Feasibility</strong> — ablation isn&apos;t always possible for low-burden but symptomatic patients. Multiple PVC trigger sites can make mapping difficult, and PVCs near critical conduction structures like the AV node carry real risk of damaging normal electrical pathways.
                </li>
              </ul>

              <div className="callout rose">
                <strong>An important risk to know about:</strong>
                <p style={{ marginTop: 8 }}>
                  Ablating near the AV node or His bundle can leave a
                  patient dependent on a permanent pacemaker if the
                  procedure damages normal conduction.
                </p>
                <div className={styles.statFlag}>
                  <span className={styles.num}>~30%</span>
                  <span className={styles.lbl}>
                    reported risk of a failed ablation in these high-risk
                    locations requiring a permanent pacemaker
                    <br />
                    <span style={{ fontStyle: "italic" }}>
                      (patient-reported, from conversations with EPs — not a
                      formal published statistic)
                    </span>
                  </span>
                </div>
              </div>
            </section>

            {/* 2. MORPHOLOGY */}
            <section id="morphology">
              <span className="kicker rose">A key factor</span>
              <h2>How PVC morphology affects your candidacy</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>
                Monomorphic PVCs strongly favor ablation candidacy.
                Polymorphic or multifocal PVCs make ablation more complex,
                less predictable, and more dependent on the underlying
                heart substrate and the operator&apos;s experience.
              </p>

              <table>
                <tbody>
                  <tr>
                    <th style={{ width: "24%" }}>&nbsp;</th>
                    <th>Monomorphic PVCs</th>
                    <th>Polymorphic / multifocal PVCs</th>
                  </tr>
                  <tr>
                    <td><strong>What it is</strong></td>
                    <td>A single dominant morphology from one area of the heart — the best-case scenario.</td>
                    <td>Multiple morphologies or foci, often reflecting more complex substrate or structural disease.</td>
                  </tr>
                  <tr>
                    <td><strong>Candidacy</strong></td>
                    <td>Guideline-supported when symptomatic, high burden, or causing LV dysfunction — especially if drugs fail or aren&apos;t wanted.</td>
                    <td>Depends on whether the foci are away from the conduction system; a dominant focus can sometimes be targeted for symptom relief even if others remain.</td>
                  </tr>
                  <tr>
                    <td><strong>Success rate</strong></td>
                    <td>Generally good — roughly 80–90%, particularly for idiopathic RVOT or fascicular PVCs.</td>
                    <td>Lower and less predictable historically; better long-term results when all relevant morphologies are mapped, but that takes more expertise, time, and isn&apos;t feasible everywhere.</td>
                  </tr>
                </tbody>
              </table>

              <div className="callout">
                <strong>A safer option near the conduction system:</strong>
                <p style={{ marginTop: 6 }}>
                  When a PVC originates along the conduction center,
                  cryoablation (freezing) can be safer than heat-based (RF)
                  ablation because it allows reversible testing before
                  committing to the lesion — though it may be slightly less
                  effective. Top centers may also use high-density mapping,
                  intracardiac echo, and His-signal mapping to precisely
                  target the most symptomatic focus rather than aiming for
                  complete elimination.
                </p>
              </div>
            </section>

            {/* 3. DECISION TREE */}
            <section id="decision-tree">
              <span className="kicker amber">See where you fit</span>
              <h2>The real decision flow</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>
                This is a candid, no-guideline-jargon version of how the
                small subset of EPs willing to treat low-burden,
                high-symptom PVC patients actually reason through a case —
                built specifically for that patient, not the general PVC
                population.
              </p>

              <div className={styles.flowIntro}>
                <strong style={{ color: "var(--navy)", fontFamily: "var(--font-fraunces)" }}>Reading this:</strong>{" "}
                follow the path that matches your situation. Most patients
                reading this site are the &ldquo;low burden, high
                symptom&rdquo; branch — the path guidelines don&apos;t
                spell out clearly, but that some EPs will still walk with
                you.
              </div>

              <div className={styles.flow}>
                <div className={styles.flowStep}>
                  <div className={styles.q}><span className={styles.stepNum}>1</span>PVCs documented on ECG / Kardia / Holter?</div>
                  <div className={styles.branchRow}>
                    <div className={`${styles.branch} ${styles.terminalNeg}`}><span className={styles.tag}>If no</span><p>Case dismissed — nothing to target yet.</p></div>
                    <div className={`${styles.branch} ${styles.continue}`}><span className={styles.tag}>If yes</span><p>Continue ↓</p></div>
                  </div>
                </div>
                <div className={styles.flowConnector}></div>

                <div className={styles.flowStep}>
                  <div className={styles.q}><span className={styles.stepNum}>2</span>Are the PVCs clearly felt by the patient?</div>
                  <div className={styles.detail}>&quot;thump,&quot; breath catch, chest jolt, anxiety trigger</div>
                  <div className={styles.branchRow}>
                    <div className={`${styles.branch} ${styles.terminalAmber}`}><span className={styles.tag}>If no</span><p>Low priority — reassurance only.</p></div>
                    <div className={`${styles.branch} ${styles.continue}`}><span className={styles.tag}>If yes</span><p>High symptom load — continue ↓</p></div>
                  </div>
                </div>
                <div className={styles.flowConnector}></div>

                <div className={styles.flowStep}>
                  <div className={styles.q}><span className={styles.stepNum}>3</span>Is the symptom–PVC correlation proven?</div>
                  <div className={styles.detail}>time-matched ECG, patient-triggered strip, Kardia recording</div>
                  <div className={styles.branchRow}>
                    <div className={`${styles.branch} ${styles.terminalNeg}`}><span className={styles.tag}>If no</span><p>EP grows skeptical — rejected.</p></div>
                    <div className={`${styles.branch} ${styles.continue}`}><span className={styles.tag}>If yes</span><p>Key step passed — continue ↓</p></div>
                  </div>
                </div>
                <div className={styles.flowConnector}></div>

                <div className={styles.flowStep}>
                  <div className={styles.q}><span className={styles.stepNum}>4</span>PVC burden quantified?</div>
                  <div className={styles.branchRow}>
                    <div className={`${styles.branch} ${styles.terminalPos}`}><span className={styles.tag}>If ≥5–10%</span><p>Standard ablation pathway — most guidelines already support this.</p></div>
                    <div className={`${styles.branch} ${styles.continue}`}><span className={styles.tag}>If &lt;5% (even &lt;1%)</span><p>This is the path this site is built for — continue ↓</p></div>
                  </div>
                </div>
                <div className={styles.flowConnector}></div>

                <div className={styles.flowStep}>
                  <div className={styles.q}><span className={styles.stepNum}>5</span>Is symptom severity disproportionate to the burden?</div>
                  <div className={styles.detail}>daily distress, sleep disruption, quality-of-life loss</div>
                  <div className={styles.branchRow}>
                    <div className={`${styles.branch} ${styles.terminalNeg}`}><span className={styles.tag}>If no</span><p>Declined.</p></div>
                    <div className={`${styles.branch} ${styles.continue}`}><span className={styles.tag}>If yes</span><p>This is you — continue ↓</p></div>
                  </div>
                </div>
                <div className={styles.flowConnector}></div>

                <div className={styles.flowStep}>
                  <div className={styles.q}><span className={styles.stepNum}>6</span>Is the PVC morphology consistent?</div>
                  <div className={styles.detail}>a single dominant focus, or a limited number of foci</div>
                  <div className={styles.branchRow}>
                    <div className={`${styles.branch} ${styles.terminalNeg}`}><span className={styles.tag}>If no</span><p>Many morphologies — low predicted success, declined.</p></div>
                    <div className={`${styles.branch} ${styles.continue}`}><span className={styles.tag}>If yes</span><p>Continue ↓</p></div>
                  </div>
                </div>
                <div className={styles.flowConnector}></div>

                <div className={styles.flowStep}>
                  <div className={styles.q}><span className={styles.stepNum}>7</span>Can the PVCs be reliably provoked?</div>
                  <div className={styles.detail}>exercise, posture change, catecholamines, isoproterenol, pacing, light sedation</div>
                  <div className={styles.branchRow}>
                    <div className={`${styles.branch} ${styles.terminalAmber}`}><span className={styles.tag}>If no</span><p>&quot;Come back when more active.&quot;</p></div>
                    <div className={`${styles.branch} ${styles.continue}`}><span className={styles.tag}>If yes</span><p>Critical step passed — continue ↓</p></div>
                  </div>
                </div>
                <div className={styles.flowConnector}></div>

                <div className={styles.flowStep}>
                  <div className={styles.q}><span className={styles.stepNum}>8</span>Is the focus mappable with advanced techniques?</div>
                  <div className={styles.detail}>HD grid, ripple mapping, pace-map matching</div>
                  <div className={styles.branchRow}>
                    <div className={`${styles.branch} ${styles.terminalNeg}`}><span className={styles.tag}>If no</span><p>Not feasible with current tools.</p></div>
                    <div className={`${styles.branch} ${styles.continue}`}><span className={styles.tag}>If yes</span><p>Continue ↓</p></div>
                  </div>
                </div>
                <div className={styles.flowConnector}></div>

                <div className={styles.flowStep}>
                  <div className={styles.q}><span className={styles.stepNum}>9</span>Is the location an acceptable risk?</div>
                  <div className={styles.detail}>His-bundle proximity, AV node, coronary arteries</div>
                  <div className={styles.branchRow}>
                    <div className={`${styles.branch} ${styles.terminalAmber}`}><span className={styles.tag}>High risk</span><p>Operator-dependent decision — many EPs decline here.</p></div>
                    <div className={`${styles.branch} ${styles.terminalPos}`}><span className={styles.tag}>Acceptable risk</span><p>Continue ↓</p></div>
                  </div>
                </div>
                <div className={styles.flowConnector}></div>

                <div className={styles.flowFinal}>
                  <span className={styles.tag}>End of the path</span>
                  <h4>Ablation offered</h4>
                </div>
              </div>

              <p className={styles.flowDisclaimer}>
                This reflects practice-style patterns described by patients
                and EPs, not an official guideline algorithm. Your own case
                should always be evaluated directly by a qualified
                electrophysiologist.
              </p>
            </section>

            {/* 4. WHO SAYS YES */}
            <section id="who-says-yes">
              <span className="kicker">Where to look</span>
              <h2>Which EPs and centers tend to say yes</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>
                These are practice-style observations from patients
                navigating this exact search — not guarantees about any
                specific doctor or center.
              </p>

              <div className={styles.yesNoGrid}>
                <div className={`${styles.ynCard} ${styles.open}`}>
                  <h4>More open to low-burden, symptom-driven cases</h4>
                  <ul>
                    <li>Large academic EP labs with high-density mapping (HD Grid, Octaray)</li>
                    <li>Centers with non-contact mapping experience</li>
                    <li>EPs who publish on PVCs without cardiomyopathy</li>
                    <li>EPs who publish on parahisian PVCs specifically</li>
                    <li>EPs who publish on provocation-based mapping</li>
                  </ul>
                </div>
                <div className={`${styles.ynCard} ${styles.closed}`}>
                  <h4>Typically less open</h4>
                  <ul>
                    <li>Volume-driven community labs</li>
                    <li>EPs who quote a 10–15% burden threshold reflexively</li>
                    <li>Centers that mainly ablate AFib, with little PVC-specific nuance</li>
                  </ul>
                </div>
              </div>

              <p>
                Careful EP studies and mapping can allow safe ablation in
                select low-burden cases — but many EPs still refuse. PVC
                Voices exists to help connect patients with specialists open
                to treating these cases. See{" "}
                <Link href="/treatment-technology/find-a-specialist" style={{ color: "var(--sky)", fontWeight: 700 }}>
                  Find a Specialist
                </Link>{" "}
                for how to vet one before you book.
              </p>
            </section>

            {/* 5. WHY MAPPING CAN STILL BE THE OBSTACLE */}
            <section id="mapping-barrier">
              <span className="kicker rose">One more hurdle</span>
              <h2>Why mapping can still be the obstacle</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>
                Even an EP willing to treat your case runs into a technical
                barrier: if your PVCs aren&apos;t active during the study,
                they can&apos;t be mapped, and ablation can&apos;t proceed.
                Many EPs point to this as the reason ablation in low-burden
                cases has a higher failure rate — understandably, no one
                wants to sit in the lab waiting for PVCs that may not show
                up.
              </p>

              <div className="callout amber">
                <strong>There&apos;s reason for hope:</strong>
                <p style={{ marginTop: 6 }}>
                  Advanced centers have adopted methods to provoke PVCs when
                  they aren&apos;t firing naturally — chemical provocation
                  (isoproterenol, with dobutamine as backup), electrical
                  provocation (sympathetic stimulation via the coronary or
                  vertebral veins), and pace mapping as a fallback when PVCs
                  stay quiet. Most community hospitals haven&apos;t adopted
                  these methods yet, which leaves many patients without
                  options unless they travel to a center that has.
                </p>
              </div>

              <p>
                One specific technique — vertebral-vein sympathetic
                stimulation — has real published evidence behind it. See{" "}
                <Link href="/treatment-technology/mapping-solutions" style={{ color: "var(--sky)", fontWeight: 700 }}>
                  Mapping Solutions
                </Link>{" "}
                for exactly how it works and what the evidence shows.
              </p>
            </section>
          </article>

          <div className="next-links next-links-3">
            <Link className="next-card" href="/treatment-technology/mapping-solutions">
              <span className="lbl">Continue reading</span>
              <h4>Mapping Solutions</h4>
              <p>The specific technique for provoking PVCs that stay quiet during an EP study.</p>
            </Link>
            <Link className="next-card" href="/treatment-technology/safety-evidence">
              <span className="lbl">The evidence</span>
              <h4>Safety &amp; Evidence</h4>
              <p>Guidelines and outcome data behind everything on this page.</p>
            </Link>
            <Link className="next-card" href="/treatment-technology/find-a-specialist">
              <span className="lbl">Take the next step</span>
              <h4>Find a Specialist</h4>
              <p>How to vet a doctor or clinic before you book an appointment.</p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
