'use client'

import { motion } from 'framer-motion'

interface StatsCardProps {
  label: string
  value: string
  index: number
}

export function StatsCard({ label, value, index }: StatsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 hover:border-primary/40 transition-all duration-300"
    >
      <div className="flex flex-col gap-2">
        <span className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          {value}
        </span>
        <span className="text-sm text-foreground/70">{label}</span>
      </div>
    </motion.div>
  )
}
