import { searchStocks } from "@/lib/actions/finnhub.actions";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("q") || searchParams.get("query") || "";

    const stocks = await searchStocks(query);

    return NextResponse.json({
      success: true,
      data: stocks,
      count: stocks.length,
      message: `Found ${stocks.length} stocks for query "${query}"`,
    });
  } catch (error) {
    console.error("Stock search API error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Failed to search stocks",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { queries } = body;

    if (!Array.isArray(queries)) {
      return NextResponse.json(
        { success: false, message: "queries must be an array" },
        { status: 400 }
      );
    }

    const results = await Promise.all(queries.map((q) => searchStocks(q)));

    return NextResponse.json({
      success: true,
      data: results,
      message: `Processed ${queries.length} stock search queries`,
    });
  } catch (error) {
    console.error("Batch stock search error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error ? error.message : "Failed to search stocks",
      },
      { status: 500 }
    );
  }
}
