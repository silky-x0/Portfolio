import React from 'react'
import { motion } from 'framer-motion'
import { Button } from "./ui/button"
import { FaGithub } from 'react-icons/fa'  
import { MdDownload } from 'react-icons/md'  

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.6,
      },
    },
  }

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  }

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
          variants={textVariants} 
          className="text-lg my-3 py-3 md:text-2xl text-white/80"
        >
          Aspiring Software Developer | Building Scalable & Smart Solutions
        </motion.p>

        <motion.div 
          variants={buttonVariants}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4 px-4"
        >
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => window.open("https://github.com/silky-x0", "_blank")}
            className="flex items-center justify-center gap-2 w-full sm:w-auto text-base sm:text-lg"
          >
            <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
            GitHub
          </Button>
          <Button
            variant="default"  
            size="lg"
            onClick={() => {
              console.log("Downloading resume...")
            }}
            className="flex items-center justify-center gap-2 w-full sm:w-auto text-base sm:text-lg"
          >
            <MdDownload className="w-4 h-4 sm:w-5 sm:h-5" />
            Download Resume
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Hero

