'use client'

import { useApp } from '@/context/AppContext'

export function Skills() {
  const { t } = useApp()

  return (
    <section id="habilidades">
      <div className="si">
        <p className="s-label rv">{t('Habilidades', 'Skills')}</p>
        <h2 className="s-title rv" data-d="1">
          {t('Lo que aporto', 'What I bring')}
        </h2>
        <p className="s-sub rv" data-d="2">
          {t(
            'Expertise administrativo + tecnología. Una combinación poco frecuente.',
            'Administrative expertise + technology. A rare combination.',
          )}
        </p>

        <div className="sk-grid">
          {/* Skill 1 */}
          <div className="sk-card rv" data-d="1" data-skill="95">
            <div className="sk-ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <div className="sk-name">{t('Administración Empresarial', 'Business Administration')}</div>
            <div className="sk-desc">
              {t(
                'Procesos, reportes, facturación, planificación, RRHH.',
                'Processes, reporting, billing, planning, HR coordination.',
              )}
            </div>
            <div className="sk-bar-wrap">
              <div className="sk-bar" />
            </div>
          </div>

          {/* Skill 2 */}
          <div className="sk-card rv" data-d="2" data-skill="88">
            <div className="sk-ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="5" y="2" width="14" height="20" rx="2" />
                <circle cx="12" cy="17" r="1" />
              </svg>
            </div>
            <div className="sk-name">Flutter — Mobile Dev</div>
            <div className="sk-desc">
              {t('Apps multiplataforma iOS y Android.', 'Cross-platform iOS & Android apps.')}
            </div>
            <div className="sk-bar-wrap">
              <div className="sk-bar" />
            </div>
          </div>

          {/* Skill 3 */}
          <div className="sk-card rv" data-d="3" data-skill="85">
            <div className="sk-ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div className="sk-name">React / Next.js · Node.js</div>
            <div className="sk-desc">
              {t(
                'Plataformas modernas, frontend y backend.',
                'Modern web platforms, frontend & backend.',
              )}
            </div>
            <div className="sk-bar-wrap">
              <div className="sk-bar" />
            </div>
          </div>

          {/* Skill 4 */}
          <div className="sk-card rv" data-d="1" data-skill="97">
            <div className="sk-ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="sk-name">{t('CRM a Medida', 'Custom CRM Dev')}</div>
            <div className="sk-desc">
              {t(
                'CRMs completos desde cero. Sin licencia externa.',
                'Complete CRMs from scratch. No external license needed.',
              )}
            </div>
            <div className="sk-bar-wrap">
              <div className="sk-bar" />
            </div>
          </div>

          {/* Skill 5 */}
          <div className="sk-card rv" data-d="2" data-skill="96">
            <div className="sk-ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
              </svg>
            </div>
            <div className="sk-name">Excel + App Script</div>
            <div className="sk-desc">
              {t(
                'Automatización avanzada, dashboards, sistemas de gestión.',
                'Advanced automation, dashboards, full management systems.',
              )}
            </div>
            <div className="sk-bar-wrap">
              <div className="sk-bar" />
            </div>
          </div>

          {/* Skill 6 */}
          <div className="sk-card rv" data-d="3" data-skill="92">
            <div className="sk-ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 7l7-5 7 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <div className="sk-name">{t('Bilingüe ES / EN', 'Bilingual ES / EN')}</div>
            <div className="sk-desc">
              {t(
                'Español nativo, inglés profesional. España y EE.UU.',
                'Native Spanish, professional English. Spain & USA.',
              )}
            </div>
            <div className="sk-bar-wrap">
              <div className="sk-bar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
