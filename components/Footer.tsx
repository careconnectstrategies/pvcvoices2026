import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap-wide">
        <div className="foot-grid">
          <div>
            <h4>PVC Voices</h4>
            <p>
              A patient-led platform for people living with premature
              ventricular contractions — especially low-burden,
              highly symptomatic, and complex multifocal cases.
            </p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/about">About PVCs</Link></li>
              <li><Link href="/treatment-technology">Treatment &amp; Technology</Link></li>
              <li><Link href="/patient-stories">Patient Stories</Link></li>
              <li><Link href="/advocacy">Advocacy</Link></li>
              <li><Link href="/resources">Resources</Link></li>
            </ul>
          </div>
          <div>
            <h4>Connect</h4>
            <ul>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/patient-stories#submit">Share Your Story</Link></li>
              <li><Link href="/register">Create an Account</Link></li>
            </ul>
          </div>
        </div>
        <p className="photo-disclaimer">
          📷 <strong>Photo notice:</strong> All photos on this site are
          stock or AI-generated representative images only. They do not
          depict real PVC Voices patients, staff, or stories.
        </p>
        <p className="disclaimer">
          <strong>Medical disclaimer:</strong> PVC Voices is a patient-run
          educational and advocacy platform. Content on this site is for
          informational purposes only and is not medical advice, diagnosis,
          or treatment. Always consult your physician or a qualified
          electrophysiologist about your specific condition. Never
          disregard professional medical advice because of something you
          read here. User-submitted stories and replies reflect personal
          opinions and individual experiences only, are not verified, and
          are governed by our Terms of Use and Privacy Policy.
        </p>
      </div>
    </footer>
  );
}
