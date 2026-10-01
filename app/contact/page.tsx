import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import LetterRequestForm from "@/components/LetterRequestForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact PVC Voices with questions or feedback, nominate an electrophysiologist, or send a letter to medical societies about PVC treatment guidelines.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero current="Contact" kicker="Get in touch" title="Contact us">
        <p>
          Questions, feedback, or a doctor you&apos;d like to nominate for
          the Hall of Recognition — reach out below. Want us to email your
          advocacy letter for you? Scroll down.
        </p>
      </PageHero>

      <main>
        <div className="wrap" style={{ paddingTop: 52, paddingBottom: 76 }}>
          <section id="general-contact" style={{ marginBottom: 52 }}>
            <h2 className="section-h2">General inquiries</h2>
            <div className="rule" aria-hidden="true"></div>
            <p className="lead">
              Have a question, found a broken link, want to suggest a
              story topic, or represent a company or clinic? Send a
              message and we&apos;ll get back to you.
            </p>
            <ContactForm />
          </section>

          <section id="send-for-me" style={{ marginBottom: 52 }}>
            <span className="section-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16v16H4z" />
                <path d="m22 6-10 7L2 6" />
              </svg>
              Advocacy email service
            </span>
            <h2 className="section-h2">Send a letter on my behalf</h2>
            <div className="rule" aria-hidden="true"></div>
            <p className="lead">
              Prefer not to send the advocacy letter yourself? Fill in
              your details below, and our site manager will personally
              email the advocacy letter to HRS, ACC, and AHA on your
              behalf — from our official PVC Voices email address, sent as
              you, and copying you on the email so you have a record.
            </p>

            <div className="callout amber">
              <strong>How this works:</strong> we use the same template
              letter shown on our{" "}
              <Link href="/advocacy/take-action">Take Action</Link> page,
              filled in with the details you provide here. Our site
              manager sends it from the PVC Voices email address, states
              clearly in the email that it&apos;s being sent on your
              behalf, and CCs you at the email address you provide below.
              Requests are handled manually, so please allow a few days —
              this isn&apos;t automatic or instant. We are not currently
              sending physical letters through this form.
            </div>

            <LetterRequestForm />
          </section>

          <section id="other">
            <h2 className="section-h2">Other ways to connect</h2>
            <div className="rule" aria-hidden="true"></div>
            <div className="other-contacts">
              <div className="contact-mini">
                <h4>Prefer to do it yourself?</h4>
                <p>
                  Copy, print, or send the advocacy letter directly
                  yourself from our{" "}
                  <Link href="/advocacy/take-action">Take Action</Link>{" "}
                  page — no need to wait on us.
                </p>
              </div>
              <div className="contact-mini">
                <h4>Have a story to share?</h4>
                <p>
                  Patient stories are how we build the case for change.{" "}
                  <Link href="/patient-stories#submit">Share your story</Link>{" "}
                  with the community.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
