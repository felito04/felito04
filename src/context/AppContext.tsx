'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

type Lang = 'es' | 'en'
type Theme = 'light' | 'dark'
type View = 'landing' | 'portfolio'

interface AppContextType {
  lang: Lang
  theme: Theme
  view: View
  scrollTarget: string | null
  toggleLang: () => void
  toggleTheme: () => void
  showPortfolio: (scrollTo?: string) => void
  goHome: () => void
  clearScrollTarget: () => void
  t: (es: string, en: string) => string
}

const AppContext = createContext<AppContextType | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')
  const [theme, setTheme] = useState<Theme>('light')
  const [view, setView] = useState<View>('landing')
  const [scrollTarget, setScrollTarget] = useState<string | null>(null)

  const toggleLang = useCallback(() => {
    setLang(prev => (prev === 'es' ? 'en' : 'es'))
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }, [])

  const showPortfolio = useCallback((scrollTo?: string) => {
    setScrollTarget(scrollTo ?? null)
    setView('portfolio')
  }, [])

  const goHome = useCallback(() => {
    setView('landing')
    setScrollTarget(null)
  }, [])

  const clearScrollTarget = useCallback(() => {
    setScrollTarget(null)
  }, [])

  const t = useCallback(
    (es: string, en: string) => (lang === 'es' ? es : en),
    [lang],
  )

  return (
    <AppContext.Provider
      value={{ lang, theme, view, scrollTarget, toggleLang, toggleTheme, showPortfolio, goHome, clearScrollTarget, t }}
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
