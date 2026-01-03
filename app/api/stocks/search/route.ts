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
    });
  } catch (error) {
    console.error("Stock search API error:", error);
    return NextResponse.json(
      {
        success: false,
        error:
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
        { success: false, error: "queries must be an array" },
        { status: 400 }
      );
    }

    const results = await Promise.all(queries.map((q) => searchStocks(q)));

    return NextResponse.json({
      success: true,
      data: results,
    });
  } catch (error) {
    console.error("Batch stock search error:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Failed to search stocks",
      },
      { status: 500 }
    );
  }
}
