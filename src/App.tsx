import React from 'react'
import { motion } from 'framer-motion'
import Header from './Components/Header'
import Hero from './Components/Hero'
import DragBall from './Components/DragBall'

function App() {
  return (
    <motion.div 
      className='bg-[#1B1B1B] text-white h-screen flex items-center justify-center'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header title='Akhil' />
      <Hero/>
      <DragBall/>
    </motion.div>
  )
}

export default App