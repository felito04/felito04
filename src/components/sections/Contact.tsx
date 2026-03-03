'use client'

import { FormEvent } from 'react'
import { useApp } from '@/context/AppContext'

export function Contact() {
  const { t } = useApp()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Form submission placeholder — connect to API or email service as needed
    alert(t('¡Mensaje enviado! Te responderé pronto.', 'Message sent! I will reply soon.'))
  }

  return (
    <section id="contacto">
      <div className="si">
        <p className="s-label rv">{t('Contacto', 'Contact')}</p>
        <h2 className="s-title rv" data-d="1">
          {t('Hablemos.', "Let's talk.")}
        </h2>
        <p className="s-sub rv" data-d="2">
          {t(
            'Abierto a roles administrativos y perfiles híbridos en España y EE.UU.',
            'Open to administrative and hybrid roles in Spain and the USA.',
          )}
        </p>

        <div className="ct-grid">
          {/* Contact info */}
          <div className="ct-info rvl" data-d="2">
            <a href="mailto:05fazm@gmail.com" className="ct-item">
              <div className="ct-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="ct-lbl">Email</div>
                <div className="ct-val">05fazm@gmail.com</div>
              </div>
            </a>

            <a href="tel:+34666489663" className="ct-item">
              <div className="ct-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div className="ct-lbl">España</div>
                <div className="ct-val">+34 666 48 96 63</div>
              </div>
            </a>

            <a href="tel:+17865057989" className="ct-item">
              <div className="ct-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div className="ct-lbl">USA</div>
                <div className="ct-val">+1 (786) 505-7989</div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/f%C3%A9lix-alejandro-zamora-m%C3%A9ndez-47a818332"
              target="_blank"
              rel="noreferrer"
              className="ct-item"
            >
              <div className="ct-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div>
                <div className="ct-lbl">LinkedIn</div>
                <div className="ct-val">Félix Alejandro Zamora</div>
              </div>
            </a>

            <div className="ct-item">
              <div className="ct-ic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="ct-lbl">{t('Ubicación', 'Location')}</div>
                <div className="ct-val">Valencia · Coral Gables</div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="ct-form rvr" data-d="2">
            <form onSubmit={handleSubmit}>
              <div className="fg">
                <label>{t('Nombre completo', 'Full name')}</label>
                <input
                  type="text"
                  placeholder={t('Tu nombre', 'Your name')}
                  required
                />
              </div>
              <div className="fg">
                <label>Email</label>
                <input
                  type="email"
                  placeholder={t('tu@email.com', 'your@email.com')}
                  required
                />
              </div>
              <div className="fg">
                <label>{t('Mensaje', 'Message')}</label>
                <textarea
                  placeholder={t(
                    'Cuéntame sobre la oportunidad...',
                    'Tell me about the opportunity...',
                  )}
                  required
                />
              </div>
              <button type="submit" className="form-btn">
                {t('Enviar Mensaje →', 'Send Message →')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
