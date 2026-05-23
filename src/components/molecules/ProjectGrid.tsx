import ProjectCard from "./ProjectCard";
import type { ProjectViewModel } from "@/api/projects";

interface ProjectGridProps {
  projects: ProjectViewModel[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          image={project.image}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          link={project.link}
        />
      ))}
    </div>
  );
}
