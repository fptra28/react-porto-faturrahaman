"use client";

import { useMemo, useState } from "react";

import type { ProjectViewModel } from "@/api/projects";
import ProjectCard from "../molecules/ProjectCard";

interface ProjectFilterSectionProps {
  projects: ProjectViewModel[];
}

export default function ProjectFilterSection({
  projects,
}: ProjectFilterSectionProps) {
  const PAGE_SIZE = 6;
  const [activeTag, setActiveTag] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState<number>(PAGE_SIZE);

  const tags = useMemo(() => {
    const uniqueTags = new Set<string>();

    projects.forEach((project) => {
      project.technologies.forEach((tag) => uniqueTags.add(tag));
    });

    return ["All", ...Array.from(uniqueTags)];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeTag === "All") {
      return projects;
    }

    return projects.filter((project) =>
      project.technologies.includes(activeTag),
    );
  }, [activeTag, projects]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMoreProjects = filteredProjects.length > visibleCount;

  return (
    <>
      <section className="px-4 py-4 md:px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => {
              const isActive = tag === activeTag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => {
                    setActiveTag(tag);
                    setVisibleCount(PAGE_SIZE);
                  }}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    isActive
                      ? "border-red-500 bg-red-500 text-white"
                      : "border-zinc-700 text-zinc-300 hover:border-red-500 hover:text-red-400"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 pb-7 md:px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {filteredProjects.length > 0 ? (
            <>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {visibleProjects.map((project) => (
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

              {hasMoreProjects && (
                <div className="mt-8 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
                    className="rounded-full border border-red-500 px-5 py-2 text-sm font-semibold text-red-400 transition hover:bg-red-500 hover:text-white"
                  >
                    Load More
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-sm text-zinc-300">
              Tidak ada project untuk tag{" "}
              <span className="text-red-400">{activeTag}</span>.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
