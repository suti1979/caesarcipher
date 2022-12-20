import { Tooltip } from "@material-tailwind/react"
import { useTheme } from "next-themes"
import { toast } from "react-toastify"
import { TCodeProps } from "../type/types"

export default function Result({ code, setCode }: TCodeProps) {
  const { theme } = useTheme()
  const themeMode = theme === "dark" ? "dark" : "light"

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast("🦄 Copied to clipboard.", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: themeMode
    })
  }

  return (
    <>
      <Tooltip
        content="Copy to clipboard"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <div
          onClick={() => copyToClipboard(code || "")}
          className="w-6/12 rounded-3xl border-4 border-dashed border-indigo-500 p-4 transition-all
          hover:w-full hover:cursor-pointer hover:bg-indigo-400 dark:border-gray-500 dark:hover:bg-gray-400"
        >
          <span>{code}</span>
        </div>
      </Tooltip>
      <button
        className="mb-8 rounded border-r-4 border-l-4 border-b-4 border-dashed border-indigo-500 p-2
        transition-all hover:bg-red-400 dark:border-gray-500"
        onClick={() => setCode("")}
      >
        CLEAR
      </button>
    </>
  )
}
