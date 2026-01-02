import { auth } from "@/lib/better-auth/auth";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    const response = await auth.api.signInEmail({
      headers: await headers(),
      body: { email, password },
    });

    return NextResponse.json(response);
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Authentication failed" },
      { status: 401 }
    );
  }
}
