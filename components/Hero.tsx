'use client'
import { useEffect, useState } from 'react'
import { FiChevronDown, FiInstagram, FiYoutube, FiStar } from 'react-icons/fi'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const slides = [
  { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80', tag: 'Luxury Wedding Photography' },
  { url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1920&q=80', tag: 'Cinematic Portraiture' },
  { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80', tag: 'Grand Events & Celebrations' },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100 scale-105' : 'opacity-0 scale-100'} transition-transform duration-[6000ms] ease-out`}
          style={{ backgroundImage: `url(${slide.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />

      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto">
        {/* Google Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md border border-yellow-500/30 px-4 py-1.5 rounded-full mb-6 text-xs sm:text-sm text-gray-200 shadow-lg">
          <FcGoogle className="text-lg" />
          <span className="font-semibold text-white">Google Verified Business</span>
          <span className="text-yellow-400 flex items-center gap-0.5">
            <FiStar className="fill-yellow-400 text-xs" />
            <strong className="text-white ml-0.5">5.0</strong>
            <span className="text-gray-400 text-xs">(120+ reviews)</span>
          </span>
        </div>

        <p className="text-yellow-500 tracking-[0.4em] uppercase text-xs sm:text-sm font-semibold mb-3">
          {slides[current].tag}
        </p>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight">
          Rohit Nagre<br />
          <span className="text-yellow-500 font-light tracking-wide text-3xl sm:text-5xl md:text-6xl">Photography</span>
        </h1>

        <p className="text-yellow-400 font-serif italic text-xl sm:text-2xl md:text-3xl mb-3 tracking-wide">
          &ldquo;Your Story. My Lens.&rdquo;
        </p>

        <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mb-8 font-light leading-relaxed">
          Capturing timeless emotions, candid warmth, and cinematic memories with signature excellence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
          <a href="#gallery" className="btn-primary text-sm uppercase tracking-wider">
            Explore Portfolio
          </a>
          <a href="#card" className="btn-outline text-sm uppercase tracking-wider flex items-center justify-center gap-2">
            <span>💳</span> Digital Visiting Card
          </a>
          <a href="#contact" className="px-8 py-3 bg-zinc-900/80 border border-zinc-700 hover:border-yellow-500 text-white rounded-full text-sm font-semibold transition-all">
            Book Consultation
          </a>
        </div>

        {/* Quick Social & Direct Chat */}
        <div className="flex items-center gap-6 mt-10">
          <a href="https://instagram.com/YOUR_INSTAGRAM" target="_blank" rel="noopener noreferrer"
            aria-label="Instagram" className="text-gray-300 hover:text-pink-400 text-2xl transition-transform hover:scale-110">
            <FiInstagram />
          </a>
          <a href="https://facebook.com/YOUR_FACEBOOK" target="_blank" rel="noopener noreferrer"
            aria-label="Facebook" className="text-gray-300 hover:text-blue-500 text-2xl transition-transform hover:scale-110">
            <FaFacebook />
          </a>
          <a href="https://youtube.com/@YOUR_YOUTUBE" target="_blank" rel="noopener noreferrer"
            aria-label="YouTube" className="text-gray-300 hover:text-red-500 text-2xl transition-transform hover:scale-110">
            <FiYoutube />
          </a>
          <a href="https://wa.me/91XXXXXXXXXX?text=Hello%20Rohit%20Nagre%20Photography!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20photography%20session."
            target="_blank" rel="noopener noreferrer"
            aria-label="WhatsApp" className="text-gray-300 hover:text-green-400 text-2xl transition-transform hover:scale-110">
            <FaWhatsapp />
          </a>
        </div>

        {/* Carousel indicators */}
        <div className="flex gap-2 mt-8">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? 'bg-yellow-500 w-8' : 'bg-white/40 w-2'}`} />
          ))}
        </div>
      </div>

      <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 hover:text-yellow-500 animate-bounce">
        <FiChevronDown className="text-3xl" />
      </a>
    </section>
  )
}
