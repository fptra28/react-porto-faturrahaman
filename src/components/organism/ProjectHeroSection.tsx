import ProjectHeroContent from "@/components/molecules/ProjectHeroContent";
import ProjectHeroVisual from "@/components/molecules/ProjectHeroVisual";

export default function ProjectHeroSection() {
  return (
    <section className="px-4 py-10 md:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between lg:gap-16">
          {/* Left */}
          <div className="order-2 lg:order-1">
            <ProjectHeroContent />
          </div>

          {/* Right */}
          <div className="order-1 lg:order-2">
            <ProjectHeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
