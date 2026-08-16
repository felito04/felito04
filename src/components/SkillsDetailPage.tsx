'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { SkillCard } from '@/components/SkillCard'
import type { PortfolioSkill } from '@/data/skills'
import { useApp } from '@/context/AppContext'

type SkillsDetailPageProps = {
  titleEs: string
  titleEn: string
  introEs: string
  introEn: string
  skills: PortfolioSkill[]
}

export function SkillsDetailPage({ titleEs, titleEn, introEs, introEn, skills }: SkillsDetailPageProps) {
  const { t } = useApp()

  useEffect(() => {
    document.body.classList.remove('landing-active')
    return () => document.body.classList.add('landing-active')
  }, [])

  return (
    <div className="skills-page">
      <header className="profile-nav">
        <Link className="profile-logo" href="/">FZ</Link>
        <Link className="profile-back" href="/portfolio#habilidades">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          {t('Volver a Lo que aporto', 'Back to What I bring')}
        </Link>
      </header>

      <main className="skills-detail">
        <div className="skills-detail-shell">
          <p className="profile-eyebrow">{t('Lo que aporto', 'What I bring')}</p>
          <h1>{t(titleEs, titleEn)}</h1>
          <p className="skills-detail-intro">{t(introEs, introEn)}</p>

          <div className="skills-detail-grid">
            {skills.map(skill => <SkillCard skill={skill} key={skill.nameEs} />)}
          </div>
        </div>
      </main>
    </div>
  )
}
