import Link from "next/link";
import type { ReactNode } from "react";

type Crumb = { href: string; label: string };

export default function PageHero({
  crumbs = [],
  current,
  kicker,
  title,
  children,
}: {
  crumbs?: Crumb[];
  current: string;
  kicker: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="page-hero">
      <div className="wrap">
        <p className="breadcrumb">
          <Link href="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.href}>
              {" "}
              <span aria-hidden="true">›</span>{" "}
              <Link href={c.href}>{c.label}</Link>
            </span>
          ))}{" "}
          <span aria-hidden="true">›</span> {current}
        </p>
        <span className="kicker">{kicker}</span>
        <h1>{title}</h1>
        {children}
      </div>
    </header>
  );
}
