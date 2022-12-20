import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { LightMode, DarkMode } from "../assets/icons"

const RenderThemeChanger = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {currentTheme === "dark" ? <DarkMode /> : <LightMode />}
    </div>
  )
}

export default RenderThemeChanger
