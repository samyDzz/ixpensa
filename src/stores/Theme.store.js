import create from 'zustand'
import { persist } from 'zustand/middleware'

export const ThemeStore = create(
  persist(
    (set) => ({
      theme: 'light',
      activateDarkMode: () => {
        set(() => ({ theme: 'dark' }))
      },
      disactivateDarkMode: () => {
        set(() => ({ theme: 'light' }))
      }
    }),
    {
      name: 'theme'
    }
  )
)
