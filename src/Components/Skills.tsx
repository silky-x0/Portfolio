import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaPython, FaDatabase } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss } from 'react-icons/si'

const skills = [
  { icon: FaReact, name: 'React' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: FaNodeJs, name: 'Node.js' },
  { icon: FaPython, name: 'Python' },
  { icon: FaDatabase, name: 'SQL' },
  { icon: SiTailwindcss, name: 'Tailwind' },
]

function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20
      }
    }
  };

  return (
    <section id="skills" className="min-h-screen py-20 bg-gradient-to-b from-zinc-900/50 to-black relative">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-indigo-500/10 animate-gradient" />
      
      <div className="container mx-auto px-4 relative">
        <motion.h2 
          variants={skillVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
        >
          Skills & Technologies
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={skillVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="flex flex-col items-center p-6 rounded-lg bg-zinc-800/50 hover:bg-zinc-800/80 border border-zinc-700/50 backdrop-blur-sm hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-shadow duration-200"
            >
              <motion.div
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-violet-500/20 blur-xl rounded-full" />
                <skill.icon className="w-12 h-12 mb-4 text-violet-400 relative z-10" />
              </motion.div>
              <h3 className="text-white text-lg font-medium">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 