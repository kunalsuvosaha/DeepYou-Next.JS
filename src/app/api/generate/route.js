import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { sanitizeText } from '@/utils/sanitize';

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

export async function POST(req) {
    try {
        const body = await req.json();
        let { prompt } = body;

        if (!prompt) {
            return NextResponse.json({ error: 'Prompt is required.' }, { status: 400 });
        }

        prompt = sanitizeText(prompt);

        const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

        const result = await model.generateContent({
            contents: [
                {
                    role: "user",
                    parts: [{ text: prompt }]
                }
            ]
        });

        const text = result.response.text();
        return NextResponse.json({ response: text });

    } catch (error) {
        console.error('❌ Error generating content:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
