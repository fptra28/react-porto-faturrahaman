"use client";

import { useState } from "react";
import Logo from "@/components/atoms/Logo";
import NavbarMenu from "@/components/molecules/NavbarMenu";
import Button from "@/components/atoms/Button";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl px-4 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl flex h-20 items-center justify-between">
        <Logo />

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="rounded-md border border-white/20 px-2 py-2 aspect-square text-sm font-semibold text-white transition hover:border-red-500 hover:text-red-500 md:hidden"
        >
          <i className="fa-solid fa-bars"></i>
        </button>

        <div className="hidden h-full items-center gap-6 lg:gap-8 md:flex">
          <NavbarMenu />

          <Button href="https://www.linkedin.com/in/fptra28">Hire Me</Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-white/10 bg-black/90 px-4 pb-5 pt-3 md:hidden">
          <div className="mx-auto flex max-w-screen-sm flex-col gap-4">
            <NavbarMenu mobile onNavigate={handleCloseMobileMenu} />
            <Button href="https://www.linkedin.com/in/fptra28">Hire Me</Button>
          </div>
        </div>
      )}
    </header>
  );
}
