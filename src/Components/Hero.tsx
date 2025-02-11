import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.6
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div 
        className="text-center relative w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-4xl md:text-6xl lg:text-8xl flex flex-wrap justify-center gap-2">
          <motion.span 
            variants={textVariants}
            className="font-lora text-white"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Hi, I'm
          </motion.span>
          <motion.span 
            variants={textVariants}
            className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent relative"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Akhilesh
            
          </motion.span>
        </div>
        <motion.p
            className="text-0.5xl my-3 py-3 md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.8, 1, 0.3, 2] }}
          >
            Aspiring Software Developer | Building Scalable & Smart Solutions
          </motion.p>
      </motion.div>
    </div>
  )
}

export default Hero;
