import React from 'react'
import { motion } from 'framer-motion'
import { Button } from "./ui/button"
import { FaGithub } from 'react-icons/fa'  
import { MdDownload } from 'react-icons/md'  
import { Link } from 'react-scroll'

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

  const shapeVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -90 },
    visible: {
      opacity: 0.3,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  }

  const floatingAnimation = {
    y: [0, -20, 0],
    rotate: [0, 10, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  // Add new animation variants
  const nameHighlightVariants = {
    initial: { width: "0%" },
    animate: {
      width: "100%",
      transition: { duration: 1, delay: 1.2 }
    }
  };

  const cursorVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: [0, 0, 1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0,
        // Start blinking after name appears
        delay: 0.6
      }
    }
  };

  const backgroundVariants = {
    initial: { 
      backgroundPosition: "0% 50%"
    },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 15,
        ease: "linear",
        repeat: Infinity
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center px-4 overflow-hidden relative bg-gradient-to-r from-black via-zinc-900 to-black"
      variants={backgroundVariants}
      initial="initial"
      animate="animate"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]" />
    

      <motion.div
        className="text-center relative w-full z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl flex flex-wrap justify-center gap-2">
          <motion.span
            variants={textVariants}
            className="font-lora text-white"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Hi, I'm
          </motion.span>
          <div className="relative">
            <motion.span
              variants={textVariants}
              className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent relative"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              Akhilesh
            </motion.span>
            <motion.div
              className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
              variants={nameHighlightVariants}
              initial="initial"
              animate="animate"
            />
            <motion.span
              className="absolute -right-4 top-0 text-pink-500"
              variants={cursorVariants}
              initial="initial"
              animate="animate"
            >
              |
            </motion.span>
          </div>
        </div>
        <motion.p 
          variants={textVariants} 
          className="text-sm sm:text-lg md:text-2xl text-white/80 my-2 sm:my-3 py-2 sm:py-3"
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
    </motion.div>
  )
}

export default Hero

