'use client'

import Link from 'next/link'
import { SkillCard } from '@/components/SkillCard'
import { capabilitySkills, operationalSkills } from '@/data/skills'
import { useApp } from '@/context/AppContext'

export function Skills() {
  const { t } = useApp()

  return (
    <section id="habilidades">
      <div className="si">
        <p className="s-label rv">{t('Habilidades', 'Skills')}</p>
        <h2 className="s-title rv" data-d="1">{t('Lo que aporto', 'What I bring')}</h2>
        <p className="s-sub rv" data-d="2">
          {t(
            'Expertise administrativo + tecnología. Una combinación poco frecuente.',
            'Administrative expertise + technology. A rare combination.',
          )}
        </p>

        <div className="skills-preview-group">
          <div className="skills-preview-heading rv" data-d="2">
            <h3>{t('Capacidades y habilidades', 'Capabilities and skills')}</h3>
            <Link href="/habilidades/capacidades">
              {t('Ver más', 'View more')}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
          <div className="skills-preview-row">
            {capabilitySkills.slice(0, 3).map((skill, index) => (
              <SkillCard skill={skill} reveal delay={index + 1} key={skill.nameEs} />
            ))}
          </div>
        </div>

        <div className="skills-preview-group">
          <div className="skills-preview-heading rv" data-d="2">
            <h3>{t('Habilidades operativas', 'Operational skills')}</h3>
            <Link href="/habilidades/operativas">
              {t('Ver más', 'View more')}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
          <div className="skills-preview-row">
            {operationalSkills.slice(0, 3).map((skill, index) => (
              <SkillCard skill={skill} reveal delay={index + 1} key={skill.nameEs} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
