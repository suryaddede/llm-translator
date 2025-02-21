"use client"

import { useState } from "react"

export function useTranslation() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const translate = async (sourceText: string, targetLanguage: string) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sourceText, targetLanguage }),
      })

      if (!response.ok) {
        throw new Error("Translation request failed")
      }

      const data = await response.json()

      if (data.error) {
        throw new Error(data.error)
      }

      return data.translatedText
    } catch (err) {
      setError("An error occurred during translation. Please try again.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return { translate, isLoading, error }
}

