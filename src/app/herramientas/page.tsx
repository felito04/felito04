'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { ToolsGrid } from '@/components/sections/Tools'
import { useApp } from '@/context/AppContext'

export default function ToolsPage() {
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
    <div className="tools-page">
      <header className="profile-nav">
        <Link className="profile-logo" href="/">FZ</Link>
        <Link className="profile-back" href="/portfolio#herramientas">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          {t('Volver', 'Back')}
        </Link>
      </header>

      <main className="tools-detail">
        <div className="tools-detail-shell">
          <p className="profile-eyebrow">{t('Herramientas', 'Tools')}</p>
          <h1>{t('Plataformas y stack', 'Platforms and stack')}</h1>
          <p className="tools-detail-intro">
            {t(
              'Aplicaciones, servicios y plataformas que utilizo para desarrollar, organizar y mejorar operaciones reales.',
              'Applications, services and platforms I use to build, organize and improve real operations.',
            )}
          </p>
          <ToolsGrid />
        </div>
      </main>
    </div>
  )
}
