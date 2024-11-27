import { generateText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

const google = createGoogleGenerativeAI({
  apiKey: import.meta.env.VITE_AI_KEY || "",
});
export async function Aiengine(msg: string) {
  const { text } = await generateText({
    model: google("gemini-1.5-flash"),
    prompt: msg,
  });

  return text;
}
