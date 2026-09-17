import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SubNav from "@/components/SubNav";
import { TREATMENT_TECH_LINKS } from "@/lib/nav";
import styles from "./mapping-solutions.module.css";

export const metadata: Metadata = { title: "Mapping Solutions for Hard-to-Catch PVCs" };

export default function MappingSolutionsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/treatment-technology", label: "Treatment & Technology" }]}
        current="Mapping Solutions"
        kicker="Treatment & Technology · Emerging techniques"
        title="Mapping solutions for hard-to-catch PVCs"
      >
        <p>
          Why mapping fails when your PVCs go quiet in the EP lab — and the
          technique one academic center used to induce them anyway.
        </p>
      </PageHero>

      <SubNav
        label="Treatment & Technology section pages"
        items={TREATMENT_TECH_LINKS}
        current="/treatment-technology/mapping-solutions"
      />

      <main>
        <div className="wrap" style={{ paddingTop: 52, paddingBottom: 76 }}>
          <div className={styles.bridge}>
            This page picks up where{" "}
            <Link href="/treatment-technology/is-ablation-right-for-me" style={{ color: "var(--sky)", fontWeight: 700 }}>
              Is Ablation Right for Me?
            </Link>{" "}
            leaves off: even when an EP agrees your symptoms warrant
            ablation, the procedure can&apos;t proceed if your PVCs
            won&apos;t show up during the study. Here&apos;s the specific
            technology aimed at that exact problem.
          </div>

          <article>
            {/* 1. THE CORE PROBLEM */}
            <section id="problem">
              <span className="kicker">The core problem</span>
              <h2>Mapping needs PVCs to actually happen</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>
                Activation mapping — watching where a PVC&apos;s electrical
                signal originates in real time — is the method
                electrophysiologists prefer, because it directly localizes
                the trigger site. It only works, though, if the heart
                cooperates and produces PVCs during the study.
                <a className="src" href="#ref-1" title="Insert source link">[1]</a>
              </p>
              <p>
                This is a big part of why many EPs lean on a high PVC count
                (often 10,000 or more per day) before scheduling ablation: a
                high daily count makes it far more likely that PVCs will
                show up on command in the lab. It&apos;s a practical
                constraint as much as a clinical threshold — and it&apos;s
                exactly the kind of barrier that leaves low-burden, highly
                symptomatic patients stuck.
              </p>
              <p>
                When PVCs stay quiet during the procedure, EPs fall back to{" "}
                <strong style={{ color: "var(--navy)" }}>pace mapping</strong>:
                stimulating different areas of the heart with a catheter and
                comparing the resulting pattern to the patient&apos;s known
                PVC shape. It&apos;s a usable substitute, but a rougher one.
              </p>
            </section>

            {/* 2. COMPARISON TABLE */}
            <section id="compare">
              <span className="kicker rose">Side by side</span>
              <h2>Activation mapping vs. pace mapping</h2>
              <div className="rule" aria-hidden="true"></div>
              <table>
                <tbody>
                  <tr>
                    <th style={{ width: "22%" }}>&nbsp;</th>
                    <th>Activation mapping</th>
                    <th>Pace mapping</th>
                  </tr>
                  <tr>
                    <td><strong>Requires</strong></td>
                    <td>PVCs actively firing during the study</td>
                    <td>Can be used even when PVCs are quiet</td>
                  </tr>
                  <tr>
                    <td><strong>How it works</strong></td>
                    <td>Tracks the real electrical signal to its origin as the PVC happens</td>
                    <td>Paces different heart regions and matches the resulting pattern to the patient&apos;s known PVC shape</td>
                  </tr>
                  <tr>
                    <td><strong>Precision</strong></td>
                    <td>Higher — considered the gold standard</td>
                    <td>Lower — an approximation, though effective in select cases<a className="src" href="#ref-2" title="Insert source link">[2]</a></td>
                  </tr>
                  <tr>
                    <td><strong>Practical effect</strong></td>
                    <td>Favors patients with frequent, easily-triggered PVCs</td>
                    <td>The fallback for patients whose PVCs won&apos;t cooperate on demand</td>
                  </tr>
                </tbody>
              </table>
            </section>

            {/* 3. THE FIX */}
            <section id="fix">
              <span className="kicker amber">A promising fix</span>
              <h2>Provoking quiet PVCs with vertebral-vein stimulation</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>
                If PVCs won&apos;t fire on their own, one emerging approach
                is to provoke them deliberately so activation mapping
                becomes possible after all. The most specific evidence for
                this centers on{" "}
                <strong style={{ color: "var(--navy)" }}>
                  intravascular sympathetic stimulation via the vertebral
                  veins
                </strong>{" "}
                — a technique explored at the University of Pennsylvania.
              </p>

              <div className={styles.evidenceCard}>
                <span className={styles.sourceTag}>Trade coverage — EP Lab Digest</span>
                <p>
                  Industry publication EP Lab Digest described this
                  approach as a technique that helps provoke PVCs in
                  otherwise difficult cases, enabling activation mapping to
                  proceed where it previously couldn&apos;t —
                  characterizing it as a promising new option worth
                  watching.
                  <a className="src" href="#ref-3" title="Insert source link">[3]</a>
                </p>
              </div>

              <div className={styles.evidenceCard}>
                <span className={styles.sourceTag}>Clinical reporting — UPenn</span>
                <p>
                  UPenn&apos;s team reported that stimulating the sympathetic
                  nervous system through the vertebral veins can safely
                  induce PVCs that were otherwise absent, allowing
                  activation mapping to proceed when standard provocation
                  methods had failed to bring the arrhythmia out.
                  <a className="src" href="#ref-4" title="Insert source link">[4]</a>
                </p>
              </div>

              <div className="callout">
                <strong>Why this matters:</strong> this isn&apos;t a
                theoretical fix — it&apos;s a reported clinical workaround
                for the exact scenario that strands low-burden, highly
                symptomatic patients: an EP who&apos;s willing to treat you,
                but can&apos;t map a PVC that won&apos;t show up.
              </div>
            </section>

            {/* 4. THE OPEN QUESTION */}
            <section id="question">
              <div className={styles.questionBlock}>
                <h3>If it works, why isn&apos;t it everywhere?</h3>
                <p>
                  These techniques already exist and appear effective in
                  the cases where they&apos;ve been tried. Their use
                  remains inconsistent — concentrated in a handful of
                  academic centers rather than standard practice. That gap
                  is precisely what leaves patients without access to
                  potentially curative treatment simply because of where
                  they happen to seek care. It&apos;s also exactly the kind
                  of gap PVC Voices exists to push on.
                </p>
              </div>
            </section>
          </article>

          <div className="next-links">
            <Link className="next-card" href="/treatment-technology/is-ablation-right-for-me">
              <span className="lbl">Keep reading</span>
              <h4>Is Ablation Right for Me?</h4>
              <p>The fuller decision guide — including why EPs hesitate, and which centers tend to say yes.</p>
            </Link>
            <Link className="next-card" href="/advocacy">
              <span className="lbl">Take action</span>
              <h4>Advocacy</h4>
              <p>Help push for wider, more consistent adoption of techniques like this one.</p>
            </Link>
          </div>

          <section className="refs" id="references">
            <h2>References</h2>
            <p><em>Numbered citations above link here. Final URLs to be confirmed and inserted before publishing.</em></p>
            <ol>
              <li id="ref-1">Activation mapping methodology and its dependence on active PVCs during EP study — standard EP mapping literature.</li>
              <li id="ref-2">Pace mapping as an alternative localization method when PVCs are not inducible — published EP technique reviews.</li>
              <li id="ref-3">EP Lab Digest coverage of vertebral-vein sympathetic stimulation as a provocation technique for activation mapping. (HMP Global Learning Network)</li>
              <li id="ref-4">University of Pennsylvania reporting on intravascular sympathetic stimulation via the vertebral veins to induce PVCs when standard provocation fails. (PubMed)</li>
            </ol>
          </section>
        </div>
      </main>
    </>
  );
}
