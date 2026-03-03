'use client'

import { useApp } from '@/context/AppContext'

export function Landing() {
  const { t, showPortfolio } = useApp()

  return (
    <div id="landing-view">
      {/* Background */}
      <div className="l-bg">
        <div className="l-orb o1" />
        <div className="l-orb o2" />
        <div className="l-orb o3" />
        <div className="l-grid" />
      </div>

      <div className="l-inner">
        {/* Avatar */}
        <div className="l-avatar-wrap l-anim" style={{ animationDelay: '.3s' }}>
          <div className="l-ring l-ring1" />
          <div className="l-ring l-ring2" />
          <div className="l-avatar">FZ</div>
        </div>

        {/* Title */}
        <h1 className="l-title l-anim" style={{ animationDelay: '.45s' }}>
          Félix <em>Zamora</em>
        </h1>

        {/* Subtitle */}
        <p className="l-sub l-anim" style={{ animationDelay: '.55s' }}>
          {t(
            'Profesional Administrativo · Desarrollador de Software · Creador de CRM',
            'Administrative Professional · Software Developer · CRM Builder',
          )}
        </p>

        {/* Skill chips */}
        <div className="l-chips l-anim" style={{ animationDelay: '.65s' }}>
          <div className="lchip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="5" y="2" width="14" height="20" rx="2" />
              <circle cx="12" cy="17" r="1" />
            </svg>
            Flutter
          </div>
          <div className="lchip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
            React / Next.js
          </div>
          <div className="lchip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
            Excel + App Script
          </div>
          <div className="lchip">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            {t('CRM a Medida', 'Custom CRM')}
          </div>
        </div>

        {/* CTA buttons */}
        <div className="l-btns l-anim" style={{ animationDelay: '.75s' }}>
          <button className="btn-main" onClick={() => showPortfolio()}>
            {t('Ver Portfolio', 'View Portfolio')}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <button className="btn-sec" onClick={() => showPortfolio('contacto')}>
            {t('Contactar', 'Contact me')}
          </button>
        </div>

        {/* Locations */}
        <div className="l-locs l-anim" style={{ animationDelay: '.85s' }}>
          <span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {t('Valencia, España', 'Valencia, Spain')}
          </span>
          <span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Coral Gables, USA
          </span>
        </div>
      </div>
    </div>
  )
}
