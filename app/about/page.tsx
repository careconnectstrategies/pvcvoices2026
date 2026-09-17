import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "About PVCs" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        current="About PVCs"
        kicker="Education · Plain language · Every claim sourced"
        title="Understanding premature ventricular contractions"
      >
        <p>
          What PVCs are, why &ldquo;how many&rdquo; isn&apos;t the whole
          story, and why some of the hardest cases — multifocal PVCs near
          sensitive conduction tissue — deserve far more attention than they
          get.
        </p>
      </PageHero>

      <div className="wrap page-body">
        <aside className="toc" aria-label="On this page">
          <h2>On this page</h2>
          <ol>
            <li><a href="#what">What is a PVC?</a></li>
            <li><a href="#burden">Burden vs. symptoms</a></li>
            <li><a href="#multifocal">Unifocal vs. multifocal</a></li>
            <li><a href="#location">Why location matters</a></li>
            <li><a href="#meds">When medications fail</a></li>
            <li><a href="#faq">Common questions</a></li>
            <li><a href="#references">References</a></li>
          </ol>
        </aside>

        <article>
          <section id="what">
            <span className="kicker">01</span>
            <h2>What is a PVC?</h2>
            <div className="rule" aria-hidden="true"></div>
            <p>
              A premature ventricular contraction (PVC) is an extra
              heartbeat that starts in the ventricles — the heart&apos;s
              lower pumping chambers — instead of the sinus node, the
              heart&apos;s natural pacemaker in the upper chambers. Because
              the beat fires early and travels through the heart muscle by
              an abnormal route, it looks wide and different on an ECG, and
              it often produces a distinctive sensation.
              <a className="src" href="#ref-1" title="Insert source link">[1]</a>
            </p>
            <p>
              Many people describe a PVC not as the early beat itself, but
              as what follows it: a brief pause (the heart &ldquo;resetting&rdquo;),
              then a forceful thump as the next normal beat pumps a chamber
              that had extra time to fill. Common descriptions include
              skipped beats, flip-flops, a fish flopping in the chest, or a
              sudden urge to cough.
            </p>

            <figure className="diagram">
              <svg
                className="strip"
                viewBox="0 0 640 150"
                role="img"
                aria-label="ECG strip showing normal beats, then a wide early PVC beat in rose, followed by a pause and a stronger beat"
              >
                <g stroke="#EAF2F9" strokeWidth="1">
                  <line x1="0" y1="30" x2="640" y2="30" />
                  <line x1="0" y1="60" x2="640" y2="60" />
                  <line x1="0" y1="90" x2="640" y2="90" />
                  <line x1="0" y1="120" x2="640" y2="120" />
                </g>
                <path
                  d="M0,90 L40,90 Q48,84 54,90 L70,90 L76,96 L82,38 L88,108 L94,90 L112,90 Q122,80 132,90 L150,90
            L190,90 Q198,84 204,90 L220,90 L226,96 L232,38 L238,108 L244,90 L262,90 Q272,80 282,90 L300,90 L318,90"
                  fill="none"
                  stroke="#3E7CB1"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M318,90 L326,90 L338,18 L356,134 L376,72 L392,90"
                  fill="none"
                  stroke="#E4626F"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M392,90 L470,90 L476,96 L482,30 L488,112 L494,90 L512,90 Q524,78 536,90 L560,90 Q568,84 574,90 L640,90"
                  fill="none"
                  stroke="#3E7CB1"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <text x="338" y="14" fontFamily="Nunito Sans" fontWeight="800" fontSize="11" fill="#CE4B59">
                  PVC (early, wide)
                </text>
                <text x="418" y="112" fontFamily="Nunito Sans" fontWeight="700" fontSize="11" fill="#7B8DA1">
                  pause
                </text>
                <text x="478" y="24" fontFamily="Nunito Sans" fontWeight="700" fontSize="11" fill="#7B8DA1">
                  stronger beat
                </text>
              </svg>
              <figcaption>
                FIG 1 — A PVC interrupts normal rhythm: early wide beat →
                brief pause → forceful next beat. This
                &ldquo;pause-then-thump&rdquo; is what many patients feel.
              </figcaption>
            </figure>

            <p>
              PVCs are extremely common. They occur in most healthy people
              at some point, and occasional PVCs in a structurally normal
              heart are generally considered benign.
              <a className="src" href="#ref-2" title="Insert source link">[2]</a>{" "}
              But &ldquo;common&rdquo; and &ldquo;benign&rdquo; are
              population statements — they say nothing about how disruptive
              PVCs can be for the individual who feels each one.
            </p>
          </section>

          <section id="burden">
            <span className="kicker rose">02</span>
            <h2>Burden vs. symptoms: the number isn&apos;t the whole story</h2>
            <div className="rule" aria-hidden="true"></div>
            <p>
              &ldquo;PVC burden&rdquo; is the percentage (or daily count) of
              your heartbeats that are PVCs, usually measured with a 24-hour
              Holter or a multi-day wearable monitor. Burden matters
              clinically: research links very high burdens to a risk of
              weakened heart function over time (PVC-induced
              cardiomyopathy), which is a key reason treatment is
              recommended at high counts.
              <a className="src" href="#ref-3" title="Insert source link">[3]</a>
            </p>
            <p>
              The problem is what happens below those thresholds. Current
              decision-making often leans heavily on counts — figures like
              10,000 PVCs per day are commonly cited — while symptom
              severity is underestimated.
            </p>

            <div className="threshold">
              <div>
                <div className="bignum">10,000</div>
                <div className="capt">PVCs/day · a common treatment threshold</div>
              </div>
              <div className="txt">
                <strong>The core issue:</strong> a person with 2,000 PVCs a
                day who feels every single one can suffer more —
                physically and psychologically — than a person with 20,000
                who feels none. Yet the first patient is far more likely to
                be told nothing needs to be done. PVC Voices&apos; position
                is that symptom burden should carry equal weight to PVC
                count in evaluation and treatment decisions.
              </div>
            </div>

            <p>
              Importantly, published guidelines do recognize symptoms:
              catheter ablation and medical therapy are established options
              for symptomatic PVCs even without high burden, when symptoms
              are significant and other causes are excluded.
              <a className="src" href="#ref-4" title="Insert source link">[4]</a>{" "}
              In real-world practice, however, many highly symptomatic
              low-burden patients report being dismissed, attributed to
              anxiety, or told to simply live with it. That gap — between
              what guidelines allow and what patients experience — is why
              this platform exists.
            </p>
          </section>

          <section id="multifocal">
            <span className="kicker">03</span>
            <h2>Unifocal vs. multifocal PVCs</h2>
            <div className="rule" aria-hidden="true"></div>
            <p>PVCs are also classified by where they come from:</p>
            <table>
              <tbody>
                <tr>
                  <th style={{ width: "30%" }}>Type</th>
                  <th>What it means</th>
                  <th>Why it matters for treatment</th>
                </tr>
                <tr>
                  <td><strong>Unifocal</strong></td>
                  <td>
                    All PVCs originate from a single spot in the ventricle.
                    Every PVC looks identical on the ECG.
                  </td>
                  <td>
                    One target. If ablation is appropriate, the
                    electrophysiologist maps and treats a single site —
                    often with high success rates, especially for common
                    origins like the right ventricular outflow tract.
                    <a className="src" href="#ref-5" title="Insert source link">[5]</a>
                  </td>
                </tr>
                <tr>
                  <td><strong>Multifocal</strong></td>
                  <td>
                    PVCs arise from two or more different locations. PVCs
                    of different shapes (morphologies) appear on the ECG.
                  </td>
                  <td>
                    Multiple targets. Mapping is more complex, procedures
                    are longer, and success may require addressing several
                    sites — some of which may sit in difficult or risky
                    locations.
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              Multifocal cases are among the most challenging and
              debilitating forms of PVC-related conditions, yet they remain
              significantly under-addressed in clinical practice —
              particularly when one or more foci sit near critical
              conduction tissue.
            </p>
          </section>

          <section id="location">
            <span className="kicker">04</span>
            <h2>Why location matters: the AV node, His bundle, and parahisian region</h2>
            <div className="rule" aria-hidden="true"></div>
            <p>
              Catheter ablation works by delivering energy to the small
              area of heart muscle where a PVC originates. Success and
              safety depend heavily on where that area is. Some origins are
              routine; others sit millimeters from the heart&apos;s
              electrical wiring.
            </p>
            <ul>
              <li><strong>The AV node</strong> is the electrical gateway between the upper and lower chambers.</li>
              <li><strong>The His bundle</strong> is the cable that carries every normal impulse into the ventricles.</li>
              <li><strong>Parahisian tissue</strong> is the region immediately surrounding the His bundle.</li>
            </ul>
            <p>
              Ablating near these structures carries a real risk of
              damaging normal conduction — potentially causing heart block
              and the need for a permanent pacemaker.
              <a className="src" href="#ref-6" title="Insert source link">[6]</a>{" "}
              Understandably, many electrophysiologists are hesitant to
              ablate in these regions, even when symptoms are severe. The
              result is a group of patients with genuinely difficult
              anatomy who may be declined for the one procedure that could
              help — and who often aren&apos;t told what emerging
              alternatives exist.
            </p>
            <div className="callout amber">
              <strong>Reason for hope:</strong> newer approaches — including
              advanced 3D mapping systems and pulse field ablation, which
              uses non-thermal electrical pulses that may be more selective
              for heart muscle — are being studied and may offer safer
              options for treating PVCs near sensitive conduction tissue.
              Learn more on our{" "}
              <Link href="/treatment-technology" style={{ color: "var(--amber-deep)", fontWeight: 700 }}>
                Treatment &amp; Technology
              </Link>{" "}
              page.
              <a className="src" href="#ref-7" title="Insert source link">[7]</a>
            </div>
          </section>

          <section id="meds">
            <span className="kicker rose">05</span>
            <h2>When medications fail</h2>
            <div className="rule" aria-hidden="true"></div>
            <p>
              First-line medications for symptomatic PVCs typically include
              beta-blockers and calcium channel blockers; antiarrhythmic
              drugs such as flecainide or amiodarone may be considered in
              selected cases.
              <a className="src" href="#ref-8" title="Insert source link">[8]</a>{" "}
              For many people these help. For many others, they don&apos;t
              — or the side effects (fatigue, brain fog, low blood
              pressure, exercise intolerance) trade one form of suffering
              for another.
            </p>
            <p>
              If medications have failed you, that is not the end of the
              road, and it is not evidence that your symptoms aren&apos;t
              real. It is a recognized clinical scenario —
              drug-refractory symptomatic PVCs — and one of the standard
              indications for considering catheter ablation.
              <a className="src" href="#ref-4b" title="Insert source link">[4]</a>{" "}
              Patients in this situation deserve a clear conversation about
              all options, including referral to a high-volume center
              experienced with complex cases.
            </p>
            <div className="callout">
              <strong>Practical tip:</strong> symptom documentation
              strengthens your case. A symptom diary aligned with a
              wearable ECG (many consumer devices can record a trace when
              you feel an event) helps demonstrate that your sensations
              correlate with real PVCs — useful evidence when count-based
              thresholds are working against you.
            </div>
          </section>

          <section id="faq">
            <span className="kicker">06</span>
            <h2>Common questions</h2>
            <div className="rule" aria-hidden="true"></div>

            <details>
              <summary>Are PVCs dangerous?</summary>
              <div className="a">
                <p>
                  In a structurally normal heart, occasional PVCs are
                  generally considered benign. Very high burdens sustained
                  over time can weaken heart function in some people, which
                  is why monitoring matters. Anyone with PVCs plus
                  fainting, sustained racing rhythms, a family history of
                  sudden death, or known heart disease should be evaluated
                  promptly. Only your own physician can assess your
                  situation.
                  <a className="src" href="#ref-2b" title="Insert source link">[2]</a>
                </p>
              </div>
            </details>
            <details>
              <summary>Why do I feel every PVC when others feel none?</summary>
              <div className="a">
                <p>
                  Symptom perception varies enormously between people and
                  doesn&apos;t track neatly with burden. Factors like the
                  timing of the PVC, the force of the following beat, body
                  position, and individual sensitivity all play a role.
                  Feeling your PVCs vividly is a real phenomenon — not a
                  character flaw and not &ldquo;just anxiety.&rdquo;
                </p>
              </div>
            </details>
            <details>
              <summary>My Holter says my burden is low. Why do I feel so terrible?</summary>
              <div className="a">
                <p>
                  Burden measures how many PVCs you have, not how much they
                  affect you. A low count of strongly felt PVCs —
                  especially if they cluster during rest, sleep, or
                  exercise — can be profoundly disruptive. This mismatch is
                  exactly the gap PVC Voices advocates to close: symptom
                  burden should carry equal weight to counts.
                </p>
              </div>
            </details>
            <details>
              <summary>What should I ask my electrophysiologist?</summary>
              <div className="a">
                <p>
                  Useful questions include: Are my PVCs unifocal or
                  multifocal? Where do they originate? Am I a candidate for
                  ablation, and if not, specifically why? What would change
                  that answer? Are there high-volume centers or emerging
                  technologies (such as pulse field ablation) relevant to
                  my anatomy? What are the risks of treating — and of not
                  treating?
                </p>
              </div>
            </details>
            <details>
              <summary>Is this website medical advice?</summary>
              <div className="a">
                <p>
                  No. PVC Voices is a patient-run educational and advocacy
                  platform. Everything here is general information with
                  sources you can verify — always discuss your specific
                  situation with your physician or electrophysiologist.
                </p>
              </div>
            </details>
          </section>

          <div className="next">
            <div>
              <span className="kicker">Keep going</span>
              <h2>You&apos;ve got the basics. Now hear the voices.</h2>
              <p>
                Read stories from people who feel every beat — or explore
                the technologies that could change treatment for complex
                cases.
              </p>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link className="btn btn-amber" href="/patient-stories">Patient Stories</Link>
              <Link className="btn btn-ghost" href="/treatment-technology">Treatment &amp; Technology</Link>
            </div>
          </div>

          <section id="references" className="refs">
            <h2>References</h2>
            <p><em>Numbered citations above link here. Final URLs to be inserted — suggested sources below are real, citable starting points for each claim.</em></p>
            <ol>
              <li id="ref-1">Definition and ECG characteristics of PVCs — e.g., Latchamsetty R, Bogun F. &ldquo;Premature Ventricular Complexes and Premature Ventricular Complex–Induced Cardiomyopathy.&rdquo; <em>Circulation</em>.</li>
              <li id="ref-2"><span id="ref-2b"></span>Prevalence and prognosis in structurally normal hearts — e.g., large cohort/ambulatory ECG studies; AHA patient information on premature contractions.</li>
              <li id="ref-3">PVC burden and PVC-induced cardiomyopathy thresholds — e.g., Baman TS et al., &ldquo;Relationship between burden of premature ventricular complexes and left ventricular function.&rdquo; <em>Heart Rhythm</em>.</li>
              <li id="ref-4"><span id="ref-4b"></span>Guideline indications for treating symptomatic PVCs — 2017 AHA/ACC/HRS Guideline for Management of Patients With Ventricular Arrhythmias; 2019 HRS/EHRA/APHRS/LAHRS Expert Consensus on Catheter Ablation of Ventricular Arrhythmias.</li>
              <li id="ref-5">Outflow-tract PVC ablation outcomes — published ablation success-rate series for RVOT PVCs.</li>
              <li id="ref-6">Risks of ablation near the His bundle / parahisian region — published case series on parahisian PVC ablation and heart-block risk.</li>
              <li id="ref-7">Pulse field ablation and advanced mapping — emerging literature on PFA selectivity for myocardium and early ventricular applications.</li>
              <li id="ref-8">Pharmacologic therapy for PVCs — beta-blockers, calcium channel blockers, antiarrhythmics per the 2017 AHA/ACC/HRS guideline.</li>
            </ol>
          </section>
        </article>
      </div>
    </>
  );
}
