import { GoogleGenerativeAI } from "@google/generative-ai"
import { NextResponse } from "next/server"

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "")

export async function POST(request: Request) {
  try {
    const { sourceText, targetLanguage } = await request.json()

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" })
    const prompt = `Translate the following text into ${targetLanguage} language without elaboration: "${sourceText}"`
    const result = await model.generateContent(prompt)
    const response = result.response
    const translatedText = response.text()

    return NextResponse.json({ translatedText })
  } catch (error) {
    console.error("Translation error:", error)
    return NextResponse.json({ error: "An error occurred during translation." }, { status: 500 })
  }
}
