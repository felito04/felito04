'use client'

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
          {/* Job 1 */}
          <div className="tl-item rv" data-d="1">
            <div className="tl-dot">
              <div className="tl-di" />
            </div>
            <div className="tl-card">
              <div className="tl-top">
                <div className="tl-title">
                  {t('Responsable Administrativo Senior', 'Senior Administrative Manager')}
                </div>
                <div className="tl-date">2015 — {t('Presente', 'Present')}</div>
              </div>
              <div className="tl-co">
                {t('Diversas empresas · España y EE.UU.', 'Various companies · Spain & USA')}
              </div>
              <div className="tl-desc">
                {t(
                  'Gestión de áreas administrativas, reportes, facturación, RRHH y automatización de procesos. Herramientas propias desde el primer día.',
                  'Management of administrative areas, reporting, billing, HR and process automation. Custom tools from day one.',
                )}
              </div>
              <div className="tags">
                <span className="tag">{t('Gestión', 'Management')}</span>
                <span className="tag">{t('Reportes', 'Reporting')}</span>
                <span className="tag">RRHH</span>
                <span className="tag">{t('Procesos', 'Processes')}</span>
              </div>
            </div>
          </div>

          {/* Job 2 */}
          <div className="tl-item rv" data-d="2">
            <div className="tl-dot">
              <div className="tl-di" />
            </div>
            <div className="tl-card">
              <div className="tl-top">
                <div className="tl-title">
                  {t('Desarrollador Móvil y Web', 'Mobile & Web Developer')}
                </div>
                <div className="tl-date">2018 — {t('Presente', 'Present')}</div>
              </div>
              <div className="tl-co">
                {t('Freelance / Proyectos propios', 'Freelance / Own projects')}
              </div>
              <div className="tl-desc">
                {t(
                  'Apps con Flutter, plataformas con React/Next.js y backends en Node.js. Cada proyecto nacido de una necesidad real.',
                  'Flutter apps, React/Next.js platforms and Node.js backends. Every project born from a real business need.',
                )}
              </div>
              <div className="tags">
                <span className="tag">Flutter</span>
                <span className="tag">React/Next.js</span>
                <span className="tag">Node.js</span>
                <span className="tag">iOS & Android</span>
              </div>
            </div>
          </div>

          {/* Job 3 */}
          <div className="tl-item rv" data-d="3">
            <div className="tl-dot">
              <div className="tl-di" />
            </div>
            <div className="tl-card">
              <div className="tl-top">
                <div className="tl-title">
                  {t('CRM a Medida y Automatización Excel', 'Custom CRM & Excel Automation')}
                </div>
                <div className="tl-date">2019 — {t('Presente', 'Present')}</div>
              </div>
              <div className="tl-co">
                {t('Diversos clientes · Internacional', 'Various clients · International')}
              </div>
              <div className="tl-desc">
                {t(
                  'Sistemas CRM personalizados desde cero. Automatización avanzada con App Script — sistemas de gestión completos dentro de Excel.',
                  'Custom CRM systems from scratch. Advanced Excel automation with App Script — full management systems inside spreadsheets.',
                )}
              </div>
              <div className="tags">
                <span className="tag">CRM</span>
                <span className="tag">{t('Excel Avanzado', 'Advanced Excel')}</span>
                <span className="tag">App Script</span>
                <span className="tag">{t('Automatización', 'Automation')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
