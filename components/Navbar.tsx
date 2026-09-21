'use client'
import { useState, useEffect } from 'react'
import { FiCamera, FiMenu, FiX } from 'react-icons/fi'
import { FaInstagram } from 'react-icons/fa'

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
        ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#2C2C2C] py-3.5 shadow-xl' 
        : 'bg-gradient-to-b from-[#0A0A0A]/90 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Name Hierarchy */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#2C2C2C] border border-[#C9A84C]/40 flex items-center justify-center text-[#C9A84C] group-hover:border-[#C9A84C] transition-all">
              <FiCamera className="text-xl group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <span className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide block leading-none">
                ROHIT NAGRE
              </span>
              <span className="text-[#C9A84C] text-[10px] tracking-[0.3em] uppercase font-light block mt-1">
                PHOTOGRAPHY
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#C9A84C] transition-colors text-xs uppercase tracking-widest font-medium"
              >
                {link.label}
              </a>
            ))}

            {/* Instagram Handle Badge */}
            <a
              href="https://instagram.com/ro.clickz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2C2C2C] border border-[#C9A84C]/30 text-xs text-gray-200 hover:text-[#C9A84C] hover:border-[#C9A84C] transition-all"
            >
              <FaInstagram className="text-sm text-[#C9A84C]" />
              <span className="font-medium">@ro.clickz</span>
            </a>

            <a href="#contact" className="btn-primary text-xs py-2.5 px-6 tracking-wider uppercase">
              Book a Session
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white text-2xl p-1 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0A0A0A]/98 border-b border-[#2C2C2C] px-6 py-5 flex flex-col gap-3 mt-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-200 hover:text-[#C9A84C] py-2 border-b border-[#2C2C2C]/50 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://instagram.com/ro.clickz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-2 text-sm text-[#C9A84C]"
          >
            <FaInstagram /> @ro.clickz
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary text-center mt-3 text-xs uppercase tracking-wider py-3"
          >
            Book a Session
          </a>
        </div>
      )}
    </nav>
  )
}
