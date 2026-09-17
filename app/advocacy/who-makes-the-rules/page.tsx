import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SubNav from "@/components/SubNav";
import { ADVOCACY_LINKS } from "@/lib/nav";
import styles from "./who-makes-the-rules.module.css";

export const metadata: Metadata = { title: "Who Makes the Rules?" };

export default function WhoMakesTheRulesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/advocacy", label: "Advocacy" }]}
        current="Who Makes the Rules?"
        kicker="Advocacy · Understanding the system"
        title="Who makes the rules?"
      >
        <p>
          Who actually decides that ablation requires a certain PVC count
          before it&apos;s offered? There&apos;s no single office you can
          call — here&apos;s how the decision-making really works.
        </p>
      </PageHero>

      <SubNav
        label="Advocacy section pages"
        items={ADVOCACY_LINKS}
        current="/advocacy/who-makes-the-rules"
      />

      <main>
        <div className="wrap" style={{ paddingTop: 52, paddingBottom: 76 }}>
          <article>
            {/* 1. FRAMING */}
            <section id="framing">
              <span className="kicker">The problem</span>
              <h2>There&apos;s no single person to call</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>
                Several U.S. medical organizations are involved in writing
                the guidelines that shape when ablation gets offered,
                working together through joint task forces. The practical
                problem for patients: there isn&apos;t one person or office
                you can contact to ask &ldquo;why is the threshold set
                where it is,&rdquo; or to push for it to change.
              </p>
              <p>
                The most recent full joint U.S. guideline on ventricular
                arrhythmias dates to 2017. That&apos;s a long time in a
                field where mapping technology, provocation techniques, and
                ablation tools have all moved forward significantly since.
              </p>
              <p>
                Figuring out exactly who was in the room and what was
                decided is nearly impossible for an average patient to
                track down — but understanding the structure is the first
                step toward knowing who to push.
              </p>
            </section>

            {/* 2. HRS INVOLVEMENT */}
            <section id="hrs-role">
              <span className="kicker rose">How it actually works</span>
              <h2>HRS doesn&apos;t write the rules alone</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>
                The Heart Rhythm Society (HRS) doesn&apos;t publish
                standalone national guidelines on ventricular arrhythmias.
                Instead, it co-authors them jointly with the American
                College of Cardiology (ACC) and the American Heart
                Association (AHA), contributing electrophysiology
                expertise into the broader cardiovascular guideline.
              </p>

              <div className={styles.qaCard}>
                <p className={styles.q}>&ldquo;Who co-authors U.S. arrhythmia guidelines from HRS?&rdquo;</p>
                <p className={styles.a}>
                  <strong>Answer:</strong> ACC, AHA, and HRS together,
                  typically through a joint task force with representatives
                  from each society — sometimes joined by others, such as
                  the American College of Chest Physicians (ACCP).
                  HRS&apos;s own role in this process is overseen by its
                  Clinical Guidelines Committee, working with the HRS
                  Executive Committee and outside reviewers.
                </p>
              </div>

              <h3>How recent guidelines have been co-authored</h3>
              <table>
                <tbody>
                  <tr>
                    <th>Guideline</th>
                    <th>Co-author societies</th>
                    <th>HRS&apos;s role</th>
                  </tr>
                  <tr>
                    <td><strong>2017 Ventricular Arrhythmias &amp; SCD</strong></td>
                    <td>ACC, AHA, HRS</td>
                    <td>Co-author via joint task force</td>
                  </tr>
                  <tr>
                    <td><strong>2023 Atrial Fibrillation</strong></td>
                    <td>ACC, AHA, ACCP, HRS</td>
                    <td>Co-author and contributor</td>
                  </tr>
                  <tr>
                    <td><strong>HRS guideline process generally</strong></td>
                    <td>—</td>
                    <td>Clinical Guidelines Committee oversees development</td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* 3. CURRENT STATE */}
            <section id="current-state">
              <span className="kicker amber">Where things stand today</span>
              <h2>The guidelines patients actually live under</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>
                In plain terms: the most recent full joint U.S. guideline
                is still from 2017. There&apos;s been no newer AHA/ACC/HRS
                replacement since. What exists instead are two significant
                updates — the 2019 HRS global consensus (which is
                procedure-focused rather than a full guideline replacement)
                and the 2022 ESC guideline out of Europe, covered on our{" "}
                <Link href="/treatment-technology/safety-evidence" style={{ color: "var(--sky)", fontWeight: 700 }}>
                  Safety &amp; Evidence
                </Link>{" "}
                page.
              </p>

              <div className={styles.resGroup}>
                <h4>Read the guidelines yourself</h4>
                <div className={styles.resList}>
                  <a className={styles.resLink} href="#"><span className={styles.dot}></span><span>2017 AHA/ACC/HRS Guideline — full text (Circulation)</span></a>
                  <a className={styles.resLink} href="#"><span className={styles.dot}></span><span>2017 AHA/ACC/HRS Guideline — AHA hub page &amp; science news</span></a>
                  <a className={styles.resLink} href="#"><span className={styles.dot}></span><span>2017 Guideline — Executive Summary (Heart Rhythm Journal)</span></a>
                  <a className={styles.resLink} href="#"><span className={styles.dot}></span><span>2017 Guideline — PubMed entries (main + executive summary)</span></a>
                  <a className={styles.resLink} href="#"><span className={styles.dot}></span><span>ACC &quot;Guidelines Made Simple&quot; — algorithms &amp; figures (PDF)</span></a>
                  <a className={styles.resLink} href="#"><span className={styles.dot}></span><span>2019 HRS/EHRA/APHRS/LAHRS Expert Consensus — full text (PMC)</span></a>
                  <a className={styles.resLink} href="#"><span className={styles.dot}></span><span>2019 Expert Consensus — HRS resource page</span></a>
                  <a className={styles.resLink} href="#"><span className={styles.dot}></span><span>2022 ESC Guideline on Ventricular Arrhythmias &amp; SCD</span></a>
                </div>
                <p style={{ color: "#8195A8", fontSize: "0.82rem", marginTop: 10 }}>Links to be confirmed and inserted before publishing.</p>
              </div>
            </section>

            {/* BOTTOM LINE */}
            <section id="bottom-line">
              <div className={styles.bottomLine}>
                <h3>Why this matters for advocacy</h3>
                <p>
                  Because these guidelines are jointly authored rather than
                  owned by a single body, meaningful change means engaging
                  HRS, ACC, and AHA together — not picking one and hoping
                  the others follow. Knowing the structure is what makes it
                  possible to write to the right committee, at the right
                  organization, instead of a general inbox that goes
                  nowhere.
                </p>
              </div>
            </section>
          </article>

          <div className="next-links">
            <Link className="next-card" href="/treatment-technology/safety-evidence">
              <span className="lbl">Related</span>
              <h4>Safety &amp; Evidence</h4>
              <p>See what the 2019 HRS consensus and 2022 ESC guideline actually say about treating symptomatic PVCs.</p>
            </Link>
            <Link className="next-card" href="/advocacy/take-action">
              <span className="lbl">Coming next</span>
              <h4>Take Action: Contact the Committees</h4>
              <p>Direct contact information for HRS, ACC, and AHA, plus a template advocacy letter you can send.</p>
            </Link>
          </div>

          <section className="refs" id="references">
            <h2>References</h2>
            <p><em>Numbered citations above link here. Final URLs to be confirmed and inserted before publishing.</em></p>
            <ol>
              <li>2017 AHA/ACC/HRS Guideline for Management of Patients with Ventricular Arrhythmias and the Prevention of Sudden Cardiac Death. (Circulation / AHA Journals)</li>
              <li>2023 ACC/AHA/ACCP/HRS Guideline for the Diagnosis and Management of Atrial Fibrillation.</li>
              <li>HRS Clinical Guidelines Committee — process overview. (HRS / PMC)</li>
              <li>2019 HRS/EHRA/APHRS/LAHRS Expert Consensus Statement on Catheter Ablation of Ventricular Arrhythmias. (PMC)</li>
              <li>2022 ESC Guidelines for the Management of Patients with Ventricular Arrhythmias and the Prevention of Sudden Cardiac Death. (European Society of Cardiology)</li>
            </ol>
          </section>
        </div>
      </main>
    </>
  );
}
