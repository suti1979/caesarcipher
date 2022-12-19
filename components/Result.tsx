import { Tooltip } from "@material-tailwind/react"
import { TCodeProps } from "../type/types"

export default function Result({ code, setCode }: TCodeProps) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
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
          className="w-6/12 hover:w-full transition-all p-4 border-indigo-500 border-2 border-dashed rounded-3xl
          hover:bg-indigo-400 hover:cursor-pointer"
        >
          <span>{code}</span>
        </div>
      </Tooltip>
      <button
        className="border-indigo-500 hover:bg-red-400 transition-all border-r-2 border-l-2 border-b-2 border-dashed p-1 pl-2 pr-2 rounded mb-8"
        onClick={() => setCode("")}
      >
        CLEAR
      </button>
    </>
  )
}
