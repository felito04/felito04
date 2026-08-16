'use client'

import Image from 'next/image'
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
          <div className="pr-card rv" data-d="2">
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

        </div>
      </div>
    </section>
  )
}
