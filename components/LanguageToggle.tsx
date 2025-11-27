'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { Languages } from 'lucide-react'

export function LanguageToggle() {
  const [isPending, startTransition] = useTransition()
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const toggleLanguage = () => {
    const nextLocale = locale === 'es' ? 'en' : 'es'

    startTransition(() => {
      // Remove the current locale from the pathname if it exists
      const pathnameWithoutLocale = pathname.replace(/^\/(es|en)/, '') || '/'
      // Add the new locale
      const newPath = `/${nextLocale}${pathnameWithoutLocale}`
      router.replace(newPath)
    })
  }

  return (
    <button
      onClick={toggleLanguage}
      disabled={isPending}
      className="p-3 rounded-full
                 bg-white/80 dark:bg-gray-800/80
                 hover:bg-white dark:hover:bg-gray-800
                 backdrop-blur-sm
                 shadow-lg hover:shadow-xl
                 border border-gray-200 dark:border-gray-700
                 transition-all duration-300 ease-in-out
                 hover:scale-110 active:scale-95
                 group
                 disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="Toggle language"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <Languages className="h-5 w-5 text-primary" />
        <span className="absolute -bottom-1 -right-1 text-[8px] font-bold text-foreground/70 uppercase">
          {locale === 'es' ? 'EN' : 'ES'}
        </span>
      </div>
    </button>
  )
}
