import Link from "next/link";

interface FooterLinkProps {
  href: string;
  label: string;
}

export default function FooterLink({ href, label }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="text-sm text-stone-400 transition hover:text-red-400"
    >
      {label}
    </Link>
  );
}
