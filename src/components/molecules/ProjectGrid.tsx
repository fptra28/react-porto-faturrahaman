import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      <ProjectCard
        image="/assets/project1.png"
        title="Cinematix Platform"
        description="Modern movie platform dashboard with responsive UI design."
        technologies={["Next.js", "Laravel"]}
        link="#"
      />

      <ProjectCard
        image="/assets/project1.png"
        title="Portfolio Website"
        description="Personal portfolio website with modern UI design."
        technologies={["React", "Tailwind"]}
        link="#"
      />

      <ProjectCard
        image="/assets/project1.png"
        title="Cinematix Platform"
        description="Modern movie platform dashboard with responsive UI design."
        technologies={["Next.js", "Laravel"]}
        link="#"
      />

      <ProjectCard
        image="/assets/project1.png"
        title="Portfolio Website"
        description="Personal portfolio website with modern UI design."
        technologies={["React", "Tailwind"]}
        link="#"
      />
    </div>
  );
}
