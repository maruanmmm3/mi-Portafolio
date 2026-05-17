import HeroSection from '../components/HeroSection'
import SkillsSection from '../components/SkillsSection'
import ExperienceSection from '../components/ExperienceSection'
import CertificationsSection from '../components/CertificationsSection'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  )
}