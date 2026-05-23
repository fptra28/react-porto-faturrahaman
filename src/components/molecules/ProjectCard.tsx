import Image from "next/image";

import TechBadge from "../atoms/TechBadge";
import ProjectButton from "../atoms/ProjectButton";
import Link from "next/link";

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
  const visibleTechnologies = technologies.slice(0, 3);
  const remainingTechnologiesCount = Math.max(technologies.length - 3, 0);

  return (
    <Link
      href={link}
      className="group overflow-hidden rounded-xl border border-zinc-900"
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          unoptimized
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover group-hover:scale-105 transition duration-300"
        />

        <div className="absolute bg-black/10 w-full h-full" />
      </div>

      {/* Content */}
      <div className="space-y-4 p-3">
        {/* Title */}
        <div>
          <h3 className="text-xl font-semibold text-white group-hover:text-red-700 transition duration-300">
            {title}
          </h3>

          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-400">
            {description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          {/* Technologies */}
              <div className="flex flex-wrap gap-2">
            {visibleTechnologies.map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
            {remainingTechnologiesCount > 0 && (
              <TechBadge label={`${remainingTechnologiesCount}+`} />
            )}
          </div>

          <span className="text-red-500 group-hover:text-red-700 transition duration-300">
            <i className="fa-solid fa-up-right-from-square"></i>
          </span>
        </div>
      </div>
    </Link>
  );
}
