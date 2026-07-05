import { NextResponse } from "next/server";

import { getNewsByCategory } from "@/api/blogs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json([], { status: 200 });
  }

  const news = await getNewsByCategory(slug);
  return NextResponse.json(news, { status: 200 });
}
