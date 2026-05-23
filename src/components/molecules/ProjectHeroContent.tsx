import HeroBadge from "@/components/atoms/HeroBadge";
import ProjectHeroTitle from "@/components/atoms/ProjectHeroTitle";
import ProjectHeroText from "@/components/atoms/ProjectHeroText";

interface ProjectHeroContentProps {
  badgeTitle?: string;
  title?: React.ReactNode;
  description?: string;
}

export default function ProjectHeroContent({
  badgeTitle = "What I've Done",
  title = (
    <>
      <span className="text-red-500">P</span>rojects
    </>
  ),
  description = "A collection of projects I've built with passion, solving real problems with clean code and modern design.",
}: ProjectHeroContentProps) {
  return (
    <div className="max-w-2xl space-y-4">
      <HeroBadge title={badgeTitle} />

      <div>
        <ProjectHeroTitle>{title}</ProjectHeroTitle>

        <ProjectHeroText>{description}</ProjectHeroText>
      </div>
    </div>
  );
}
