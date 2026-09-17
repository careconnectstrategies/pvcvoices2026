"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "./AuthProvider";
import styles from "./Nav.module.css";

const NAV_LINKS = [
  { href: "/about", label: "About PVCs" },
  { href: "/treatment-technology", label: "Treatment & Technology" },
  { href: "/patient-stories", label: "Patient Stories" },
  { href: "/advocacy", label: "Advocacy" },
  { href: "/resources", label: "Resources" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { user, firstName, signOut, loading } = useAuth();

  return (
    <nav className={styles.nav} aria-label="Main">
      <div className={styles.inner}>
        <Link className={styles.logo} href="/" aria-label="PVC Voices home">
          <span className={styles.logoMark} aria-hidden="true">
            <svg width="22" height="16" viewBox="0 0 34 24">
              <polyline
                points="0,14 6,14 8,10 10,18 12,14 15,14 17,2 19,22 21,14 34,14"
                fill="none"
                stroke="#F2A93B"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className={styles.logoName}>PVC Voices</span>
        </Link>

        <ul className={`${styles.links} ${open ? styles.linksOpen : ""}`}>
          {NAV_LINKS.map((link) => {
            const current =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link href={link.href} aria-current={current ? "page" : undefined}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className={styles.auth}>
          {!loading && !user && (
            <>
              <Link className={styles.authLink} href="/login">
                Log In
              </Link>
              <Link className="btn-pill-outline" href="/register">
                Sign Up
              </Link>
            </>
          )}
          {!loading && user && (
            <>
              <span className={styles.accountChip}>
                <span className={styles.accountAvatar}>
                  {firstName.charAt(0).toUpperCase()}
                </span>
                <span>Hi, {firstName}</span>
                <button onClick={() => signOut()}>Log out</button>
              </span>
              <Link className={styles.navCta} href="/patient-stories#submit">
                Share Your Story
              </Link>
            </>
          )}
        </div>

        <button
          className={styles.menuBtn}
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}
