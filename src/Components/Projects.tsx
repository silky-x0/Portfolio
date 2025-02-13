import { motion, useScroll, useTransform } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useRef } from 'react'

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with React, TypeScript, and Framer Motion. Features smooth animations, responsive design, and interactive elements.",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    live: "#",
    image: "/portfolio.png"
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application powered by AI. Includes features like message history, typing indicators, and AI-powered responses.",
    tech: ["Next.js", "OpenAI", "Socket.io", "MongoDB"],
    github: "https://github.com/yourusername/ai-chat",
    live: "#",
    image: "/ai-chat.png"
  },
  {
    title: "E-Commerce Dashboard",
    description: "Admin dashboard for e-commerce platforms with analytics, inventory management, and order processing capabilities.",
    tech: ["React", "Redux", "Node.js", "Express"],
    github: "https://github.com/yourusername/ecommerce-dashboard",
    live: "#",
    image: "/dashboard.png"
  },
  {
    title: "Weather App",
    description: "Beautiful weather application with real-time updates, location tracking, and weekly forecasts.",
    tech: ["React Native", "Weather API", "Geolocation"],
    github: "https://github.com/yourusername/weather-app",
    live: "#",
    image: "/weather.png"
  },
  {
    title: "Task Management System",
    description: "Collaborative task management tool with real-time updates, drag-and-drop interface, and team collaboration features.",
    tech: ["Vue.js", "Firebase", "Vuex", "TailwindCSS"],
    github: "https://github.com/yourusername/task-manager",
    live: "#",
    image: "/tasks.png"
  }
];

function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0.2, 0.8], ["100%", "-100%"]);

  return (
    <section 
      ref={containerRef}
      id="projects" 
      className="min-h-screen py-20 bg-zinc-900/80 overflow-x-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>

        <div className="relative">
          {/* Initial two projects */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.slice(0, 2).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-800/50 rounded-lg p-6 hover:bg-zinc-800/80 transition-colors border border-zinc-700/50"
              >
                <ProjectContent project={project} />
              </motion.div>
            ))}
          </div>

          {/* Horizontal scrolling projects */}
          <div className="absolute top-0 left-full w-screen overflow-hidden">
            <motion.div 
              style={{ x }}
              className="flex gap-8 pl-8"
            >
              {projects.slice(2).map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="min-w-[300px] md:min-w-[400px] bg-zinc-800/50 rounded-lg p-6 hover:bg-zinc-800/80 transition-colors border border-zinc-700/50"
                >
                  <ProjectContent project={project} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Separate component for project content to avoid repetition
function ProjectContent({ project }: { project: typeof projects[0] }) {
  return (
    <>
      <div className="aspect-video mb-4 overflow-hidden rounded-lg bg-zinc-700/50">
        <div className="w-full h-full bg-gradient-to-br from-violet-500/20 to-indigo-500/20" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
      <p className="text-zinc-300 mb-4 line-clamp-3">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map(tech => (
          <span key={tech} className="px-3 py-1 bg-violet-500/10 rounded-full text-sm text-violet-300">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-violet-400 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub className="w-6 h-6" />
        </motion.a>
        <motion.a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-violet-400 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaExternalLinkAlt className="w-6 h-6" />
        </motion.a>
      </div>
    </>
  )
}

export default Projects 