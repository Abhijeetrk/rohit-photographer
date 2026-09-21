'use client'
import { useEffect, useState } from 'react'
import { FiChevronDown, FiInstagram, FiYoutube } from 'react-icons/fi'
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
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 5500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
      ))}

      {/* Cinematic Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />

      {/* Hero Content - Perfectly Centered with Top Padding so Navbar never overlaps */}
      <div className="relative z-10 pt-20 pb-12 px-4 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Subtle Category Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/50 border border-zinc-700/60 text-yellow-400 text-xs uppercase tracking-[0.25em] font-medium mb-6">
          <span>{slides[current].tag}</span>
        </div>

        {/* Brand Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-3 tracking-tight leading-tight">
          Rohit Nagre <span className="text-yellow-500 font-light block sm:inline">Photography</span>
        </h1>

        {/* Clean Signature Tagline */}
        <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-yellow-400/95 font-medium mb-4">
          &ldquo;Your Story. My Lens.&rdquo;
        </p>

        {/* Simple One-line Bio */}
        <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light leading-relaxed">
          Preserving raw emotions, candid moments, and timeless wedding memories across India.
        </p>

        {/* 2 Clean Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3.5 justify-center w-full sm:w-auto mb-8">
          <a href="#gallery" className="btn-primary text-xs uppercase tracking-widest px-8 py-3">
            View Portfolio
          </a>
          <a href="#card" className="btn-outline text-xs uppercase tracking-widest px-7 py-3">
            Digital Visiting Card
          </a>
        </div>

        {/* Google Trust Rating & Socials in One Neat Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-300">
          <div className="flex items-center gap-1.5 bg-black/40 border border-zinc-800 px-3 py-1.5 rounded-full">
            <FcGoogle className="text-base" />
            <span className="font-medium text-white">5.0</span>
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-gray-400">(120+ reviews)</span>
          </div>

          <div className="flex items-center gap-4 text-lg">
            <a href="https://instagram.com/YOUR_INSTAGRAM" target="_blank" rel="noopener noreferrer"
              aria-label="Instagram" className="text-gray-400 hover:text-pink-400 transition-colors">
              <FiInstagram />
            </a>
            <a href="https://wa.me/91XXXXXXXXXX?text=Hi%20Rohit%20Nagre!%20I%20saw%20your%20portfolio%20and%20want%20to%20book%20a%20shoot."
              target="_blank" rel="noopener noreferrer"
              aria-label="WhatsApp" className="text-gray-400 hover:text-green-400 transition-colors">
              <FaWhatsapp />
            </a>
            <a href="https://youtube.com/@YOUR_YOUTUBE" target="_blank" rel="noopener noreferrer"
              aria-label="YouTube" className="text-gray-400 hover:text-red-500 transition-colors">
              <FiYoutube />
            </a>
            <a href="https://facebook.com/YOUR_FACEBOOK" target="_blank" rel="noopener noreferrer"
              aria-label="Facebook" className="text-gray-400 hover:text-blue-500 transition-colors">
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === current ? 'bg-yellow-500 w-7' : 'bg-white/30 w-2'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <a href="#about" aria-label="Scroll down" className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 hover:text-yellow-400 transition-colors">
        <FiChevronDown className="text-2xl animate-bounce" />
      </a>
    </section>
  )
}
