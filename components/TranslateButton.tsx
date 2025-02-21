import { Button } from "./ui/button";

interface TranslateButtonProps {
  isLoading: boolean;
}

export default function TranslateButton({ isLoading }: TranslateButtonProps) {
  return (
    <Button
      type="submit"
      className="w-full relative inline-flex h-12 overflow-hidden rounded-[12px] p-[3px] dark:p-[2px] focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black"
    >
      <span className="absolute inset-[-1500%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#93C5FD_0%,#2563EB_50%,#93C5FD_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[9px] dark:rounded-[10px] bg-white dark:bg-black px-3 py-1 text-sm font-medium text-black dark:text-white backdrop-blur-3xl">
        {isLoading ? "Translating..." : "Translate"}
      </span>
    </Button>
  )
}
