import ProjectHeroImage from "@/components/atoms/ProjectHeroImage";

interface ProjectHeroVisualProps {
  src?: string;
  alt?: string;
}

export default function ProjectHeroVisual({
  src = "/assets/Untitled - May 25, 2026 at 10.46.40 (1).png",
  alt = "Projects Illustration",
}: ProjectHeroVisualProps) {
  return (
    <div className="flex justify-center">
      <ProjectHeroImage src={src} alt={alt} />
    </div>
  );
}
