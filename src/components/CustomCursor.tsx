'use client'

import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const curRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const cur = curRef.current
    const ring = ringRef.current
    if (!cur || !ring) return

    const onMove = (e: MouseEvent) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
      cur.style.left = e.clientX + 'px'
      cur.style.top = e.clientY + 'px'
    }

    const loop = () => {
      const p = pos.current
      p.rx += (p.mx - p.rx) * 0.12
      p.ry += (p.my - p.ry) * 0.12
      ring.style.left = p.rx + 'px'
      ring.style.top = p.ry + 'px'
      rafRef.current = requestAnimationFrame(loop)
    }

    document.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  // Event delegation for cursor resize on interactive elements
  useEffect(() => {
    const ring = ringRef.current
    if (!ring) return

    const selector = 'a,button,.sk-card,.tool,.pr-card,.stat,.tl-card,.mega-item,.lchip'

    const enter = (e: Event) => {
      if ((e.target as Element).closest(selector)) {
        ring.style.width = '52px'
        ring.style.height = '52px'
      }
    }
    const leave = (e: Event) => {
      if ((e.target as Element).closest(selector)) {
        ring.style.width = '36px'
        ring.style.height = '36px'
      }
    }

    document.addEventListener('mouseover', enter)
    document.addEventListener('mouseout', leave)

    return () => {
      document.removeEventListener('mouseover', enter)
      document.removeEventListener('mouseout', leave)
    }
  }, [])

  return (
    <>
      <div id="cur" ref={curRef} />
      <div id="cur-ring" ref={ringRef} />
    </>
  )
}
