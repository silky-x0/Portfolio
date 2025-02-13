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
  return (
    <section id="skills" className="min-h-screen py-20 bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
        >
          Skills & Technologies
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center p-6 rounded-lg bg-zinc-800/50 hover:bg-zinc-800/80 transition-colors border border-zinc-700/50"
            >
              <skill.icon className="w-12 h-12 mb-4 text-violet-400" />
              <h3 className="text-white text-lg">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 