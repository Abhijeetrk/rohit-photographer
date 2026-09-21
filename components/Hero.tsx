'use client'
import { useEffect, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const slides = [
  { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80', tag: 'Royal Wedding Photography' },
  { url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1920&q=80', tag: 'Candid & Fine Art Portraits' },
  { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80', tag: 'Grand Celebrations & Events' },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 5500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0A0A0A]">
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

      {/* Premium Cinematic Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/75 via-[#0A0A0A]/50 to-[#0A0A0A]" />

      {/* Hero Content */}
      <div className="relative z-10 pt-24 pb-12 px-4 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Subtle Category Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#0A0A0A]/60 border border-[#2C2C2C] text-[#C9A84C] text-[11px] uppercase tracking-[0.3em] font-medium mb-5">
          <span>{slides[current].tag}</span>
        </div>

        {/* Brand Hierarchy: ROHIT NAGRE (Playfair Display) */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-1 tracking-tight leading-tight">
          ROHIT NAGRE
        </h1>

        {/* Subtitle: PHOTOGRAPHY (Montserrat Light) */}
        <p className="text-gray-300 text-xs sm:text-sm tracking-[0.4em] uppercase font-light mb-4">
          PHOTOGRAPHY
        </p>

        {/* Signature Tagline: "Your Story. My Lens." (Great Vibes Script) */}
        <p className="font-script text-3xl sm:text-5xl md:text-6xl text-[#C9A84C] font-normal mb-5 py-1 drop-shadow-md">
          Your Story. My Lens.
        </p>

        {/* Short Editorial Line */}
        <p className="text-gray-300 text-xs sm:text-sm md:text-base max-w-lg mx-auto mb-8 font-light leading-relaxed">
          Documenting heartfelt emotions, timeless elegance, and raw moments with international fine-art excellence.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3.5 justify-center w-full sm:w-auto mb-9">
          <a href="#gallery" className="btn-primary text-xs uppercase tracking-widest px-8 py-3.5">
            Explore Portfolio
          </a>
          <a href="#card" className="btn-outline text-xs uppercase tracking-widest px-7 py-3.5">
            Digital Visiting Card
          </a>
        </div>

        {/* Trust Badges & Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-gray-300">
          <div className="flex items-center gap-1.5 bg-[#0A0A0A]/70 border border-[#2C2C2C] px-3.5 py-1.5 rounded-full">
            <FcGoogle className="text-base" />
            <span className="font-medium text-white">5.0</span>
            <span className="text-[#C9A84C]">★★★★★</span>
            <span className="text-gray-400 text-[11px]">(120+ Google Reviews)</span>
          </div>

          <a
            href="https://instagram.com/ro.clickz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-[#0A0A0A]/70 border border-[#2C2C2C] hover:border-[#C9A84C] px-3.5 py-1.5 rounded-full text-gray-300 hover:text-[#C9A84C] transition-all"
          >
            <FaInstagram className="text-sm text-[#C9A84C]" />
            <span className="font-medium">@ro.clickz</span>
          </a>

          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hi%20Rohit!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20book%20a%20shoot."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-[#0A0A0A]/70 border border-[#2C2C2C] hover:border-green-500/50 px-3.5 py-1.5 rounded-full text-gray-300 hover:text-green-400 transition-all"
          >
            <FaWhatsapp className="text-sm text-green-400" />
            <span className="font-medium">Direct WhatsApp</span>
          </a>
        </div>

        {/* Slide Indicators */}
        <div className="flex gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === current ? 'bg-[#C9A84C] w-7' : 'bg-white/30 w-2'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Down */}
      <a href="#about" aria-label="Scroll down" className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 hover:text-[#C9A84C] transition-colors">
        <FiChevronDown className="text-2xl animate-bounce" />
      </a>
    </section>
  )
}
