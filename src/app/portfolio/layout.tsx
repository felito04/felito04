import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio — Félix Zamora',
  description: 'Experiencia, aptitudes, proyectos y herramientas de Félix Zamora.',
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children
}
