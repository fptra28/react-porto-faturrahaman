import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getAllNews, getNewsDetailViewBySlug } from "@/api/blogs";
import PageTemplate from "@/components/layouts/PageTemplate";
import BlogDetailSection from "@/components/organism/BlogDetailSection";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

function tokenizeTitle(title: string): string[] {
  const stopWords = new Set([
    "dan",
    "yang",
    "dari",
    "untuk",
    "dengan",
    "pada",
    "the",
    "and",
    "for",
    "from",
    "with",
    "di",
    "ke",
    "of",
    "to",
    "a",
    "in",
  ]);

  return title
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter((word) => word.length > 2 && !stopWords.has(word));
}

function titleSimilarityScore(sourceTitle: string, targetTitle: string): number {
  const sourceTokens = new Set(tokenizeTitle(sourceTitle));
  const targetTokens = new Set(tokenizeTitle(targetTitle));

  if (sourceTokens.size === 0 || targetTokens.size === 0) {
    return 0;
  }

  let intersection = 0;
  sourceTokens.forEach((token) => {
    if (targetTokens.has(token)) {
      intersection += 1;
    }
  });

  return intersection / Math.max(sourceTokens.size, targetTokens.size);
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = await getNewsDetailViewBySlug(slug);

  return {
    title: detail ? `${detail.title} - Blog` : "Blog Detail",
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const detail = await getNewsDetailViewBySlug(slug);

  if (!detail) {
    notFound();
  }

  const latestNewsRaw = await getAllNews();
  const latestNews = latestNewsRaw
    .filter((item) => item.slug !== detail.slug)
    .slice(0, 4);

  const relatedNews = latestNewsRaw
    .filter((item) => item.slug !== detail.slug)
    .map((item) => ({
      item,
      score: titleSimilarityScore(detail.title, item.title),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map(({ item }) => item);

  return (
    <PageTemplate>
      <BlogDetailSection
        detail={detail}
        latestNews={latestNews}
        relatedNews={relatedNews}
      />
    </PageTemplate>
  );
}
