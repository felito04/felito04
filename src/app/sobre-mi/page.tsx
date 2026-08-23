'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useApp } from '@/context/AppContext'

type ProfileTab = 'enfoque' | 'publicaciones'

export default function AboutProfilePage() {
  const { t } = useApp()
  const [activeTab, setActiveTab] = useState<ProfileTab>('enfoque')

  useEffect(() => {
    document.body.classList.remove('landing-active')

    const syncTabWithHash = () => {
      setActiveTab(window.location.hash === '#publicaciones' ? 'publicaciones' : 'enfoque')
    }

    syncTabWithHash()
    window.addEventListener('hashchange', syncTabWithHash)

    return () => {
      window.removeEventListener('hashchange', syncTabWithHash)
      document.body.classList.add('landing-active')
    }
  }, [])

  const selectTab = (tab: ProfileTab) => {
    setActiveTab(tab)
    window.history.replaceState(null, '', `#${tab}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="profile-page">
      <header className="profile-nav">
        <Link className="profile-logo" href="/">FZ</Link>
        <Link className="profile-back" href="/portfolio#sobre">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          {t('Volver', 'Back')}
        </Link>
      </header>

      <main>
        <nav className="profile-tabs" aria-label={t('Secciones de Sobre mí', 'About me sections')}>
          <div className="profile-shell" role="tablist">
            <button
              id="profile-tab-enfoque"
              type="button"
              role="tab"
              aria-selected={activeTab === 'enfoque'}
              aria-controls="enfoque"
              onClick={() => selectTab('enfoque')}
            >
              <span>01</span>
              {t('Mi enfoque', 'My approach')}
            </button>
            <button
              id="profile-tab-publicaciones"
              type="button"
              role="tab"
              aria-selected={activeTab === 'publicaciones'}
              aria-controls="publicaciones"
              onClick={() => selectTab('publicaciones')}
            >
              <span>02</span>
              {t('Publicaciones', 'Publications')}
            </button>
          </div>
        </nav>

        {activeTab === 'enfoque' && <section
          id="enfoque"
          className="profile-narrative profile-tab-panel"
          role="tabpanel"
          aria-labelledby="profile-tab-enfoque"
        >
          <div className="profile-shell">
            <p className="profile-eyebrow">{t('Mi enfoque', 'My approach')}</p>
            <h2>{t('Cómo entiendo el trabajo', 'How I approach work')}</h2>

            <div className="profile-text-list">
              <article>
                <h3>{t('Orden antes que complejidad', 'Order before complexity')}</h3>
                <p>
                  {t(
                    'Creo que una operación funciona mejor cuando cada persona sabe qué debe hacer, dónde encontrar la información y cómo dar seguimiento a una tarea. Por eso comienzo entendiendo el proceso antes de intentar cambiarlo.',
                    'I believe an operation works best when everyone knows what to do, where to find information and how to follow up on a task. That is why I begin by understanding the process before trying to change it.',
                  )}
                </p>
              </article>

              <article>
                <h3>{t('Tecnología con sentido práctico', 'Technology with a practical purpose')}</h3>
                <p>
                  {t(
                    'No utilizo tecnología por utilizarla. La incorporo cuando puede ahorrar tiempo, reducir errores, facilitar el trabajo del equipo o aportar una visión más clara de lo que ocurre en el negocio.',
                    'I do not use technology for its own sake. I introduce it when it can save time, reduce errors, make the team’s work easier or provide a clearer view of what is happening in the business.',
                  )}
                </p>
              </article>

              <article>
                <h3>{t('Aprendizaje y adaptación', 'Learning and adaptability')}</h3>
                <p>
                  {t(
                    'Me adapto con rapidez a nuevas herramientas y formas de trabajo. Mi experiencia administrativa me permite entender las necesidades operativas, mientras que mi perfil técnico me ayuda a convertirlas en soluciones concretas.',
                    'I adapt quickly to new tools and ways of working. My administrative experience helps me understand operational needs, while my technical background allows me to turn them into concrete solutions.',
                  )}
                </p>
              </article>
            </div>

            <blockquote className="profile-quote">
              {t(
                'Mi objetivo es que los procesos dejen de ser una carga y se conviertan en una base sólida para trabajar mejor.',
                'My goal is for processes to stop being a burden and become a solid foundation for better work.',
              )}
            </blockquote>
          </div>
        </section>}

        {activeTab === 'publicaciones' && <section
          id="publicaciones"
          className="profile-publications profile-tab-panel"
          role="tabpanel"
          aria-labelledby="profile-tab-publicaciones"
        >
          <div className="profile-shell">
            <div className="profile-publications-heading">
              <p className="profile-eyebrow">{t('Publicaciones', 'Publications')}</p>
              <h2>{t('Ideas que forman mi manera de trabajar', 'Ideas that shape the way I work')}</h2>
            </div>

            <div className="profile-publication-list">
              <details className="profile-publication">
                <summary>
                  <div className="profile-publication-meta">
                    <span>01</span>
                    <p>{t('Organización y metodología', 'Organization and methodology')}</p>
                  </div>
                  <h3>{t('La organización como forma de pensar', 'Organization as a way of thinking')}</h3>
                  <span className="profile-publication-toggle" aria-hidden="true" />
                </summary>

                <div className="profile-publication-body">
                  <div className="profile-linkedin-embed">
                    <iframe
                      className="profile-linkedin-frame--image"
                      src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7494822306028990466"
                      title={t(
                        'Publicación de LinkedIn: La organización como forma de pensar',
                        'LinkedIn post: Organization as a way of thinking',
                      )}
                      loading="lazy"
                      allowFullScreen
                    />
                    <a
                      href="https://www.linkedin.com/feed/update/urn:li:activity:7494822306028990466/"
                      target="_blank"
                      rel="noreferrer"
                      className="profile-linkedin-link"
                    >
                      {t('Ver publicación en LinkedIn', 'View post on LinkedIn')}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M7 17 17 7M7 7h10v10" />
                      </svg>
                    </a>
                  </div>
                </div>
              </details>

              <details className="profile-publication">
                <summary>
                  <div className="profile-publication-meta">
                    <span>02</span>
                    <p>{t('Desarrollo móvil y aprendizaje', 'Mobile development and learning')}</p>
                  </div>
                  <h3>{t('Empezando a explorar Flutter', 'Starting to explore Flutter')}</h3>
                  <span className="profile-publication-toggle" aria-hidden="true" />
                </summary>

                <div className="profile-publication-body">
                  <div className="profile-linkedin-embed">
                    <iframe
                      src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7335377328144846849"
                      title={t(
                        'Publicación de LinkedIn: Empezando a explorar Flutter',
                        'LinkedIn post: Starting to explore Flutter',
                      )}
                      loading="lazy"
                      allowFullScreen
                    />
                    <a
                      href="https://www.linkedin.com/feed/update/urn:li:activity:7335377328144846849/"
                      target="_blank"
                      rel="noreferrer"
                      className="profile-linkedin-link"
                    >
                      {t('Ver publicación en LinkedIn', 'View post on LinkedIn')}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M7 17 17 7M7 7h10v10" />
                      </svg>
                    </a>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </section>}
      </main>
    </div>
  )
}
