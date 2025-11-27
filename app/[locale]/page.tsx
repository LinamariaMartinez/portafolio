import { BentoGrid } from '@/components/BentoGrid'
import { ProjectsSection } from '@/components/ProjectsSection'
import { SkillsSection } from '@/components/SkillsSection'
import { ThemeToggle } from '@/components/ThemeToggle'
import { LanguageToggle } from '@/components/LanguageToggle'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-slate-900">
      {/* Grouped Toggles - Fixed Top Right */}
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50 flex gap-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>

      <BentoGrid />
      <ProjectsSection />
      <SkillsSection />
      <Footer />
    </main>
  )
}
