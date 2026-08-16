export type SkillIcon = 'business' | 'mobile' | 'web' | 'crm' | 'spreadsheet' | 'language' | 'operations'

export type PortfolioSkill = {
  nameEs: string
  nameEn: string
  descEs: string
  descEn: string
  level: number
  icon: SkillIcon
}

export const capabilitySkills: PortfolioSkill[] = [
  { nameEs: 'Administración Empresarial', nameEn: 'Business Administration', descEs: 'Procesos, reportes, facturación, planificación, RRHH.', descEn: 'Processes, reporting, billing, planning, HR coordination.', level: 95, icon: 'business' },
  { nameEs: 'Flutter — Desarrollo móvil', nameEn: 'Flutter — Mobile development', descEs: 'Apps multiplataforma para iOS y Android.', descEn: 'Cross-platform apps for iOS and Android.', level: 88, icon: 'mobile' },
  { nameEs: 'React / Next.js · Node.js', nameEn: 'React / Next.js · Node.js', descEs: 'Plataformas modernas, frontend y backend.', descEn: 'Modern web platforms, frontend and backend.', level: 85, icon: 'web' },
  { nameEs: 'CRM a medida', nameEn: 'Custom CRM development', descEs: 'CRMs completos desde cero, sin licencia externa.', descEn: 'Complete CRMs from scratch, with no external license.', level: 97, icon: 'crm' },
  { nameEs: 'Excel + App Script', nameEn: 'Excel + App Script', descEs: 'Automatización avanzada, dashboards y sistemas de gestión.', descEn: 'Advanced automation, dashboards and management systems.', level: 96, icon: 'spreadsheet' },
  { nameEs: 'Bilingüe ES / EN', nameEn: 'Bilingual ES / EN', descEs: 'Español nativo e inglés profesional.', descEn: 'Native Spanish and professional English.', level: 92, icon: 'language' },
]

export const operationalSkills: PortfolioSkill[] = [
  { nameEs: 'Organización administrativa', nameEn: 'Administrative organization', descEs: 'Procesos, documentación, correo, archivos y seguimiento operativo.', descEn: 'Processes, documentation, email, files and operational follow-up.', level: 95, icon: 'operations' },
  { nameEs: 'Automatización de procesos', nameEn: 'Process automation', descEs: 'Flujos internos, avisos, aprobaciones, tareas y reportes recurrentes.', descEn: 'Internal flows, alerts, approvals, tasks and recurring reports.', level: 96, icon: 'operations' },
  { nameEs: 'Integraciones API', nameEn: 'API integrations', descEs: 'Conexión entre CRMs, pagos, formularios, bases de datos y plataformas externas.', descEn: 'Connecting CRMs, payments, forms, databases and external platforms.', level: 88, icon: 'operations' },
  { nameEs: 'Backends personalizados', nameEn: 'Custom backends', descEs: 'Aprendizaje rápido en plataformas existentes y adaptación a sistemas internos.', descEn: 'Fast onboarding on existing platforms and adaptation to internal systems.', level: 86, icon: 'operations' },
  { nameEs: 'Dashboards y reportes', nameEn: 'Dashboards and reporting', descEs: 'Indicadores, métricas operativas, control de actividad y seguimiento.', descEn: 'Indicators, operational metrics, activity control and follow-up.', level: 92, icon: 'operations' },
  { nameEs: 'Atención al cliente', nameEn: 'Customer support', descEs: 'Gestión, comunicación, seguimiento, incidencias y postventa.', descEn: 'Management, communication, follow-up, incidents and after-sales support.', level: 94, icon: 'operations' },
  { nameEs: 'Postventa y garantías', nameEn: 'After-sales and warranties', descEs: 'Garantías, soporte posterior a la venta y gestión de documentación.', descEn: 'Warranties, after-sales support and documentation management.', level: 92, icon: 'operations' },
  { nameEs: 'Logística operativa', nameEn: 'Operational logistics', descEs: 'Coordinación de envíos, incidencias, proveedores y operadores logísticos.', descEn: 'Coordination of shipments, incidents, suppliers and shipping carriers.', level: 90, icon: 'operations' },
  { nameEs: 'E-commerce operations', nameEn: 'E-commerce operations', descEs: 'Pagos, carritos, proveedores, logística y cierres operativos.', descEn: 'Payments, carts, suppliers, logistics and operational closing.', level: 88, icon: 'operations' },
  { nameEs: 'Control de accesos', nameEn: 'Access control', descEs: 'Usuarios, roles, permisos, credenciales y buenas prácticas de seguridad.', descEn: 'Users, roles, permissions, credentials and security best practices.', level: 90, icon: 'operations' },
  { nameEs: 'QA funcional', nameEn: 'Functional QA', descEs: 'Pruebas de flujos, formularios, pagos, bugs y validación antes de producción.', descEn: 'Flow, form, payment, bug testing and pre-production validation.', level: 87, icon: 'operations' },
  { nameEs: 'Migración de datos', nameEn: 'Data migration', descEs: 'Limpieza, importación y transición entre Excel, CSV, CRM y bases de datos.', descEn: 'Cleaning, importing and transitioning across Excel, CSV, CRM and databases.', level: 86, icon: 'operations' },
  { nameEs: 'Seguros RC clientes', nameEn: 'Client liability insurance', descEs: 'Gestión de seguro civil, documentación y seguimiento administrativo.', descEn: 'Civil liability insurance, documentation and administrative follow-up.', level: 84, icon: 'operations' },
  { nameEs: 'Onboarding operativo', nameEn: 'Operational onboarding', descEs: 'Accesos, carpetas, herramientas, documentación y preparación de usuarios.', descEn: 'Access, folders, tools, documentation and user setup.', level: 90, icon: 'operations' },
]
