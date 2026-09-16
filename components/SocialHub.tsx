import { FiInstagram, FiYoutube, FiTwitter, FiLinkedin } from 'react-icons/fi'
import { FaFacebook, FaWhatsapp, FaPinterest, FaBehance } from 'react-icons/fa'

const platforms = [
  { name: 'Instagram', handle: '@rohit.photographer', desc: 'Daily shots & behind-the-scenes', href: 'https://instagram.com/YOUR_INSTAGRAM', Icon: FiInstagram, gradient: 'from-purple-600 via-pink-500 to-orange-400', followers: '10K+ Followers' },
  { name: 'Facebook', handle: 'Rohit Photographer', desc: 'Portfolio albums & client stories', href: 'https://facebook.com/YOUR_FACEBOOK', Icon: FaFacebook, gradient: 'from-blue-700 to-blue-500', followers: '5K+ Likes' },
  { name: 'YouTube', handle: '@RohitPhotographer', desc: 'Photography tutorials & cinematic reels', href: 'https://youtube.com/@YOUR_YOUTUBE', Icon: FiYoutube, gradient: 'from-red-700 to-red-400', followers: '2K+ Subscribers' },
  { name: 'WhatsApp', handle: '+91 XXXXXXXXXX', desc: 'Direct booking & quick inquiries', href: 'https://wa.me/91XXXXXXXXXX?text=Hi+Rohit!+I+want+to+book+a+session', Icon: FaWhatsapp, gradient: 'from-green-600 to-green-400', followers: 'Book Instantly' },
  { name: 'Twitter / X', handle: '@rohitphotog', desc: 'Photography tips & updates', href: 'https://twitter.com/YOUR_TWITTER', Icon: FiTwitter, gradient: 'from-gray-700 to-gray-500', followers: '1K+ Followers' },
  { name: 'LinkedIn', handle: 'Rohit Photographer', desc: 'Professional profile & corporate work', href: 'https://linkedin.com/in/YOUR_LINKEDIN', Icon: FiLinkedin, gradient: 'from-blue-700 to-blue-500', followers: 'Connect With Me' },
  { name: 'Pinterest', handle: 'rohit.photographer', desc: 'Inspiration boards & mood boards', href: 'https://pinterest.com/YOUR_PINTEREST', Icon: FaPinterest, gradient: 'from-red-700 to-rose-500', followers: 'Photography Boards' },
  { name: 'Behance', handle: 'Rohit Photographer', desc: 'Full creative projects & case studies', href: 'https://behance.net/YOUR_BEHANCE', Icon: FaBehance, gradient: 'from-blue-500 to-indigo-400', followers: 'View Projects' },
]

export default function SocialHub() {
  return (
    <section id="social" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-yellow-500 tracking-[0.3em] uppercase text-sm font-medium mb-4">Connect With Me</p>
          <h2 className="section-title">Find Me Everywhere</h2>
          <span className="gold-line" />
          <p className="section-subtitle">Follow my journey across all platforms</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((p, i) => (
            <a key={i} href={p.href} target="_blank" rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-transparent p-6 transition-all duration-300 hover:-translate-y-2">
              <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-300`} />
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${p.gradient} text-white text-2xl mb-4`}>
                <p.Icon />
              </div>
              <h3 className="font-bold text-white text-lg mb-1">{p.name}</h3>
              <p className="text-yellow-500/80 text-xs font-medium mb-2">{p.handle}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">{p.desc}</p>
              <span className="text-xs text-gray-500">{p.followers} →</span>
            </a>
          ))}
        </div>
        <div className="mt-16 text-center bg-gradient-to-r from-yellow-500/10 via-yellow-500/5 to-yellow-500/10 border border-yellow-500/20 rounded-2xl p-10">
          <h3 className="font-serif text-3xl font-bold text-white mb-3">Let&apos;s Create Something Beautiful Together</h3>
          <p className="text-gray-400 mb-6">Follow along or reach out directly to book your session</p>
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="btn-primary">📲 Chat on WhatsApp</a>
        </div>
      </div>
    </section>
  )
}
