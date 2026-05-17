import Image from "next/image";

import TechBadge from "../atoms/TechBadge";
import ProjectButton from "../atoms/ProjectButton";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

export default function ProjectCard({
  image,
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900">
      {/* Image */}
      <div className="relative h-100 md:h-105 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-80" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 z-10 w-full p-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>

        <p className="mt-2 text-sm text-white/90">{description}</p>

        {/* Technologies */}
        <div className="mt-3 flex items-center gap-2">
          {technologies.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>

        {/* Button */}
        <ProjectButton href={link} />
      </div>
    </div>
  );
}
