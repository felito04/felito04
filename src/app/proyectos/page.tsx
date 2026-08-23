'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { Projects } from '@/components/sections/Projects'
import { useApp } from '@/context/AppContext'

export default function ProjectsPage() {
  const { t } = useApp()

  useEffect(() => {
    document.body.classList.remove('landing-active')

    const anchor = decodeURIComponent(window.location.hash.slice(1))
    const timer = anchor
      ? window.setTimeout(() => document.getElementById(anchor)?.scrollIntoView(), 100)
      : undefined

    return () => {
      if (timer) window.clearTimeout(timer)
      document.body.classList.add('landing-active')
    }
  }, [])

  return (
    <div className="projects-page">
      <header className="profile-nav">
        <Link className="profile-logo" href="/">FZ</Link>
        <Link className="profile-back" href="/portfolio#proyectos">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          {t('Volver', 'Back')}
        </Link>
      </header>

      <main>
        <Projects preview={false} />
      </main>
    </div>
  )
}
