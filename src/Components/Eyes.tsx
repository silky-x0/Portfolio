import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Eyes = () => {
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

  return (
    <>
      <div 
        ref={leftEyeRef}
        className="absolute left-[-40px] sm:left-[-60px] md:left-[-80px] lg:left-[-150px] top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-md hidden sm:flex overflow-hidden"
      >
        <div className="pupil w-2 h-2 sm:w-3 sm:h-3 md:w-5 md:h-5 bg-black rounded-full transition-transform duration-[50ms] origin-center" />
        <motion.div
          animate={controls}
          variants={eyelidVariants}
          className="absolute inset-0 bg-[#1B1B1B] origin-top"
        />
      </div>
      <div 
        ref={rightEyeRef}
        className="absolute right-[-40px] sm:right-[-60px] md:right-[-80px] lg:right-[-150px] top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-md hidden sm:flex overflow-hidden"
      >
        <div className="pupil w-2 h-2 sm:w-3 sm:h-3 md:w-5 md:h-5 bg-black rounded-full transition-transform duration-[50ms] origin-center" />
        <motion.div
          animate={controls}
          variants={eyelidVariants}
          className="absolute inset-0 bg-[#1B1B1B] origin-top"
        />
      </div>
    </>
  );
};

export default Eyes;
