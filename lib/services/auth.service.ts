import { auth } from "@/lib/better-auth/auth";
import { inngest } from "@/lib/inngest/client";
import { headers } from "next/headers";

export const getSession = async () => {
  return await auth.api.getSession({ headers: await headers() });
};

export const signUpUser = async ({
  email,
  password,
  fullName,
  country,
  investmentGoals,
  riskTolerance,
  preferredIndustry,
}: SignUpFormData) => {
  const response = await auth.api.signUpEmail({
    body: {
      email,
      password,
      name: fullName,
      country,
      investmentGoals,
      riskTolerance,
      preferredIndustry,
    },
    headers: await headers(),
  });

  if (response) {
    await inngest.send({
      name: "app/user.created",
      data: {
        email,
        name: fullName,
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

export const getCurrentUser = async () => {
  const session = await getSession();
  return session?.user || null;
};
