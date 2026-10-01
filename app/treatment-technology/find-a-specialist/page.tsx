import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SubNav from "@/components/SubNav";
import { TREATMENT_TECH_LINKS } from "@/lib/nav";
import SpecialistSearch from "./SpecialistSearch";
import styles from "./find-a-specialist.module.css";

export const metadata: Metadata = {
  title: "Find a Specialist",
  description:
    "How to find an electrophysiologist who takes low-burden, highly symptomatic PVCs seriously, plus screening questions to ask before booking.",
};

export default function FindASpecialistPage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/treatment-technology", label: "Treatment & Technology" }]}
        current="Find a Specialist"
        kicker="Treatment & Technology · Finding the right doctor"
        title="Find a specialist"
      >
        <p>
          Knowing the evidence and the technology only gets you so far —
          you still need an electrophysiologist willing to use it.
          Here&apos;s how to find one, and how to avoid wasting time and
          money on one who isn&apos;t the right fit.
        </p>
      </PageHero>

      <SubNav
        label="Treatment & Technology section pages"
        items={TREATMENT_TECH_LINKS}
        current="/treatment-technology/find-a-specialist"
      />

      <main>
        <div className="wrap" style={{ paddingTop: 52, paddingBottom: 76 }}>
          <article>
            {/* 1. THE WARNING */}
            <section id="warning">
              <span className="kicker rose">Read this first</span>
              <h2>Online research is only a starting point</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>
                If a doctor or clinic looks like a match online, you still
                have to verify that directly — by calling and asking
                specific questions. It&apos;s the only reliable way to
                confirm they actually treat your condition.
              </p>
              <p>
                Online lists of clinics or doctors claiming expertise in
                complex PVCs — especially near sensitive areas like the His
                bundle — are often unreliable. Many patients only discover
                this after spending time and money visiting or calling,
                then being told the case is outside that provider&apos;s
                scope. This tends to come down to overgeneralized
                SEO-driven search results, AI-inferred expertise that
                doesn&apos;t reflect a doctor&apos;s actual focus, and
                outdated physician profiles for doctors who&apos;ve since
                moved to a different practice.
              </p>
              <div className="callout rose">
                <strong>Bottom line</strong>
                <p style={{ marginTop: 6 }}>
                  Online research is a starting point, not a verified
                  referral. Always confirm directly before scheduling, so
                  you don&apos;t lose time and money on a mismatch.
                </p>
              </div>
            </section>

            {/* 2. SCREENING */}
            <section id="screening">
              <span className="kicker amber">Before you book</span>
              <h2>Screen first — don&apos;t book right away</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>When you call a clinic, treat it like a screening conversation, not a booking confirmation. Ask directly:</p>
              <div className={styles.screenCard}>
                <ul>
                  <li>Do you treat <strong>low-burden but highly symptomatic</strong> PVCs?</li>
                  <li>Do you have experience in the <strong>His / parahisian region</strong> specifically?</li>
                  <li>Can you manage <strong>multiple PVC morphologies</strong> in one patient?</li>
                  <li>Do you perform <strong>extended mapping</strong> for complex cases?</li>
                  <li>Can you give me a <strong>specific physician&apos;s name</strong> who handles these cases?</li>
                </ul>
              </div>
              <p>If needed, ask to speak with a nurse or EP lab staff member for more direct answers — front-desk staff won&apos;t always know.</p>

              <div className={styles.signalGrid}>
                <div className={`${styles.signalCard} ${styles.red}`}>
                  <span className={styles.tag}>Red flags</span>
                  <p>Vague answers, deflection, or reluctance to name a specific physician who handles complex cases like yours.</p>
                </div>
                <div className={`${styles.signalCard} ${styles.green}`}>
                  <span className={styles.tag}>Strong signals</span>
                  <p>Detailed, specific responses — including a named doctor who actually handles low-burden, high-symptom, or parahisian cases.</p>
                </div>
              </div>
            </section>

            {/* 3. SEARCH TOOL */}
            <section id="search">
              <span className="kicker">Where to start looking</span>
              <h2>Search for an electrophysiologist near you</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>
                A dedicated, searchable specialist directory is on our
                roadmap. For now, the most reliable starting point is a
                plain search — then apply the screening questions above
                before booking anything.
              </p>

              <SpecialistSearch />
            </section>

            {/* 4. HALL OF RECOGNITION */}
            <section id="hall-of-recognition">
              <span className="kicker rose">Community-sourced</span>
              <h2>EP Hall of Recognition</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>
                This is where patients recognize electrophysiologists who
                actually treat low-burden, highly symptomatic PVCs —
                especially complex, multifocal cases near the heart&apos;s
                conduction system. Doctors notice recognition like this,
                and it creates gentle peer pressure for others not to be
                the EP who dismisses a patient out of hand. That&apos;s
                exactly the network we want to grow.
              </p>

              <div className={styles.docCardEmpty}>
                <em>
                  No community nominations yet — be the first to
                  recognize a specialist who took your low-burden,
                  highly symptomatic, or complex PVCs seriously.
                </em>
              </div>

              <div className={styles.nominate}>
                <div>
                  <h3>Know an EP like this?</h3>
                  <p>Nominate a doctor who treated your low-burden, highly symptomatic, or complex PVCs seriously.</p>
                </div>
                <Link className="btn btn-amber" href="/contact">
                  Nominate a specialist
                </Link>
              </div>

              <div className={styles.adminNote}>
                <strong style={{ color: "var(--navy)" }}>For the site owner:</strong> entries in this directory are designed to be added, edited, or removed easily from the site&apos;s admin panel — no code changes required — so recognitions and doctor contact details always stay current.
              </div>
            </section>
          </article>

          <div className="next-links">
            <Link className="next-card" href="/advocacy/take-action">
              <span className="lbl">Related</span>
              <h4>Take Action</h4>
              <p>Help push guideline committees to expand ablation access, not just find one doctor who already will.</p>
            </Link>
            <Link className="next-card" href="/treatment-technology/is-ablation-right-for-me">
              <span className="lbl">Also relevant</span>
              <h4>Is Ablation Right for Me?</h4>
              <p>Which EPs and centers tend to say yes — and why, before you even pick up the phone.</p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
