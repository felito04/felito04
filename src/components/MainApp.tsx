'use client'

import { useEffect } from 'react'
import { useApp } from '@/context/AppContext'
import { Loader } from './Loader'
import { CustomCursor } from './CustomCursor'
import { Navigation } from './Navigation'
import { Landing } from './Landing'

export function MainApp() {
  const { theme } = useApp()

  // Apply dark/light theme to <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  useEffect(() => {
    document.body.classList.remove('show-portfolio')
    document.body.classList.add('landing-active')
  }, [])

  return (
    <>
      <Loader />
      <CustomCursor />
      <Navigation portfolioReady={false} />
      <Landing />
    </>
  )
}
