import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Herramientas y plataformas — Félix Zamora',
  description: 'Herramientas, servicios y plataformas que utiliza Félix Zamora en desarrollo, administración y operaciones.',
}

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
  return children
}
