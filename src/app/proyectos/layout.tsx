import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Proyectos — Félix Zamora',
  description: 'Proyectos web, aplicaciones y herramientas operativas creadas por Félix Zamora.',
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
