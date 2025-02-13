import React from 'react'
import { motion } from 'framer-motion'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import DragBall from './Components/DragBall'

function App() {
  return (
    <main className="bg-black">
      <Header title='Akhil' />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <DragBall />
    </main>
  )
}

export default App