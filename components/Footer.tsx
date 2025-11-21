'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '@/lib/data'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-gray-200 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6 text-center"
        >
          {/* Nombre */}
          <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {personalInfo.name}
          </h3>

          {/* Tech Stack */}
          <p className="text-sm text-foreground/60">
            Creado con <span className="text-primary font-semibold">Next.js</span> + {' '}
            <span className="text-primary font-semibold">TypeScript</span> + {' '}
            <span className="text-primary font-semibold">Tailwind CSS</span>
          </p>

          {/* Links Sociales */}
          <div className="flex items-center gap-4">
            <motion.a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-white dark:bg-slate-800
                border border-gray-200 dark:border-slate-600
                hover:border-primary dark:hover:border-primary
                transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-foreground hover:text-primary transition-colors" />
            </motion.a>

            <motion.a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-white dark:bg-slate-800
                border border-gray-200 dark:border-slate-600
                hover:border-primary dark:hover:border-primary
                transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-foreground hover:text-primary transition-colors" />
            </motion.a>

            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full bg-white dark:bg-slate-800
                border border-gray-200 dark:border-slate-600
                hover:border-primary dark:hover:border-primary
                transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-foreground hover:text-primary transition-colors" />
            </motion.a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-slate-700 to-transparent" />

          {/* Copyright */}
          <p className="text-sm text-foreground/50">
            © {currentYear} {personalInfo.name}. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
