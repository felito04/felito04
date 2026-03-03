'use client'

import { useEffect, useState, useRef } from 'react'
import { useApp } from '@/context/AppContext'
import { Loader } from './Loader'
import { CustomCursor } from './CustomCursor'
import { Navigation } from './Navigation'
import { MobileNav } from './MobileNav'
import { Landing } from './Landing'
import { Portfolio } from './Portfolio'

export function MainApp() {
  const { theme, view, scrollTarget, clearScrollTarget } = useApp()
  const [portfolioReady, setPortfolioReady] = useState(false)
  const prevView = useRef<'landing' | 'portfolio'>('landing')

  // Apply dark/light theme to <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  // Handle view transitions
  useEffect(() => {
    if (view === 'portfolio' && prevView.current === 'landing') {
      prevView.current = 'portfolio'

      const lv = document.getElementById('landing-view')
      if (lv) {
        lv.style.transition = 'opacity .6s, transform .6s'
        lv.style.opacity = '0'
        lv.style.transform = 'translateY(-30px)'
      }

      const timer = setTimeout(() => {
        if (lv) lv.style.display = 'none'
        document.body.classList.remove('landing-active')
        document.body.classList.add('show-portfolio')
        setPortfolioReady(true)
        window.scrollTo(0, 0)

        if (scrollTarget) {
          setTimeout(() => {
            document.getElementById(scrollTarget)?.scrollIntoView({ behavior: 'smooth' })
            clearScrollTarget()
          }, 100)
        }
      }, 550)

      return () => clearTimeout(timer)
    }

    if (view === 'landing' && prevView.current === 'portfolio') {
      prevView.current = 'landing'
      setPortfolioReady(false)
      document.body.classList.remove('show-portfolio')
      document.body.classList.add('landing-active')

      const lv = document.getElementById('landing-view')
      if (lv) {
        lv.style.display = ''
        lv.style.transition = 'none'
        lv.style.opacity = '0'
        lv.style.transform = 'translateY(20px)'
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            lv.style.transition = 'opacity .4s, transform .4s'
            lv.style.opacity = '1'
            lv.style.transform = 'none'
          }),
        )
      }
      window.scrollTo(0, 0)
    }
  }, [view, scrollTarget, clearScrollTarget])

  return (
    <>
      <Loader />
      <CustomCursor />
      <Navigation portfolioReady={portfolioReady} />
      <MobileNav portfolioReady={portfolioReady} />
      <Landing />
      {portfolioReady && <Portfolio />}
    </>
  )
}
