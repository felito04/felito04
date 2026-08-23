'use client'

import type { PortfolioSkill, SkillIcon } from '@/data/skills'
import { useApp } from '@/context/AppContext'
import { toAnchor } from '@/lib/anchors'

function SkillIconGraphic({ icon }: { icon: SkillIcon }) {
  if (icon === 'business') return <><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></>
  if (icon === 'mobile') return <><rect x="5" y="2" width="14" height="20" rx="2" /><circle cx="12" cy="17" r="1" /></>
  if (icon === 'web') return <><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>
  if (icon === 'crm') return <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>
  if (icon === 'spreadsheet') return <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></>
  if (icon === 'language') return <><path d="M5 7l7-5 7 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></>
  return <><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8 9h8M8 13h6M8 17h4" /></>
}

export function SkillCard({ skill, reveal = false, delay = 1 }: { skill: PortfolioSkill; reveal?: boolean; delay?: number }) {
  const { t } = useApp()

  return (
    <div
      id={`skill-${toAnchor(skill.nameEs)}`}
      className={`sk-card${reveal ? ' rv' : ''}`}
      data-d={delay}
      data-skill={skill.level}
    >
      <div className="sk-ic">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <SkillIconGraphic icon={skill.icon} />
        </svg>
      </div>
      <div className="sk-name">{t(skill.nameEs, skill.nameEn)}</div>
      <div className="sk-desc">{t(skill.descEs, skill.descEn)}</div>
      <div className="sk-bar-wrap">
        <div className="sk-bar" style={reveal ? undefined : { width: `${skill.level}%` }} />
      </div>
    </div>
  )
}
