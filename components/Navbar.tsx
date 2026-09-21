'use client'
import { useState, useEffect } from 'react'
import { FiCamera, FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#services', label: 'Services' },
  { href: '#card', label: 'Digital Card' },
  { href: '#social', label: 'Connect' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-yellow-500/5' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2 group">
            <FiCamera className="text-yellow-500 text-2xl group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
              Rohit Nagre <span className="text-yellow-500 font-light text-sm sm:text-base tracking-widest uppercase block sm:inline">Photography</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}
                className="text-gray-300 hover:text-yellow-500 transition-colors font-medium text-xs tracking-wider uppercase">
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-xs tracking-wider uppercase py-2.5 px-6">
              Book a Session
            </a>
          </div>
          <button className="md:hidden text-white text-2xl focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-yellow-500 py-2 border-b border-zinc-800 text-sm">
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary text-center mt-2 text-sm">
            Book a Session
          </a>
        </div>
      )}
    </nav>
  )
}
