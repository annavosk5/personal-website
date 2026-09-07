import { AboutSection } from "@/components/sections/about/AboutSection"
import { ContactSection } from "@/components/sections/contact/ContactSection"
import { EducationSkillsSection } from "@/components/sections/education-skills/EducationSkillsSection"
import { ExperienceSection } from "@/components/sections/experience/ExperienceSection"
import { Footer } from "@/components/sections/footer/Footer"
import { HeroSection } from "@/components/sections/hero/HeroSection"
import { Navbar } from "@/components/sections/navbar/Navbar"
import { ProjectsSection } from "@/components/sections/projects/ProjectsSection"
import { InterestsSection } from "@/components/sections/interests/InterestsSection"
import './App.css'

function App() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSkillsSection />
      <InterestsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App
