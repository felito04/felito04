import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre mí — Félix Zamora',
  description: 'Perfil, experiencia y aptitudes de Félix Alejandro Zamora Méndez.',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
