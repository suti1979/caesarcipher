import { Dispatch, SetStateAction } from "react"

export type Inputs = {
  str: string
  cipher: number
}

export type TCodeProps = {
  code?: string
  setCode: Dispatch<SetStateAction<string>>
}

export type ResData = {
  codedStr?: string
  error?: string
}

export type BodyData = {
  str: string
  cipher: string
}