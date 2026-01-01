import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "stockxhub",
  ai: { openai: { apiKey: process.env.OPENAI_API_KEY! } },
});
