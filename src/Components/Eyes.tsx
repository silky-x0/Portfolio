import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface EyesProps {
  isScrolled?: boolean;
}

const Eyes = ({ isScrolled = false }: EyesProps) => {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const [hasMouseMoved, setHasMouseMoved] = useState(false);
  const controls = useAnimation();
  const blinkingRef = useRef(true);

  // Initial blinking effect
  useEffect(() => {
    const startInitialBlinking = async () => {
      while (blinkingRef.current) {
        await controls.start("closed");
        await new Promise(resolve => setTimeout(resolve, 100));
        await controls.start("open");
        await new Promise(resolve => setTimeout(resolve, 3000));
      }
    };

    startInitialBlinking();
  }, [controls]);

  // Mouse movement effect
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!hasMouseMoved) {
        setHasMouseMoved(true);
        blinkingRef.current = false;
        controls.start("open");
      }

      const eyes = [leftEyeRef.current, rightEyeRef.current];
      
      eyes.forEach(eye => {
        if (!eye) return;
        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;
        
        const angle = Math.atan2(
          event.clientY - eyeCenterY,
          event.clientX - eyeCenterX
        );
        
        const pupilDistance = 20;
        const pupilX = Math.cos(angle) * pupilDistance;
        const pupilY = Math.sin(angle) * pupilDistance;
        
        const pupil = eye.querySelector('.pupil') as HTMLElement;
        if (pupil) {
          pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [hasMouseMoved, controls]);

  const eyelidVariants = {
    closed: { 
      scaleY: 1,
      transition: { 
        duration: 0.1,
        ease: "easeInOut"
      }
    },
    open: { 
      scaleY: 0,
      transition: { 
        duration: 0.1,
        ease: "easeInOut"
      }
    }
  };

  const eyeContainerVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: -10,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  // Separate color transition timing
  const eyeClasses = `absolute w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-md hidden sm:flex overflow-hidden ${
    isScrolled ? "bg-pink-500 transition-colors duration-300 delay-200" : "bg-white transition-colors duration-300"
  }`;

  const pupilClasses = `pupil w-2 h-2 sm:w-3 sm:h-3 md:w-5 md:h-5 rounded-full transition-all duration-[50ms] origin-center ${
    isScrolled ? "bg-white transition-colors duration-300 delay-200" : "bg-black transition-colors duration-300"
  }`;

  const eyelidClasses = `absolute inset-0 origin-top ${
    isScrolled ? "bg-black transition-colors duration-300 delay-200" : "bg-[#1B1B1B] transition-colors duration-300"
  }`;

  return (
    <motion.div
      variants={eyeContainerVariants}
      initial="visible"
      animate={isScrolled ? "hidden" : "visible"}
      className="absolute w-full h-full"
    >
      <div 
        ref={leftEyeRef}
        className={`${eyeClasses} left-[-40px] sm:left-[-60px] md:left-[-80px] lg:left-[-150px] top-1/2 -translate-y-1/2`}
      >
        <motion.div 
          className={pupilClasses}
          whileHover={{ scale: 1.2 }}
        />
        <motion.div
          animate={controls}
          variants={eyelidVariants}
          className={eyelidClasses}
        />
      </div>
      <div 
        ref={rightEyeRef}
        className={`${eyeClasses} right-[-40px] sm:right-[-60px] md:right-[-80px] lg:right-[-150px] top-1/2 -translate-y-1/2`}
      >
        <motion.div 
          className={pupilClasses}
          whileHover={{ scale: 1.2 }}
        />
        <motion.div
          animate={controls}
          variants={eyelidVariants}
          className={eyelidClasses}
        />
      </div>
    </motion.div>
  );
};

export default Eyes;
