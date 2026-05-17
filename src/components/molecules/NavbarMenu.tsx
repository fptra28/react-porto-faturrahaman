import NavLink from "../atoms/NavLink";

export default function NavbarMenu() {
  return (
    <nav className="flex items-center gap-8">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/project">Project</NavLink>
      <NavLink href="/about">About</NavLink>
    </nav>
  );
}
