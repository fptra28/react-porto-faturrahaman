export type BlogApiItem = {
  id?: number;
  owner?: string;
  img_news?: string;
  slug_news?: string;
  title_id?: string;
  title_en?: string;
  news_id?: string;
  news_en?: string;
  category?: string | { name?: string; slug?: string };
  created_at?: string;
  updated_at?: string;
};

export type BlogApiCategory = {
  id?: number;
  name?: string;
  title?: string;
  category?: string;
  slug?: string;
};

export type BlogViewModel = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  slug: string;
  category: string;
  categorySlug: string;
  date: string;
  time: string;
  link: string;
};

export type BlogCategoryViewModel = {
  name: string;
  slug: string;
  count: number;
};

export type BlogDetailViewModel = {
  id: number;
  title: string;
  imageSrc: string;
  contentHtml: string;
  category: string;
  categorySlug: string;
  date: string;
  time: string;
  slug: string;
};

const ALL_NEWS_API = process.env.ALL_NEWS_API ?? "";
const ALL_CATEGORIES_LIST_API = process.env.ALL_CATEGORIES_LIST_API ?? "";
const NEWS_BY_CATEGORIES_API = process.env.NEWS_BY_CATEGORIES_API ?? "";
const API_PORTO_TOKEN = process.env.API_PORTO_TOKEN ?? "";
const BLOG_IMAGE_BASE_URL =
  process.env.BLOG_IMAGE_BASE_URL ?? "http://backdoor-porto.test/upload/blogs";

function resolveApiOrigin(): string {
  if (!ALL_NEWS_API) {
    return "";
  }

  try {
    const { origin } = new URL(ALL_NEWS_API);
    return origin;
  } catch {
    return "";
  }
}

const BLOG_API_ORIGIN = resolveApiOrigin();

function buildEndpointWithToken(baseUrl: string, token: string, placeholder: string): string {
  if (baseUrl.includes(placeholder)) {
    return baseUrl.replace(placeholder, encodeURIComponent(token));
  }

  return `${baseUrl.replace(/\/+$/, "")}/${encodeURIComponent(token)}`;
}

function getAuthHeaders(): HeadersInit {
  return {
    Authorization: `Bearer ${API_PORTO_TOKEN}`,
    Accept: "application/json",
  };
}

function safeSlug(input: string): string {
  return input.trim().toLowerCase().replace(/\s+/g, "-");
}

