import { inngest } from "./client";
import { PERSONALIZED_WELCOME_EMAIL_PROMPT } from "./prompts";

export const sendSignUpEmail = inngest.createFunction(
  { id: "sign-up-email" },
  { event: "app/user.created" },
  async ({ event, step }) => {
    const userProfile = `
- Country: ${event.data.country}
- Investment goals: ${event.data.investmentGoals}
- Risk tolerance: ${event.data.riskTolerance}
- Preferred country: ${event.data.preferredCountry}
`;

    const prompt = PERSONALIZED_WELCOME_EMAIL_PROMPT.replace(
      "{{userProfile}}",
      userProfile
    );

    const response = await step.ai.infer("generate-welcome-intro", {
      model: step.ai.models.openai({ model: "gpt-4o" }),
      body: {
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      },
    });

    await step.run("send-welcome-email", async () => {
      const choice = response.choices?.[0];
      const introText =
        choice?.message?.content ||
        "Thank you for joining. You now have a tool at your fingertip to track stock and make smart decisions.";

      // Email sending logic goes here
    });

    return {
      success: true,
      message: "Welcome email sent successfully",
    };
  }
);
