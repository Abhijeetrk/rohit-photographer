'use client'
import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Portfolio' },
  { href: '#services', label: 'Services' },
  { href: '#youtube', label: 'YouTube' },
  { href: '#logos', label: 'Logos' },
  { href: '#card', label: 'Visiting Card' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Track scroll position for backdrop blur transitions
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent background scrolling when mobile sheet is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#2C2C2C] py-3 shadow-xl'
            : 'bg-gradient-to-b from-[#0A0A0A]/90 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Brand Logo & Name */}
            <a href="#home" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0A0A0A] border border-[#C9A84C]/50 flex items-center justify-center p-1.5 shadow-md shadow-[#C9A84C]/10 group-hover:border-[#C9A84C] group-hover:scale-105 transition-all duration-300">
                <svg className="w-full h-full stroke-[#C9A84C] fill-none" viewBox="0 0 100 100" strokeWidth="3">
                  <circle cx="50" cy="50" r="44" strokeWidth="3" />
                  <circle cx="50" cy="50" r="16" strokeDasharray="3 3" opacity="0.6" />
                  <line x1="50" y1="6" x2="78" y2="40" />
                  <line x1="78" y1="40" x2="68" y2="82" />
                  <line x1="68" y1="82" x2="28" y2="80" />
                  <line x1="28" y1="80" x2="10" y2="46" />
                  <line x1="10" y1="46" x2="38" y2="12" />
                  <line x1="38" y1="12" x2="78" y2="40" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base sm:text-lg lg:text-xl font-bold text-white tracking-wide leading-none">
                  ROHIT NAGRE
                </span>
                <span className="text-[#C9A84C] text-[9px] sm:text-[10px] tracking-[0.25em] sm:tracking-[0.3em] uppercase font-light mt-1">
                  PHOTOGRAPHY
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links (xl & above) */}
            <nav className="hidden xl:flex items-center gap-6 2xl:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-[#C9A84C] transition-colors text-xs uppercase tracking-widest font-medium py-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Quick Actions */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <a
                href="https://instagram.com/ro.clickz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @ro.clickz"
                className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#2C2C2C]/60 hover:bg-[#2C2C2C] border border-[#C9A84C]/30 text-xs text-gray-200 hover:text-[#C9A84C] hover:border-[#C9A84C] transition-all min-h-[44px]"
              >
                <FaInstagram className="text-sm text-[#C9A84C]" />
                <span className="font-medium text-xs">@ro.clickz</span>
              </a>

              <a
                href="#contact"
                className="btn-primary"
              >
                Book a Session
              </a>
            </div>

            {/* Mobile / Tablet Controls */}
            <div className="flex xl:hidden items-center gap-2 sm:gap-3">
              <a
                href="https://wa.me/91XXXXXXXXXX?text=Hi%20Rohit!%20I%20would%20like%20to%20inquire%20about%20a%20photography%20session."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-10 h-10 rounded-full bg-green-600/20 border border-green-500/40 text-green-400 flex items-center justify-center text-lg hover:bg-green-600 hover:text-white transition-all"
              >
                <FaWhatsapp />
              </a>

              <button
                className="w-11 h-11 rounded-full bg-[#2C2C2C]/70 border border-zinc-700 text-white flex items-center justify-center text-xl focus:outline-none hover:border-[#C9A84C] transition-all"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Backdrop Overlay for Mobile Sheet */}
      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-Down Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 left-0 right-0 z-40 bg-[#0A0A0A] border-b border-[#2C2C2C] shadow-2xl pt-24 pb-8 px-6 transition-all duration-300 ease-out xl:hidden max-h-[90vh] overflow-y-auto ${
          menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-md mx-auto flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-200 hover:text-[#C9A84C] hover:bg-[#2C2C2C]/40 px-4 py-3 rounded-xl text-sm uppercase tracking-wider font-medium transition-colors border-b border-zinc-900/60 flex items-center justify-between"
            >
              <span>{link.label}</span>
              <span className="text-gray-600 text-xs">→</span>
            </a>
          ))}

          {/* Mobile Direct Action Buttons */}
          <div className="pt-4 mt-2 border-t border-[#2C2C2C] flex flex-col gap-3">
            <a
              href="https://instagram.com/ro.clickz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#2C2C2C] border border-[#C9A84C]/30 text-xs text-gray-200 hover:text-[#C9A84C] min-h-[44px]"
            >
              <FaInstagram className="text-base text-[#C9A84C]" />
              <span className="font-semibold tracking-wide">Follow on Instagram @ro.clickz</span>
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary text-center w-full"
            >
              Book a Session
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
