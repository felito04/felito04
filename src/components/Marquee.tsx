'use client'

import { useApp } from '@/context/AppContext'
import { aptitudes } from '@/data/aptitudes'

// Duplicate for seamless loop
const allItems = [...aptitudes, ...aptitudes]

export function Marquee() {
  const { t } = useApp()

  return (
    <div className="mq-wrap">
      <div className="mq-track">
        {allItems.map((item, i) => (
          <div className="mq-item" key={i}>
            <img className="mq-logo" src={item.logo} alt="" aria-hidden="true" />
            {t(item.nameEs, item.nameEn)}
          </div>
        ))}
      </div>
    </div>
  )
}
