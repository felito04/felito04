'use client'

import { useApp } from '@/context/AppContext'

export function Tools() {
  const { t } = useApp()

  return (
    <section id="herramientas">
      <div className="si">
        <p className="s-label rv">{t('Herramientas', 'Tools')}</p>
        <h2 className="s-title rv" data-d="1">
          {t('Mi Stack', 'My Tech Stack')}
        </h2>
        <p className="s-sub rv" data-d="2">
          {t('Las herramientas que uso cada día.', 'Tools I use every day.')}
        </p>

        <div className="tools-grid">
          <div className="tool rv" data-d="1">
            <div className="tool-ic" style={{ background: '#e8f0fe' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#0057d9" strokeWidth="2">
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <circle cx="12" cy="17" r="1" />
              </svg>
            </div>
            <div>
              <div className="tool-name">Flutter</div>
              <div className="tool-sub">{t('Móvil multiplataforma', 'Cross-platform mobile')}</div>
            </div>
          </div>

          <div className="tool rv" data-d="2">
            <div className="tool-ic" style={{ background: '#f0f9ff' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <div>
              <div className="tool-name">React / Next.js</div>
              <div className="tool-sub">Frontend web</div>
            </div>
          </div>

          <div className="tool rv" data-d="3">
            <div className="tool-ic" style={{ background: '#f0fff4' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
              </svg>
            </div>
            <div>
              <div className="tool-name">Node.js</div>
              <div className="tool-sub">{t('Backend y APIs', 'Backend & APIs')}</div>
            </div>
          </div>

          <div className="tool rv" data-d="4">
            <div className="tool-ic" style={{ background: '#f0fdf4' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#15803d" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
            </div>
            <div>
              <div className="tool-name">{t('Excel Avanzado', 'Advanced Excel')}</div>
              <div className="tool-sub">{t('Nivel experto', 'Expert level')}</div>
            </div>
          </div>

          <div className="tool rv" data-d="1">
            <div className="tool-ic" style={{ background: '#fff7ed' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="2">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16h16V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <div>
              <div className="tool-name">App Script</div>
              <div className="tool-sub">{t('Automatización avanzada', 'Advanced automation')}</div>
            </div>
          </div>

          <div className="tool rv" data-d="2">
            <div className="tool-ic" style={{ background: '#fdf4ff' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#9333ea" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <div className="tool-name">{t('CRM a Medida', 'Custom CRM')}</div>
              <div className="tool-sub">{t('Desde cero', 'Built from scratch')}</div>
            </div>
          </div>

          <div className="tool rv" data-d="3">
            <div className="tool-ic" style={{ background: '#eff6ff' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
            </div>
            <div>
              <div className="tool-name">{t('Gestión Procesos', 'Process Mgmt.')}</div>
              <div className="tool-sub">{t('Expertise admin.', 'Admin expertise')}</div>
            </div>
          </div>

          <div className="tool rv" data-d="4">
            <div className="tool-ic" style={{ background: '#fff1f2' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="2">
                <path d="M5 7l7-5 7 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <div>
              <div className="tool-name">ES / EN</div>
              <div className="tool-sub">{t('Bilingüe', 'Bilingual')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
