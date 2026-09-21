import { FiInstagram, FiYoutube, FiTwitter, FiLinkedin, FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { FaFacebook, FaWhatsapp, FaPinterest } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const socials = [
  { Icon: FcGoogle, href: 'https://maps.google.com/?q=Rohit+Nagre+Photography', color: 'hover:scale-110', label: 'Google Business' },
  { Icon: FiInstagram, href: 'https://instagram.com/ro.clickz', color: 'hover:text-pink-400', label: 'Instagram @ro.clickz' },
  { Icon: FaWhatsapp, href: 'https://wa.me/91XXXXXXXXXX', color: 'hover:text-green-400', label: 'WhatsApp' },
  { Icon: FaFacebook, href: 'https://facebook.com/YOUR_FACEBOOK', color: 'hover:text-blue-400', label: 'Facebook' },
  { Icon: FiYoutube, href: 'https://youtube.com/@YOUR_YOUTUBE', color: 'hover:text-red-400', label: 'YouTube' },
  { Icon: FiTwitter, href: 'https://twitter.com/YOUR_TWITTER', color: 'hover:text-sky-400', label: 'Twitter' },
  { Icon: FiLinkedin, href: 'https://linkedin.com/in/YOUR_LINKEDIN', color: 'hover:text-blue-300', label: 'LinkedIn' },
  { Icon: FaPinterest, href: 'https://pinterest.com/YOUR_PINTEREST', color: 'hover:text-rose-400', label: 'Pinterest' },
]

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Rohit', href: '#about' },
  { label: 'Portfolio Gallery', href: '#gallery' },
  { label: 'Services & Pricing', href: '#services' },
  { label: 'Digital Visiting Card', href: '#card' },
  { label: 'Social Hub', href: '#social' },
  { label: 'Book a Session', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 text-gray-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column - Concept 1 Wordmark Style */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="font-serif text-2xl font-bold tracking-wider uppercase text-white block">
                ROHIT NAGRE
              </span>
              <div className="w-24 h-[1.5px] bg-[#C9A84C] my-2"></div>
              <span className="text-[11px] font-medium tracking-[0.4em] uppercase text-[#C9A84C] block">
                P H O T O G R A P H Y
              </span>
            </div>
            <p className="font-script text-2xl text-[#C9A84C] mb-3">
              Your Story. My Lens.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-md mb-6">
              Official website of Rohit Nagre Photography. Documenting timeless weddings, emotive portraits, and landmark celebrations across India and destination venues worldwide.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gray-300 transition-all duration-300 ${s.color}`}>
                  <s.Icon className="text-base" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-yellow-500 text-xs transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact & Google */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">Studio Contact</h4>
            <div className="space-y-3 text-xs">
              <p className="flex items-center gap-2 text-gray-300">
                <FiPhone className="text-yellow-500" />
                <span>+91 98765 43210</span>
              </p>
              <p className="flex items-center gap-2 text-gray-300">
                <FiMail className="text-yellow-500" />
                <span>contact@rohitnagrephotography.com</span>
              </p>
              <p className="flex items-center gap-2 text-gray-300">
                <FiMapPin className="text-yellow-500" />
                <span>Mumbai, India (Pan-India Travel)</span>
              </p>
              <div className="pt-2">
                <a href="#card" className="inline-flex items-center gap-1 text-yellow-500 hover:underline text-xs font-semibold">
                  💳 Download Digital Card (.vcf) →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Rohit Nagre Photography. All rights reserved.
          </p>
          <p className="text-center sm:text-right text-gray-400">
            Full Professional Brand Ecosystem • Google Verified • Live on Vercel
          </p>
        </div>
      </div>
    </footer>
  )
}
