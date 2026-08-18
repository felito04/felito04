import { SkillsDetailPage } from '@/components/SkillsDetailPage'
import { operationalSkills } from '@/data/skills'

export default function OperationalSkillsPage() {
  return (
    <SkillsDetailPage
      titleEs="Habilidades operativas"
      titleEn="Operational skills"
      introEs="Capacidades prácticas para organizar, mantener y mejorar el funcionamiento diario de una operación."
      introEn="Practical skills for organizing, maintaining and improving day-to-day operations."
      skills={operationalSkills}
    />
  )
}
