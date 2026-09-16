import { FiCamera, FiInstagram, FiYoutube, FiTwitter, FiLinkedin } from 'react-icons/fi'
import { FaFacebook, FaWhatsapp, FaPinterest } from 'react-icons/fa'

const socials = [
  { Icon: FiInstagram, href: 'https://instagram.com/YOUR_INSTAGRAM', color: 'hover:text-pink-400' },
  { Icon: FaFacebook, href: 'https://facebook.com/YOUR_FACEBOOK', color: 'hover:text-blue-400' },
  { Icon: FiYoutube, href: 'https://youtube.com/@YOUR_YOUTUBE', color: 'hover:text-red-400' },
  { Icon: FaWhatsapp, href: 'https://wa.me/91XXXXXXXXXX', color: 'hover:text-green-400' },
  { Icon: FiTwitter, href: 'https://twitter.com/YOUR_TWITTER', color: 'hover:text-sky-400' },
  { Icon: FiLinkedin, href: 'https://linkedin.com/in/YOUR_LINKEDIN', color: 'hover:text-blue-300' },
  { Icon: FaPinterest, href: 'https://pinterest.com/YOUR_PINTEREST', color: 'hover:text-rose-400' },
]

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FiCamera className="text-yellow-500 text-2xl" />
              <span className="font-serif text-xl font-bold text-white">
                Rohit <span className="text-yellow-500">Photographer</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Professional photographer based in Mumbai, India.
              Capturing life&apos;s most beautiful moments with passion, creativity, and an eye for detail.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Follow Me</h4>
            <div className="flex flex-wrap gap-4">
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className={`text-gray-400 text-xl transition-colors ${s.color}`}>
                  <s.Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Rohit Photographer. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built with ❤️ &amp; deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  )
}
