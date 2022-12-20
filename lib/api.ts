import { Inputs } from "../type/types"

export const apiCall = async (data: Inputs) => {
  const response = await fetch("/api/cipher", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  const code = await response.json()
  return code.codedStr
}
