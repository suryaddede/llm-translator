import type React from "react"
import { forwardRef } from "react"

type LanguageSelectorProps = {
  label: string
  error?: string
} & React.InputHTMLAttributes<HTMLInputElement>

const LanguageSelector = forwardRef<HTMLInputElement, LanguageSelectorProps>(({ label, error, ...props }, ref) => {
  return (
    <div>
      <label htmlFor={props.id || "language"} className="block text-sm font-medium mb-1">
        {label}
      </label>
      <input
        ref={ref}
        id={props.id || "language"}
        type="text"
        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
        placeholder="Enter target language (e.g., Spanish, French, German)"
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500 dark:text-red-400">{error}</p>}
    </div>
  )
})

LanguageSelector.displayName = "LanguageSelector"

export default LanguageSelector
