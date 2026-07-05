import BlogContent from "@/components/molecules/BlogContent";
import BlogCoverImage from "@/components/atoms/BlogCoverImage";
import BlogDetailHeader from "@/components/molecules/BlogDetailHeader";

interface BlogDetailArticleProps {
  detail: {
    title: string;
    date: string;
    time: string;
    category: string;
    imageSrc: string;
    contentHtml: string;
  };
}

export default function BlogDetailArticle({ detail }: BlogDetailArticleProps) {
  return (
    <div className="rounded-2xl md:border md:border-red-800/50 md:p-4">
      <BlogDetailHeader
        title={detail.title}
        date={detail.date}
        time={detail.time}
        category={detail.category}
      />

      <BlogCoverImage src={detail.imageSrc} alt={detail.title} />

      <BlogContent content={detail.contentHtml} />
    </div>
  );
}
