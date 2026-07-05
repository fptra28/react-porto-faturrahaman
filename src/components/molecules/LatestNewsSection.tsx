import Link from "next/link";

import type { BlogViewModel } from "@/api/blogs";
import LatestNewsCard from "@/components/atoms/LatestNewsCard";

interface LatestNewsSectionProps {
  items: BlogViewModel[];
}

export default function LatestNewsSection({ items }: LatestNewsSectionProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h6 className="text-lg font-semibold text-white">Latest News</h6>

        <Link href="/blog" className="text-sm text-red-500">
          Read More...
        </Link>
      </div>

      <div className="space-y-3">
        {items.length > 0 ? (
          items.map((item) => (
            <LatestNewsCard
              key={item.id}
              href={`/blog/${item.slug}`}
              category={item.category}
              title={item.title}
              date={`${item.date} | ${item.time}`}
            />
          ))
        ) : (
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-sm text-zinc-300">
            Belum ada latest news.
          </div>
        )}
      </div>
    </div>
  );
}
