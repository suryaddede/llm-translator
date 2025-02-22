This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

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