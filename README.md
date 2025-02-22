This application is an LLM-powered translator built with [Next.js](https://nextjs.org/) that allows translating text between languages using the [Google Gemini API](https://ai.google.dev/gemini-api/docs). Here's a more complete description of the project and setup instructions:

# LLM Translator

A web-based translation tool built with Next.js that uses Google's Gemini AI for text translation between languages.

## Features

- Text translation using Google's Gemini 2.0 Flash model
- Light/dark theme support
- Copy translated text to clipboard
- Responsive design for mobile and desktop
- Modern UI with Tailwind CSS

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Create a .env file and add your Google AI API key:
```
GOOGLE_API_KEY=your_api_key_here
```
4. Run the development server:
```bash
npm run dev
```
5. Open http://localhost:3000 to use the translator

The main translation logic is implemented in [route.ts](app/api//translate/route.ts) using the Google Generative AI SDK, while the UI is built with [shadcn/ui](https://ui.shadcn.com/) in the components directory.

For deployment, follow the standard Next.js deployment process on platforms like Vercel. Make sure to configure your environment variables on your hosting platform.