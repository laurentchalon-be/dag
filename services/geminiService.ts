
import { GoogleGenAI, Type } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getBreakfastRecommendation = async (mood: string, diet: string) => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Recommend a premium breakfast based on the following mood: "${mood}" and dietary preference: "${diet}". Focus on a high-end experience.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          reasoning: {
            type: Type.STRING,
            description: "Why this breakfast is perfect for the user's mood.",
          },
          suggestedItems: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "List of 2-3 dish names that fit the recommendation.",
          },
        },
        required: ["reasoning", "suggestedItems"],
      },
    },
  });

  return JSON.parse(response.text || '{}');
};
