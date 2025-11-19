import { BentoGrid } from '@/components/BentoGrid'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ThemeToggle />
      <BentoGrid />
    </main>
  )
}
