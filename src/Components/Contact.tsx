import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { FaGithub, FaLinkedin, FaReddit } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Contact() {
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/silky-x0",
      label: "GitHub"
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/your-profile",
      label: "LinkedIn"
    },
    {
      icon: FaXTwitter,
      href: "https://x.com/your-handle",
      label: "X"
    },
    {
      icon: FaReddit,
      href: "https://reddit.com/user/your-username",
      label: "Reddit"
    }
  ]

  return (
    <section id="contact" className="min-h-screen py-20 bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-violet-400 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-lg bg-zinc-800/50 border border-zinc-700 text-white focus:outline-none focus:border-violet-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-zinc-800/50 border border-zinc-700 text-white focus:outline-none focus:border-violet-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-3 rounded-lg bg-zinc-800/50 border border-zinc-700 text-white focus:outline-none focus:border-violet-500"
              />
            </div>
            <Button 
              variant="default"
              className="w-full bg-violet-600 hover:bg-violet-700 transition-colors"
            >
              Send Message
            </Button>
          </form>

          <div className="mt-12 flex justify-center gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-violet-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={social.label}
              >
                <social.icon className="w-6 h-6 sm:w-8 sm:h-8" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 