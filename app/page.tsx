import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Services from '@/components/Services'
import YouTubeShowcase from '@/components/YouTubeShowcase'
import LogoShowcase from '@/components/LogoShowcase'
import VisitingCard from '@/components/VisitingCard'
import SocialHub from '@/components/SocialHub'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-[#0A0A0A]">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Services />
      <YouTubeShowcase />
      <LogoShowcase />
      <VisitingCard />
      <SocialHub />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
