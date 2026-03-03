'use client'

import { useApp } from '@/context/AppContext'

export function Footer() {
  const { t } = useApp()

  return (
    <footer>
      <div className="ft-logo">FZ</div>
      <div style={{ fontSize: '13px', opacity: 0.4, marginBottom: '6px' }}>
        {t('Diseñado con precisión.', 'Designed with precision.')}
      </div>
      <div className="ft-links">
        <a href="mailto:05fazm@gmail.com">05fazm@gmail.com</a>
        <a
          href="https://www.linkedin.com/in/f%C3%A9lix-alejandro-zamora-m%C3%A9ndez-47a818332"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a href="https://whynottechnology.com" target="_blank" rel="noreferrer">
          whynottechnology.com
        </a>
        <a href="https://sopeak.co" target="_blank" rel="noreferrer">
          sopeak.co
        </a>
      </div>
      <div style={{ fontSize: '11px', opacity: 0.25, marginTop: '4px' }}>
        © 2025 Félix Alejandro Zamora Méndez · Valencia, España · Coral Gables, USA
      </div>
    </footer>
  )
}
