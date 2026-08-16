'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { useApp } from '@/context/AppContext'

export default function MyUrbanScootExperiencePage() {
  const { t } = useApp()

  useEffect(() => {
    document.body.classList.remove('landing-active')
    return () => document.body.classList.add('landing-active')
  }, [])

  return (
    <div className="experience-page">
      <header className="profile-nav">
        <Link className="profile-logo" href="/">FZ</Link>
        <Link className="profile-back" href="/portfolio#experiencia">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          {t('Volver a la trayectoria', 'Back to professional journey')}
        </Link>
      </header>

      <main className="experience-detail">
        <div className="experience-detail-shell">
          <p className="profile-eyebrow">{t('Experiencia profesional', 'Professional experience')}</p>

          <div className="experience-detail-heading">
            <div>
              <h1>MYURBANSCOOT SL</h1>
              <p>{t('Junio de 2025 — Actualidad', 'June 2025 — Present')}</p>
            </div>
            <div className="experience-detail-logo">
              <Image
                src="/logos/companies/myurbanscoot.png"
                alt="MyUrbanScoot"
                width={382}
                height={101}
                priority
              />
            </div>
          </div>

          <div className="experience-detail-facts">
            <div>
              <span>{t('Empresa', 'Company')}</span>
              <strong>MYURBANSCOOT SL</strong>
            </div>
            <div>
              <span>{t('Periodo', 'Period')}</span>
              <strong>{t('Junio 2025 — Actualidad', 'June 2025 — Present')}</strong>
            </div>
          </div>

          <a
            className="experience-company-link"
            href="https://myurbanscoot.com/"
            target="_blank"
            rel="noreferrer"
          >
            {t('Visitar la web de MyUrbanScoot', 'Visit the MyUrbanScoot website')}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </a>
        </div>
      </main>
    </div>
  )
}
