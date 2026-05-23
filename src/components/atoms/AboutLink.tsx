import Link from "next/link";

interface AboutLinkProps {
  href: string;
  label: string;
}

export default function AboutLink({ href, label }: AboutLinkProps) {
  return (
    <Link
      href={href}
      className="w-fit text-sm font-medium text-red-500 transition hover:text-red-400"
    >
      {label}
    </Link>
  );
}
