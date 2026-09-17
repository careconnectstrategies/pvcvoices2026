import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SubNav from "@/components/SubNav";
import { TREATMENT_TECH_LINKS } from "@/lib/nav";
import styles from "./emerging-technology.module.css";

export const metadata: Metadata = { title: "Emerging Technology" };

export default function EmergingTechnologyPage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/treatment-technology", label: "Treatment & Technology" }]}
        current="Emerging Technology"
        kicker="Treatment & Technology · What's changing"
        title="Emerging technology"
      >
        <p>
          PVC care is shifting from &ldquo;reassure and wait&rdquo; toward
          risk-stratified, curative treatment — driven by better mapping,
          smarter imaging, and ablation tools that can finally reach the
          hardest sites.
        </p>
      </PageHero>

      <SubNav
        label="Treatment & Technology section pages"
        items={TREATMENT_TECH_LINKS}
        current="/treatment-technology/emerging-technology"
      />

      <main>
        <div className="wrap" style={{ paddingTop: 52, paddingBottom: 76 }}>
          <article>
            {/* 1. THE BIG PICTURE */}
            <section id="big-picture">
              <span className="kicker">The shift underway</span>
              <h2>From reassurance to risk-stratified, curative care</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>
                PVC care is moving toward a more individualized approach:
                confirm the true burden and origin with longer,
                better-quality monitoring; look harder for subtle heart
                disease with cardiac MRI when the pattern isn&apos;t clearly
                benign; and lean on increasingly precise, imaging-guided
                ablation rather than medication alone. The key distinction
                is between common idiopathic PVCs in an otherwise normal
                heart and PVCs associated with scar, reduced pumping
                function, multiple morphologies, or ventricular tachycardia
                — the latter group needs more specialized testing and
                management.
                <a className="src" href="#ref-1">[1]</a>
                <a className="src" href="#ref-2">[2]</a>
              </p>

              <h3>What a thorough workup actually establishes</h3>
              <ul>
                <li><strong style={{ color: "var(--navy)" }}>PVC burden</strong> — ideally from multi-day continuous monitoring rather than a single short ECG.</li>
                <li><strong style={{ color: "var(--navy)" }}>Heart structure and function</strong> — echocardiogram as the starting point; cardiac MRI especially useful when PVCs are frequent, atypical, multifocal, exercise-associated, or when function is reduced.</li>
                <li><strong style={{ color: "var(--navy)" }}>PVC origin and pattern</strong> — a 12-lead ECG and, when needed, EP mapping to identify whether the origin is straightforward (like the RVOT) or more technically demanding, such as the LV summit, papillary muscles, or deep septal tissue.<a className="src" href="#ref-3">[3]</a><a className="src" href="#ref-4">[4]</a></li>
              </ul>

              <div className="callout">
                <strong>A more nuanced burden picture:</strong>
                <p style={{ marginTop: 6 }}>
                  &ldquo;High burden&rdquo; is often discussed as roughly
                  above 10% of all beats, or around 10,000 PVCs/day — but
                  risk isn&apos;t determined by one magic cutoff. Many
                  studies place the strongest association with
                  PVC-induced cardiomyopathy closer to 16–24% burden, while
                  some individuals show adverse effects at lower levels
                  still. This is a clinical reference range, not a reason
                  to dismiss symptomatic patients below it — see{" "}
                  <Link href="/treatment-technology/is-ablation-right-for-me" style={{ color: "var(--sky)", fontWeight: 700 }}>
                    Is Ablation Right for Me?
                  </Link>{" "}
                  for the fuller picture.
                  <a className="src" href="#ref-1">[1]</a>
                  <a className="src" href="#ref-3">[3]</a>
                </p>
              </div>
            </section>

            {/* 2. DIAGNOSIS */}
            <section id="diagnosis">
              <span className="kicker rose">Sharper before treatment even starts</span>
              <h2>Diagnosis is getting sharper too</h2>
              <div className="rule" aria-hidden="true"></div>

              <h3>Longer continuous monitoring</h3>
              <p>
                The old default was a 24-hour Holter. The trend is toward
                multi-day ECG patches — often 48–72 hours, sometimes longer
                — because PVC frequency varies substantially day to day,
                and a single day can under- or overestimate your actual
                burden.
              </p>
              <div className="callout amber">
                <strong>A smartwatch caveat:</strong>
                <p style={{ marginTop: 6 }}>
                  A smartwatch ECG can be useful for capturing a strip
                  during symptoms, but many consumer devices don&apos;t
                  continuously record every heartbeat — that makes them
                  unsuitable for reliably calculating PVC burden unless
                  paired with an actual continuous ECG-monitoring program.
                  <a className="src" href="#ref-4">[4]</a>
                  <a className="src" href="#ref-5">[5]</a>
                  <a className="src" href="#ref-3">[3]</a>
                </p>
              </div>

              <h3>Better phenotyping from the ECG</h3>
              <p>
                A 12-lead ECG isn&apos;t just diagnostic — it helps an EP
                estimate origin (RVOT, LVOT, papillary muscles, fascicles,
                mitral annulus, or harder areas near the coronary cusps or
                epicardium). What&apos;s increasingly emphasized:
              </p>
              <ul>
                <li>Whether PVCs are <strong style={{ color: "var(--navy)" }}>monomorphic</strong> (one consistent shape, often more amenable to focal ablation) or <strong style={{ color: "var(--navy)" }}>polymorphic/multifocal</strong></li>
                <li>Whether there are couplets, triplets, or nonsustained ventricular tachycardia</li>
                <li>Whether PVCs increase with exercise, occur in recovery, or cluster at night</li>
                <li>Whether the morphology looks like a typical benign outflow-tract source, or suggests scar or arrhythmogenic cardiomyopathy</li>
              </ul>

              <h3>Cardiac MRI with scar detection</h3>
              <p>
                Cardiac MRI with late gadolinium enhancement is becoming
                more central — not only to measure heart function, but to
                identify otherwise-hidden fibrosis or scar, myocarditis
                patterns, infiltrative disease, arrhythmogenic
                cardiomyopathy, or prior injury. Guidelines specifically
                recommend considering it when the PVC presentation
                isn&apos;t typical for an idiopathic origin — even with a
                normal echocardiogram — or when PVC-induced cardiomyopathy
                is suspected.
                <a className="src" href="#ref-2">[2]</a>
                <a className="src" href="#ref-6">[6]</a>
              </p>
              <p>
                MRI deserves particular discussion when there&apos;s a
                reduced ejection fraction, an atypical PVC pattern,
                multiple morphologies, nonsustained or sustained VT,
                concerning family history or syncope, an abnormal baseline
                ECG, or a high burden with concern for PVC-induced
                cardiomyopathy.
              </p>

              <h3>Noninvasive electrical mapping</h3>
              <p>
                One of the more interesting near-term developments:
                electrocardiographic imaging (ECGi) combines a
                multi-electrode body-surface vest with CT- or MRI-derived
                anatomy to reconstruct the heart&apos;s electrical
                activation noninvasively, helping localize a likely origin
                before an invasive procedure.
              </p>
              <p style={{ marginBottom: 0 }}>
                AI-assisted tools are emerging too — one example,{" "}
                <strong style={{ color: "var(--navy)" }}>vMAP</strong>,
                analyzes a digitized 12-lead ECG against a large simulation
                library to produce a probability heat map of the likely
                source. These tools may reduce mapping time and improve
                planning, particularly for difficult or infrequent PVCs —
                but invasive 3D electroanatomic mapping remains the
                procedural gold standard; noninvasive maps guide it rather
                than replace it.
                <a className="src" href="#ref-7">[7]</a>
              </p>
            </section>

            {/* 3. ADVANCED RF */}
            <section id="advanced-rf">
              <span className="kicker">Still the standard</span>
              <h2>Advanced radiofrequency ablation</h2>
              <div className="rule" aria-hidden="true"></div>
              <div className={styles.techCard}>
                <span className={`${styles.stage} ${styles.established}`}>Established, still improving</span>
                <p>
                  Radiofrequency (RF) ablation remains the established
                  standard for most PVC procedures — an electrophysiologist
                  maps the earliest source of the extra beats, then
                  delivers controlled heat to stop it. What&apos;s improved
                  isn&apos;t the heat source itself; it&apos;s the
                  surrounding platform:
                </p>
                <ul>
                  <li>High-density 3D electroanatomic mapping for more detailed localization</li>
                  <li>Activation mapping during spontaneous or medication-provoked PVCs, and pace mapping to compare paced beats with your clinical PVC</li>
                  <li>Intracardiac echocardiography (ICE) for real-time anatomy, catheter contact, and protecting coronary arteries or valves</li>
                  <li>Mapping from more than one adjacent chamber or vessel when the origin is deep or near a boundary</li>
                </ul>
                <p style={{ marginBottom: 0 }}>
                  <Link href="/treatment-technology/industry-technology-partners" style={{ color: "var(--sky)", fontWeight: 700 }}>
                    Industry &amp; Technology Partners
                  </Link>{" "}
                  lists the major companies building this mapping/ablation
                  ecosystem.
                  <a className="src" href="#ref-8">[8]</a>
                  <a className="src" href="#ref-9">[9]</a>
                </p>
              </div>

              <div className="callout">
                <strong>How EPs actually pinpoint your PVC:</strong>
                <p style={{ marginTop: 6 }}>
                  For a typical focal PVC, the team looks for a local
                  signal that precedes the surface PVC by roughly 20–30
                  milliseconds, with a unipolar &ldquo;QS&rdquo; pattern and
                  a very close pace-map match. These are technical details,
                  but they matter — the real advantage of newer platforms
                  is less about &ldquo;a bigger burn&rdquo; and more about
                  finding the precise source before delivering any energy
                  at all.
                  <a className="src" href="#ref-8">[8]</a>
                  <a className="src" href="#ref-9">[9]</a>
                </p>
              </div>

              <div className="callout amber">
                <strong>A concrete example — VHPSD ablation:</strong>
                <p style={{ marginTop: 6 }}>
                  Very-High-Power, Very-Short-Duration (VHPSD) RF is
                  emerging as a fast, effective option — think seconds
                  instead of minutes — especially for RVOT-origin PVCs. One
                  published case used just a 4-second, 90-watt application,
                  with near-zero fluoroscopy, to successfully eliminate the
                  target.
                </p>
              </div>

              <h3>Tools for technically difficult origins</h3>
              <p>
                For PVCs in deep septal tissue, papillary muscles, the LV
                summit, near coronary arteries, or scarred myocardium, EP
                labs are evaluating or adopting high-density grid
                catheters, ICE integrated with 3D mapping, larger or
                alternative-energy catheters for broader lesions, bipolar
                ablation from opposing surfaces, and selective epicardial
                mapping when the source sits on the heart&apos;s outer
                surface. These approaches are highly anatomy-specific and
                generally belong at a high-volume ventricular-arrhythmia
                center rather than routine practice.
              </p>
              <div className={styles.statFlag}>
                <span className={styles.num}>21/23</span>
                <span className={styles.lbl}>
                  PVC cases with acute success in a recent lattice-tip
                  ventricular-ablation study — though longer-term
                  comparisons and broader evidence are still needed
                  <a className="src" href="#ref-10">[10]</a>
                </span>
              </div>
            </section>

            {/* 4. ABLATION AS EARLIER TREATMENT */}
            <section id="earlier-treatment">
              <span className="kicker rose">A changing starting point</span>
              <h2>Ablation as earlier treatment, not a last resort</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>
                Ablation is no longer reserved only for people who&apos;ve
                exhausted every medication option. The ESC guideline
                position is that catheter ablation is a{" "}
                <strong style={{ color: "var(--navy)" }}>first-line treatment</strong>{" "}
                for symptomatic idiopathic PVCs from the RVOT or left
                fascicles, and it&apos;s recommended when frequent,
                predominantly monomorphic PVCs are believed to be causing
                cardiomyopathy. (See{" "}
                <Link href="/treatment-technology/safety-evidence" style={{ color: "var(--sky)", fontWeight: 700 }}>
                  Safety &amp; Evidence
                </Link>{" "}
                for the full guideline picture.)
                <a className="src" href="#ref-2">[2]</a>
              </p>
              <div className="callout">
                <strong>An open question, currently being tested:</strong>
                <p style={{ marginTop: 6 }}>
                  How does ablation compare head-to-head with medication in
                  patients who have a meaningful PVC burden but normal
                  heart pumping function? A registered pilot trial —
                  Catheter Ablation Versus Anti-arrhythmic Drugs for
                  Premature Ventricular Complexes (CAAD-PVC) — compares
                  ablation versus antiarrhythmic/beta-blocker therapy in
                  patients with at least a 10% burden on multi-day
                  monitoring and a normal ejection fraction.
                  <a className="src" href="#ref-11">[11]</a>
                </p>
              </div>
            </section>

            {/* 5. PFA */}
            <section id="pfa">
              <span className="kicker amber">Promising, not yet routine</span>
              <h2>Pulsed-field ablation (PFA)</h2>
              <div className="rule" aria-hidden="true"></div>
              <div className={styles.techCard}>
                <span className={`${styles.stage} ${styles.emerging}`}>Emerging for PVCs specifically</span>
                <p>
                  PFA uses very short, high-voltage electrical pulses to
                  cause irreversible electroporation of heart muscle —
                  nonthermal, unlike standard RF. Its attraction is the
                  possibility of more selective myocardial injury with less
                  collateral damage to nearby structures.
                </p>
                <div className={styles.statFlag}>
                  <span className={styles.num}>~93%</span>
                  <span className={styles.lbl}>
                    acute success rate for PVC cases, per a 2026 systematic
                    review of published ventricular-arrhythmia experience —
                    though this evidence is still early and heterogeneous,
                    not the same as broad randomized proof
                    <a className="src" href="#ref-12">[12]</a>
                  </span>
                </div>
                <p>
                  Current reports demonstrate feasibility, but PVC-specific
                  use remains experimental or limited to expert centers and
                  selected cases. The key open questions are lesion depth,
                  durable efficacy, safety near coronary arteries, and
                  suitability for hard-to-reach targets like papillary
                  muscles or scar-related circuits.
                  <a className="src" href="#ref-9">[9]</a>
                  <a className="src" href="#ref-12">[12]</a>
                </p>
                <p>
                  In the United States, dedicated PFA systems&apos; FDA
                  approvals have principally been for atrial fibrillation
                  — not a blanket approval for routine PVC treatment. PVC
                  use may be investigational, off-label, or limited to
                  specialized centers, depending on the device.
                  <a className="src" href="#ref-13">[13]</a>
                </p>
                <p style={{ marginBottom: 0 }}>
                  The honest takeaway: if someone claims PFA is already
                  &ldquo;the newest best PVC cure,&rdquo; that&apos;s
                  premature. It&apos;s genuinely promising, particularly
                  for challenging ventricular targets — but RF ablation
                  remains the mature, broadly accepted solution for PVCs
                  today. See{" "}
                  <Link href="/treatment-technology/industry-technology-partners" style={{ color: "var(--sky)", fontWeight: 700 }}>
                    Industry &amp; Technology Partners
                  </Link>{" "}
                  for which companies currently offer PFA platforms.
                </p>
              </div>
            </section>

            {/* 6. RADIOABLATION */}
            <section id="radioablation">
              <span className="kicker">A very different approach</span>
              <h2>Radioablation: promising, but not standard</h2>
              <div className="rule" aria-hidden="true"></div>
              <div className={styles.techCard}>
                <span className={`${styles.stage} ${styles.early}`}>Research only for PVCs</span>
                <p>
                  Stereotactic arrhythmia radioablation — also called STAR
                  or cardiac SBRT — uses radiation to target arrhythmia
                  tissue without threading a catheter into the heart at
                  all. It&apos;s being studied mainly for highly refractory
                  ventricular tachycardia in patients who are poor
                  candidates for conventional repeat ablation.
                </p>
                <p style={{ marginBottom: 0 }}>
                  For ordinary PVCs, this should be considered
                  research-only, not a conventional alternative to
                  catheter ablation. Insurers and policy reviews still
                  classify electrophysiology-guided noninvasive cardiac
                  radioablation as investigational — including for
                  PVC-related cardiomyopathy — because durability and
                  delayed-radiation risks need more study.
                  <a className="src" href="#ref-14">[14]</a>
                  <a className="src" href="#ref-15">[15]</a>
                </p>
              </div>
            </section>

            {/* 7. NEUROMODULATION */}
            <section id="neuromodulation">
              <span className="kicker">Non-invasive research direction</span>
              <h2>Noninvasive autonomic neuromodulation</h2>
              <div className="rule" aria-hidden="true"></div>
              <div className={styles.techCard}>
                <span className={`${styles.stage} ${styles.early}`}>Early research</span>
                <p>
                  A notable research direction is transcutaneous auricular
                  vagus-nerve stimulation — low-level stimulation at the
                  ear&apos;s tragus. The NoVa-PVC randomized crossover study
                  has now published its results: a modest but statistically
                  significant reduction in median PVC burden versus sham
                  stimulation, in people whose symptomatic PVCs hadn&apos;t
                  responded to medication.
                  <a className="src" href="#ref-16">[16]</a>
                </p>
                <p>
                  This isn&apos;t a replacement for ablation when PVCs are
                  causing cardiomyopathy — at most, it&apos;s an early,
                  adjunctive, noninvasive possibility, not a proven
                  consumer-device treatment. Be cautious of
                  direct-to-consumer &ldquo;vagus nerve&rdquo; gadgets
                  marketed as though they can treat clinically important
                  arrhythmias.
                </p>
                <p style={{ marginBottom: 0 }}>
                  Separately, more invasive autonomic procedures —
                  stellate-ganglion block, cardiac sympathetic denervation,
                  and other neuromodulation approaches — are primarily
                  being explored for highly refractory ventricular
                  arrhythmias, electrical storm, or structural heart
                  disease, <strong style={{ color: "var(--navy)" }}>not
                  ordinary idiopathic PVCs</strong>. Small reports suggest a
                  PVC-burden effect in narrow patient populations, but this
                  is not mainstream PVC care.
                </p>
              </div>
            </section>

            {/* 8. CRYOABLATION */}
            <section id="cryoablation">
              <span className="kicker rose">A different energy source</span>
              <h2>Ultra-low-temperature cryoablation</h2>
              <div className="rule" aria-hidden="true"></div>
              <div className={styles.techCard}>
                <span className={`${styles.stage} ${styles.early}`}>Late-stage development</span>
                <p>
                  Adagio Medical is developing its vCLAS ultra-low-temperature
                  cryoablation system. Its late-stage work has focused on
                  recurrent ventricular tachycardia in structurally
                  abnormal hearts — not mainstream idiopathic PVC treatment.
                </p>
                <p style={{ marginBottom: 0 }}>
                  It may become relevant to selected difficult
                  ventricular-arrhythmia cases, but it isn&apos;t currently
                  a standard &ldquo;next step&rdquo; for typical PVCs.
                </p>
              </div>
            </section>

            {/* 9. MEDICATION */}
            <section id="medication">
              <span className="kicker amber">What&apos;s actually new</span>
              <h2>Medication: what&apos;s new vs. practical</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>
                There&apos;s no genuinely new, broadly established
                &ldquo;PVC drug&rdquo; that has displaced current options.
                The real trend is better selection of existing drugs based
                on the PVC&apos;s source, your heart structure, symptoms,
                and ablation feasibility.
              </p>
              <p>
                Guidelines indicate beta-blockers or non-dihydropyridine
                calcium-channel blockers for symptomatic idiopathic PVCs
                from sites other than the RVOT or left fascicles. When
                ablation isn&apos;t available, isn&apos;t wanted, or is
                especially risky, beta-blockers, those calcium-channel
                blockers, or flecainide can be considered in the right
                patient.
                <a className="src" href="#ref-2">[2]</a>
              </p>
              <div className="callout rose">
                <strong>An important safety point:</strong>
                <p style={{ marginTop: 6 }}>
                  Don&apos;t interpret &ldquo;flecainide works for
                  PVCs&rdquo; as a general solution. Class Ic drugs require
                  careful assessment for coronary disease, prior
                  infarction, structural heart disease, conduction
                  abnormalities, and sometimes concurrent AV-nodal
                  blockade. The historical CAST trial signal is exactly
                  why suppressing asymptomatic ectopy pharmacologically
                  isn&apos;t automatically beneficial — this is a
                  conversation to have directly with a cardiologist, not a
                  decision to make from general PVC information.
                  <a className="src" href="#ref-17">[17]</a>
                </p>
              </div>
            </section>

            {/* 10. REVERSIBILITY */}
            <section id="reversibility">
              <div className={`callout ${styles.calloutGreen}`}>
                <strong>A major conceptual shift: PVC-induced cardiomyopathy is often reversible.</strong>
                <p style={{ marginTop: 6 }}>
                  Frequent, predominantly single-morphology PVCs can
                  themselves cause reduced heart pumping function — and
                  that function can improve, sometimes substantially, after
                  effective PVC suppression, especially through ablation.
                  That&apos;s why the framing has shifted from simply
                  &ldquo;are PVCs bothersome?&rdquo; to &ldquo;are they
                  affecting ventricular function?&rdquo;
                  <a className="src" href="#ref-1">[1]</a>
                  <a className="src" href="#ref-2">[2]</a>
                </p>
              </div>
            </section>

            {/* 11. ALSO ON THE HORIZON */}
            <section id="horizon">
              <span className="kicker">Worth watching, still early</span>
              <h2>Also on the horizon</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>
                A few additional directions showing up in early clinical
                and preclinical reports — promising, but not yet ready for
                a patient-facing recommendation:
              </p>
              <div className={styles.horizonGrid}>
                <div className={styles.horizonItem}>
                  <h5>AI-assisted ECG localization</h5>
                  <p>Tools like vMAP compare a digitized 12-lead ECG against a simulation library to produce a probability map of likely origin — a planning aid, not a replacement for invasive mapping.</p>
                </div>
                <div className={styles.horizonItem}>
                  <h5>Autonomic &amp; trigger research</h5>
                  <p>Studying sympathetic activation, sleep, stimulants, alcohol, electrolyte disturbances, thyroid disease, and sleep apnea as burden-modifying factors — useful, but not a substitute for evaluating a concerning rhythm.</p>
                </div>
                <div className={styles.horizonItem}>
                  <h5>Personalized risk models</h5>
                  <p>Future risk assessment is likely to combine burden variability, morphology, NSVT runs, exercise relationship, echo strain, MRI scar findings, and family/genetic context — not a single count.</p>
                </div>
                <div className={styles.horizonItem}>
                  <h5>Robotics &amp; magnetic navigation</h5>
                  <p>Magnetically steered catheter systems aiming for smoother control during mapping and ablation — still an early-stage research direction.</p>
                </div>
              </div>
            </section>

            {/* 12. WHAT TO ASK YOUR EP */}
            <section id="ask-your-ep">
              <span className="kicker amber">Bring this to your appointment</span>
              <h2>What to ask an EP specialist</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>
                The most practically &ldquo;advanced&rdquo; care today
                often isn&apos;t experimental PFA or AI — it&apos;s a
                high-quality 12-lead capture, sufficient continuous
                monitoring, an echo, selective MRI, and a consultation with
                an electrophysiologist experienced in complex PVC mapping
                and ablation. Bring your ECGs, monitoring report,
                echocardiogram, any MRI, and medication history, then ask:
                <a className="src" href="#ref-3">[3]</a>
                <a className="src" href="#ref-2">[2]</a>
              </p>
              <div className={styles.askList}>
                <ol>
                  <li>What is my true burden on a multi-day continuous monitor? Ask for the percentage, total daily count, number of morphologies, couplets, and any nonsustained VT — not just &quot;occasional&quot; versus &quot;frequent.&quot;</li>
                  <li>Is the PVC morphology typical of a benign idiopathic source? What does the 12-lead ECG suggest about origin?</li>
                  <li>Do I need an echo and cardiac MRI? MRI is especially worth discussing for atypical PVCs, multiple morphologies, ventricular runs, unexplained reduced function, or a concerning family/personal history.</li>
                  <li>Could my heart function be affected by PVCs? Ask for ejection fraction and, if relevant, strain assessment and follow-up timing.</li>
                  <li>Am I a reasonable ablation candidate now? Especially relevant if PVCs are symptomatic, monomorphic, frequent, medication-resistant or intolerable, or plausibly causing cardiomyopathy.</li>
                  <li>If medication is proposed, why this drug for my anatomy and heart substrate? The answer should explicitly address structural-heart-disease screening and drug-specific risks.</li>
                  <li>If PFA is offered, is it part of a trial, off-label use, or a device-specific protocol — and why is it preferable to conventional RF for my case?</li>
                </ol>
              </div>
            </section>

            {/* 13. URGENT CARE */}
            <section id="urgent">
              <div className="callout rose">
                <strong>Seek urgent medical evaluation — not an elective PVC discussion — if:</strong>
                <p style={{ marginTop: 8 }}>
                  palpitations come with fainting or near-fainting,
                  sustained palpitations with dizziness, chest pain, new
                  shortness of breath, worsening symptoms with known heart
                  disease, new neurologic symptoms, or a family history of
                  sudden unexplained death.
                </p>
              </div>
            </section>
          </article>

          <div className="next-links next-links-3">
            <Link className="next-card" href="/treatment-technology/industry-technology-partners">
              <span className="lbl">Related</span>
              <h4>Industry &amp; Technology Partners</h4>
              <p>Which companies currently supply this mapping and ablation technology.</p>
            </Link>
            <Link className="next-card" href="/treatment-technology/is-ablation-right-for-me">
              <span className="lbl">The decision guide</span>
              <h4>Is Ablation Right for Me?</h4>
              <p>How this technology fits into the real decision EPs make about your case.</p>
            </Link>
            <Link className="next-card" href="/treatment-technology/safety-evidence">
              <span className="lbl">The evidence</span>
              <h4>Safety &amp; Evidence</h4>
              <p>Guidelines and outcome data behind treating symptomatic PVCs.</p>
            </Link>
          </div>

          <section className="refs" id="references">
            <h2>References</h2>
            <ol>
              <li id="ref-1"><a href="https://www.ncbi.nlm.nih.gov/books/NBK547713/" target="_blank" rel="noopener">NCBI StatPearls — Premature Ventricular Contractions</a></li>
              <li id="ref-2"><a href="https://www.acc.org/latest-in-cardiology/ten-points-to-remember/2022/09/02/14/23/2022-esc-guidelines-for-vas-esc-2022" target="_blank" rel="noopener">ACC — 2022 ESC Guidelines for Ventricular Arrhythmias, Ten Points</a></li>
              <li id="ref-3"><a href="https://www.ahajournals.org/doi/10.1161/CIRCULATIONAHA.119.042434" target="_blank" rel="noopener">Circulation — PVC burden and cardiomyopathy risk</a></li>
              <li id="ref-4"><a href="https://academic.oup.com/eurheartjsupp/article/26/Supplement_1/i23/7646239" target="_blank" rel="noopener">European Heart Journal Supplements — PVC monitoring</a></li>
              <li id="ref-5"><a href="https://www.mayoclinic.org/diseases-conditions/premature-ventricular-contractions/diagnosis-treatment/drc-20376762" target="_blank" rel="noopener">Mayo Clinic — PVC diagnosis &amp; treatment</a></li>
              <li id="ref-6"><a href="https://www.escardio.org/communities/councils/cardiology-practice/education/cardiopractice/asymptomatic-ventricular-extrasystoles/" target="_blank" rel="noopener">ESC — Asymptomatic ventricular extrasystoles</a></li>
              <li id="ref-7"><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12681019/" target="_blank" rel="noopener">PMC — Noninvasive electrical mapping for PVCs</a></li>
              <li id="ref-8"><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12941039/" target="_blank" rel="noopener">PMC — 3D mapping and PVC ablation technique</a></li>
              <li id="ref-9"><a href="https://www.hmpgloballearningnetwork.com/site/eplab/ep-tips-techniques/streamlining-pvc-ablation-practical-strategies-modern" target="_blank" rel="noopener">EP Lab Digest — Streamlining PVC ablation, modern strategies</a></li>
              <li id="ref-10"><a href="https://academic.oup.com/europace/article/27/9/euaf139/8182687" target="_blank" rel="noopener">Europace — Lattice-tip ventricular ablation study</a></li>
              <li id="ref-11"><a href="https://clinicaltrials.gov/study/NCT07445334" target="_blank" rel="noopener">ClinicalTrials.gov — CAAD-PVC (ablation vs. medical therapy)</a></li>
              <li id="ref-12"><a href="https://www.mdpi.com/2077-0383/15/4/1360" target="_blank" rel="noopener">MDPI — 2026 PFA systematic review, ventricular arrhythmias</a></li>
              <li id="ref-13"><a href="https://abbott.mediaroom.com/2025-12-22-Abbotts-Volt-TM-Pulsed-Field-Ablation-System-Receives-FDA-Approval-to-Treat-Patients-with-Atrial-Fibrillation" target="_blank" rel="noopener">Abbott — Volt™ PFA System FDA approval, Dec 2025</a></li>
              <li id="ref-14"><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12395866/" target="_blank" rel="noopener">PMC — Stereotactic arrhythmia radioablation (STAR)</a></li>
              <li id="ref-15"><a href="https://provider.healthybluenc.com/medpolicies/healthybluenc/active/mp_pw_e000518.html" target="_blank" rel="noopener">Payer medical policy — noninvasive cardiac radioablation, investigational status</a></li>
              <li id="ref-16"><a href="https://pubmed.ncbi.nlm.nih.gov/40392172/" target="_blank" rel="noopener">PubMed — NoVa-PVC published results (JACC: Clinical Electrophysiology)</a></li>
              <li id="ref-17"><a href="https://www.drugs.com/monograph/mexiletine.html" target="_blank" rel="noopener">Drugs.com — Class I antiarrhythmic monograph (reference context)</a></li>
            </ol>
            <p style={{ marginTop: 12, fontStyle: "italic", color: "#8195A8" }}>
              VHPSD case example sourced separately from PVC Voices&apos;
              internal research notes. Verified via live web research,
              August 2026: the 2017 AHA/ACC/HRS guideline is confirmed
              still current, the CAAD-PVC trial ID has been confirmed
              correct, and the NoVa-PVC citation now points to its
              published results rather than a preview episode.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
