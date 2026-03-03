'use client'

const items = [
  'Flutter',
  'React / Next.js',
  'Node.js',
  'Excel Avanzado',
  'App Script',
  'CRM a Medida',
  'Administración',
  'Bilingüe',
  'Mobile Dev',
  'Web Dev',
  'Automatización',
  'Gestión',
]

const paths = [
  'M5 2h14l2 5H3L5 2zM3 7h18v14H3z',
  'M13 2 3 14h9l-1 8 10-12h-9z',
  'M12 2a10 10 0 1 0 0 20',
  'M3 3h18v18H3zM3 9h18M9 21V9',
  'M14.5 2H6a2 2 0 0 0-2 2v16h16V7.5z',
  'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8',
  'M2 7h20M2 17h20',
  'M5 7l7-5 7 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z',
  'M5 2h14l2 5H3z',
  'M12 2a10 10 0 1 0 0 20',
  'M13 2 3 14h9l-1 8',
  'M21 16.92v3a2 2 0 0 1-2.18 2',
]

// Duplicate for seamless loop
const allItems = [...items, ...items]

export function Marquee() {
  return (
    <div className="mq-wrap">
      <div className="mq-track">
        {allItems.map((label, i) => (
          <div className="mq-item" key={i}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2">
              <path d={paths[i % paths.length]} />
            </svg>
            {label}
          </div>
        ))}
      </div>
    </div>
  )
}
