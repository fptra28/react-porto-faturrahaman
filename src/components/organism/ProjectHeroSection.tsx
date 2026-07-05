import ProjectHeroContent from "@/components/molecules/ProjectHeroContent";
import ProjectHeroVisual from "@/components/molecules/ProjectHeroVisual";

interface ProjectHeroSectionProps {
  badgeTitle?: string;
  title?: React.ReactNode;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  hideImageOnMobile?: boolean;
}

export default function ProjectHeroSection({
  badgeTitle,
  title,
  description,
  imageSrc,
  imageAlt,
  hideImageOnMobile = false,
}: ProjectHeroSectionProps) {
  const visualWrapperClassName = hideImageOnMobile
    ? "hidden lg:inline-flex"
    : "order-1 lg:order-2";

  return (
    <section className="px-4 py-10 md:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between lg:gap-16">
          <div>
            <ProjectHeroContent
              badgeTitle={badgeTitle}
              title={title}
              description={description}
            />
          </div>

          <div className={visualWrapperClassName}>
            <ProjectHeroVisual src={imageSrc} alt={imageAlt} />
          </div>
        </div>
      </div>
    </section>
  );
}
