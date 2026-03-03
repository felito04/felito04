'use client'

import { useScrollReveal } from '@/hooks/useScrollReveal'
import { Marquee } from './Marquee'
import { About } from './sections/About'
import { Experience } from './sections/Experience'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Tools } from './sections/Tools'
import { Contact } from './sections/Contact'
import { Footer } from './Footer'

export function Portfolio() {
  useScrollReveal()

  return (
    <div id="portfolio-view" className="active">
      <Marquee />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Tools />
      <Contact />
      <Footer />
    </div>
  )
}
