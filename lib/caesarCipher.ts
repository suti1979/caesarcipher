export const caesarCipher = (str: string, num: number) => {
  if (num > 26 || num < -26) num %= 26
  let res = ""

  for (let i = 0; i < str.length; i++) {
    let charPoz: number = str.charCodeAt(i)
    //lo
    if (charPoz >= 97 && charPoz <= 122) {
      charPoz += num

      if (charPoz < 97) charPoz = 122 - (97 - charPoz - 1)
      if (charPoz > 122) charPoz = 97 + (charPoz - 122 - 1)

      res += String.fromCharCode(charPoz)
    }
    //up
    else if (charPoz >= 65 && charPoz <= 90) {
      charPoz += num
      if (charPoz < 65) charPoz = 90 - (65 - charPoz - 1)
      if (charPoz > 90) charPoz = 65 + (charPoz - 90 - 1)
      res += String.fromCharCode(charPoz)
    } else res += String.fromCharCode(charPoz)
  }

  return res
}
