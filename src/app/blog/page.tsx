import type { Metadata } from "next";

import { getBlogsData } from "@/api/blogs";
import PageTemplate from "@/components/layouts/PageTemplate";
import BlogNewsSection from "@/components/organism/BlogNewsSection";
import ProjectHeroSection from "@/components/organism/ProjectHeroSection";

export const metadata: Metadata = {
  title: "Blog - Portofolio Faturrahman Putra",
};

export default async function BlogPage() {
  const { news, categories } = await getBlogsData();

  return (
    <PageTemplate>
      <div className="mt-20 mb-10">
        <ProjectHeroSection
          badgeTitle="MY ARTICLES"
          title={
            <>
              <span className="text-red-500">B</span>log
            </>
          }
          description="I share thoughts, tutorials, and insights about web development, design, and technology."
          imageSrc="/assets/Untitled - May 25, 2026 at 10.46.40.png"
          imageAlt="Blog Illustration"
          hideImageOnMobile
        />

        <BlogNewsSection news={news} categories={categories} />
      </div>
    </PageTemplate>
  );
}