function toAbsoluteImageUrl(path: string): string {
  if (!path) {
    return "/assets/images.jpg";
  }

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const normalizedPath = path.replace(/^\/+/, "");

  if (normalizedPath.startsWith("upload/blogs/")) {
    const filename = normalizedPath.replace(/^upload\/blogs\//, "");
    return `${BLOG_IMAGE_BASE_URL.replace(/\/+$/, "")}/${filename}`;
  }

  if (!BLOG_API_ORIGIN) {
    return `${BLOG_IMAGE_BASE_URL.replace(/\/+$/, "")}/${normalizedPath}`;
  }

  return `${BLOG_IMAGE_BASE_URL.replace(/\/+$/, "")}/${normalizedPath}`;
}

function stripHtml(raw: string): string {
  return raw.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function formatDateTime(input?: string): { date: string; time: string } {
  if (!input) {
    return { date: "-", time: "-" };
  }

  const dateObj = new Date(input);
  if (Number.isNaN(dateObj.getTime())) {
    return { date: "-", time: "-" };
  }

  const date = new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(dateObj);

  const time = new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(dateObj);

  return { date, time };
}

function mapBlogItem(item: BlogApiItem, fallbackIndex: number): BlogViewModel {
  const createdAt = item.created_at ?? item.updated_at;
  const { date, time } = formatDateTime(createdAt);

  const categoryName =
    typeof item.category === "string"
      ? item.category
      : (item.category?.name ?? "Uncategorized");
  const categorySlug =
    typeof item.category === "string"
      ? safeSlug(item.category)
      : safeSlug(item.category?.slug ?? categoryName);

  const defaultLink = item.slug_news ? `/blog/${item.slug_news}` : "#";

  return {
    id: item.id ?? fallbackIndex,
    title: item.title_id ?? item.title_en ?? "Untitled",
    description: stripHtml(item.news_id ?? item.news_en ?? "-"),
    imageSrc: toAbsoluteImageUrl(item.img_news ?? ""),
    slug: item.slug_news ?? "",
    category: categoryName,
    categorySlug,
    date,
    time,
    link: defaultLink,
  };
}

function mapBlogDetailItem(item: BlogApiItem): BlogDetailViewModel {
  const createdAt = item.created_at ?? item.updated_at;
  const { date, time } = formatDateTime(createdAt);
  const categoryName =
    typeof item.category === "string"
      ? item.category
      : (item.category?.name ?? "Uncategorized");
  const categorySlug =
    typeof item.category === "string"
      ? safeSlug(item.category)
      : safeSlug(item.category?.slug ?? categoryName);

  return {
    id: item.id ?? 0,
    title: item.title_id ?? item.title_en ?? "Untitled",
    imageSrc: toAbsoluteImageUrl(item.img_news ?? ""),
    contentHtml: item.news_id ?? item.news_en ?? "",
    category: categoryName,
    categorySlug,
    date,
    time,
    slug: item.slug_news ?? "",
  };
}

function extractArray<T>(payload: unknown): T[] {
  if (Array.isArray(payload)) {
    return payload as T[];
  }

  if (payload && typeof payload === "object") {
    const maybeData = (payload as Record<string, unknown>).data;
    if (Array.isArray(maybeData)) {
      return maybeData as T[];
    }
  }

  return [];
}

export async function getAllNews(): Promise<BlogViewModel[]> {
  if (!ALL_NEWS_API || !API_PORTO_TOKEN) {
    return [];
  }

  try {
    const response = await fetch(ALL_NEWS_API, {
      headers: getAuthHeaders(),
      cache: "no-store",
    });

    if (!response.ok) {
      return [];
    }

    const payload = (await response.json()) as unknown;
    const items = extractArray<BlogApiItem>(payload);
    return items.map((item, index) => mapBlogItem(item, index + 1));
  } catch {
    return [];
  }
}

export async function getAllCategories(): Promise<BlogCategoryViewModel[]> {
  if (!ALL_CATEGORIES_LIST_API || !API_PORTO_TOKEN) {
    return [];
  }

  try {
    const response = await fetch(ALL_CATEGORIES_LIST_API, {
      headers: getAuthHeaders(),
      cache: "no-store",
    });

    if (!response.ok) {
      return [];
    }

    const payload = (await response.json()) as unknown;
    const items = extractArray<BlogApiCategory | string>(payload);

    return items
      .map((item) => {
        if (typeof item === "string") {
          return { name: item, slug: safeSlug(item), count: 0 };
        }

        const name = String(item.name ?? item.title ?? item.category ?? "Category");
        const slug = safeSlug(String(item.slug ?? name));
        return { name, slug, count: 0 };
      })
      .filter((item) => item.slug.length > 0);
  } catch {
    return [];
  }
}

export async function getNewsByCategory(categorySlug: string): Promise<BlogViewModel[]> {
  if (!NEWS_BY_CATEGORIES_API || !API_PORTO_TOKEN) {
    return [];
  }

  try {
    const endpoint = buildEndpointWithToken(
      NEWS_BY_CATEGORIES_API,
      categorySlug,
      "{categorySlug}",
    );
    const response = await fetch(endpoint, {
      headers: getAuthHeaders(),
      cache: "no-store",
    });

    if (!response.ok) {
      return [];
    }

    const payload = (await response.json()) as unknown;
    const items = extractArray<BlogApiItem>(payload);
    return items.map((item, index) => mapBlogItem(item, index + 1));
  } catch {
    return [];
  }
}

export async function getNewsDetailBySlug(slug: string): Promise<BlogApiItem | null> {
  const SHOW_NEWS_API = process.env.SHOW_NEWS_API ?? "";
  if (!SHOW_NEWS_API || !API_PORTO_TOKEN) {
    return null;
  }

  try {
    const endpoint = buildEndpointWithToken(SHOW_NEWS_API, slug, "{slugNews}");
    const response = await fetch(endpoint, {
      headers: getAuthHeaders(),
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    const payload = (await response.json()) as unknown;
    if (payload && typeof payload === "object" && !Array.isArray(payload)) {
      const data = (payload as Record<string, unknown>).data;
      if (data && typeof data === "object" && !Array.isArray(data)) {
        return data as BlogApiItem;
      }
      return payload as BlogApiItem;
    }

    if (Array.isArray(payload) && payload.length > 0) {
      return payload[0] as BlogApiItem;
    }

    return null;
  } catch {
    return null;
  }
}

export async function getNewsDetailViewBySlug(
  slug: string,
): Promise<BlogDetailViewModel | null> {
  const requestedSlug = slug.trim();
  const detail = await getNewsDetailBySlug(requestedSlug);

  if (detail?.slug_news?.trim() === requestedSlug) {
    return mapBlogDetailItem(detail);
  }

  const allNews = await getAllNews();
  const fallback = allNews.find((item) => item.slug.trim() === requestedSlug);
  if (!fallback) {
    return detail ? mapBlogDetailItem(detail) : null;
  }

  return {
    id: fallback.id,
    title: fallback.title,
    imageSrc: fallback.imageSrc,
    contentHtml: fallback.description,
    category: fallback.category,
    categorySlug: fallback.categorySlug,
    date: fallback.date,
    time: fallback.time,
    slug: fallback.slug,
  };
}

export async function getBlogsData(): Promise<{
  news: BlogViewModel[];
  categories: BlogCategoryViewModel[];
}> {
  const [news, categories] = await Promise.all([getAllNews(), getAllCategories()]);

  const counts = news.reduce<Record<string, number>>((acc, item) => {
    acc[item.categorySlug] = (acc[item.categorySlug] ?? 0) + 1;
    return acc;
  }, {});

  const categoriesWithCount = categories.map((category) => ({
    ...category,
    count: counts[category.slug] ?? 0,
  }));

  return {
    news,
    categories: categoriesWithCount,
  };
}
