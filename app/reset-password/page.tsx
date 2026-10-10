import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ResetPasswordForm from "@/components/ResetPasswordForm";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Choose a New Password",
  description: "Choose a new password for your PVC Voices account.",
  robots: { index: false, follow: false },
};

export default async function ResetPasswordPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <>
      <PageHero current="New Password" kicker="Account help" title="Choose a new password">
        <p>Pick something you&apos;ll remember — at least 8 characters.</p>
      </PageHero>
      <main>
        <div className="wrap" style={{ maxWidth: 480, padding: "52px 24px 80px" }}>
          {user ? (
            <ResetPasswordForm />
          ) : (
            <div className="form-card">
              <p className="error-banner">
                This page needs a valid reset link. Your link may have
                expired or been opened in a different browser.
              </p>
              <Link className="btn btn-amber" href="/forgot-password">
                Get a new reset link →
              </Link>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
