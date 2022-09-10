import Footer from "../components/Footer"
import Hero from "../components/Hero"
import SectionContact from "../components/SectionContact"
import SectionProfile from "../components/SectionProfile"
import SectionProjects from "../components/SectionProjects"
import SectionSkills from "../components/SectionSkills"
export default function Home() {
  return (
    <>
        <Hero />
        <SectionProfile />
        <SectionSkills />
        <SectionProjects />
        <SectionContact />
        <Footer />
    </>
  )
}