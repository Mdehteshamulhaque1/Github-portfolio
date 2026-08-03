import { lazy, Suspense } from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from './components/Navigation'
import ScrollProgress from './components/ScrollProgress'
import Footer from './components/Footer'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import ResumeSection from './sections/ResumeSection'
import SkillsSection from './sections/SkillsSection'
import PerformanceSection from './sections/PerformanceSection'
import ExperienceSection from './sections/ExperienceSection'
import AchievementsSection from './sections/AchievementsSection'
import CertificationsSection from './sections/CertificationsSection'
import ContactSection from './sections/ContactSection'
import {
  achievements,
  blogPosts,
  systemDesigns,
  experience,
  performanceData,
  profile,
  projects,
  skills,
  certifications,
} from './data/portfolioData'
import { useTheme } from './hooks/useTheme'

const ProjectsSection = lazy(() => import('./sections/ProjectsSection'))
const SystemDesignSection = lazy(() => import('./sections/SystemDesignSection'))
const BlogSection = lazy(() => import('./sections/BlogSection'))

function SectionSkeleton() {
  return (
    <div className="mx-auto mt-16 h-24 w-full max-w-6xl animate-pulse rounded-2xl glass-card" />
  )
}

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <Helmet>
        <title>Backend Developer Portfolio | Python FastAPI MySQL</title>
        <meta
          name="description"
          content="Modern ATS-friendly backend engineer portfolio with performance-centric project case studies and live GitHub integration."
        />
      </Helmet>

      <ScrollProgress />
      <Navigation theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <HeroSection profile={profile} />
        <AboutSection profile={profile} />
        <ResumeSection />
        <SkillsSection skills={skills} />

        <Suspense fallback={<SectionSkeleton />}>
          <ProjectsSection projects={projects} />
        </Suspense>

        <ExperienceSection experience={experience} />
        <CertificationsSection certifications={certifications} />
        <AchievementsSection achievements={achievements} />

        <Suspense fallback={<SectionSkeleton />}>
          <SystemDesignSection systemDesigns={systemDesigns} />
        </Suspense>

        <PerformanceSection performanceData={performanceData} />

        <Suspense fallback={<SectionSkeleton />}>
          <BlogSection blogPosts={blogPosts} />
        </Suspense>

        <ContactSection profile={profile} />
      </main>

      <Footer />
    </>
  )
}

export default App
