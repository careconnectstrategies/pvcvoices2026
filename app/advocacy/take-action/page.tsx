import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SubNav from "@/components/SubNav";
import CopyAddressButton from "@/components/CopyAddressButton";
import LetterBuilder from "@/components/LetterBuilder";
import styles from "./take-action.module.css";

export const metadata: Metadata = {
  title: "Take Action",
  description:
    "Send a letter to the Heart Rhythm Society, ACC, and AHA to push for symptom-inclusive PVC treatment guidelines, with contact info, templates, and mailing addresses.",
};

const ADVOCACY_LINKS = [
  { href: "/advocacy/who-makes-the-rules", label: "Who Makes the Rules?" },
  { href: "/advocacy/take-action", label: "Take Action" },
];

const HRS_ADDRESS = `Heart Rhythm Society
ATTN: Clinical Guidelines Committee
1325 G Street NW, Suite 500
Washington, DC 20005`;

const ACC_ADDRESS = `American College of Cardiology
ATTN: ACC/AHA Joint Committee on Clinical Practice Guidelines
Heart House
2400 N Street NW
Washington, DC 20037`;

const AHA_ADDRESS = `American Heart Association
ATTN: Chair, ACC/AHA Joint Task Force on Clinical Practice Guidelines
AHA National Center
7272 Greenville Avenue
Dallas, TX 75231`;

