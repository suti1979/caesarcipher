import { Tooltip } from "@material-tailwind/react"
import { toast } from "react-toastify"
import { TCodeProps } from "../type/types"

export default function Result({ code, setCode }: TCodeProps) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast("🦄 Copied to clipboard.")
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
          className="w-4/5 rounded-3xl border-4 border-dashed border-indigo-500 p-4 transition-all
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
