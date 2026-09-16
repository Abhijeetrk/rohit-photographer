'use client'
import { useEffect, useState } from 'react'
import { FiChevronDown, FiInstagram, FiYoutube } from 'react-icons/fi'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa'

const slides = [
  { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80', tag: 'Wedding Photography' },
  { url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1920&q=80', tag: 'Portrait Photography' },
  { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80', tag: 'Event Photography' },
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
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${slide.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
      ))}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <p className="text-yellow-500 tracking-[0.4em] uppercase text-sm font-medium mb-4 animate-pulse">
          {slides[current].tag}
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight">
          Rohit<br /><span className="text-yellow-500">Photographer</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-8">
          Capturing emotions, telling stories, creating memories that last a lifetime
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#gallery" className="btn-primary">View Portfolio</a>
          <a href="#contact" className="btn-outline">Book a Session</a>
        </div>
        <div className="flex gap-6 mt-10">
          <a href="https://instagram.com/YOUR_INSTAGRAM" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 text-2xl transition-colors"><FiInstagram /></a>
          <a href="https://facebook.com/YOUR_FACEBOOK" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 text-2xl transition-colors"><FaFacebook /></a>
          <a href="https://youtube.com/@YOUR_YOUTUBE" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 text-2xl transition-colors"><FiYoutube /></a>
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 text-2xl transition-colors"><FaWhatsapp /></a>
        </div>
        <div className="flex gap-2 mt-8">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${i === current ? 'bg-yellow-500 w-8' : 'bg-white/50 w-2'}`} />
          ))}
        </div>
      </div>
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-yellow-500 animate-bounce">
        <FiChevronDown className="text-3xl" />
      </a>
    </section>
  )
}
