'use client'

import { useState, useEffect } from 'react'

export function Loader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div id="loader" className={done ? 'done' : ''}>
      <div className="ld-logo">
        Félix<em>.</em>
      </div>
    </div>
  )
}
