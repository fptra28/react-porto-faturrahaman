import type { Metadata } from "next";

import PageTemplate from "@/components/layouts/PageTemplate";
import SectionTitle from "@/components/atoms/SectionTitle";
import ProjectGrid from "@/components/molecules/ProjectGrid";

export const metadata: Metadata = {
  title: "Home - Portofolio Faturrahman Putra",
};

export default function project() {
  return (
    <PageTemplate>
      <div className="mt-20 mb-10">
        <div className="relative group w-full overflow-hidden">
          <img
            src="/assets/2497.jpg"
            alt="Coming Soon"
            className="w-full h-48 object-cover object-center"
          />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <SectionTitle
              title="My Projects"
              className="text-center text-white"
            />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-0">
          <ProjectGrid />
        </div>
      </div>
    </PageTemplate>
  );
}