export default function TakeActionPage() {
  return (
    <>
      <PageHero
        crumbs={[{ href: "/advocacy", label: "Advocacy" }]}
        current="Take Action"
        kicker="Advocacy · Make your voice heard"
        title="Take action: contact the guideline committees"
      >
        <p>
          Now that you know who writes the rules, here&apos;s exactly how
          to reach them — with a letter already written for you.
        </p>
      </PageHero>

      <SubNav label="Advocacy section pages" items={ADVOCACY_LINKS} current="/advocacy/take-action" />

      <main>
        <div className="wrap">
          <article>
            <section id="framing">
              <span className="kicker">Why this matters</span>
              <h2>Most patients never write. That&apos;s exactly the problem.</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>
                Most patients don&apos;t know how — or don&apos;t have the
                energy — to contact the organizations that shape treatment
                guidelines. That&apos;s understandable; living with
                symptomatic PVCs is exhausting on its own. But it also
                means these organizations rarely hear from the patients
                most affected by where the thresholds are set.
              </p>
              <p>
                The goal of this page is simple: make it as easy as
                possible for you to add your voice, so these committees
                hear from far more patients than they&apos;re used to.
              </p>
            </section>

            <section id="contacts">
              <span className="kicker rose">Where to send it</span>
              <h2>The three organizations to contact</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>
                Since these guidelines are co-authored jointly (see{" "}
                <Link href="/advocacy/who-makes-the-rules" style={{ color: "var(--sky)", fontWeight: 700 }}>
                  Who Makes the Rules?
                </Link>
                ), effective advocacy means reaching all three — not just
                one.
              </p>

              <div className={styles.contactGrid}>
                <div className={styles.contactCard}>
                  <h4>Heart Rhythm Society (HRS)</h4>
                  <div className={styles.role}>U.S. arrhythmia consensus co-author</div>
                  <dl>
                    <dt>Address</dt>
                    <dd>
                      <div className={styles.addrBlock}>{HRS_ADDRESS}</div>
                      <CopyAddressButton text={HRS_ADDRESS} />
                    </dd>
                    <dt>Phone</dt>
                    <dd>
                      <a className={styles.contactLink} href="tel:+12024643400">(202) 464-3400</a>
                      <div className={styles.askFor}>Ask for: the staff liaison to the Clinical Guidelines Committee</div>
                    </dd>
                    <dt>Email</dt>
                    <dd>
                      <a className={styles.contactLink} href="mailto:info@hrsonline.org?subject=Attn%3A%20Clinical%20Guidelines%20Committee%20%E2%80%94%20Expand%20PVC%20Ablation%20Access">info@hrsonline.org</a>
                      <div className={styles.subjectLine}>Suggested subject: <em>&quot;Attn: Clinical Guidelines Committee — Expand PVC Ablation Access&quot;</em></div>
                    </dd>
                  </dl>
                </div>

                <div className={styles.contactCard}>
                  <h4>American College of Cardiology (ACC)</h4>
                  <div className={styles.role}>Co-author &amp; policy amplifier</div>
                  <dl>
                    <dt>Address</dt>
                    <dd>
                      <div className={styles.addrBlock}>{ACC_ADDRESS}</div>
                      <CopyAddressButton text={ACC_ADDRESS} />
                    </dd>
                    <dt>Phone</dt>
                    <dd>
                      <a className={styles.contactLink} href="tel:+12023756000">(202) 375-6000</a>
                      <div className={styles.askFor}>Ask for: the staff liaison to the ACC/AHA Joint Committee on Clinical Practice Guidelines</div>
                    </dd>
                    <dt>Email</dt>
                    <dd>
                      <a className={styles.contactLink} href="mailto:membercare@acc.org?subject=Attn%3A%20ACC%2FAHA%20Joint%20Committee%20%E2%80%94%20Expand%20PVC%20Ablation%20Access">membercare@acc.org</a>
                      <div className={styles.subjectLine}>Suggested subject: <em>&quot;Attn: ACC/AHA Joint Committee — Expand PVC Ablation Access&quot;</em></div>
                    </dd>
                  </dl>
                </div>

                <div className={styles.contactCard}>
                  <h4>American Heart Association (AHA)</h4>
                  <div className={styles.role}>Co-author, large advocacy footprint</div>
                  <dl>
                    <dt>Address</dt>
                    <dd>
                      <div className={styles.addrBlock}>{AHA_ADDRESS}</div>
                      <CopyAddressButton text={AHA_ADDRESS} />
                    </dd>
                    <dt>Phone</dt>
                    <dd>
                      <a className={styles.contactLink} href="tel:+18002428721">1-800-AHA-USA-1 (1-800-242-8721)</a>
                      <div className={styles.askFor}>Ask for: the staff liaison to the ACC/AHA Joint Task Force on Clinical Practice Guidelines</div>
                    </dd>
                    <dt>Email</dt>
                    <dd>
                      No direct email — AHA routes advocacy mail through their{" "}
                      <a className={styles.contactLink} href="https://www.heart.org" target="_blank" rel="noopener">website contact form</a>.
                      <div className={styles.subjectLine}>Suggested subject: <em>&quot;Attn: Chair, ACC/AHA Joint Task Force — Expand PVC Ablation Access&quot;</em></div>
                    </dd>
                  </dl>
                </div>
              </div>
            </section>

            <section id="bureaucracy">
              <span className="kicker amber">Getting it to the right desk</span>
              <h2>How to get through the bureaucracy</h2>
              <div className="rule" aria-hidden="true"></div>
              <div className="callout amber">
                <strong>Two-step approach:</strong>
                <ul style={{ marginTop: 8 }}>
                  <li>Clearly label hard-copy letters for the Guidelines Committee / Task Force — they get routed internally when addressed this way.</li>
                  <li>Follow up by email noting you&apos;ve submitted an advocacy letter and asking that it be forwarded to the Clinical Practice Guideline Committee.</li>
                  <li>Together, this gives you both a paper trail and an electronic route — harder to lose track of than either alone.</li>
                </ul>
              </div>
            </section>

            <section id="letter-builder">
              <span className="kicker">Your letter, ready to send</span>
              <h2>Build your advocacy letter</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>
                Fill in your details below and the template updates live.
                Then copy it, print it, or attach it to an email yourself
                — PVC Voices doesn&apos;t send anything on your behalf, so
                your letter, your signature, your choice of channel.
              </p>
              <LetterBuilder />
            </section>

            <section id="mailing-physical">
              <span className="kicker amber">Sending by mail</span>
              <h2>Mailing a physical letter?</h2>
              <div className="rule" aria-hidden="true"></div>
              <p>Printed the letter above? Make the envelope impossible to overlook before you send it:</p>
              <div className={styles.envelope}>
                <span className={styles.labelTag}>Envelope label</span>
                <br />
                URGENT: PATIENT ADVOCACY LETTER
                <br />
                FOR IMMEDIATE FORWARDING
                <br />
                To: [Organization Name]
                <br />
                ATTN: Clinical Practice Guidelines / Task Force
                <br />
                [Street Address]
                <br />
                [City, State, ZIP]
              </div>
              <p style={{ marginTop: -4 }}>
                Place that label prominently on the front of the envelope,
                and use the addresses in the contact cards above before
                sending.
              </p>
            </section>

            <div className="next">
              <div>
                <span className="kicker">Your voice matters</span>
                <h2>Your voice matters</h2>
                <p>
                  Staying silent doesn&apos;t change anything — for you or
                  for the next patient who hits the same wall. Sending
                  this letter takes a few minutes. Get involved.
                </p>
              </div>
            </div>
          </article>

          <div className="next-links">
            <Link className="next-card" href="/advocacy/who-makes-the-rules">
              <span className="lbl">Related</span>
              <h4>Who Makes the Rules?</h4>
              <p>The background on how HRS, ACC, and AHA jointly govern these guidelines.</p>
            </Link>
            <Link className="next-card" href="/contact#send-for-me">
              <span className="lbl">Prefer not to DIY?</span>
              <h4>Send a Letter on My Behalf</h4>
              <p>Give us your details and we&apos;ll email the letter to HRS, ACC, and AHA for you.</p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
