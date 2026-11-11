import Link from "next/link";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import PageHero from "@/components/PageHero";
import { createClient } from "@/lib/supabase/server";
import styles from "./welcome.module.css";

export const metadata: Metadata = {
  title: "Welcome",
  description: "Your PVC Voices home base: share your story, join the conversation, and take action.",
  robots: { index: false, follow: false },
};

export default async function WelcomePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login?next=%2Fwelcome");

  const { data: profile } = await supabase
    .from("profiles")
    .select("first_name, role")
    .eq("id", user.id)
    .single();

  const firstName =
    profile?.first_name || (user.user_metadata?.first_name as string | undefined) || "there";
  const isAdmin = profile?.role === "admin";

  return (
    <>
      <PageHero current="Welcome" kicker="You're in" title={`Welcome, ${firstName}`}>
        <p>
          Thank you for being part of PVC Voices. Here&apos;s how you can
          help show that low burden doesn&apos;t mean low suffering.
        </p>
      </PageHero>

      <main>
        <div className="wrap" style={{ paddingTop: 56, paddingBottom: 76 }}>
          <div className={styles.grid}>
            <Link className={`${styles.card} ${styles.primary}`} href="/patient-stories#submit">
              <h3>Share your story</h3>
              <p>
                Your experience is the most powerful evidence there is. Tell
                it in your own words. It&apos;s published right away, and you
                choose whether your name and city are shown.
              </p>
              <span className={styles.go}>Write your story →</span>
            </Link>

            <Link className={styles.card} href="/patient-stories">
              <h3>Read and reply to stories</h3>
              <p>
                You&apos;re not alone. Read what others are going through and
                leave an encouraging reply.
              </p>
              <span className={styles.go}>Browse Patient Stories →</span>
            </Link>

            <Link className={styles.card} href="/advocacy/take-action">
              <h3>Send an advocacy letter</h3>
              <p>
                Ask HRS, ACC, and AHA to weigh symptom burden alongside PVC
                count. We&apos;ll send it on your behalf and copy you.
              </p>
              <span className={styles.go}>Send your letter →</span>
            </Link>

            <Link className={styles.card} href="/treatment-technology">
              <h3>Learn about treatment</h3>
              <p>
                Plain-language guides to ablation, mapping technology, and
                finding the right doctor.
              </p>
              <span className={styles.go}>Explore treatment →</span>
            </Link>

            <Link className={styles.card} href="/resources">
              <h3>Find resources</h3>
              <p>
                Trusted patient education and next steps, all in one place.
              </p>
              <span className={styles.go}>See resources →</span>
            </Link>
          </div>

          {isAdmin && (
            <div className="callout amber" style={{ marginTop: 32 }}>
              <strong>You&apos;re an admin.</strong>
              <p style={{ marginTop: 6 }}>
                Open any story in{" "}
                <Link href="/patient-stories" style={{ color: "var(--rose-deep)", fontWeight: 800 }}>
                  Patient Stories
                </Link>{" "}
                to remove it or any reply with the &ldquo;Remove (admin)&rdquo; links.
              </p>
            </div>
          )}

          <div className={styles.footerRow}>
            <Link className="btn btn-primary" href="/">
              ← Back to the homepage
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
