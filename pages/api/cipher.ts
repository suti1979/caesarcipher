// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { caesarCipher } from "../../lib/caesarCipher"
import { BodyData, ResData } from "../../type/types"

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResData>
) {
  try {
    const bodyData: BodyData = req.body
    const codedString = caesarCipher(bodyData.str, parseInt(bodyData.cipher))

    res.status(200).json({ codedStr: codedString })
  } catch (error) {
    res.status(500).json({ error: "Something went wrong... " + error })
  }
}
