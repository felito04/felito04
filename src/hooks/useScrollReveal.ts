'use client'

import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('on')

          // Animate skill bars
          const bar = entry.target.querySelector<HTMLElement>('.sk-bar')
          if (bar) {
            const pct = entry.target.getAttribute('data-skill') ?? '80'
            setTimeout(() => {
              bar.style.width = pct + '%'
            }, 200)
          }

          // Animate counters
          entry.target.querySelectorAll<HTMLElement>('.counter').forEach(c => {
            const target = parseInt(c.getAttribute('data-target') ?? '0', 10)
            let current = 0
            const step = target / 40
            const timer = setInterval(() => {
              current = Math.min(current + step, target)
              c.textContent = Math.round(current) + (target >= 10 ? '+' : '')
              if (current >= target) clearInterval(timer)
            }, 30)
          })
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll('.rv,.rvl,.rvr').forEach(el => obs.observe(el))

    return () => obs.disconnect()
  }, [])
}
