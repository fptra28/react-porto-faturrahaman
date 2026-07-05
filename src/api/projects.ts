export type ApiProject = {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  owner: string;
  link: string;
  tags: string;
  created_at: string;
  updated_at: string;
};

export type ProjectViewModel = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
};

const PROJECT_API_URL = process.env.API_PORTO_URL ?? "";
const PROJECT_API_TOKEN = process.env.API_PORTO_TOKEN ?? "";

function resolveApiOrigin(): string {
  if (process.env.API_PORTO_ORIGIN) {
    return process.env.API_PORTO_ORIGIN;
  }

  if (!PROJECT_API_URL) {
    return "";
  }

  try {
    const { origin } = new URL(PROJECT_API_URL);
    return origin;
  } catch {
    return "";
  }
}

const PROJECT_API_ORIGIN = resolveApiOrigin();

function parseTags(rawTags: string): string[] {
  try {
    const parsed = JSON.parse(rawTags);
    if (Array.isArray(parsed)) {
      return parsed.filter((tag): tag is string => typeof tag === "string");
    }
    return [];
  } catch {
    return [];
  }
}

function toAbsoluteImageUrl(image: string): string {
  if (image.startsWith("http://") || image.startsWith("https://")) {
    return image;
  }

  return `${PROJECT_API_ORIGIN}/${image.replace(/^\/+/, "")}`;
}

export async function getProjects(): Promise<ProjectViewModel[]> {
  try {
    if (!PROJECT_API_URL) {
      return [];
    }

    const response = await fetch(PROJECT_API_URL, {
      headers: PROJECT_API_TOKEN
        ? {
            Authorization: `Bearer ${PROJECT_API_TOKEN}`,
          }
        : undefined,
      cache: "no-store",
    });

    if (!response.ok) {
      return [];
    }

    const payload = (await response.json()) as ApiProject[];
    if (!Array.isArray(payload)) {
      return [];
    }

    return payload.map((item) => ({
      id: item.id,
      title: item.title,
      description: item.description,
      image: toAbsoluteImageUrl(item.image),
      technologies: parseTags(item.tags),
      link: item.link || `/project/${item.slug}`,
    }));
  } catch {
    return [];
  }
}
