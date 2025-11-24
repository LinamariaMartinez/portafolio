import { BentoGrid } from '@/components/BentoGrid'
import { ProjectsSection } from '@/components/ProjectsSection'
import { SkillsSection } from '@/components/SkillsSection'
import { ThemeToggle } from '@/components/ThemeToggle'
import { LanguageToggle } from '@/components/LanguageToggle'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-slate-900">
      <ThemeToggle />
      <LanguageToggle />
      <BentoGrid />
      <ProjectsSection />
      <SkillsSection />
      <Footer />
    </main>
  )
}
