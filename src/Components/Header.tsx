import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu } from 'lucide-react';
import Eyes from './Eyes';

const Header = ({ title = "Akhil" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsMenuOpen(true);
  };

  const handleMenuLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsMenuOpen(false);
    }, 300);
  };

  const headerVariants = {
    hidden: { 
      y: -150,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1,
        duration: 0.6
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
      <header className={`w-full max-w-[90%] sm:max-w-3xl ${
        isScrolled ? 'bg-[#1B1B1B]/80' : 'bg-white'
      } backdrop-blur-sm mx-2 md:mx-4 rounded-full relative transition-colors duration-300`}>
        <Eyes isScrolled={isScrolled} />
        <div className="px-2 sm:px-3 md:px-4 py-1 sm:py-2 md:py-3 flex justify-between items-center">
          <motion.h1 
            className={`text-lg sm:text-xl md:text-4xl font-medium ${
              isScrolled 
                ? 'text-white hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 hover:bg-clip-text hover:text-transparent'
                : 'text-gray-800'
            } transition-all duration-300`}
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
              className={`p-1 ${
                isScrolled 
                  ? 'hover:bg-white/20 text-white' 
                  : 'hover:bg-gray-300/50 text-gray-700'
              } transition-colors rounded-full`}
              aria-label="Menu"
              aria-expanded={isMenuOpen}
            >
              <Menu className="w-8 h-8 md:w-11 md:h-9" /> 
            </button>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div 
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className={`absolute top-full right-0 mt-2 w-36 md:w-48 ${
                    isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-white'
                  } rounded-lg shadow-lg py-2 z-50`}
                >
                  <nav className="flex flex-col text-sm md:text-base">
                    {['home', 'skills', 'projects', 'contact'].map((item) => (
                      <a
                        key={item}
                        href={`#${item}`}
                        className={`px-4 py-2 capitalize ${
                          isScrolled
                            ? 'text-white/70 hover:text-pink-500 hover:bg-white/10'
                            : 'text-gray-800 hover:bg-gray-100'
                        } transition-colors`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item}
                      </a>
                    ))}
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