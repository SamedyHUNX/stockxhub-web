import { getNews } from "@/lib/actions/finnhub.actions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const symbolsParam = searchParams.get("symbols");

    // Parse symbols from comma-separated string
    const symbols = symbolsParam
      ? symbolsParam
          .split(",")
          .map((s) => s.trim())
          .filter(Boolean)
      : undefined;

    const news = await getNews(symbols);

    return NextResponse.json({
      success: true,
      data: news,
      count: news.length,
    });
  } catch (error) {
    console.error("News API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to fetch news",
      },
      { status: 500 }
    );
  }
}
