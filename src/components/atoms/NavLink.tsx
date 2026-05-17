"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`relative py-2 text-sm font-medium transition duration-300 ${
        isActive ? "text-red-400" : "text-white hover:text-red-400"
      }`}
    >
      {children}

      <span
        className={`absolute left-0 bottom-0 h-[2px] rounded-full bg-red-500 transition-all duration-300 ${
          isActive ? "w-full" : "w-0"
        }`}
      />
    </Link>
  );
}
