import { FiInstagram, FiYoutube, FiTwitter, FiLinkedin, FiPhone, FiMail, FiMapPin, FiArrowUp } from 'react-icons/fi'
import { FaFacebook, FaWhatsapp, FaPinterest } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const socials = [
  { Icon: FcGoogle, href: 'https://maps.google.com/?q=Rohit+Nagre+Photography', color: 'hover:border-[#C9A84C]', label: 'Google Business' },
  { Icon: FiInstagram, href: 'https://instagram.com/ro.clickz', color: 'hover:text-pink-400 hover:border-pink-500/50', label: 'Instagram @ro.clickz' },
  { Icon: FaWhatsapp, href: 'https://wa.me/91XXXXXXXXXX', color: 'hover:text-green-400 hover:border-green-500/50', label: 'WhatsApp Direct' },
  { Icon: FaFacebook, href: 'https://facebook.com/YOUR_FACEBOOK', color: 'hover:text-blue-400 hover:border-blue-500/50', label: 'Facebook' },
  { Icon: FiYoutube, href: 'https://youtube.com/@YOUR_YOUTUBE', color: 'hover:text-red-400 hover:border-red-500/50', label: 'YouTube Channel' },
  { Icon: FiTwitter, href: 'https://twitter.com/YOUR_TWITTER', color: 'hover:text-sky-400 hover:border-sky-500/50', label: 'Twitter' },
  { Icon: FiLinkedin, href: 'https://linkedin.com/in/YOUR_LINKEDIN', color: 'hover:text-blue-300 hover:border-blue-400/50', label: 'LinkedIn' },
  { Icon: FaPinterest, href: 'https://pinterest.com/YOUR_PINTEREST', color: 'hover:text-rose-400 hover:border-rose-500/50', label: 'Pinterest' },
]

const exploreLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Rohit', href: '#about' },
  { label: 'Portfolio Gallery', href: '#gallery' },
  { label: 'Photography Services', href: '#services' },
]

const brandLinks = [
  { label: 'Brand Logos Suite', href: '#logos' },
  { label: 'Digital Visiting Card', href: '#card' },
  { label: 'YouTube Showcase', href: '#youtube' },
  { label: 'Reserve / Book Shoot', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2C2C2C] text-gray-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Main Footer Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#2C2C2C]">
          
          {/* Brand Info Column (Span 5 on large screens) */}
          <div className="sm:col-span-2 lg:col-span-5">
            <div className="mb-4">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wider uppercase text-white block">
                ROHIT NAGRE
              </span>
              <div className="w-20 h-[1.5px] bg-[#C9A84C] my-2.5"></div>
              <span className="text-[11px] font-medium tracking-[0.4em] uppercase text-[#C9A84C] block">
                P H O T O G R A P H Y
              </span>
            </div>

            <p className="font-script text-2xl sm:text-3xl text-[#C9A84C] mb-3">
              Your Story. My Lens.
            </p>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-6 font-light">
              Official photography studio of Rohit Nagre. Documenting destination royal weddings, fine-art candid portraits, and visual commercial campaigns across India and abroad.
            </p>

            {/* Social Grid with Accessible 44px Touch Targets */}
            <div className="flex flex-wrap items-center gap-2.5">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`w-11 h-11 rounded-xl bg-[#2C2C2C]/50 border border-zinc-800 flex items-center justify-center text-gray-300 transition-all duration-300 ${s.color}`}
                >
                  <s.Icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-[0.2em] text-[#C9A84C]">
              Explore
            </h4>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#C9A84C] text-xs sm:text-sm transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-[0.2em] text-[#C9A84C]">
              Brand Hub
            </h4>
            <ul className="space-y-3">
              {brandLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#C9A84C] text-xs sm:text-sm transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Booking Column */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-[0.2em] text-[#C9A84C]">
              Studio Inquiries
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-gray-300 hover:text-[#C9A84C] transition-colors py-1"
              >
                <div className="w-8 h-8 rounded-lg bg-[#2C2C2C] flex items-center justify-center text-[#C9A84C] shrink-0">
                  <FiPhone />
                </div>
                <span>+91 98765 43210</span>
              </a>

              <a
                href="mailto:contact@rohitnagrephotography.com"
                className="flex items-center gap-3 text-gray-300 hover:text-[#C9A84C] transition-colors py-1 truncate"
              >
                <div className="w-8 h-8 rounded-lg bg-[#2C2C2C] flex items-center justify-center text-[#C9A84C] shrink-0">
                  <FiMail />
                </div>
                <span className="truncate">contact@rohitnagre.com</span>
              </a>

              <div className="flex items-center gap-3 text-gray-400 py-1">
                <div className="w-8 h-8 rounded-lg bg-[#2C2C2C] flex items-center justify-center text-[#C9A84C] shrink-0">
                  <FiMapPin />
                </div>
                <span>Mumbai, India (Pan-India Travel)</span>
              </div>

              <div className="pt-2">
                <a
                  href="#card"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#2C2C2C]/70 hover:bg-[#2C2C2C] border border-[#C9A84C]/30 text-[#C9A84C] text-xs font-semibold transition-all"
                >
                  <span>💳</span>
                  <span>Save Digital Card (.vcf)</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Sub-Footer: Responsive Stack on Mobile, Row on Desktop */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Rohit Nagre Photography. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[#C9A84C] font-medium flex items-center gap-1">
              <span>★ 5.0 Google Verified</span>
            </span>
            <a
              href="#home"
              aria-label="Back to top"
              className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <FiArrowUp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
