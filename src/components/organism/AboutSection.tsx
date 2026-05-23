import AboutContent from "@/components/molecules/AboutContent";
import FocusCard from "@/components/molecules/FocusCard";

export default function AboutSection() {
  return (
    <section className="px-4 py-7 md:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[1fr_2fr]">
          <AboutContent />

          <FocusCard />
        </div>
      </div>
    </section>
  );
}
