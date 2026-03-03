'use client'

import { useApp } from '@/context/AppContext'

export function About() {
  const { lang, t } = useApp()

  return (
    <section id="sobre">
      <div className="si">
        <p className="s-label rv">{t('Sobre mí', 'About me')}</p>
        <h2 className="s-title rv" data-d="1">
          {t('Más que un cargo.', 'More than a title.')}
          <br />
          {t('Un perfil único.', 'A unique profile.')}
        </h2>

        <div className="about-grid">
          {/* Left: text */}
          <div className="rvl" data-d="2">
            <div className="about-text">
              <p>
                {lang === 'es' ? (
                  <>
                    Soy <strong>Félix Alejandro Zamora Méndez</strong>, profesional administrativo
                    con amplia experiencia en gestión empresarial, optimización de procesos y
                    coordinación de equipos.
                  </>
                ) : (
                  <>
                    I&apos;m <strong>Félix Alejandro Zamora Méndez</strong>, an administrative
                    professional with deep experience in business management, process optimization
                    and team coordination.
                  </>
                )}
              </p>
              <p>
                {t(
                  'Desarrollo apps móviles y web, construyo sistemas CRM personalizados desde cero y automatizo procesos complejos en Excel con App Script.',
                  'I develop mobile and web apps, build custom CRM systems from scratch and automate complex processes in Excel using App Script.',
                )}
              </p>
            </div>
            <div className="about-hl">
              <div className="about-hl-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <p>
                {t(
                  'Si no existe un CRM que se adapte al negocio, lo construyo. En un día.',
                  "If a CRM doesn't exist that fits the business, I build it. In one day.",
                )}
              </p>
            </div>
          </div>

          {/* Right: stats */}
          <div className="stats-grid rvr" data-d="2">
            <div className="stat">
              <div className="sn counter" data-target="10">
                0
              </div>
              <div className="sl">{t('Años exp.', 'Years exp.')}</div>
            </div>
            <div className="stat">
              <div className="sn">2</div>
              <div className="sl">{t('Países', 'Countries')}</div>
            </div>
            <div className="stat">
              <div className="sn">∞</div>
              <div className="sl">{t('CRMs creados', 'CRMs built')}</div>
            </div>
            <div className="stat">
              <div className="sn counter" data-target="4">
                0
              </div>
              <div className="sl">{t('Tecnologías', 'Core tech')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
