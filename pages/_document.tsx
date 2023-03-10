import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-indigo-900 text-yellow-50 dark:bg-gray-300 dark:text-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
