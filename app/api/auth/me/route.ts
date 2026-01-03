import { getCurrentUser } from "@/lib/services/auth.service";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const user = await getCurrentUser();
  return NextResponse.json(
    { success: true, user, message: "Fetched successfully" },
    { status: 200 }
  );
}
