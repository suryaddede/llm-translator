"use client"

import { useState } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import { useTranslation } from "@/hooks/useTranslation"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ClipboardIcon } from "lucide-react"

type FormInputs = {
  sourceText: string
  targetLanguage: string
}

export default function TranslationForm() {
  const [translatedText, setTranslatedText] = useState("")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>()
  const { translate, isLoading, error } = useTranslation()

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const result = await translate(data.sourceText, data.targetLanguage)
    if (result) {
      setTranslatedText(result)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(translatedText)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="sourceText">Source Text</Label>
        <Textarea
          id="sourceText"
          {...register("sourceText", { required: "Source text is required" })}
          placeholder="Enter text to translate"
        />
        {errors.sourceText && <p className="text-sm text-red-500">{errors.sourceText.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="targetLanguage">Target Language</Label>
        <Input
          id="targetLanguage"
          {...register("targetLanguage", { required: "Target language is required" })}
          placeholder="Enter target language (e.g., Spanish, French, German)"
        />
        {errors.targetLanguage && <p className="text-sm text-red-500">{errors.targetLanguage.message}</p>}
      </div>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Translating..." : "Translate"}
      </Button>

      {error && <p className="text-sm text-red-500">{error}</p>}

      {translatedText && (
        <div className="mt-4 p-4 bg-secondary rounded-md relative">
          <h2 className="text-xl font-semibold mb-2">Translation</h2>
          <p className="whitespace-pre-wrap">{translatedText}</p>
          <Button variant="ghost" size="icon" className="absolute top-2 right-2" onClick={copyToClipboard}>
            <ClipboardIcon className="h-4 w-4" />
            <span className="sr-only">Copy to clipboard</span>
          </Button>
        </div>
      )}
    </form>
  )
}
