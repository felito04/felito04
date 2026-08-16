'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

type Lang = 'es' | 'en'
type Theme = 'light' | 'dark'

interface AppContextType {
  lang: Lang
  theme: Theme
  toggleLang: () => void
  toggleTheme: () => void
  t: (es: string, en: string) => string
}

const AppContext = createContext<AppContextType | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')
  const [theme, setTheme] = useState<Theme>('light')

  const toggleLang = useCallback(() => {
    setLang(prev => (prev === 'es' ? 'en' : 'es'))
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }, [])

  const t = useCallback(
    (es: string, en: string) => (lang === 'es' ? es : en),
    [lang],
  )

  return (
    <AppContext.Provider
      value={{ lang, theme, toggleLang, toggleTheme, t }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
