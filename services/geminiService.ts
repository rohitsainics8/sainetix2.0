import { GoogleGenAI, Type } from "@google/genai";
import type { Idea } from '../types';

export const generateWebsiteConcept = async (prompt: string): Promise<{ html: string; css: string; js: string; }> => {
  // Fix: Initialize GoogleGenAI with API key from environment variables as per guidelines.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-pro", // Using a powerful model for a complex code generation task
      contents: `
        You are an expert web developer. Create a complete, single-page website based on the following prompt.
        The website should be visually appealing, responsive, and include relevant sections.
        Provide the HTML, CSS, and JavaScript code separately.
        The HTML should include placeholders for content where appropriate.
        The CSS should be modern and clean. Use a dark theme.
        The JavaScript should be minimal, for things like smooth scrolling or simple animations if needed. Do not use any external libraries.
        
        Prompt: "${prompt}"
        
        Return the response as a JSON object with three keys: "html", "css", and "js".
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            html: {
              type: Type.STRING,
              description: "The complete HTML code for the single-page website."
            },
            css: {
              type: Type.STRING,
              description: "The complete CSS code for the website."
            },
            js: {
              type: Type.STRING,
              description: "The JavaScript code for any interactivity."
            }
          },
          required: ["html", "css", "js"]
        }
      }
    });

    const jsonString = response.text.trim();
    const result = JSON.parse(jsonString);
    
    return result;

  } catch (error) {
    console.error("Error generating website concept:", error);
    // Fix: Removed custom API key error handling to align with new API key management.
    throw new Error("Failed to generate website concept. The model may be busy or the prompt could be too complex. Please try again.");
  }
};


export const generateLogoConcept = async (prompt: string, style: string): Promise<string[]> => {
  // Fix: Initialize GoogleGenAI with API key from environment variables as per guidelines.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const fullPrompt = `A high-quality, professional logo. The logo should be on a clean, solid light gray background. The subject of the logo is: "${prompt}". The style should be: ${style}.`;

  try {
    const response = await ai.models.generateImages({
        model: 'imagen-4.0-generate-001',
        prompt: fullPrompt,
        config: {
          numberOfImages: 4,
          outputMimeType: 'image/png',
          aspectRatio: '1:1',
        },
    });

    if (!response.generatedImages || response.generatedImages.length === 0) {
        throw new Error("The model did not return any images. Try a different prompt.");
    }
    
    return response.generatedImages.map(img => `data:image/png;base64,${img.image.imageBytes}`);

  } catch (error) {
    console.error("Error generating logo concept:", error);
    // Fix: Removed custom API key error handling to align with new API key management.
    throw new Error("Failed to generate logos. The model may be busy or the prompt could be too restrictive. Please try again.");
  }
};

export const generateIdeas = async (topic: string): Promise<Idea[]> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
        You are a creative brainstorming assistant. Generate 5 innovative and distinct ideas based on the following topic.
        For each idea, provide a catchy title and a brief, compelling description (2-3 sentences).
        
        Topic: "${topic}"
        
        Return the response as a JSON object with a single key "ideas" which is an array of objects. Each object should have two keys: "title" and "description".
      `,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            ideas: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: {
                    type: Type.STRING,
                    description: "A catchy title for the idea."
                  },
                  description: {
                    type: Type.STRING,
                    description: "A brief description of the idea."
                  }
                },
                required: ["title", "description"]
              }
            }
          },
          required: ["ideas"]
        }
      }
    });

    const jsonString = response.text.trim();
    const result = JSON.parse(jsonString);
    
    return result.ideas || [];

  } catch (error) {
    console.error("Error generating ideas:", error);
    throw new Error("Failed to generate ideas. The model may be busy or the prompt could be invalid. Please try again.");
  }
};