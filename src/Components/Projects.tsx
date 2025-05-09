import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { useRef } from 'react'

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with React, TypeScript, and Framer Motion. Features smooth animations, responsive design, and interactive elements.",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/silky-x0/Portfolio",
    live: "Yes",
    image: "/portfolio.png"
  },
  {
    title: "AI Chat to Doc App",
    description: "AI powered chat application. Includes features like message history, Source Indicators, and AI-powered responses.",
    tech: ["Next.js", "Gemini AI", "Autho0", "Firebase"],
    github: "https://github.com/silky-x0/Chat2DocV2",
    live: "Yes",
    image: "/Desk.png"
  },
  {
    title: "Operating System",
    description: "A minimal OS built with Assembly and C++",
    tech: ["C++", "Assembly"],
    github: "https://github.com/silky-x0/Kernel-OS",
    live: "In-making",
    image: "/weather.png"
  },
  {
    title: "Spam Detector",
    description: "Detects or marks if mail if spam or not",
    tech: ["Python", "Jupyter"],
    github: "https://github.com/silky-x0/Spam-detector",
    live: "No",
    image: "/tasks.png"
  }
];

function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section 
      ref={containerRef}
      id="projects" 
      className="min-h-[300vh] py-20 bg-gradient-to-b from-black to-zinc-900/80 relative"
    >
      <div className="sticky top-0 min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-indigo-500/10 animate-gradient" />
        
        <div className="container mx-auto px-4 relative">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-center mb-32 bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
          >
            Projects
          </motion.h2>

          <div className="relative max-w-4xl mx-auto h-[600px]">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.title} 
                project={project} 
                index={index}
                progress={scrollYProgress}
                total={projects.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ 
  project, 
  index, 
  progress,
  total
}: { 
  project: typeof projects[0];
  index: number;
  progress: MotionValue<number>;
  total: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const y = useTransform(
    progress,
    [index / total, (index + 1) / total],
    [0, -200],
    {
      clamp: false // Prevents sudden jumps
    }
  );

  const opacity = useTransform(
    progress,
    [
      Math.max(0, index - 0.5) / total, // Start fade when previous card is halfway
      index / total, // Fully visible at start
      (index + 0.8) / total, // Start fading out later
      (index + 1) / total // Fully transparent at end
    ],
    [0, 1, 1, 0]
  );

  const scale = useTransform(
    progress,
    [
      index / total,
      (index + 0.8) / total,
      (index + 1) / total
    ],
    [1, 1, 0.8]
  );

  const pointerEvents = useTransform(
    progress,
    ([index - 0.1, index + 0.8].map(v => v / total)),
    ["all", "none"]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{ 
        y,
        opacity,
        scale,
        zIndex: total - index,
        pointerEvents
      }}
      className="absolute top-0 left-0 right-0 bg-zinc-800/50 rounded-lg p-6 hover:bg-zinc-800/80 transition-colors border border-zinc-700/50 backdrop-blur-sm"
    >
      <div className="aspect-video mb-4 overflow-hidden rounded-lg bg-zinc-700/50 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 hover:opacity-75 transition-opacity" />
        {/* Add project image here */}
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 hover:text-violet-400 transition-colors">
        {project.title}
      </h3>
      <p className="text-zinc-300 mb-4 line-clamp-3">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map(tech => (
          <span 
            key={tech} 
            className="px-3 py-1 bg-violet-500/10 rounded-full text-sm text-violet-300 hover:bg-violet-500/20 transition-colors"
          >
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
    </motion.div>
  )
}

export default Projects 