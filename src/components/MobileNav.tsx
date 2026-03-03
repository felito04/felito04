'use client'

import { useApp } from '@/context/AppContext'

interface Props {
  portfolioReady: boolean
}

function closeMobMenu() {
  document.getElementById('mob-btn')?.classList.remove('open')
  document.getElementById('mob-nav')?.classList.remove('open')
  document.body.style.overflow = ''
}

export function MobileNav({ portfolioReady }: Props) {
  const { t } = useApp()

  if (!portfolioReady) return null

  return (
    <div className="mob-nav" id="mob-nav">
      <div className="mob-section">
        <div className="mob-section-title">{t('Navegación', 'Navigation')}</div>

        <a className="mob-link" href="#sobre" onClick={closeMobMenu}>
          <div className="mob-link-ic" style={{ background: '#eff6ff' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="2">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
          </div>
          <div className="mob-link-text">
            <div className="mob-link-label">{t('Sobre mí', 'About me')}</div>
            <div className="mob-link-desc">{t('Perfil y Experiencia', 'Profile & Experience')}</div>
          </div>
          <div className="mob-link-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </a>

        <a className="mob-link" href="#habilidades" onClick={closeMobMenu}>
          <div className="mob-link-ic" style={{ background: '#fdf4ff' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <div className="mob-link-text">
            <div className="mob-link-label">{t('Habilidades', 'Skills')}</div>
            <div className="mob-link-desc">Flutter · React · Node · Excel · CRM</div>
          </div>
          <div className="mob-link-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </a>

        <a className="mob-link" href="#proyectos" onClick={closeMobMenu}>
          <div className="mob-link-ic" style={{ background: '#f0fff4' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
            </svg>
          </div>
          <div className="mob-link-text">
            <div className="mob-link-label">{t('Proyectos', 'Projects')}</div>
            <div className="mob-link-desc">Why Not · SoPeak · CRM</div>
          </div>
          <div className="mob-link-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </a>

        <a className="mob-link" href="#herramientas" onClick={closeMobMenu}>
          <div className="mob-link-ic" style={{ background: '#fff7ed' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16h16V7.5z" />
            </svg>
          </div>
          <div className="mob-link-text">
            <div className="mob-link-label">{t('Herramientas', 'Tools')}</div>
            <div className="mob-link-desc">{t('Stack completo', 'Full tech stack')}</div>
          </div>
          <div className="mob-link-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </a>

        <a className="mob-link" href="#contacto" onClick={closeMobMenu}>
          <div className="mob-link-ic" style={{ background: '#eff6ff' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <div className="mob-link-text">
            <div className="mob-link-label">{t('Contacto', 'Contact')}</div>
            <div className="mob-link-desc">05fazm@gmail.com</div>
          </div>
          <div className="mob-link-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </a>
      </div>

      <div className="mob-section">
        <div className="mob-section-title">{t('Proyectos en Vivo', 'Live Projects')}</div>

        <a
          className="mob-link"
          href="https://whynottechnology.com"
          target="_blank"
          rel="noreferrer"
        >
          <div
            className="mob-link-ic"
            style={{ background: 'linear-gradient(135deg,#0071e3,#00c4ff)' }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <div className="mob-link-text">
            <div className="mob-link-label">Why Not Technology</div>
            <div className="mob-link-desc">whynottechnology.com</div>
          </div>
          <div className="mob-link-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </div>
        </a>

        <a className="mob-link" href="https://sopeak.co" target="_blank" rel="noreferrer">
          <div className="mob-link-ic" style={{ background: '#1d1d1f' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
            </svg>
          </div>
          <div className="mob-link-text">
            <div className="mob-link-label">SoPeak</div>
            <div className="mob-link-desc">sopeak.co</div>
          </div>
          <div className="mob-link-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </div>
        </a>
      </div>

      <div className="mob-actions">
        <a
          href="mailto:05fazm@gmail.com"
          className="mob-cta-main"
          onClick={closeMobMenu}
        >
          {t('Escribirme', 'Email me')}
        </a>
        <a
          href="https://www.linkedin.com/in/f%C3%A9lix-alejandro-zamora-m%C3%A9ndez-47a818332"
          target="_blank"
          rel="noreferrer"
          className="mob-cta-sec"
        >
          LinkedIn
        </a>
      </div>
    </div>
  )
}
