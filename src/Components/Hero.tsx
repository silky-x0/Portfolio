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
        className="text-center relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-4xl md:text-6xl lg:text-8xl space-x-2 md:space-x-4 flex flex-wrap justify-center gap-2">
          <motion.span 
            variants={textVariants}
            className="font-lora text-white"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Hi, I'm
          </motion.span>
          <motion.span 
            variants={textVariants}
            className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent relative after:content-[''] after:absolute after:w-[200px] after:h-[150px] after:bg-[url('/src/img/CArrow.png')] after:bg-contain after:bg-no-repeat after:bottom-[-90px] after:left-[230px] after:rotate-[10deg] after:z-10"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Akhilesh
            <motion.span
              variants={textVariants}
              className="absolute text-3xl text-white/90 whitespace-nowrap left-[320px] bottom-[-165px] z-20"
              style={{ fontFamily: "'Grape Nuts', cursive" }}
            >
              This guy read Books too,<br /> 
              his favorite genre is<br />
              philosophy and psychology.
            </motion.span>
          </motion.span>
        </div>
      </motion.div>
    </div>
  )
}

export default Hero;
