import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ForgotPasswordForm from "@/components/ForgotPasswordForm";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Reset your PVC Voices account password.",
  robots: { index: false, follow: true },
};

export default async function ForgotPasswordPage(props: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await props.searchParams;
  const expired = params.error === "expired";

  return (
    <>
      <PageHero current="Forgot Password" kicker="Account help" title="Reset your password">
        <p>We&apos;ll email you a secure link to choose a new one.</p>
      </PageHero>
      <main>
        <div className="wrap" style={{ maxWidth: 480, padding: "52px 24px 80px" }}>
          <ForgotPasswordForm expired={expired} />
        </div>
      </main>
    </>
  );
}
