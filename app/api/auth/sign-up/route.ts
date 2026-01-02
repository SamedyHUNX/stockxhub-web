import { signUpUser } from "@/lib/services/auth.service";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      email,
      password,
      name,
      fullName,
      country,
      investmentGoals,
      riskTolerance,
      preferredIndustry,
    } = body;

    const userName = name || fullName;

    if (!email || !password || !userName) {
      return NextResponse.json(
        { message: "Email, password, and fullName are required" },
        { status: 400 }
      );
    }

    const response = await signUpUser({
      email,
      password,
      name: userName,
      fullName: userName,
      country,
      investmentGoals,
      riskTolerance,
      preferredIndustry,
    });

    return NextResponse.json(response);
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Sign up failed" },
      { status: 500 }
    );
  }
}
