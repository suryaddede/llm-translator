import TranslationForm from "@/components/TranslationForm"
import ThemeToggle from "@/components/ThemeToggle"

export default function Home() {
  return (
    <main className="min-h-screen p-4 sm:p-8 md:p-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">LLM Translator</h1>
          <ThemeToggle />
        </div>
        <TranslationForm />
      </div>
    </main>
  )
}
