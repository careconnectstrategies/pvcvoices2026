import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = { title: "Log In" };

export default async function LoginPage(props: PageProps<"/login">) {
  const params = await props.searchParams;
  const nextParam = params.next;
  const next = (Array.isArray(nextParam) ? nextParam[0] : nextParam) || "/patient-stories";

  return (
    <>
      <PageHero current="Log In" kicker="Welcome back" title="Log in to PVC Voices">
        <p>Log in to share a story, reply, or manage your account.</p>
      </PageHero>

      <main>
        <div className="wrap" style={{ maxWidth: 480, padding: "52px 24px 80px" }}>
          <LoginForm next={next} />
        </div>
      </main>
    </>
  );
}
