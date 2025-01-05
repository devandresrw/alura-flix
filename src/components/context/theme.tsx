'use client'
import { ThemeProvider } from "next-themes"

interface MyThemeProviderProps {
  children: React.ReactNode
}

export function MyThemeProvider({ children }: MyThemeProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      {children}
    </ThemeProvider>
  )
}