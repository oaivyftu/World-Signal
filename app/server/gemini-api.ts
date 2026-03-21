// app/api/generate/route.ts
import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export async function POST(req: NextRequest) {
	// Hardcoded test question to verify Gemini API is working
	const testPrompt = "You are a helpful assistant.";
	const testQuestion = "What is the capital of France?";

	const fullPrompt = `${testPrompt}\n\nQuestion: ${testQuestion}`;

	const result = await genAI.models.generateContent({
		model: "gemini-3.1-flash-lite-preview",
		contents: fullPrompt,
	});

	return NextResponse.json({ text: result.text });
}
