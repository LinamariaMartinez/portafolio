'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed top-4 right-4 md:top-6 md:right-6 z-50 p-3 rounded-full
                 bg-white/80 dark:bg-gray-800/80
                 hover:bg-white dark:hover:bg-gray-800
                 backdrop-blur-sm
                 shadow-lg hover:shadow-xl
                 border border-gray-200 dark:border-gray-700
                 transition-all duration-300 ease-in-out
                 hover:scale-110 active:scale-95
                 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Sun
          className="absolute inset-0 h-5 w-5 text-amber-500
                     rotate-0 scale-100 transition-all duration-500 ease-in-out
                     dark:rotate-90 dark:scale-0"
        />
        <Moon
          className="absolute inset-0 h-5 w-5 text-slate-700 dark:text-slate-300
                     rotate-90 scale-0 transition-all duration-500 ease-in-out
                     dark:rotate-0 dark:scale-100"
        />
      </div>
    </button>
  )
}
