import Link from "next/link";
import FallbackImage from "@/components/FallbackImage";
import NewsletterForm from "@/components/NewsletterForm";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <>
      <header className={styles.hero}>
        <div className={`wrap ${styles.heroGrid}`}>
          <div>
            <span className="kicker">A patient-led advocacy platform</span>
            <h1>
              Low burden doesn&apos;t mean <span className={styles.hl}>low suffering.</span>
            </h1>
            <p className={styles.lede}>
              For everyone who feels every single premature beat — and has
              been told the numbers are too low to matter. PVC Voices offers
              clear education, a real community, and a push for care that
              listens to symptoms, not just counts.
            </p>
            <div className={styles.heroActions}>
              <Link className="btn btn-primary" href="/patient-stories#submit">
                Share your story
              </Link>
              <Link className="btn btn-soft" href="/about">
                Learn about PVCs
              </Link>
            </div>
            <div className={styles.heroProof}>
              <div className={styles.dots} aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
              Built by a patient, for patients — every claim links to its
              source.
            </div>
          </div>

          <div className={styles.heroPhoto}>
            <div className={styles.frame}>
              <FallbackImage
                src="/images/1_stockphoto_credit_christian-buehner-2ooHCo-epdA-unsplash.jpg"
                alt="People smiling together outdoors, arms around each other"
              />
            </div>
            <div className={styles.badge} aria-hidden="true">
              You&apos;re not alone
            </div>
            <figure className={styles.polaroid}>
              <p className={styles.beat}>
                &ldquo;I feel every beat. For years I was told it was
                nothing.&rdquo;
              </p>
              <figcaption className={styles.who}>— A PVC Voices story</figcaption>
            </figure>
          </div>
        </div>
      </header>

      <div className={styles.ticker} role="note">
        <div className={`wrap ${styles.row}`}>
          <span>
            <b>Education</b> in plain language
          </span>
          <span>
            <b>Stories</b> from people who feel every beat
          </span>
          <span>
            <b>Advocacy</b> for modern treatment criteria
          </span>
        </div>
      </div>

      <main>
        <section className={styles.intro} aria-labelledby="intro-h">
          <div className={`wrap ${styles.introGrid}`}>
            <div className={styles.introPhoto}>
              <FallbackImage
                src="/images/2_Gemini_Generated_Image_doctor-talking-to-man.jpeg"
                alt="A clinician and patient in conversation"
              />
            </div>
            <div>
              <span className="kicker amber">Why this site exists</span>
              <h2 id="intro-h">Hello, my name is Ray.</h2>
              <p>
                I created PVC Voices from long-term personal experience and a
                clear gap in care. People with low-burden but highly
                symptomatic PVCs — especially complex, multifocal cases near
                the AV node, His bundle, and parahisian tissue — are
                routinely told their numbers are too low to treat, while
                their lives are turned upside down.
              </p>
              <p>
                This platform exists to give that underserved patient
                population a voice, to connect them with emerging
                technologies, and to push for meaningful change.
              </p>
              <Link className={styles.more} href="/about">
                Read the full mission →
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.paths} aria-labelledby="paths-h">
          <div className="wrap">
            <span className="kicker">Start here</span>
            <h2 id="paths-h">Three ways in, depending on what you need today</h2>
            <div className={styles.tiles}>
              <Link className={`${styles.tile} ${styles.tile1}`} href="/about">
                <span className={styles.num}>Learn</span>
                <h3>Understand your PVCs</h3>
                <p>
                  Plain-language education: low vs. high burden, multifocal
                  PVCs, and why some locations in the heart are harder to
                  treat. Every article cites its sources so you can verify.
                </p>
                <span className={styles.go}>Explore About PVCs →</span>
              </Link>
              <Link className={`${styles.tile} ${styles.tile2}`} href="/patient-stories">
                <span className={styles.num}>Connect</span>
                <h3>Read &amp; share stories</h3>
                <p>
                  Real accounts from people who feel every beat. If
                  medications failed you, or you were told &ldquo;it&apos;s
                  just anxiety,&rdquo; you&apos;ll find others here who
                  understand.
                </p>
                <span className={styles.go}>Visit Patient Stories →</span>
              </Link>
              <Link className={`${styles.tile} ${styles.tile3}`} href="/advocacy">
                <span className={styles.num}>Act</span>
                <h3>Push for change</h3>
                <p>
                  Follow emerging technologies like pulse field ablation and
                  advanced mapping, and support treatment criteria that
                  weigh how patients actually feel.
                </p>
                <span className={styles.go}>See the Advocacy agenda →</span>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.problem} aria-labelledby="problem-h">
          <div className={`wrap ${styles.problemGrid}`}>
            <div>
              <div className={styles.bignum}>
                10,000
                <small>PVCs per day — a common treatment threshold</small>
              </div>
              <div className="rule" aria-hidden="true"></div>
            </div>
            <div>
              <span className="kicker rose">The gap in care</span>
              <h2 id="problem-h">The 10,000-per-day problem</h2>
              <p>
                Medical decision-making often leans heavily on PVC burden —
                commonly using thresholds like 10,000 PVCs per day — while
                underestimating symptom severity.
              </p>
              <p>
                A person with 2,000 PVCs a day who feels every one can
                suffer more than someone with 20,000 who feels none. Yet the
                first patient is far more likely to be sent home untreated.
                PVC Voices believes symptom burden should carry equal
                weight.
              </p>
              <p>
                <Link href="/treatment-technology/safety-evidence">
                  See the research behind this →
                </Link>
              </p>
            </div>
          </div>
        </section>

        <section className={styles.stories} aria-labelledby="stories-h">
          <div className="wrap">
            <div className={styles.storiesHead}>
              <div>
                <span className="kicker rose">Community</span>
                <h2 id="stories-h">Your story is data doctors can&apos;t ignore</h2>
              </div>
              <Link className="btn btn-primary" href="/patient-stories#submit">
                Share your story
              </Link>
            </div>
            <div className={styles.storyCards}>
              <article className={styles.storyCard}>
                <div className={styles.ph}>
                  <FallbackImage
                    src="/images/3_stockphoto_credit_margo-evardson-d9VDci2N69Q-unsplash.jpg"
                    alt="Person in a thoughtful moment"
                  />
                </div>
                <div className={styles.body}>
                  <q>
                    Two thousand a day, and I felt every single one. My
                    Holter said I was fine. I wasn&apos;t.
                  </q>
                  <p className={styles.who} style={{ color: "var(--sky)" }}>
                    Low burden, high symptoms
                  </p>
                </div>
              </article>
              <article className={styles.storyCard}>
                <div className={styles.ph}>
                  <FallbackImage
                    src="/images/4_Gemini_Generated_Image_ib68xvib68xvib68.jpeg"
                    alt="A physician listening attentively"
                  />
                </div>
                <div className={styles.body}>
                  <q>
                    Three medications failed before anyone mentioned the
                    word multifocal to me.
                  </q>
                  <p className={styles.who} style={{ color: "#C77F14" }}>
                    When medications fail
                  </p>
                </div>
              </article>
              <article className={styles.storyCard}>
                <div className={styles.ph}>
                  <FallbackImage
                    src="/images/5_stockphoto_credit_beth-macdonald-cAZKcDUEf1k-unsplash.jpg"
                    alt="Two people shaking hands in support"
                  />
                </div>
                <div className={styles.body}>
                  <q>
                    My PVCs sit near the His bundle. Finding others like me
                    changed everything.
                  </q>
                  <p className={styles.who} style={{ color: "var(--rose)" }}>
                    Complex &amp; parahisian cases
                  </p>
                </div>
              </article>
            </div>
            <p className={styles.storiesCta}>
              <Link href="/patient-stories">Read more community stories →</Link>
            </p>
          </div>
        </section>

        <section className={styles.signup} aria-labelledby="signup-h">
          <div className={`wrap ${styles.signupGrid}`}>
            <div>
              <span className="kicker">Stay in the loop</span>
              <h2 id="signup-h">New research, new technology, new voices</h2>
              <p>
                Occasional updates on emerging treatments like pulse field
                ablation, plus community stories. No spam.
              </p>
            </div>
            <NewsletterForm className="signup-form" />
          </div>
        </section>
      </main>
    </>
  );
}
