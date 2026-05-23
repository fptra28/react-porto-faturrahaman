"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
  onClick?: () => void;
}

export default function NavLink({
  href,
  children,
  className = "",
  activeClassName,
  inactiveClassName,
  onClick,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const defaultBaseClass =
    "relative p-2 text-sm font-medium transition duration-300 h-full";
  const defaultActiveClass = "text-red-500 border-b border-red-500";
  const defaultInactiveClass =
    "text-white hover:text-red-500 hover:border-b hover:border-red-500";

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${defaultBaseClass} ${className} ${
        isActive
          ? activeClassName ?? defaultActiveClass
          : inactiveClassName ?? defaultInactiveClass
      }`}
    >
      <div className="flex items-center h-full">{children}</div>
    </Link>
  );
}
