import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import RegisterForm from "@/components/RegisterForm";

export const metadata: Metadata = { title: "Create an Account" };

export default async function RegisterPage(props: PageProps<"/register">) {
  const params = await props.searchParams;
  const nextParam = params.next;
  const next = (Array.isArray(nextParam) ? nextParam[0] : nextParam) || "/patient-stories#submit";

  return (
    <>
      <PageHero
        crumbs={[{ href: "/patient-stories", label: "Patient Stories" }]}
        current="Create an Account"
        kicker="Two quick steps"
        title="Create your account & share your story"
      >
        <p>
          Register once, then tell your story right after — no separate
          trip required. Your account also lets you choose exactly
          what&apos;s shown alongside your post.
        </p>
      </PageHero>

      <main>
        <div className="wrap" style={{ maxWidth: 720, padding: "52px 24px 80px" }}>
          <RegisterForm next={next} />
        </div>
      </main>
    </>
  );
}
