import { BentoGrid } from '@/components/BentoGrid'
import { ProjectsSection } from '@/components/ProjectsSection'
import { SkillsSection } from '@/components/SkillsSection'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ThemeToggle />
      <BentoGrid />
      <ProjectsSection />
      <SkillsSection />
    </main>
  )
}
