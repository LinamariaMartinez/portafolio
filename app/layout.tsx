import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Linamaría Martínez | Desarrolladora Full Stack',
  description: 'Desarrolladora Full Stack con más de 3 años de experiencia creando aplicaciones web modernas y escalables. Especializada en React, Next.js y TypeScript.',
  keywords: ['portfolio', 'desarrolladora full stack', 'frontend developer', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  authors: [{ name: 'Linamaría Martínez' }],
  creator: 'Linamaría Martínez',
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://linamariamartinez.dev',
    title: 'Linamaría Martínez | Desarrolladora Full Stack',
    description: 'Portfolio profesional de Linamaría Martínez - Desarrolladora Full Stack especializada en React, Next.js y TypeScript.',
    siteName: 'Linamaría Martínez Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Linamaría Martínez - Desarrolladora Full Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Linamaría Martínez | Desarrolladora Full Stack',
    description: 'Portfolio profesional de Linamaría Martínez - Desarrolladora Full Stack especializada en React, Next.js y TypeScript.',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light dark" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
