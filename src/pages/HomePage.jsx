import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import WorkSection from '../components/WorkSection'
import CoreStackSection from '../components/CoreStackSection'
import CapabilitiesSection from '../components/CapabilitiesSection'
import ContactSection from '../components/ContactSection'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="work">
          <WorkSection />
        </section>
        <section id="stack">
          <CoreStackSection />
        </section>
        <section id="capabilities">
          <CapabilitiesSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </>
  )
}
