import Navbar from "@/components/organism/Navbar";

interface PageTemplateProps {
  children: React.ReactNode;
}

export default function PageTemplate({ children }: PageTemplateProps) {
  return (
    <div className="font-sans bg-zinc-950">
      <Navbar />
      {children}

      {/* Footer */}
      <section className="border-t border-red-500/20 bg-neutral-900">
        <div className="mx-auto max-w-7xl px-6 py-4 text-center text-sm">
          <nav className="space-x-4">
            <a
              href="/"
              className="text-white hover:text-red-500 transition duration-300"
            >
              Home
            </a>
            <a
              href="/projects"
              className="text-white hover:text-red-500 transition duration-300"
            >
              Projects
            </a>
            <a
              href="/about"
              className="text-white hover:text-red-500 transition duration-300"
            >
              About
            </a>
          </nav>
        </div>

        <div className="w-full h-px bg-red-950" />

        <div className="mx-auto max-w-7xl px-6 py-4 text-center text-sm text-gray-500">
          Copyright &copy; {new Date().getFullYear()}. Made with ❤️ by{" "}
          <strong>Senfuri0n</strong>.
        </div>
      </section>
    </div>
  );
}
