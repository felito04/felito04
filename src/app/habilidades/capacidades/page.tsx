import { SkillsDetailPage } from '@/components/SkillsDetailPage'
import { capabilitySkills } from '@/data/skills'

export default function CapabilitiesPage() {
  return (
    <SkillsDetailPage
      titleEs="Capacidades y habilidades"
      titleEn="Capabilities and skills"
      introEs="Una combinación de administración, desarrollo y automatización aplicada a necesidades reales."
      introEn="A combination of administration, development and automation applied to real needs."
      skills={capabilitySkills}
    />
  )
}
