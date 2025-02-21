import TranslationForm from "@/components/TranslationForm"
import ThemeToggle from "@/components/ThemeToggle"

export default function Home() {
  return (
    <main className="min-h-screen p-4 sm:p-8 md:p-24">
      <div className="relative mt-4 sm:mt-0 mb-8">
        <h1 className="text-3xl font-bold text-center">LLM Translator</h1>
        <ThemeToggle />
      </div>
      <TranslationForm />
    </main>
  )
}
