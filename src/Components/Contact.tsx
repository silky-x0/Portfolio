import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { FaGithub, FaLinkedin, FaReddit } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import emailjs from '@emailjs/browser'
import { useRef, useState, useEffect } from 'react'

function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);


  const onSubmitHandle = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    emailjs.sendForm('service_s3b2igl', 'template_v20hlmb', form.current, 'dzdRGmTf3m9Sq0Kg0')
      .then((result) => {
        console.log(result.text);
        setMessage({ type: 'success', text: 'Message sent successfully!' });
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.text);
        setMessage({ type: 'error', text: 'Something went wrong: ' + error.text });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

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
          <form ref={form} onSubmit={onSubmitHandle} className="space-y-6">
            <div>
              <input
                type="text"
                name="Name"
                required
                placeholder="Name"
                className="w-full p-3 rounded-lg bg-zinc-800/50 border border-zinc-700 text-white focus:outline-none focus:border-violet-500"
              />
            </div>
            <div>
              <input
                type="email"
                name="Email"
                required
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-zinc-800/50 border border-zinc-700 text-white focus:outline-none focus:border-violet-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                name="Message"
                required
                rows={4}
                className="w-full p-3 rounded-lg bg-zinc-800/50 border border-zinc-700 text-white focus:outline-none focus:border-violet-500"
              />
            </div>
            
            {message && (
              <div className={`py-2 px-3 rounded ${message.type === 'success' ? 'bg-green-800/30 text-green-300' : 'bg-red-800/30 text-red-300'}`}>
                {message.text}
              </div>
            )}
            
            <Button
              type='submit' 
              variant="default"
              className="w-full bg-violet-600 hover:bg-violet-700 transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
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