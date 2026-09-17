import Link from "next/link";

export default function SubNav({
  label,
  items,
  current,
}: {
  label: string;
  items: { href: string; label: string }[];
  current: string;
}) {
  return (
    <div className="subnav" aria-label={label}>
      <div className="subnav-scroll">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={item.href === current ? "current" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
