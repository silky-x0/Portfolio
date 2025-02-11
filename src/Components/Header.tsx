import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import Eyes from './Eyes';

const Header = ({ title = "Akhil" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleMenuEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsMenuOpen(true);
  };

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsMenuOpen(false);
    }, 300);
  };

  const headerVariants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  };

  const menuVariants = {
    hidden: { 
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="fixed top-2 sm:top-4 md:top-10 left-0 right-0 z-50 flex justify-center px-2 sm:px-4"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <header className="w-full max-w-[90%] sm:max-w-3xl bg-white backdrop-blur-sm mx-2 md:mx-4 rounded-full relative">
        <Eyes />
        <div className="px-2 sm:px-3 md:px-4 py-2 md:py-3 flex justify-between items-center">
          <motion.h1 
            className="text-xl sm:text-2xl md:text-4xl text-gray-800 font-medium"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {title}
          </motion.h1>
          <div 
            onMouseEnter={handleMenuEnter}
            onMouseLeave={handleMenuLeave}
            className="relative"
          >
            <button 
              className="p-1 hover:bg-gray-300/50 transition-colors rounded-full"
              aria-label="Menu"
              aria-expanded={isMenuOpen}
            >
              <Menu className="w-8 h-8 md:w-11 md:h-9 text-gray-700" /> 
            </button>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div 
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="absolute top-full right-0 mt-2 w-36 md:w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                >
                  <nav className="flex flex-col text-black text-sm md:text-base">
                    <a href="#" className="px-4 py-2 hover:bg-gray-100 transition-colors">Home</a>
                    <a href="#" className="px-4 py-2 hover:bg-gray-100 transition-colors">About</a>
                    <a href="#" className="px-4 py-2 hover:bg-gray-100 transition-colors">Projects</a>
                    <a href="#" className="px-4 py-2 hover:bg-gray-100 transition-colors">Contact</a>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>
    </motion.div>
  );
};

export default Header;