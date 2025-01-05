'use client'
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { CiMonitor, CiSun, CiCloudMoon } from "react-icons/ci"
import { useThemeStore } from "@/stores/useThemeStore"


export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const storedTheme = useThemeStore((state) => state.theme)
  const setStoredTheme = useThemeStore((state) => state.setTheme)

  useEffect(() => {
    setMounted(true)
    if (storedTheme) {
      setTheme(storedTheme)
    }
  }, [storedTheme, setTheme])

  const handleThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    setStoredTheme(newTheme)
  }

  if (!mounted) return null

  return (
    <div className="flex items-center justify-center">
      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="p-3 rounded-md focus:outline-none text-[clamp(1rem,2vw,2rem)]"
        onClick={handleThemeChange}

      >
        {theme === "dark" ? <CiSun size={35} /> : <CiCloudMoon size={35} />}
      </button>
    </div>
  )
}