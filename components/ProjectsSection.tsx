'use client'

import { motion } from 'framer-motion'
import { ProjectCard } from './ProjectCard'
import { projects } from '@/lib/data'

export function ProjectsSection() {
  // Mostrar solo los primeros 3 proyectos
  const featuredProjects = projects.slice(0, 3)

  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Título de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4
            bg-gradient-to-r from-primary via-secondary to-accent
            bg-clip-text text-transparent">
            Proyectos Destacados
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes y destacados
          </p>
        </motion.div>

        {/* Grid de proyectos - 2 columnas en desktop, 1 en mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              github={project.github}
              demo={project.demo}
              featured={project.featured}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
