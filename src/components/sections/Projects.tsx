'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useApp } from '@/context/AppContext'

export function Projects({ preview = true }: { preview?: boolean }) {
  const { t } = useApp()

  return (
    <section id="proyectos">
      <div className="si">
        <p className={`s-label${preview ? ' rv' : ''}`}>{t('Proyectos', 'Projects')}</p>
        <h2 className={`s-title${preview ? ' rv' : ''}`} data-d="1">
          {t('Trabajo real, impacto real', 'Real work, real impact')}
        </h2>
        <p className={`s-sub${preview ? ' rv' : ''}`} data-d="2">
          {t(
            'Proyectos reales construidos y desplegados.',
            'Live projects built and deployed.',
          )}
        </p>

        {preview && (
          <div className="skills-preview-heading projects-preview-heading rv" data-d="2">
            <h3>{t('Proyectos destacados', 'Featured projects')}</h3>
            <Link href="/proyectos">
              {t('Ver más', 'View more')}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>
        )}

        <div className="pr-grid">
          {/* Project 1: Why Not Technology */}
          <div className={`pr-card${preview ? ' rv' : ''}`} data-d="1">
            <div className="pr-thumb pr-thumb-logo">
              <Image
                src="/logos/projects/why-not-technology.jpg"
                alt="Why Not Technology"
                width={1024}
                height={1024}
                sizes="160px"
              />
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
          <div className={`pr-card${preview ? ' rv' : ''}`} data-d="2">
            <div className="pr-thumb pr-thumb-logo">
              <Image
                src="/logos/projects/sopeak-transparent.png"
                alt="SoPeak"
                width={1254}
                height={1254}
                sizes="160px"
              />
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

          {/* Project 3: Aerobag Store */}
          <div className={`pr-card${preview ? ' rv' : ''}`} data-d="3">
            <div className="pr-thumb pr-thumb-logo pr-thumb-aerobag">
              <img
                src="https://www.aerobagstore.com/brand/logo_aerobagstore.svg"
                alt="Aerobag Store"
                loading="lazy"
              />
            </div>
            <div className="pr-body">
              <div className="pr-type">E-commerce · Next.js</div>
              <div className="pr-title">Aerobag Store</div>
              <div className="pr-desc">
                {t(
                  'E-commerce multilingüe para una solución de compresión de equipaje, con presentación de producto, reseñas, preguntas frecuentes y proceso de compra protegido.',
                  'Multilingual e-commerce for a luggage compression solution, with product presentation, reviews, frequently asked questions and a protected purchasing flow.',
                )}
              </div>
              <div className="tags">
                <span className="tag">Next.js</span>
                <span className="tag">E-commerce</span>
                <span className="tag">Multilingual</span>
              </div>
              <div className="pr-foot">
                <div className="live-b">
                  <span className="live-bd" />
                  LIVE
                </div>
                <a
                  href="https://www.aerobagstore.com"
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

          {/* Project 4: After-sales communication system */}
          {!preview && (
          <div id="proyecto-postventa" className="pr-card" data-d="4">
            <div
              className="pr-thumb"
              style={{ background: 'linear-gradient(135deg, #0057b8, #00a6d6)' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M7 8h10M7 12h6" />
                <path d="M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
                <path d="m15.5 12.5 1.5 1.5 3-3" />
              </svg>
            </div>
            <div className="pr-body">
              <div className="pr-type">
                {t('Herramienta interna · Operaciones', 'Internal tool · Operations')}
              </div>
              <div className="pr-title">
                {t('Sistema de comunicación de postventa', 'After-sales communication system')}
              </div>
              <div className="pr-desc">
                {t(
                  'Programa creado para centralizar la comunicación entre empresa, proveedor y cliente dentro de un flujo de postventa ordenado y trazable.',
                  'A program created to centralize communication between the company, suppliers and customers within an organized, traceable after-sales workflow.',
                )}
              </div>
              <div className="tags">
                <span className="tag">{t('Postventa', 'After-sales')}</span>
                <span className="tag">{t('Proveedores', 'Suppliers')}</span>
                <span className="tag">{t('Flujos', 'Workflows')}</span>
              </div>
              <div className="pr-foot">
                <div className="live-b">
                  <span className="live-bd" />
                  LIVE
                </div>
                <a
                  href="https://gestiona-garantia.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="pr-link"
                >
                  {t('Abrir programa →', 'Open program →')}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          )}

        </div>
      </div>
    </section>
  )
}
