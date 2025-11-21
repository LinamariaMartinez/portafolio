'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Skill {
  name: string
  level: number
}

interface SkillsCardProps {
  category: string
  items: Skill[]
  index: number
}

// Función para obtener el color según el nivel
const getBarColor = (level: number) => {
  if (level >= 90) return 'from-green-500 to-green-600'
  if (level >= 70) return 'from-blue-500 to-blue-600'
  return 'from-yellow-500 to-yellow-600'
}

export function SkillsCard({ category, items, index }: SkillsCardProps) {
  const ref = useRef(null)
  // Animar solo una vez cuando entra en viewport
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 md:p-8 rounded-2xl backdrop-blur-sm
        bg-white dark:bg-slate-900/50
        border border-gray-200 dark:border-slate-800
        hover:border-gray-300 dark:hover:border-slate-700
        transition-all duration-300 hover:shadow-lg"
    >
      {/* Título de categoría */}
      <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground">
        {category}
      </h3>

      {/* Lista de skills con barras de progreso */}
      <div className="space-y-5">
        {items.map((skill, idx) => (
          <div key={idx} className="space-y-2">
            {/* Nombre y porcentaje */}
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-foreground/90">
                {skill.name}
              </span>
              <span className="text-sm font-semibold text-foreground/70">
                {skill.level}%
              </span>
            </div>

            {/* Barra de progreso */}
            <div className="w-full h-2.5 bg-gray-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.1 + idx * 0.1,
                  ease: "easeOut"
                }}
                className={`h-full bg-gradient-to-r ${getBarColor(skill.level)} rounded-full`}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
