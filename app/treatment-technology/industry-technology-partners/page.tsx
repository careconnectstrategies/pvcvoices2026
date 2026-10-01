import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SubNav from "@/components/SubNav";
import { TREATMENT_TECH_LINKS } from "@/lib/nav";
import styles from "./industry-technology-partners.module.css";

export const metadata: Metadata = {
  title: "Industry & Technology Partners",
  description:
    "The medical device and technology companies advancing PVC mapping and ablation tools, and how their innovations affect patient care.",
};

export default function IndustryTechnologyPartnersPage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/treatment-technology", label: "Treatment & Technology" }]}
        current="Industry & Technology Partners"
        kicker="Treatment & Technology · For companies & clinicians"
        title="Industry & technology partners"
      >
        <p>
          Where device makers and researchers can get new PVC technology in
          front of the patients and doctors who need to know it exists.
        </p>
      </PageHero>

      <SubNav
        label="Treatment & Technology section pages"
        items={TREATMENT_TECH_LINKS}
        current="/treatment-technology/industry-technology-partners"
      />

      <main>
        <div className="wrap" style={{ paddingTop: 52, paddingBottom: 76 }}>
          <article>
            {/* 1. GOAL */}
            <section id="goal">
              <span className="kicker">Why this page exists</span>
              <h2>Getting new technology in front of the right people</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>
                Mapping systems, catheters, and ablation tools keep
                advancing — but that progress doesn&apos;t help patients if
                it stays buried in trade publications and conference
                posters. This page exists to let companies and researchers
                highlight new PVC-relevant technology in a way patients and
                doctors can actually find and understand.
              </p>
            </section>

            {/* 2. SUBMISSION TEMPLATE */}
            <section id="submit-template">
              <span className="kicker rose">For companies &amp; researchers</span>
              <h2>How to submit a technology update</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>
                Submissions are reviewed and lightly edited for
                plain-language readability before publishing — technical
                accuracy stays intact, but the framing is patient-first.
                Use this structure when you submit:
              </p>

              <div className={styles.templateCard}>
                <div className={styles.templateField}>
                  <span className={styles.label}>Title</span>
                  <div className={styles.example}>e.g., &quot;New Mapping Technology for Difficult PVC Locations&quot;</div>
                </div>
                <div className={styles.templateField}>
                  <span className={styles.label}>What is this?</span>
                  <div className={styles.example}>A simple explanation of the technology, in plain language.</div>
                </div>
                <div className={styles.templateField}>
                  <span className={styles.label}>Why does it matter?</span>
                  <ul>
                    <li>Better mapping near sensitive areas (like the His bundle)</li>
                    <li>Potentially safer ablation approaches</li>
                  </ul>
                </div>
                <div className={styles.templateField}>
                  <span className={styles.label}>Who is it for?</span>
                  <ul>
                    <li>Patients with difficult-to-treat PVCs</li>
                    <li>Cases where standard ablation is risky</li>
                  </ul>
                </div>
                <div className={styles.templateField}>
                  <span className={styles.label}>What stage is it in?</span>
                  <ul>
                    <li>Early research</li>
                    <li>Clinical use</li>
                    <li>Limited availability</li>
                  </ul>
                </div>
                <div className={styles.templateField}>
                  <span className={styles.label}>Source</span>
                  <div className={styles.example}>Company, study, or link.</div>
                </div>
              </div>

              <div className={styles.submitCta}>
                <div>
                  <h3>Ready to submit an update?</h3>
                  <p>Reach out through our contact form and select &quot;Company / clinic technology submission.&quot;</p>
                </div>
                <Link className="btn btn-amber" href="/contact">Go to Contact →</Link>
              </div>
            </section>

            {/* 3. DEVICE MAKERS */}
            <section id="device-makers">
              <span className="kicker amber">General contact info</span>
              <h2>Major device developers</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>
                General corporate contacts for major companies building
                mapping systems, catheters, and ablation technology. These
                are starting points for researchers and clinicians —
                patients should direct treatment questions to their own EP,
                not to these companies directly.
              </p>

              <div className="callout">
                <strong>2026 update:</strong>
                <p style={{ marginTop: 6 }}>
                  The mapping/ablation supplier landscape has moved
                  quickly. Several major players now offer pulsed-field
                  ablation (PFA) platforms alongside their established RF
                  systems — but it&apos;s worth knowing that current FDA
                  approvals for these PFA systems are principally for
                  atrial fibrillation, not a blanket approval for routine
                  PVC treatment. For PVCs specifically, PFA use may be
                  investigational, off-label, or limited to specialized
                  centers, depending on the device.
                  <a className="src" href="#ref-pfa">[a]</a>
                </p>
              </div>

              <div className={styles.makerGrid}>
                <div className={styles.makerCard}>
                  <h4>Abbott Laboratories</h4>
                  <div className={styles.focus}>Cardiovascular devices</div>
                  <dl>
                    <dt>Current platforms</dt>
                    <dd>EnSite X mapping platform; RF ablation tools; the Volt pulsed-field ablation system, FDA-approved for atrial fibrillation as of December 2025.<a className="src" href="#ref-abbott">[b]</a></dd>
                    <dt>Corporate HQ</dt>
                    <dd>100 Abbott Park Road, Abbott Park, IL 60064<br /><a className={styles.contactLink} href="tel:+12246676100">(224) 667-6100</a></dd>
                    <dt>Cardiovascular Division</dt>
                    <dd>5050 Nathan Lane North, Plymouth, MN 55442<br /><a className={styles.contactLink} href="tel:+16517565400">(651) 756-5400</a></dd>
                    <dt>Website</dt>
                    <dd><a className={styles.contactLink} href="https://www.abbott.com" target="_blank" rel="noopener">abbott.com</a></dd>
                  </dl>
                </div>

                <div className={styles.makerCard}>
                  <h4>Johnson &amp; Johnson — Biosense Webster</h4>
                  <div className={styles.focus}>J&amp;J MedTech</div>
                  <dl>
                    <dt>Current platforms</dt>
                    <dd>CARTO mapping platform with an established RF catheter portfolio; also now offers the VARIPULSE pulsed-field platform.</dd>
                    <dt>Corporate address</dt>
                    <dd>33 Technology Drive, Irvine, CA 92618<br /><a className={styles.contactLink} href="tel:+19098398500">(909) 839-8500</a></dd>
                    <dt>Customer service (US)</dt>
                    <dd><a className={styles.contactLink} href="tel:+18007299010">1-800-729-9010</a></dd>
                    <dt>US hotline</dt>
                    <dd><a className={styles.contactLink} href="tel:+18664737823">1-866-473-7823</a></dd>
                    <dt>Website</dt>
                    <dd><a className={styles.contactLink} href="https://www.biosensewebster.com" target="_blank" rel="noopener">biosensewebster.com</a></dd>
                  </dl>
                </div>

                <div className={styles.makerCard}>
                  <h4>Medtronic</h4>
                  <div className={styles.focus}>Cardiac devices</div>
                  <dl>
                    <dt>Current platforms</dt>
                    <dd>Mapping, navigation, and ablation offerings, plus the PulseSelect and Affera Sphere-9 pulsed-field ablation platforms.</dd>
                    <dt>HQ (Cardiac Devices)</dt>
                    <dd>8200 Coral Sea Street NE, Mounds View, MN 55112</dd>
                    <dt>General customer support</dt>
                    <dd><a className={styles.contactLink} href="tel:+18002382518">1-800-238-2518</a></dd>
                    <dt>Website</dt>
                    <dd><a className={styles.contactLink} href="https://www.medtronic.com" target="_blank" rel="noopener">medtronic.com</a></dd>
                  </dl>
                </div>

                <div className={styles.makerCard}>
                  <h4>Boston Scientific</h4>
                  <div className={styles.focus}>Farapulse / Pulsed Field Ablation</div>
                  <dl>
                    <dt>Current platforms</dt>
                    <dd>Rhythmia mapping platform and the FARAPULSE pulsed-field ablation system.</dd>
                    <dt>Farapulse education &amp; specialist inquiries</dt>
                    <dd><a className={styles.contactLink} href="tel:+18554427725">1-855-442-7725</a><br />Mon–Fri, 8 AM–5 PM CST</dd>
                    <dt>Website</dt>
                    <dd><a className={styles.contactLink} href="https://www.bostonscientific.com" target="_blank" rel="noopener">bostonscientific.com</a> · <a className={styles.contactLink} href="https://www.farapulse.com" target="_blank" rel="noopener">farapulse.com</a></dd>
                  </dl>
                </div>

                <div className={styles.makerCard}>
                  <h4>Acutus Medical</h4>
                  <div className={styles.focus}>Advanced cardiac mapping</div>
                  <dl>
                    <dt>Current platforms</dt>
                    <dd>Advanced mapping technology for complex arrhythmia cases. Market role and product availability vary by center — confirm directly before referencing a specific patient case.</dd>
                    <dt>Website</dt>
                    <dd><a className={styles.contactLink} href="https://acutusmedical.com" target="_blank" rel="noopener">acutusmedical.com</a></dd>
                  </dl>
                </div>

                <div className={styles.makerCard}>
                  <h4>AtriCure</h4>
                  <div className={styles.focus}>Ablation systems</div>
                  <dl>
                    <dt>Corporate HQ</dt>
                    <dd>7555 Innovation Way, Mason, OH 45040<br /><a className={styles.contactLink} href="tel:+15137554100">+1 (513) 755-4100</a></dd>
                    <dt>Toll free</dt>
                    <dd><a className={styles.contactLink} href="tel:+18663492342">+1 (866) 349-2342</a></dd>
                    <dt>Fax</dt>
                    <dd>+1 (513) 755-4567</dd>
                    <dt>Website</dt>
                    <dd><a className={styles.contactLink} href="https://www.atricure.com" target="_blank" rel="noopener">atricure.com</a></dd>
                  </dl>
                </div>

                <div className={styles.makerCard}>
                  <h4>AngioDynamics</h4>
                  <div className={styles.focus}>NanoKnife, Solero MTA</div>
                  <dl>
                    <dt>Corporate HQ</dt>
                    <dd>14 Plaza Drive, Latham, NY 12110</dd>
                    <dt>General / IP queries</dt>
                    <dd><a className={styles.contactLink} href="tel:+15187951400">1-518-795-1400</a></dd>
                    <dt>Clinical / adverse event support</dt>
                    <dd><a className={styles.contactLink} href="tel:+18008339973">1-800-833-9973</a></dd>
                    <dt>Website</dt>
                    <dd><a className={styles.contactLink} href="https://www.angiodynamics.com" target="_blank" rel="noopener">angiodynamics.com</a></dd>
                  </dl>
                </div>
              </div>

              <p style={{ fontSize: "0.85rem", color: "#8195A8", marginTop: 6 }}>
                For a patient, the specific brand usually matters less than
                whether the center and operator have strong experience
                mapping and ablating at your PVC&apos;s specific anatomic
                site.
              </p>

              <div className="refs" style={{ marginTop: 24 }}>
                <p style={{ marginBottom: 8 }}><strong style={{ color: "var(--navy)" }}>References for this update:</strong></p>
                <ol style={{ marginLeft: 20 }}>
                  <li id="ref-pfa">Current FDA approval status of pulsed-field ablation systems (principally atrial fibrillation, not routine PVC treatment) — see FierceBiotech and TCTMD coverage of Abbott&apos;s Volt system approval, December 2025.</li>
                  <li id="ref-abbott">Abbott Volt™ Pulsed Field Ablation System FDA approval announcement, December 22, 2025. (Abbott newsroom)</li>
                </ol>
                <p style={{ marginTop: 10, fontStyle: "italic", color: "#8195A8" }}>
                  Full source URLs available on request — several were
                  provided as reference links in the source material for
                  this update and can be added directly once verified.
                </p>
              </div>

              <div className="callout">
                <strong>A note on this list:</strong>
                <p style={{ marginTop: 6 }}>
                  These are general corporate contacts, not endorsements of
                  any specific product. Inclusion here reflects relevance
                  to PVC mapping and ablation technology, not a claim about
                  safety or effectiveness beyond what&apos;s documented on
                  our{" "}
                  <Link href="/treatment-technology/safety-evidence" style={{ color: "var(--sky)", fontWeight: 700 }}>
                    Safety &amp; Evidence
                  </Link>{" "}
                  and{" "}
                  <Link href="/treatment-technology/emerging-technology" style={{ color: "var(--sky)", fontWeight: 700 }}>
                    Emerging Technology
                  </Link>{" "}
                  pages.
                </p>
              </div>
            </section>
          </article>

          <div className="next-links next-links-3">
            <Link className="next-card" href="/treatment-technology/emerging-technology">
              <span className="lbl">Related</span>
              <h4>Emerging Technology</h4>
              <p>What these companies&apos; tools are actually enabling in PVC ablation right now.</p>
            </Link>
            <Link className="next-card" href="/treatment-technology/mapping-solutions">
              <span className="lbl">Also relevant</span>
              <h4>Mapping Solutions</h4>
              <p>The specific mapping challenge some of this technology is built to solve.</p>
            </Link>
            <Link className="next-card" href="/contact">
              <span className="lbl">Submit an update</span>
              <h4>Contact Us</h4>
              <p>Send a technology update using the submission template above.</p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
