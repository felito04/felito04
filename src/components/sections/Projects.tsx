'use client'

import { useApp } from '@/context/AppContext'

export function Projects() {
  const { t } = useApp()

  return (
    <section id="proyectos">
      <div className="si">
        <p className="s-label rv">{t('Proyectos', 'Projects')}</p>
        <h2 className="s-title rv" data-d="1">
          {t('Trabajo real. Impacto real.', 'Real Work. Real Impact.')}
        </h2>
        <p className="s-sub rv" data-d="2">
          {t(
            'Proyectos reales construidos y desplegados.',
            'Live projects built and deployed.',
          )}
        </p>

        <div className="pr-grid">
          {/* Project 1: Why Not Technology */}
          <div className="pr-card rv" data-d="1">
            <div
              className="pr-thumb"
              style={{ background: 'linear-gradient(135deg,#0071e3,#00c4ff)' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div className="pr-body">
              <div className="pr-type">
                {t('Plataforma Web · Next.js', 'Web Platform · Next.js')}
              </div>
              <div className="pr-title">Why Not Technology</div>
              <div className="pr-desc">
                {t(
                  'Estudio tecnológico combinando diseño e ingeniería. Full-stack, UI/UX y motion 3D.',
                  'Technology studio combining design and engineering. Full-stack, UI/UX and 3D motion.',
                )}
              </div>
              <div className="tags">
                <span className="tag">Next.js</span>
                <span className="tag">Node.js</span>
                <span className="tag">Full-stack</span>
              </div>
              <div className="pr-foot">
                <div className="live-b">
                  <span className="live-bd" />
                  LIVE
                </div>
                <a
                  href="https://whynottechnology.com"
                  target="_blank"
                  rel="noreferrer"
                  className="pr-link"
                >
                  {t('Visitar →', 'Visit →')}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2: SoPeak */}
          <div className="pr-card rv" data-d="2">
            <div
              className="pr-thumb"
              style={{ background: 'linear-gradient(135deg,#1d1d1f,#3a3a3c)' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="pr-body">
              <div className="pr-type">
                {t('Plataforma Social · React', 'Social Platform · React')}
              </div>
              <div className="pr-title">SoPeak</div>
              <div className="pr-desc">
                {t(
                  'Comunidad social. Sin likes, solo Peaks. Funciones en tiempo real y stack web moderno.',
                  'Social community. No likes, only Peaks. Real-time features and modern web stack.',
                )}
              </div>
              <div className="tags">
                <span className="tag">React</span>
                <span className="tag">Real-time</span>
                <span className="tag">Social</span>
              </div>
              <div className="pr-foot">
                <div className="live-b">
                  <span className="live-bd" />
                  LIVE
                </div>
                <a
                  href="https://sopeak.co"
                  target="_blank"
                  rel="noreferrer"
                  className="pr-link"
                >
                  {t('Visitar →', 'Visit →')}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Project 3: Custom CRM */}
          <div className="pr-card rv" data-d="3">
            <div
              className="pr-thumb"
              style={{ background: 'linear-gradient(135deg,#1a7f37,#30d158)' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
            </div>
            <div className="pr-body">
              <div className="pr-type">
                {t('CRM · App Script + Excel', 'CRM · App Script + Excel')}
              </div>
              <div className="pr-title">{t('CRM desde Cero', 'Custom CRM from scratch')}</div>
              <div className="pr-desc">
                {t(
                  'Sistema de gestión construido para necesidades exactas del negocio. Sin licencia — el sistema se adapta a ti.',
                  'Complete management system built for exact business needs. No license — the tool adapts to you.',
                )}
              </div>
              <div className="tags">
                <span className="tag">App Script</span>
                <span className="tag">Excel</span>
                <span className="tag">CRM</span>
              </div>
              <div className="pr-foot">
                <div />
                <a href="#contacto" className="pr-link">
                  {t('Pedir demo →', 'Request demo →')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
