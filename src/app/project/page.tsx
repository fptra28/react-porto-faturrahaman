import type { Metadata } from "next";

import { getProjects } from "@/api/projects";
import PageTemplate from "@/components/layouts/PageTemplate";
import ProjectFilterSection from "@/components/organism/ProjectFilterSection";
import ProjectHeroSection from "@/components/organism/ProjectHeroSection";

export const metadata: Metadata = {
  title: "Projects - Portofolio Faturrahman Putra",
};

export default async function ProjectPage() {
  const projects = await getProjects();

  return (
    <PageTemplate>
      <div className="mt-20 mb-10">
        <ProjectHeroSection />
        {projects.length > 0 ? (
          <ProjectFilterSection projects={projects} />
        ) : (
          <section className="px-4 py-10 md:px-6 lg:px-12">
            <div className="mx-auto max-w-7xl rounded-xl border border-red-950/50 bg-red-950/10 p-4 text-sm text-red-300">
              Projects belum tersedia atau API tidak dapat diakses saat ini.
            </div>
          </section>
        )}
      </div>
    </PageTemplate>
  );
}
