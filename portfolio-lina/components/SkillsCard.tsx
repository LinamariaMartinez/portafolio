'use client'

import { motion } from 'framer-motion'

interface SkillsCardProps {
  category: string
  items: string[]
  index: number
}

export function SkillsCard({ category, items, index }: SkillsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10 border border-secondary/20 hover:border-secondary/40 transition-all duration-300"
    >
      <h3 className="text-xl font-bold mb-4 text-secondary">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
            className="px-3 py-1.5 text-sm rounded-full bg-secondary/20 text-foreground/80 hover:bg-secondary/30 transition-colors"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}
