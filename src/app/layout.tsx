import type { Metadata } from 'next'
import './globals.css'
import { AppProvider } from '@/context/AppContext'

export const metadata: Metadata = {
  title: 'Félix Zamora — Portfolio',
  description: 'Administrativo especializado en automatización de procesos',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="landing-active" suppressHydrationWarning>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
