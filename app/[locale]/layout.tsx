import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { locales } from '@/i18n'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Linamaría Martínez | Frontend Developer & UX Researcher',
  description: 'Frontend Developer con formación en antropología y 10+ años en investigación UX. Especializada en React, Next.js y TypeScript.',
  keywords: ['portfolio', 'frontend developer', 'UX researcher', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  authors: [{ name: 'Linamaría Martínez' }],
  creator: 'Linamaría Martínez',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://linamariamartinez.dev',
    title: 'Linamaría Martínez | Frontend Developer & UX Researcher',
    description: 'Portfolio profesional de Linamaría Martínez - Frontend Developer & UX Researcher especializada en React, Next.js y TypeScript.',
    siteName: 'Linamaría Martínez Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Linamaría Martínez - Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Linamaría Martínez | Frontend Developer & UX Researcher',
    description: 'Portfolio profesional de Linamaría Martínez - Frontend Developer & UX Researcher especializada en React, Next.js y TypeScript.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white dark:bg-slate-900 text-foreground`} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={true}
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
