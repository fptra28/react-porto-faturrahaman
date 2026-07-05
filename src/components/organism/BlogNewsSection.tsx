"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { BlogCategoryViewModel, BlogViewModel } from "@/api/blogs";

interface BlogNewsSectionProps {
  news: BlogViewModel[];
  categories: BlogCategoryViewModel[];
}

export default function BlogNewsSection({
  news,
  categories,
}: BlogNewsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [visibleNews, setVisibleNews] = useState<BlogViewModel[]>(news);
  const [isLoadingCategory, setIsLoadingCategory] = useState<boolean>(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = useState<boolean>(false);

  const categoriesWithAll = useMemo(() => {
    const total = news.length;
    return [{ name: "All News", slug: "all", count: total }, ...categories];
  }, [categories, news.length]);

  const activeCategoryLabel =
    categoriesWithAll.find((item) => item.slug === activeCategory)?.name ??
    "All News";

  async function handleSelectCategory(slug: string) {
    setActiveCategory(slug);

    if (slug === "all") {
      setVisibleNews(news);
      return;
    }

    setIsLoadingCategory(true);

    try {
      const response = await fetch(
        `/api/blogs/by-category?slug=${encodeURIComponent(slug)}`,
      );

      if (!response.ok) {
        setVisibleNews([]);
        return;
      }

      const payload = (await response.json()) as BlogViewModel[];
      setVisibleNews(Array.isArray(payload) ? payload : []);
    } catch {
      setVisibleNews([]);
    } finally {
      setIsLoadingCategory(false);
    }
  }

  return (
    <section className="px-4 py-10 md:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex items-center justify-between gap-3 lg:hidden">
          <p className="text-sm text-stone-300">
            Kategori aktif:{" "}
            <span className="text-red-400">{activeCategoryLabel}</span>
          </p>

          <button
            type="button"
            onClick={() => setIsFilterModalOpen(true)}
            className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-300 transition hover:bg-red-500/20"
          >
            Filter Kategori
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-4">
            {isLoadingCategory ? (
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-sm text-zinc-300">
                Memuat berita...
              </div>
            ) : visibleNews.length > 0 ? (
              visibleNews.map((item) =>
                item.slug ? (
                  <Link
                    href={`/blog/${item.slug}`}
                    key={item.id}
                    className="block group overflow-hidden rounded-2xl border border-red-800/30 hover:bg-zinc-900/40 transition duration-300"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="shrink-0">
                        <Image
                          src={item.imageSrc}
                          alt="Foto Berita"
                          width={500}
                          height={500}
                          unoptimized
                          className="h-64 w-full object-cover md:h-full md:w-64"
                        />
                      </div>

                      <div className="flex flex-1 flex-col justify-between gap-4 p-4">
                        <div className="space-y-3">
                          <div className="w-fit rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-1">
                            <p className="text-xs font-semibold text-red-500">
                              {item.category}
                            </p>
                          </div>

                          <h3 className="line-clamp-2 text-2xl font-semibold leading-snug text-white group-hover:text-red-500 transition duration-300">
                            {item.title}
                          </h3>

                          <p className="line-clamp-2 text-sm leading-relaxed text-stone-400">
                            {item.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <p className="text-stone-500">
                            <span>{item.date}</span> | <span>{item.time}</span>
                          </p>

                          <span className="text-red-500 transition duration-300 hover:text-red-600">
                            Read More...
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <article
                    key={item.id}
                    className="block overflow-hidden rounded-2xl border border-red-800/30 bg-zinc-900/40"
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="shrink-0">
                        <Image
                          src={item.imageSrc}
                          alt="Foto Berita"
                          width={500}
                          height={500}
                          unoptimized
                          className="h-64 w-full object-cover md:h-full md:w-64"
                        />
                      </div>

                      <div className="flex flex-1 flex-col justify-between gap-4 p-4">
                        <div className="space-y-3">
                          <div className="w-fit rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-1">
                            <p className="text-xs font-semibold text-red-500">
                              {item.category}
                            </p>
                          </div>

                          <h3 className="line-clamp-2 text-2xl font-semibold leading-snug text-white">
                            {item.title}
                          </h3>

                          <p className="line-clamp-2 text-sm leading-relaxed text-stone-400">
                            {item.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <p className="text-stone-500">
                            <span>{item.date}</span> | <span>{item.time}</span>
                          </p>

                          <span className="text-zinc-500">No detail</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ),
              )
            ) : (
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 text-sm text-zinc-300">
                Tidak ada berita untuk kategori{" "}
                <span className="text-red-400">{activeCategoryLabel}</span>.
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="w-full">
              <input
                type="text"
                name="search"
                id="search"
                className="w-full rounded-lg border border-red-800/30 p-2 text-white"
                placeholder="Search..."
              />
            </div>

            <div className="hidden w-full rounded-2xl border border-red-800/20 p-5 lg:block">
              <div className="mb-5 flex items-center justify-between">
                <h6 className="text-lg font-semibold text-white">Categories</h6>
                <div className="h-2 w-2 rounded-full bg-red-500" />
              </div>

              <ul className="space-y-1">
                {categoriesWithAll.map((category) => {
                  const isActive = activeCategory === category.slug;

                  return (
                    <li key={category.name}>
                      <button
                        type="button"
                        onClick={() => void handleSelectCategory(category.slug)}
                        className={`group flex w-full items-center justify-between rounded-xl border px-3 py-2 text-sm transition ${
                          isActive
                            ? "border-red-500/40 bg-red-500/10 text-white"
                            : "border-transparent text-stone-300 hover:border-red-500/20 hover:bg-red-500/5 hover:text-white"
                        }`}
                      >
                        <span>{category.name}</span>

                        <span className="rounded-md bg-red-500/10 px-2 py-1 text-xs font-medium text-red-400">
                          {category.count}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {isFilterModalOpen && (
        <div className="fixed inset-0 z-50 flex items-end bg-black/60 lg:hidden">
          <button
            type="button"
            aria-label="Close filter"
            onClick={() => setIsFilterModalOpen(false)}
            className="absolute inset-0"
          />

          <div className="relative z-10 w-full rounded-t-2xl border border-red-800/30 bg-zinc-950 p-5">
            <div className="mb-5 flex items-center justify-between">
              <h6 className="text-lg font-semibold text-white">
                Filter Kategori
              </h6>

              <button
                type="button"
                onClick={() => setIsFilterModalOpen(false)}
                className="rounded-md border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
              >
                Tutup
              </button>
            </div>

            <ul className="space-y-2">
              {categoriesWithAll.map((category) => {
                const isActive = activeCategory === category.slug;

                return (
                  <li key={category.name}>
                    <button
                      type="button"
                      onClick={() => {
                        void handleSelectCategory(category.slug);
                        setIsFilterModalOpen(false);
                      }}
                      className={`flex w-full items-center justify-between rounded-xl border px-3 py-2 text-sm transition ${
                        isActive
                          ? "border-red-500/40 bg-red-500/10 text-white"
                          : "border-zinc-800 text-stone-300"
                      }`}
                    >
                      <span>{category.name}</span>

                      <span className="rounded-md bg-red-500/10 px-2 py-1 text-xs font-medium text-red-400">
                        {category.count}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
