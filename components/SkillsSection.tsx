'use client'

import { motion } from 'framer-motion'
import { SkillsCard } from './SkillsCard'
import { getData } from '@/lib/get-data'
import { useLocale, useTranslations } from 'next-intl'

export function SkillsSection() {
  const locale = useLocale()
  const t = useTranslations('skills')
  const { skills } = getData(locale)
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-gray-50/50 dark:bg-slate-950/50">
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
            {t('title')}
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Grid 2x2 desktop, 1 columna mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skills.map((skillCategory, index) => (
            <SkillsCard
              key={skillCategory.id}
              category={skillCategory.category}
              items={skillCategory.items}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
