import { auth } from "@/lib/better-auth/auth";
import { inngest } from "@/lib/inngest/client";
import { headers } from "next/headers";

export const signUpUser = async ({
    email,
    password,
    name,
    fullName,
    country,
    investmentGoals,
    riskTolerance,
    preferredIndustry,
}: SignUpFormData & { name?: string }) => {
    const userName = name || fullName;

    const response = await auth.api.signUpEmail({
        body: { email, password, name: userName! },
        headers: await headers(),
    });

    if (response) {
        await inngest.send({
            name: "app/user.created",
            data: {
                email,
                name: userName!,
                country,
                investmentGoals,
                riskTolerance,
                preferredIndustry,
            },
        });
    }

    return response;
};

export const signInUser = async ({ email, password }: SignInFormData) => {
    return await auth.api.signInEmail({
        body: { email, password },
        headers: await headers(),
    });
};
