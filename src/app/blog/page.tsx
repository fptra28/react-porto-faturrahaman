import type { Metadata } from "next";

import PageTemplate from "@/components/layouts/PageTemplate";
import ProjectHeroContent from "@/components/molecules/ProjectHeroContent";

export const metadata: Metadata = {
  title: "Blog - Portofolio Faturrahman Putra",
};

export default async function BlogPage() {
  return (
    <PageTemplate>
      <div className="mt-20 mb-10">
        <section className="px-4 py-10 md:px-6 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <ProjectHeroContent
              badgeTitle="MY ARTICLES"
              title={
                <>
                  <span className="text-red-500">B</span>log
                </>
              }
              description="I share thoughts, tutorials, and insights about web development, design, and technology."
            />
          </div>
        </section>
      </div>
    </PageTemplate>
  );
}
