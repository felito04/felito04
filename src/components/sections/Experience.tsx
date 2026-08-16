'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useApp } from '@/context/AppContext'

export function Experience() {
  const { t } = useApp()

  return (
    <section id="experiencia">
      <div className="si">
        <p className="s-label rv">{t('Experiencia', 'Experience')}</p>
        <h2 className="s-title rv" data-d="1">
          {t('Trayectoria Profesional', 'Professional Journey')}
        </h2>
        <p className="s-sub rv" data-d="2">
          {t(
            'Gestión administrativa respaldada por tecnología.',
            'Administrative management backed by technology.',
          )}
        </p>

        <div className="tl">
          <div className="tl-item rv" data-d="1">
            <div className="tl-dot">
              <div className="tl-di" />
            </div>
            <Link
              className="tl-card tl-card-company tl-card-link"
              href="/experiencia/myurbanscoot"
              aria-label={t(
                'Ver experiencia profesional en MYURBANSCOOT SL',
                'View professional experience at MYURBANSCOOT SL',
              )}
            >
              <div className="tl-top">
                <div className="tl-title">MYURBANSCOOT SL</div>
                <div className="tl-date">
                  {t('Junio 2025 — Actualidad', 'June 2025 — Present')}
                </div>
              </div>
              <span className="tl-company-logo">
                <Image
                  src="/logos/companies/myurbanscoot.png"
                  alt="MyUrbanScoot"
                  width={382}
                  height={101}
                  sizes="(max-width: 768px) 210px, 260px"
                />
              </span>
              <span className="tl-card-action">
                {t('Ver experiencia', 'View experience')}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
