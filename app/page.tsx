import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Services from '@/components/Services'
import SocialHub from '@/components/SocialHub'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Services />
      <SocialHub />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
