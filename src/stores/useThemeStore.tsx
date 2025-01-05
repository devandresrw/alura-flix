import { type StateCreator, create } from 'zustand'
import { persist } from 'zustand/middleware'


interface Themes {
  theme: "dark" | "light" | "system"
  setTheme: (themes: 'dark' | 'light' | 'system') => void;
}

type ThemeStore = Themes

const storeAPI: StateCreator<ThemeStore> = (set) => (
  {
    theme: "system",
    setTheme: (theme) => set({ theme })
  }
)

export const useThemeStore = create<ThemeStore>()(
  persist(
    storeAPI,
    { name: "theme-app" }
  )
)