"use client"

import { useState } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import { useTranslation } from "@/hooks/useTranslation"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { ClipboardCheck, ClipboardIcon } from "lucide-react"
import TranslateButton from "./TranslateButton"

type FormInputs = {
  sourceText: string
  targetLanguage: string
}

export default function TranslationForm() {
  const [translatedText, setTranslatedText] = useState("")
  const [isCopied, setIsCopied] = useState(false)
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
    if (navigator.clipboard && window.isSecureContext) {
      // For modern browsers
      navigator.clipboard.writeText(translatedText)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 5000)
    } else {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = translatedText;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        document.execCommand('copy');
        textArea.remove();
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 5000)
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      {/* Language Selection Bar */}
      <div className="flex flex-row gap-4 mb-4">
        <div className="flex-1">
          <Input
            value="Auto detect"
            disabled
            className="w-full bg-muted"
          />
        </div>
        <div className="flex-1">
          <Input
            id="targetLanguage"
            {...register("targetLanguage", { required: "Target language is required" })}
            placeholder={window.innerWidth < 640 ? "Target language" : "Enter target language (e.g., Spanish, French, German)"}
          />
          {errors.targetLanguage && <p className="text-sm text-red-500">{errors.targetLanguage.message}</p>}
        </div>
      </div>

      {/* Text Areas */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div className="flex-1">
          <Textarea
            id="sourceText"
            {...register("sourceText", { required: "Source text is required" })}
            placeholder="Enter text to translate"
            className="min-h-[200px] resize-none"
          />
          {errors.sourceText && <p className="text-sm text-red-500">{errors.sourceText.message}</p>}
        </div>
        <div className="flex-1 relative">
          <Textarea
            value={translatedText}
            disabled
            placeholder="Translation will appear here"
            className="min-h-[200px] resize-none bg-muted"
          />
          {translatedText && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2"
              onClick={copyToClipboard}
            >
              {isCopied ? (
                <ClipboardCheck className="h-4 w-4 text-green-500" />
              ) : (
                <ClipboardIcon className="h-4 w-4" />
              )}
              <span className="sr-only">
                {isCopied ? "Copied!" : "Copy to clipboard"}
              </span>
            </Button>
          )}
        </div>
      </div>

      {/* Translate Button */}
      <div className="flex justify-center">
        <TranslateButton isLoading={isLoading} />
      </div>

      {error && <p className="text-sm text-red-500 text-center mt-2">{error}</p>}
    </form>
  )
}
