'use client'

import { useEffect } from 'react'
import { useApp } from '@/context/AppContext'
import { CustomCursor } from './CustomCursor'
import { Navigation } from './Navigation'
import { MobileNav } from './MobileNav'
import { Portfolio } from './Portfolio'

export function PortfolioApp() {
  const { theme } = useApp()

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  useEffect(() => {
    document.body.classList.remove('landing-active')
    document.body.classList.add('show-portfolio')

    const sectionId = decodeURIComponent(window.location.hash.slice(1))
    let timer: number | undefined
    if (sectionId) {
      timer = window.setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView()
      }, 100)
    }

    return () => {
      if (timer) window.clearTimeout(timer)
      document.body.classList.remove('show-portfolio')
      document.body.classList.add('landing-active')
    }
  }, [])

  return (
    <>
      <CustomCursor />
      <Navigation portfolioReady />
      <MobileNav portfolioReady />
      <Portfolio />
    </>
  )
}
