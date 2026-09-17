"use client";

import { useMemo, useState } from "react";
import styles from "@/app/advocacy/take-action/take-action.module.css";

const LETTER_BODY = `Subject: End the Suffering: Expand Ablation Access for Low-Burden but Symptomatic PVC Patients

To Whom It May Concern,

I write on behalf of patients with highly symptomatic premature ventricular contractions (PVCs) who are denied catheter ablation because they do not meet an arbitrary cutoff such as ">10,000 PVCs/day" or ">10-15% burden." I also advocate for better research and technology to enable clinicians to safely ablate PVCs that originate close to the heart's conduction center.

For patients without PVCs originating from the conduction center, this threshold is not a formal regulation — it began as a research marker for PVC-induced cardiomyopathy but has since been misapplied as a universal barrier. The result: thousands of PVC patients endure panic, insomnia, depression, and disability while being told to "live with it."

Why This Matters
- Symptom burden does not equal PVC count. A patient with 1,000-5,000 PVCs/day who is highly symptomatic may suffer far more than one with 20,000/day who feels nothing.
- The 2022 ESC Guidelines recommend ablation as first-line therapy for symptomatic idiopathic PVCs, regardless of burden.
- The 2017 AHA/ACC/HRS guideline and 2019 HRS consensus both acknowledge the link between frequent PVCs and reversible left ventricular dysfunction — but patients without cardiomyopathy should not be excluded on that basis alone.

Outdated Practices Still in Use
Most EPs still decline ablation for low-burden but highly symptomatic patients, citing the unpredictable timing of PVCs during an electrophysiology study. Yet proven methods already exist to overcome this: pace mapping to replicate and identify the PVC origin, drug provocation to increase PVC frequency, and targeted electrical stimulation of autonomic nerves (such as vertebral-vein stimulation) to trigger PVCs during the study. These techniques are already available and effective. Their inconsistent use leaves patients without access to potentially curative treatment.

Policy Recommendations
1. Guideline Updates: Explicitly recognize severe PVC symptoms and antiarrhythmic drug intolerance or refractoriness as independent indications for ablation.
2. Coverage Reform: Direct CMS and private payers to cover ablation for patients with disabling symptoms, not only those meeting arbitrary numeric cutoffs.
3. Patient-Reported Outcomes: Incorporate measures of anxiety, sleep disruption, psychological stress, and functional loss into ablation decision-making, alongside ejection fraction and PVC count.
4. Modernization: Retire outdated practices and promote proven mapping and provocation techniques for low-burden but highly symptomatic patients.
5. Targeted Research: Invest in research, mapping tools, and catheters specifically for PVCs located near the AV node, His bundle, and parahisian tissue.

Ethical Imperative
Medicine's core principle is to do no harm. Knowingly withholding effective therapy because a patient falls short of an unofficial number does not serve that principle. I urge your organization to begin revising guidelines, policies, and practices so that ablation is accessible to all symptomatic patients — not only those with high PVC counts. Some electrophysiologists already ablate low-count but highly symptomatic PVCs to relieve suffering; there is no reason this should remain the exception rather than the standard.

Thank you for your time and leadership.`;

export default function LetterBuilder() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");
  const [toHrs, setToHrs] = useState(true);
  const [toAcc, setToAcc] = useState(true);
  const [toAha, setToAha] = useState(true);
  const [copied, setCopied] = useState(false);

  const letter = useMemo(() => {
    const displayName = name.trim() || "[Your Full Name]";
    const displayCity = city.trim() || "[City, State]";
    const displayContact = contact.trim() || "[Email / Phone]";

    const orgs: string[] = [];
    if (toHrs) orgs.push("Heart Rhythm Society (HRS) — Clinical Guidelines Committee");
    if (toAcc) orgs.push("American College of Cardiology (ACC) — ACC/AHA Joint Committee on Clinical Practice Guidelines");
    if (toAha) orgs.push("American Heart Association (AHA) — Chair, ACC/AHA Joint Task Force on Clinical Practice Guidelines");
    const to = orgs.length ? orgs.join("\n") : "[Select at least one organization above]";

    return `TO:
${to}

FROM:
${displayName}
${displayCity}

${LETTER_BODY}

Sincerely,
${displayName}
${displayCity}
${displayContact}`;
  }, [name, city, contact, toHrs, toAcc, toAha]);

  return (
    <div className={styles.builder}>
      <h3>1. Your details</h3>
      <div className={styles.builderGrid}>
        <div className="field">
          <label htmlFor="ltr-name">Your full name</label>
          <input type="text" id="ltr-name" placeholder="Jane Smith" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="ltr-city">City, State</label>
          <input type="text" id="ltr-city" placeholder="Portland, OR" value={city} onChange={(e) => setCity(e.target.value)} />
        </div>
        <div className="field full">
          <label htmlFor="ltr-contact">Email or phone <span className="opt">(optional — shown in your signature)</span></label>
          <input type="text" id="ltr-contact" placeholder="jane@example.com" value={contact} onChange={(e) => setContact(e.target.value)} />
        </div>
      </div>

      <h3>2. Who to address</h3>
      <div className="recipient-row">
        <label><input type="checkbox" checked={toHrs} onChange={(e) => setToHrs(e.target.checked)} /> Heart Rhythm Society (HRS)</label>
        <label><input type="checkbox" checked={toAcc} onChange={(e) => setToAcc(e.target.checked)} /> American College of Cardiology (ACC)</label>
        <label><input type="checkbox" checked={toAha} onChange={(e) => setToAha(e.target.checked)} /> American Heart Association (AHA)</label>
      </div>

      <h3>3. Your letter</h3>
      <div className={styles.letterPreview}>{letter}</div>

      <div className={styles.builderActions}>
        <button
          className="btn btn-amber"
          onClick={() => {
            navigator.clipboard.writeText(letter).then(() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 2500);
            });
          }}
        >
          Copy letter text
        </button>
        <button className="btn btn-soft" onClick={() => window.print()}>
          Print / save as PDF
        </button>
        {copied && <span className={styles.copyConfirm}>✓ Copied to clipboard</span>}
      </div>
      <p className={styles.mockNote}>
        This builder fills in the template locally in your browser —
        nothing is saved, and no email is sent automatically. Copy the
        text into your own email or print it to mail, then send it
        through whichever channel you prefer.
      </p>
      <p className={styles.mockNote}>
        Don&apos;t want to send it yourself?{" "}
        <a href="/contact#send-for-me" style={{ color: "var(--sky)", fontWeight: 700 }}>
          Send a Letter on My Behalf →
        </a>
      </p>
    </div>
  );
}
