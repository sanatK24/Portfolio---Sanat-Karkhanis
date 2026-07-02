import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { SkillsSection } from './components/SkillsSection'
import { ExperienceSection } from './components/ExperienceSection'
import { ProjectsSection } from './components/ProjectsSection'
import { LeadershipSection } from './components/LeadershipSection'
import { CertificationsSection } from './components/CertificationsSection'
import { Footer } from './components/Footer'
import { usePortfolio } from './hooks/usePortfolio'

function App() {
  const { portfolio, loading } = usePortfolio()

  const handleNavClick = (section: string) => {
    const element = document.getElementById(section)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gray-800 border-t-chrome rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading portfolio...</p>
        </div>
      </div>
    )
  }

  if (!portfolio) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <p className="text-red-400">Failed to load portfolio data</p>
      </div>
    )
  }

  return (
    <div className="bg-dark min-h-screen">
      <Navbar onNavClick={handleNavClick} />
      <HeroSection profile={portfolio.profile} />
      <AboutSection profile={portfolio.profile} education={portfolio.education} />
      <SkillsSection skills={portfolio.skills} />
      <ExperienceSection experience={portfolio.experience} />
      <ProjectsSection projects={portfolio.projects} />
      <LeadershipSection leadership={portfolio.leadership} extracurricular={portfolio.extracurricular} />
      <CertificationsSection certifications={portfolio.certifications} />
      <Footer profile={portfolio.profile} />
    </div>
  )
}

export default App
