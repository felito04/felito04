'use client'

import { useApp } from '@/context/AppContext'

type ToolItem = {
  name: string
  es: string
  en: string
  icon?: string
}

const tools: ToolItem[] = [
  { name: 'Flutter', es: 'Desarrollo móvil multiplataforma', en: 'Cross-platform mobile development', icon: 'https://cdn.simpleicons.org/flutter/02569B' },
  { name: 'React / Next.js', es: 'Frontend web moderno', en: 'Modern web frontend', icon: 'https://cdn.simpleicons.org/nextdotjs/000000' },
  { name: 'Node.js', es: 'Backend y APIs', en: 'Backend and APIs', icon: 'https://cdn.simpleicons.org/nodedotjs/5FA04E' },
  { name: 'Excel', es: 'Hojas de cálculo avanzadas', en: 'Advanced spreadsheets', icon: 'https://api.iconify.design/simple-icons:microsoftexcel.svg?color=%23217346' },
  { name: 'Apps Script', es: 'Automatización Google Workspace', en: 'Google Workspace automation', icon: 'https://cdn.simpleicons.org/googleappsscript/4285F4' },
  { name: 'Notion', es: 'Documentación y operaciones', en: 'Documentation and operations', icon: 'https://cdn.simpleicons.org/notion/000000' },
  { name: 'GitHub', es: 'Repositorios y control de versiones', en: 'Repositories and version control', icon: 'https://cdn.simpleicons.org/github/181717' },
  { name: 'GitHub Projects', es: 'Planificación de producto', en: 'Product planning', icon: 'https://cdn.simpleicons.org/github/181717' },
  { name: 'Linear', es: 'Gestión de tickets', en: 'Ticket management', icon: 'https://cdn.simpleicons.org/linear/5E6AD2' },
  { name: 'Slack', es: 'Comunicación de equipos', en: 'Team communication', icon: 'https://api.iconify.design/logos:slack-icon.svg' },
  { name: 'TestFlight', es: 'Pruebas iOS', en: 'iOS testing', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSowOJhvYnXV1RWzbSgAcFEk168viHuSgiNzikO3YQsg&s=10' },
  { name: 'Vercel', es: 'Deploy y hosting', en: 'Deploy and hosting', icon: 'https://cdn.simpleicons.org/vercel/000000' },
  { name: 'Google Workspace', es: 'Productividad y operaciones', en: 'Productivity and operations', icon: 'https://api.iconify.design/logos:google-workspace.svg' },
  { name: 'Google Drive', es: 'Archivos y unidades compartidas', en: 'Files and shared drives', icon: 'https://cdn.simpleicons.org/googledrive/4285F4' },
  { name: 'Google Cloud', es: 'Infraestructura cloud', en: 'Cloud infrastructure', icon: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
  { name: 'iCloud', es: 'Almacenamiento Apple', en: 'Apple storage', icon: 'https://cdn.simpleicons.org/icloud/3693F3' },
  { name: 'Dropbox', es: 'Archivos cloud', en: 'Cloud files', icon: 'https://cdn.simpleicons.org/dropbox/0061FF' },
  { name: 'OneDrive', es: 'Archivos Microsoft 365', en: 'Microsoft 365 files', icon: 'https://api.iconify.design/logos:microsoft-onedrive.svg' },
  { name: 'AnyDesk', es: 'Control remoto', en: 'Remote control', icon: 'https://cdn.simpleicons.org/anydesk/EF443B' },
  { name: 'Windows', es: 'Entorno operativo', en: 'Operating environment', icon: 'https://api.iconify.design/logos:microsoft-windows.svg' },
  { name: 'macOS', es: 'Entorno operativo', en: 'Operating environment', icon: 'https://cdn.simpleicons.org/apple/000000' },
  { name: 'NordPass', es: 'Credenciales seguras', en: 'Secure credentials', icon: 'https://www.google.com/s2/favicons?domain=nordpass.com&sz=64' },
  { name: 'Bitwarden', es: 'Gestión de contraseñas', en: 'Password management', icon: 'https://cdn.simpleicons.org/bitwarden/175DDC' },
  { name: 'Clockify', es: 'Control de tiempos', en: 'Time tracking', icon: 'https://cdn.simpleicons.org/clockify/03A9F4' },
  { name: 'DocuSign', es: 'Firma digital', en: 'Digital signature', icon: 'https://www.google.com/s2/favicons?domain=docusign.com&sz=64' },
  { name: 'Stripe', es: 'Pagos online', en: 'Online payments', icon: 'https://cdn.simpleicons.org/stripe/635BFF' },
  { name: 'Revolut / Revolut Pay', es: 'Pagos e integraciones', en: 'Payments and integrations', icon: 'https://cdn.simpleicons.org/revolut/191C1F' },
  { name: 'Santander / BBVA / CaixaBank', es: 'Financiación', en: 'Financing', icon: 'https://www.google.com/s2/favicons?domain=santander.com&sz=64' },
  { name: 'FedEx / GLS / MRW / UPS', es: 'Operadores logísticos', en: 'Shipping carriers', icon: 'https://api.iconify.design/simple-icons:fedex.svg?color=%234D148C' },
  { name: 'Figma', es: 'Diseño UI/UX', en: 'UI/UX design', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
  { name: 'Supabase', es: 'Backend, auth y datos', en: 'Backend, auth and data', icon: 'https://cdn.simpleicons.org/supabase/3FCF8E' },
  { name: 'Firebase', es: 'Backend y tiempo real', en: 'Backend and real time', icon: 'https://cdn.simpleicons.org/firebase/FFCA28' },
  { name: 'Brevo', es: 'Mensajería y comunicación', en: 'Messaging and communication', icon: 'https://www.google.com/s2/favicons?domain=brevo.com&sz=64' },
  { name: 'Claude Code', es: 'Desarrollo asistido por IA', en: 'AI-assisted development', icon: 'https://www.google.com/s2/favicons?domain=claude.ai&sz=64' },
  { name: 'Codex', es: 'Automatización de desarrollo', en: 'Development automation', icon: 'https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/codex.svg' },
  { name: 'OpenAI', es: 'Integración de IA', en: 'AI integration', icon: 'https://api.iconify.design/simple-icons:openai.svg?color=%23111111' },
  { name: 'Zapier', es: 'Automatización no-code', en: 'No-code automation', icon: 'https://cdn.simpleicons.org/zapier/FF4F00' },
  { name: 'Make', es: 'Automatización visual', en: 'Visual automation', icon: 'https://cdn.simpleicons.org/make/6D00CC' },
  { name: 'Looker Studio', es: 'Reportes y dashboards', en: 'Reports and dashboards', icon: 'https://cdn.simpleicons.org/looker/4285F4' },
  { name: 'Power BI', es: 'Business intelligence', en: 'Business intelligence', icon: 'https://api.iconify.design/logos:microsoft-power-bi.svg' },
  { name: 'Google Forms', es: 'Formularios', en: 'Forms', icon: 'https://cdn.simpleicons.org/googleforms/7248B9' },
  { name: 'Typeform', es: 'Formularios web', en: 'Web forms', icon: 'https://cdn.simpleicons.org/typeform/262627' },
  { name: 'Jira', es: 'Incidencias y proyectos', en: 'Issues and projects', icon: 'https://cdn.simpleicons.org/jira/0052CC' },
  { name: 'Zendesk', es: 'Soporte al cliente', en: 'Customer support', icon: 'https://cdn.simpleicons.org/zendesk/03363D' },
  { name: 'Airtable', es: 'Datos y operaciones', en: 'Data and operations', icon: 'https://cdn.simpleicons.org/airtable/18BFFF' },
]

const stackColors = [
  ['#eef2ff', '#4f46e5'],
  ['#f8fafc', '#0f172a'],
  ['#ecfeff', '#0891b2'],
  ['#f5f3ff', '#7c3aed'],
]

export function Tools() {
  const { t } = useApp()

  return (
    <section id="herramientas">
      <div className="si">
        <p className="s-label rv">{t('Herramientas', 'Tools')}</p>
        <h2 className="s-title rv" data-d="1">
          {t('Plataformas y stack', 'Platforms and stack')}
        </h2>
        <p className="s-sub rv" data-d="2">
          {t('Apps, servicios y plataformas que manejo.', 'Apps, services and platforms I use.')}
        </p>

        <div className="grid-section-title rv" data-d="2">
          {t('Herramientas y plataformas', 'Tools and platforms')}
        </div>

        <div className="tools-grid">
          {tools.map((item, index) => {
            const [background, stroke] = stackColors[index % stackColors.length]

            return (
              <div className="tool rv" data-d={(index % 4) + 1} key={item.name}>
                <div className="tool-ic" style={{ background }}>
                  {item.icon ? (
                    <img className="tool-logo" src={item.icon} alt="" aria-hidden="true" />
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2">
                      <rect x="4" y="4" width="16" height="16" rx="3" />
                      <path d="M8 9h8M8 13h6M8 17h4" />
                    </svg>
                  )}
                </div>
                <div>
                  <div className="tool-name">{item.name}</div>
                  <div className="tool-sub">{t(item.es, item.en)}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
