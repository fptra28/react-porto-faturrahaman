import BlogDetailArticle from "@/components/organism/BlogDetailArticle";
import type { BlogViewModel } from "@/api/blogs";
import LatestNewsSection from "@/components/molecules/LatestNewsSection";
import RelatedNewsSection from "@/components/molecules/RelatedNewsSection";

interface BlogDetailSectionProps {
  detail: {
    title: string;
    date: string;
    time: string;
    category: string;
    imageSrc: string;
    contentHtml: string;
  };
  latestNews: BlogViewModel[];
  relatedNews: BlogViewModel[];
}

export default function BlogDetailSection({
  detail,
  latestNews,
  relatedNews,
}: BlogDetailSectionProps) {
  return (
    <section className="mb-10 mt-20 px-4 md:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-5 pt-10 md:grid-cols-[2.5fr_1fr]">
          <BlogDetailArticle detail={detail} />

          <div className="space-y-4 mt-10">
            <LatestNewsSection items={latestNews} />
            {/* <RelatedNewsSection items={relatedNews} /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
