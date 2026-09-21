'use client'
import { useState, useEffect } from 'react'
import { FiCamera, FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Portfolio' },
  { href: '#services', label: 'Services' },
  { href: '#card', label: 'Visiting Card' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-zinc-800/80 py-3.5 shadow-xl' 
        : 'bg-gradient-to-b from-black/80 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Clean Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <FiCamera className="text-yellow-500 text-2xl group-hover:rotate-6 transition-transform" />
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
              <span className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                Rohit Nagre
              </span>
              <span className="text-yellow-500 text-xs tracking-widest uppercase font-light">
                Photography
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-yellow-400 transition-colors text-xs uppercase tracking-widest font-medium"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary text-xs py-2 px-5 tracking-wider uppercase">
              Book a Shoot
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white text-2xl p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-950/98 border-b border-zinc-800 px-6 py-5 flex flex-col gap-3 mt-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-200 hover:text-yellow-400 py-2 border-b border-zinc-900 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary text-center mt-3 text-xs uppercase tracking-wider py-3"
          >
            Book a Shoot
          </a>
        </div>
      )}
    </nav>
  )
}
