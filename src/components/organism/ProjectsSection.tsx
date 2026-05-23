import { getProjects } from "@/api/projects";
import SectionTitle from "../atoms/SectionTitle";
import ProjectGrid from "../molecules/ProjectGrid";

export default async function ProjectsSection() {
  const projects = await getProjects();
  const topProjects = projects.slice(0, 4);

  return (
    <section className="py-7 px-4 md:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="What I've Built" />

        {topProjects.length > 0 ? (
          <ProjectGrid projects={topProjects} />
        ) : (
          <div className="mt-8 rounded-xl border border-red-950/50 bg-red-950/10 p-4 text-sm text-red-300">
            Projects belum tersedia atau API tidak dapat diakses saat ini.
          </div>
        )}
      </div>
    </section>
  );
}
