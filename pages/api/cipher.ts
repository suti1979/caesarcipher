// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { caesarCipher } from "../../lib/caesarCipher"

type ResData = {
  codedStr: string
}

type BodyData = {
  str: string
  cipher: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResData>
) {
  const bodyData: BodyData = req.body
  const codedString = caesarCipher(bodyData.str, parseInt(bodyData.cipher))

  res.status(200).json({ codedStr: codedString })
}
