import NavLink from "../atoms/NavLink";

interface NavbarMenuProps {
  mobile?: boolean;
  onNavigate?: () => void;
}

export default function NavbarMenu({
  mobile = false,
  onNavigate,
}: NavbarMenuProps) {
  const navClass = mobile
    ? "flex w-full flex-col items-start gap-2"
    : "flex items-center gap-4 h-full";

  const linkClass = mobile ? "h-auto w-full rounded-md px-3 py-2" : "";
  const activeClass = mobile
    ? "text-red-500 bg-white/5 border border-red-500/40"
    : undefined;
  const inactiveClass = mobile
    ? "text-white border border-transparent hover:bg-white/5 hover:text-red-500"
    : undefined;

  return (
    <nav className={navClass}>
      <NavLink
        href="/"
        className={linkClass}
        activeClassName={activeClass}
        inactiveClassName={inactiveClass}
        onClick={onNavigate}
      >
        Home
      </NavLink>
      <NavLink
        href="/project"
        className={linkClass}
        activeClassName={activeClass}
        inactiveClassName={inactiveClass}
        onClick={onNavigate}
      >
        Projects
      </NavLink>
      <NavLink
        href="/blog"
        className={linkClass}
        activeClassName={activeClass}
        inactiveClassName={inactiveClass}
        onClick={onNavigate}
      >
        Blog
      </NavLink>
      <NavLink
        href="/about"
        className={linkClass}
        activeClassName={activeClass}
        inactiveClassName={inactiveClass}
        onClick={onNavigate}
      >
        About
      </NavLink>
    </nav>
  );
}
