import Logo from "@/components/atoms/Logo";
import NavbarMenu from "@/components/molecules/NavbarMenu";
import Button from "@/components/atoms/Button";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl">
      <div className="mx-auto flex h-20 items-center justify-between px-6">
        <Logo />

        <div className="flex items-center gap-8">
          <NavbarMenu />

          <Button href="https://www.linkedin.com/in/fptra28">Hire Me</Button>
        </div>
      </div>
    </header>
  );
}
