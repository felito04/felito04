'use client'

import { useEffect } from 'react'
import { useApp } from '@/context/AppContext'

interface Props {
  portfolioReady: boolean
}

export function Navigation({ portfolioReady }: Props) {
  const { lang, theme, goHome, toggleTheme, toggleLang, t } = useApp()

  // Active nav link highlight on scroll
  useEffect(() => {
    if (!portfolioReady) return

    const onScroll = () => {
      const sy = window.scrollY + 80
      document.querySelectorAll('section[id]').forEach(section => {
        const s = section as HTMLElement
        document.querySelectorAll('#nav-items a').forEach(link => {
          const a = link as HTMLAnchorElement
          const isActive =
            a.getAttribute('href') === '#' + s.id &&
            sy >= s.offsetTop &&
            sy < s.offsetTop + s.offsetHeight
          a.style.color = isActive ? 'var(--blue)' : ''
        })
      })
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [portfolioReady])

  return (
    <nav>
      <div className="nav-logo" onClick={goHome}>
        FZ
      </div>

      {/* Desktop nav items — shown only when portfolio is ready */}
      <ul
        className="nav-items"
        id="nav-items"
        style={{ display: portfolioReady ? 'flex' : 'none' }}
      >
        {/* About mega menu */}
        <li className="nav-item">
          <span>
            {t('Sobre mí', 'About')}
            <svg className="nav-chevron" viewBox="0 0 24 24">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
          <div className="mega" style={{ minWidth: '360px' }}>
            <div className="mega-grid">
              <a className="mega-item" href="#sobre">
                <div className="mega-icon" style={{ background: '#eff6ff' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="2">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                  </svg>
                </div>
                <div>
                  <div className="mega-label">{t('Perfil', 'Profile')}</div>
                  <div className="mega-desc">
                    {t('Quién soy y qué me diferencia', 'Who I am and what sets me apart')}
                  </div>
                </div>
              </a>
              <a className="mega-item" href="#experiencia">
                <div className="mega-icon" style={{ background: '#fff7ed' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <div>
                  <div className="mega-label">{t('Experiencia', 'Experience')}</div>
                  <div className="mega-desc">
                    {t('Trayectoria España y EE.UU.', 'Spain & USA journey')}
                  </div>
                </div>
              </a>
            </div>
            <div className="mega-divider" />
            <div className="mega-footer">
              <div className="nav-avail">
                <div className="nav-avail-dot" />
                <span>{t('Disponible ahora', 'Available now')}</span>
              </div>
              &nbsp;·&nbsp;
              <a href="#contacto">{t('Contactar →', 'Contact →')}</a>
            </div>
          </div>
        </li>

        {/* Skills mega menu */}
        <li className="nav-item">
          <span>
            {t('Habilidades', 'Skills')}
            <svg className="nav-chevron" viewBox="0 0 24 24">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
          <div className="mega" style={{ minWidth: '520px' }}>
            <div className="mega-grid mega-grid-2">
              <a className="mega-item" href="#habilidades">
                <div className="mega-icon" style={{ background: '#eff6ff' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" />
                    <circle cx="12" cy="17" r="1" />
                  </svg>
                </div>
                <div>
                  <div className="mega-label">Flutter</div>
                  <div className="mega-desc">{t('iOS y Android', 'iOS & Android')}</div>
                </div>
              </a>
              <a className="mega-item" href="#habilidades">
                <div className="mega-icon" style={{ background: '#f0f9ff' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <div>
                  <div className="mega-label">React / Next.js</div>
                  <div className="mega-desc">{t('Frontend web', 'Web frontend')}</div>
                </div>
              </a>
              <a className="mega-item" href="#habilidades">
                <div className="mega-icon" style={{ background: '#f0fff4' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                </div>
                <div>
                  <div className="mega-label">Node.js</div>
                  <div className="mega-desc">{t('Backend y APIs', 'Backend & APIs')}</div>
                </div>
              </a>
              <a className="mega-item" href="#habilidades">
                <div className="mega-icon" style={{ background: '#f0fdf4' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                </div>
                <div>
                  <div className="mega-label">Excel + App Script</div>
                  <div className="mega-desc">
                    {t('Automatización avanzada', 'Advanced automation')}
                  </div>
                </div>
              </a>
              <a className="mega-item" href="#habilidades" style={{ gridColumn: 'span 2' }}>
                <div className="mega-icon" style={{ background: '#fdf4ff' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <div className="mega-label">{t('CRM desde cero', 'Custom CRM from scratch')}</div>
                  <div className="mega-desc">
                    {t(
                      'Si no existe, lo construyo. En un día.',
                      "If it doesn't exist, I build it. In one day.",
                    )}
                  </div>
                </div>
              </a>
            </div>
          </div>
        </li>

        {/* Projects mega menu */}
        <li className="nav-item">
          <span>
            {t('Proyectos', 'Projects')}
            <svg className="nav-chevron" viewBox="0 0 24 24">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
          <div className="mega" style={{ minWidth: '440px' }}>
            <div className="mega-grid">
              <a className="mega-item" href="https://whynottechnology.com" target="_blank" rel="noreferrer">
                <div
                  className="mega-icon"
                  style={{ background: 'linear-gradient(135deg,#0071e3,#00c4ff)' }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10" />
                  </svg>
                </div>
                <div>
                  <div className="mega-label">Why Not Technology</div>
                  <div className="mega-desc">
                    {t('Estudio tecnológico · En vivo', 'Tech studio · Live')}
                  </div>
                </div>
              </a>
              <a className="mega-item" href="https://sopeak.co" target="_blank" rel="noreferrer">
                <div className="mega-icon" style={{ background: '#1d1d1f' }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <div className="mega-label">SoPeak</div>
                  <div className="mega-desc">
                    {t('Plataforma social · En vivo', 'Social platform · Live')}
                  </div>
                </div>
              </a>
              <a className="mega-item" href="#proyectos">
                <div
                  className="mega-icon"
                  style={{ background: 'linear-gradient(135deg,#1a7f37,#30d158)' }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                </div>
                <div>
                  <div className="mega-label">{t('CRM a Medida', 'Custom CRM')}</div>
                  <div className="mega-desc">
                    {t('Excel + App Script · Bajo pedido', 'Excel + App Script · On request')}
                  </div>
                </div>
              </a>
            </div>
            <div className="mega-divider" />
            <div className="mega-footer">
              <a href="#proyectos">{t('Ver todos →', 'See all projects →')}</a>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <a href="#contacto">{t('Contacto', 'Contact')}</a>
        </li>
      </ul>

      {/* Hamburger button (mobile, only in portfolio) */}
      <button
        className="mob-menu-btn"
        id="mob-btn"
        aria-label="Menu"
        onClick={() => {
          document.getElementById('mob-btn')?.classList.toggle('open')
          document.getElementById('mob-nav')?.classList.toggle('open')
          const isOpen = document.getElementById('mob-nav')?.classList.contains('open')
          document.body.style.overflow = isOpen ? 'hidden' : ''
        }}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Right controls */}
      <div className="nav-right">
        <div
          className="nav-avail"
          id="nav-avail-top"
          style={{ display: portfolioReady ? 'flex' : 'none' }}
        >
          <div className="nav-avail-dot" />
          <span>{t('Disponible', 'Available')}</span>
        </div>

        <label className="theme-switch" title="Dark / Light">
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={() => toggleTheme()}
          />
          <div className="switch-track">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </div>
          <div className="switch-thumb" />
        </label>

        <button className="lang-pill" onClick={toggleLang}>
          {lang === 'es' ? 'EN' : 'ES'}
        </button>
      </div>
    </nav>
  )
}
