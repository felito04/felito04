'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ReactNode, useEffect } from 'react'
import { useApp } from '@/context/AppContext'

function ExperienceTag({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link className="experience-tag" href={href}>
      {children}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M7 17 17 7M7 7h10v10" />
      </svg>
    </Link>
  )
}

export default function MyUrbanScootExperiencePage() {
  const { t } = useApp()

  useEffect(() => {
    document.body.classList.remove('landing-active')
    return () => document.body.classList.add('landing-active')
  }, [])

  return (
    <div className="experience-page">
      <header className="profile-nav">
        <Link className="profile-logo" href="/">FZ</Link>
        <Link className="profile-back" href="/portfolio#experiencia">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          {t('Volver', 'Back')}
        </Link>
      </header>

      <main className="experience-detail">
        <div className="experience-detail-shell">
          <p className="profile-eyebrow">{t('Experiencia profesional', 'Professional experience')}</p>

          <div className="experience-detail-heading">
            <div>
              <h1>MYURBANSCOOT SL</h1>
              <p>{t('Junio de 2025 — Actualidad', 'June 2025 — Present')}</p>
              <div className="experience-detail-lead">
                {t(
                  'Responsabilidad transversal sobre operaciones, administración, atención al cliente y mejora de procesos internos.',
                  'Cross-functional responsibility across operations, administration, customer service and internal process improvement.',
                )}
              </div>
            </div>
            <div className="experience-detail-logo">
              <Image
                src="/logos/companies/myurbanscoot.png"
                alt="MyUrbanScoot"
                width={382}
                height={101}
                priority
              />
            </div>
          </div>

          <div className="experience-detail-facts">
            <div>
              <span>{t('Alcance', 'Scope')}</span>
              <strong>{t('Operaciones centrales', 'Central operations')}</strong>
            </div>
            <div>
              <span>{t('Periodo', 'Period')}</span>
              <strong>{t('Junio 2025 — Actualidad', 'June 2025 — Present')}</strong>
            </div>
            <div>
              <span>{t('Responsabilidad', 'Responsibility')}</span>
              <strong>{t('3 departamentos', '3 departments')}</strong>
            </div>
          </div>

          <a
            className="experience-company-link"
            href="https://myurbanscoot.com/"
            target="_blank"
            rel="noreferrer"
          >
            {t('Visitar la web de MyUrbanScoot', 'Visit the MyUrbanScoot website')}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M7 17 17 7M7 7h10v10" />
            </svg>
          </a>

          <section className="experience-work">
            <div className="experience-work-heading">
              <p className="profile-eyebrow">{t('Responsabilidades e impacto', 'Responsibilities and impact')}</p>
              <h2>
                {t(
                  'Una función transversal entre operaciones, administración y tecnología',
                  'A cross-functional role across operations, administration and technology',
                )}
              </h2>
              <p>
                {t(
                  'Mi trabajo conecta la central con tiendas, clientes, proveedores, entidades bancarias y el equipo de IT. Además de ejecutar la operativa diaria, diseño flujos, organizo departamentos y creo soluciones que permiten trabajar con mayor orden, rapidez y continuidad.',
                  'My work connects headquarters with stores, customers, suppliers, banks and the IT team. In addition to running day-to-day operations, I design workflows, organize departments and create solutions that enable more structured, faster and more consistent work.',
                )}
              </p>
            </div>

            <div className="experience-responsibilities">
              <article className="experience-responsibility">
                <div className="experience-responsibility-number">01</div>
                <div>
                  <h3>{t('Gestión de compras y tesorería operativa', 'Purchasing and operational treasury management')}</h3>
                  <p>
                    {t(
                      'Gestiono el ciclo operativo de compras necesario para mantener el abastecimiento de la empresa. Accedo a la banca corporativa para realizar transferencias autorizadas a proveedores y tramito compras de reposición mediante las tarjetas de empresa.',
                      'I manage the operational purchasing cycle required to keep the company supplied. I access corporate banking to make authorized supplier transfers and process replenishment purchases using company cards.',
                    )}
                  </p>
                  <p>
                    {t(
                      'Cada operación se integra en un orden y un flujo de trabajo definido, coordinando la necesidad de compra, el proveedor, el medio de pago y el seguimiento posterior. Esto permite que el reabastecimiento no dependa de acciones aisladas y se mantenga organizado desde la central.',
                      'Each transaction follows a defined order and workflow, coordinating the purchasing need, supplier, payment method and subsequent follow-up. This keeps replenishment organized from headquarters rather than dependent on isolated actions.',
                    )}
                  </p>
                  <div className="experience-tags">
                    <ExperienceTag href="/habilidades/capacidades#skill-administracion-empresarial">{t('Administración empresarial', 'Business administration')}</ExperienceTag>
                    <ExperienceTag href="/habilidades/operativas#skill-organizacion-administrativa">{t('Organización administrativa', 'Administrative organization')}</ExperienceTag>
                    <ExperienceTag href="/habilidades/operativas#skill-e-commerce-operations">E-commerce operations</ExperienceTag>
                    <ExperienceTag href="/herramientas#tool-santander-bbva-caixabank">{t('Banca empresarial', 'Business banking')}</ExperienceTag>
                  </div>
                </div>
              </article>

              <article className="experience-responsibility">
                <div className="experience-responsibility-number">02</div>
                <div>
                  <h3>{t('Atención al cliente y gestión diaria de WhatsApp', 'Customer service and daily WhatsApp management')}</h3>
                  <p>
                    {t(
                      'Gestiono la atención al cliente por mensajería y mantengo el canal al día mediante un sistema práctico de listados, clasificación de conversaciones y respuestas rápidas. El objetivo es que cada consulta tenga contexto, seguimiento y una respuesta coherente.',
                      'I manage customer service through messaging and keep the channel up to date using a practical system of lists, conversation classification and quick replies. The goal is to give every enquiry context, follow-up and a consistent response.',
                    )}
                  </p>
                  <p>
                    {t(
                      'La organización del canal permite priorizar casos, evitar conversaciones olvidadas y sostener el ritmo diario de atención sin perder la trazabilidad de lo que necesita cada cliente.',
                      'Organizing the channel makes it possible to prioritize cases, prevent forgotten conversations and maintain the daily service pace without losing track of what each customer needs.',
                    )}
                  </p>
                  <div className="experience-tags">
                    <ExperienceTag href="/habilidades/operativas#skill-atencion-al-cliente">{t('Atención al cliente', 'Customer service')}</ExperienceTag>
                    <ExperienceTag href="/habilidades/operativas#skill-organizacion-administrativa">{t('Organización administrativa', 'Administrative organization')}</ExperienceTag>
                  </div>
                </div>
              </article>

              <article className="experience-responsibility">
                <div className="experience-responsibility-number">03</div>
                <div>
                  <h3>{t('Responsable de postventa, financiaciones y seguros', 'Lead for after-sales, financing and insurance')}</h3>
                  <p>
                    {t(
                      'Soy responsable directo de tres departamentos clave: postventa, financiaciones y seguros. Coordino su funcionamiento desde la central, establezco prioridades, resuelvo incidencias y doy continuidad a los casos que requieren comunicación entre tiendas, clientes, proveedores o entidades externas.',
                      'I am directly responsible for three key departments: after-sales, financing and insurance. I coordinate their operation from headquarters, set priorities, resolve incidents and maintain continuity in cases requiring communication between stores, customers, suppliers or external entities.',
                    )}
                  </p>
                  <p>
                    {t(
                      'Este alcance me permite detectar dependencias entre departamentos y convertir tareas dispersas en procedimientos compartidos, con responsables, estados y puntos de seguimiento más claros.',
                      'This scope allows me to identify dependencies between departments and turn scattered tasks into shared procedures with clearer owners, statuses and follow-up points.',
                    )}
                  </p>
                  <div className="experience-tags">
                    <ExperienceTag href="/habilidades/operativas#skill-postventa-y-garantias">{t('Postventa y garantías', 'After-sales and warranties')}</ExperienceTag>
                    <ExperienceTag href="/habilidades/operativas#skill-seguros-rc-clientes">{t('Seguros de clientes', 'Customer insurance')}</ExperienceTag>
                    <ExperienceTag href="/habilidades/capacidades#skill-administracion-empresarial">{t('Administración empresarial', 'Business administration')}</ExperienceTag>
                  </div>
                </div>
              </article>

              <article className="experience-responsibility">
                <div className="experience-responsibility-number">04</div>
                <div>
                  <h3>{t('Centralización y tramitación de financiaciones', 'Centralization and processing of financing applications')}</h3>
                  <p>
                    {t(
                      'Tramito directamente con las entidades bancarias las solicitudes de financiación que llegan desde las tiendas. La empresa decidió centralizar esta función conmigo por el nivel de optimización y rapidez conseguido en el proceso.',
                      'I process financing applications received from stores directly with the banks. The company chose to centralize this function with me because of the level of optimization and speed achieved in the process.',
                    )}
                  </p>
                  <p>
                    {t(
                      'Mi función conecta la solicitud comercial con la gestión bancaria: reviso la información disponible, realizo la tramitación correspondiente y mantengo el seguimiento necesario para que la tienda pueda continuar con el cliente sin asumir la carga administrativa desde cada punto de venta.',
                      'My role connects the commercial request with banking administration: I review the available information, complete the relevant processing and maintain the necessary follow-up so each store can continue serving the customer without carrying the administrative burden locally.',
                    )}
                  </p>
                  <div className="experience-tags">
                    <ExperienceTag href="/habilidades/capacidades#skill-administracion-empresarial">{t('Administración empresarial', 'Business administration')}</ExperienceTag>
                    <ExperienceTag href="/habilidades/operativas#skill-organizacion-administrativa">{t('Organización administrativa', 'Administrative organization')}</ExperienceTag>
                    <ExperienceTag href="/herramientas#tool-santander-bbva-caixabank">Santander · BBVA · CaixaBank</ExperienceTag>
                  </div>
                </div>
              </article>

              <article className="experience-responsibility">
                <div className="experience-responsibility-number">05</div>
                <div>
                  <h3>{t('Diseño integral del flujo de postventa', 'End-to-end after-sales workflow design')}</h3>
                  <p>
                    {t(
                      'Gestiono la postventa completa de la empresa y he construido sus flujos de trabajo desde cero. Definí cómo entra cada caso, qué información necesita, quién debe intervenir y cómo se mantiene la comunicación hasta su resolución.',
                      'I manage the company\'s complete after-sales operation and built its workflows from scratch. I defined how each case enters the process, what information it requires, who needs to participate and how communication is maintained through resolution.',
                    )}
                  </p>
                  <p>
                    {t(
                      'Como parte de esta mejora desarrollé un programa para establecer un canal ordenado entre empresa, proveedor y cliente. La herramienta reduce la fragmentación de la información y convierte la comunicación de cada incidencia en un proceso compartido y consultable.',
                      'As part of this improvement, I developed a program that establishes an organized channel between the company, supplier and customer. The tool reduces fragmented information and turns communication for each incident into a shared, accessible process.',
                    )}
                  </p>
                  <div className="experience-tags">
                    <ExperienceTag href="/habilidades/operativas#skill-postventa-y-garantias">{t('Postventa y garantías', 'After-sales and warranties')}</ExperienceTag>
                    <ExperienceTag href="/habilidades/operativas#skill-automatizacion-de-procesos">{t('Automatización de procesos', 'Process automation')}</ExperienceTag>
                    <ExperienceTag href="/proyectos#proyecto-postventa">{t('Ver proyecto relacionado', 'View related project')}</ExperienceTag>
                  </div>
                </div>
              </article>

              <article className="experience-responsibility">
                <div className="experience-responsibility-number">06</div>
                <div>
                  <h3>{t('Administración completa del backend y formación interna', 'Full backend administration and internal training')}</h3>
                  <p>
                    {t(
                      'Conozco el backend operativo de la empresa de forma integral y realizo todo tipo de gestiones dentro de la plataforma, desde la carga y actualización de productos hasta la resolución de necesidades administrativas u operativas que aparecen en el trabajo diario.',
                      'I have comprehensive knowledge of the company\'s operational backend and perform a broad range of platform tasks, from uploading and updating products to resolving administrative or operational needs that arise in daily work.',
                    )}
                  </p>
                  <p>
                    {t(
                      'Ese conocimiento completo del sistema también me convierte en punto de apoyo para las nuevas incorporaciones. Explico el funcionamiento del backend, los criterios de uso y los procedimientos internos para acelerar su adaptación y reducir errores durante el aprendizaje.',
                      'This end-to-end system knowledge also makes me a support point for new team members. I explain how the backend works, its usage criteria and internal procedures to speed up onboarding and reduce errors during the learning process.',
                    )}
                  </p>
                  <div className="experience-tags">
                    <ExperienceTag href="/habilidades/operativas#skill-backends-personalizados">{t('Backends personalizados', 'Custom backends')}</ExperienceTag>
                    <ExperienceTag href="/habilidades/operativas#skill-onboarding-operativo">{t('Onboarding operativo', 'Operational onboarding')}</ExperienceTag>
                    <ExperienceTag href="/habilidades/operativas#skill-control-de-accesos">{t('Control de accesos', 'Access control')}</ExperienceTag>
                    <ExperienceTag href="/habilidades/operativas#skill-e-commerce-operations">E-commerce operations</ExperienceTag>
                  </div>
                </div>
              </article>

              <article className="experience-responsibility">
                <div className="experience-responsibility-number">07</div>
                <div>
                  <h3>{t('Creación de módulos y coordinación directa con IT', 'Module creation and direct coordination with IT')}</h3>
                  <p>
                    {t(
                      'Trabajo directamente con los programadores en la creación y optimización de módulos para distintos departamentos. Traduzco necesidades operativas en propuestas concretas y preparo prototipos funcionales dentro de la propia plataforma para que el equipo pueda evaluar el flujo antes de consolidar el desarrollo.',
                      'I work directly with developers to create and optimize modules for different departments. I translate operational needs into concrete proposals and prepare functional prototypes within the platform so the team can assess the workflow before finalizing development.',
                    )}
                  </p>
                  <p>
                    {t(
                      'También estructuro el trabajo necesario para completar estas mejoras: organizo requerimientos, creo y ordeno tareas, aporto contexto funcional y acompaño la validación. Según el proyecto, he utilizado ClickUp, Notion, GitHub Projects y Linear para mantener visible el alcance y el estado de cada iniciativa.',
                      'I also structure the work needed to complete these improvements: organizing requirements, creating and ordering tasks, providing functional context and supporting validation. Depending on the project, I have used ClickUp, Notion, GitHub Projects and Linear to keep the scope and status of each initiative visible.',
                    )}
                  </p>
                  <div className="experience-tags">
                    <ExperienceTag href="/habilidades/operativas#skill-automatizacion-de-procesos">{t('Automatización de procesos', 'Process automation')}</ExperienceTag>
                    <ExperienceTag href="/habilidades/operativas#skill-qa-funcional">{t('QA funcional', 'Functional QA')}</ExperienceTag>
                    <ExperienceTag href="/herramientas#tool-clickup">ClickUp</ExperienceTag>
                    <ExperienceTag href="/herramientas#tool-notion">Notion</ExperienceTag>
                    <ExperienceTag href="/herramientas#tool-github-projects">GitHub Projects</ExperienceTag>
                    <ExperienceTag href="/herramientas#tool-linear">Linear</ExperienceTag>
                  </div>
                </div>
              </article>

              <article className="experience-responsibility">
                <div className="experience-responsibility-number">08</div>
                <div>
                  <h3>{t('Alta e implantación de herramientas, sistemas y proveedores', 'Registration and implementation of tools, systems and suppliers')}</h3>
                  <p>
                    {t(
                      'Soy la persona responsable de dar de alta y poner en funcionamiento las nuevas herramientas, servicios y plataformas que necesita la empresa. Esto incluye tanto soluciones tecnológicas como servicios financieros y cualquier proveedor que requiera un proceso de registro corporativo.',
                      'I am responsible for registering and putting into operation the new tools, services and platforms required by the company. This covers technology solutions, financial services and any supplier that requires a corporate registration process.',
                    )}
                  </p>
                  <p>
                    {t(
                      'Me encargo del proceso completo: recopilar la información necesaria, tramitar el alta, completar verificaciones, coordinar accesos y dejar cada servicio preparado para su uso. Entre otras implantaciones, he dado de alta Revolut Business y Cetelem, y he incorporado a la empresa sistemas como Google Workspace y NordPass.',
                      'I manage the complete process: gathering the required information, completing registration and verification, coordinating access and leaving each service ready for use. Among other implementations, I registered Revolut Business and Cetelem and introduced systems such as Google Workspace and NordPass into the company.',
                    )}
                  </p>
                  <p>
                    {t(
                      'Mi trabajo no termina con la creación de la cuenta. Organizo usuarios, permisos, credenciales y criterios de uso, facilito la adopción interna y ayudo al equipo a integrar cada herramienta en su operativa. El objetivo es que la tecnología reduzca fricción, centralice información y haga el trabajo diario más seguro y eficiente.',
                      'My work does not end when an account is created. I organize users, permissions, credentials and usage criteria, support internal adoption and help the team integrate each tool into its workflow. The goal is for technology to reduce friction, centralize information and make daily work safer and more efficient.',
                    )}
                  </p>
                  <div className="experience-tags">
                    <ExperienceTag href="/habilidades/operativas#skill-implantacion-de-herramientas">{t('Implantación de herramientas', 'Tool implementation')}</ExperienceTag>
                    <ExperienceTag href="/habilidades/operativas#skill-control-de-accesos">{t('Control de accesos', 'Access control')}</ExperienceTag>
                    <ExperienceTag href="/habilidades/operativas#skill-onboarding-operativo">{t('Onboarding operativo', 'Operational onboarding')}</ExperienceTag>
                    <ExperienceTag href="/herramientas#tool-revolut-business-revolut-pay">Revolut Business</ExperienceTag>
                    <ExperienceTag href="/herramientas#tool-cetelem">Cetelem</ExperienceTag>
                    <ExperienceTag href="/herramientas#tool-google-workspace">Google Workspace</ExperienceTag>
                    <ExperienceTag href="/herramientas#tool-nordpass">NordPass</ExperienceTag>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
