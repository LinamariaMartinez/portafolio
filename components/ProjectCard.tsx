'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Star } from 'lucide-react'
import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  demo?: string
  featured?: boolean
  index: number
}

// Colores por tecnología
const tagColors: Record<string, string> = {
  'React': 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  'Next.js': 'bg-blue-600/10 text-blue-600 border-blue-600/20',
  'TypeScript': 'bg-blue-700/10 text-blue-700 border-blue-700/20',
  'Tailwind': 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20',
  'Supabase': 'bg-green-500/10 text-green-500 border-green-500/20',
  'Node.js': 'bg-green-600/10 text-green-600 border-green-600/20',
  'MongoDB': 'bg-green-700/10 text-green-700 border-green-700/20',
  'Express': 'bg-gray-500/10 text-gray-500 border-gray-500/20',
  'PostgreSQL': 'bg-blue-400/10 text-blue-400 border-blue-400/20',
  'Stripe': 'bg-purple-500/10 text-purple-500 border-purple-500/20',
  'Prisma': 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20',
  'Socket.io': 'bg-slate-500/10 text-slate-500 border-slate-500/20',
  'Chart.js': 'bg-pink-500/10 text-pink-500 border-pink-500/20',
  'OpenWeather API': 'bg-orange-500/10 text-orange-500 border-orange-500/20',
  'Mapbox': 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  'jsPDF': 'bg-red-500/10 text-red-500 border-red-500/20',
}

const getTagColor = (tag: string) => {
  return tagColors[tag] || 'bg-primary/10 text-primary border-primary/20'
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  github,
  demo,
  featured,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative rounded-2xl overflow-hidden
        bg-white dark:bg-slate-900/50
        border border-gray-200 dark:border-slate-800
        hover:border-gray-300 dark:hover:border-slate-700
        hover:shadow-2xl
        transition-all duration-300"
    >
      {/* Badge Featured */}
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center gap-1 px-3 py-1.5 rounded-full
            bg-yellow-500/90 backdrop-blur-sm text-white text-xs font-semibold">
            <Star className="h-3 w-3 fill-white" />
            Featured
          </div>
        </div>
      )}

      {/* Imagen/Placeholder */}
      <div className="relative h-48 w-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-4xl">
          🚀
        </div>
        {/* Overlay gradient sutil */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent dark:from-slate-900/5" />
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col gap-4">
        {/* Título + Descripción */}
        <div>
          <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-foreground/70 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Stack tags con scroll horizontal en mobile */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className={`text-xs px-3 py-1.5 rounded-full border whitespace-nowrap
                ${getTagColor(tag)} transition-all duration-300 hover:scale-105`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer con botones */}
        <div className="flex gap-3 mt-auto pt-2">
          {demo && (
            <motion.a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 px-4 py-2.5 rounded-lg bg-primary text-white
                hover:bg-primary/90 transition-all duration-300
                flex items-center justify-center gap-2 text-sm font-medium"
            >
              <ExternalLink className="h-4 w-4" />
              Demo
            </motion.a>
          )}
          {github && (
            <motion.a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`${demo ? 'px-4' : 'flex-1'} py-2.5 rounded-lg
                border border-gray-300 dark:border-slate-700
                hover:bg-gray-100 dark:hover:bg-slate-800
                transition-all duration-300
                flex items-center justify-center gap-2 text-sm font-medium`}
            >
              <Github className="h-4 w-4" />
              {!demo && 'GitHub'}
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
