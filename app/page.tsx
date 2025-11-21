import { BentoGrid } from '@/components/BentoGrid'
import { ProjectsSection } from '@/components/ProjectsSection'
import { SkillsSection } from '@/components/SkillsSection'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ThemeToggle />
      <BentoGrid />
      <ProjectsSection />
      <SkillsSection />
      <Footer />
    </main>
  )
}
