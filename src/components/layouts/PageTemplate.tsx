import Navbar from "@/components/organism/Navbar";
import Footer from "../organism/Footer";
import ScrollToTopButton from "../atoms/ScrollToTopButton";

interface PageTemplateProps {
  children: React.ReactNode;
}

export default function PageTemplate({ children }: PageTemplateProps) {
  return (
    <div className="font-sans bg-zinc-950">
      <Navbar />
      {children}
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
