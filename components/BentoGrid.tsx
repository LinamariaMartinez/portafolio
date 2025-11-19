'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { personalInfo, stats, skills, projects } from '@/lib/data'
import { StatsCard } from './StatsCard'
import { SkillsCard } from './SkillsCard'
import { ProjectCard } from './ProjectCard'

export function BentoGrid() {
  return (
    <div className="min-h-screen p-6 md:p-12">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {personalInfo.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-foreground/80 mb-4">
            {personalInfo.title}
          </h2>
          <p className="text-lg text-foreground/70 mb-6 max-w-2xl">
            {personalInfo.bio}
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 text-foreground/70">
              <MapPin className="h-4 w-4" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/70">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
                {personalInfo.email}
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 border border-primary/20"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-primary" />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 border border-primary/20"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-primary" />
            </a>
          </div>
        </div>
      </motion.section>

      {/* Stats Grid */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Estadísticas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <StatsCard
              key={stat.id}
              label={stat.label}
              value={stat.value}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Skills Grid */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Habilidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillsCard
              key={skill.id}
              category={skill.category}
              items={skill.items}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Projects Bento Grid */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
          {projects.map((project, index) => (
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
      </section>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-foreground/10">
        <p className="text-center text-foreground/60">
          © {new Date().getFullYear()} {personalInfo.name}. Hecho con Next.js y Tailwind CSS.
        </p>
      </footer>
    </div>
  )
}
