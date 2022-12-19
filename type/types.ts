import { Dispatch, SetStateAction } from "react"

export type Inputs = {
  str: string
  cipher: number
}

export type TCodeProps = {
  code?: string
  setCode: Dispatch<SetStateAction<string>>
}
