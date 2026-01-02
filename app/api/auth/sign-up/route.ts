import { auth } from "@/lib/better-auth/auth";
import { inngest } from "@/lib/inngest/client";
import { headers } from "next/headers";
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
                { message: "Email, password, and name are required" },
                { status: 400 }
            );
        }

        const response = await auth.api.signUpEmail({
            headers: await headers(),
            body: {
                email,
                password,
                name: userName,
            },
        });

        if (response) {
            // Trigger user created event
            await inngest.send({
                name: "app/user.created",
                data: {
                    email,
                    name: userName,
                    country,
                    investmentGoals,
                    riskTolerance,
                    preferredIndustry,
                },
            });
        }

        return NextResponse.json(response);
    } catch (error: any) {
        return NextResponse.json(
            { message: error.message || "Sign up failed" },
            { status: 500 }
        );
    }
}
