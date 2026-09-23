import { FiInstagram, FiYoutube, FiLinkedin } from 'react-icons/fi'
import { FaFacebook, FaWhatsapp, FaPinterest, FaBehance } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const platforms = [
  { name: 'Google Business', handle: 'Rohit Nagre Photography', desc: '5.0 ★ Star Verified Studio Profile & Client Reviews', href: 'https://maps.google.com/?q=Rohit+Nagre+Photography', Icon: FcGoogle, gradient: 'from-blue-600 via-red-500 to-yellow-500', followers: '5.0 ★ Verified' },
  { name: 'Instagram', handle: '@ro.clickz', desc: 'Daily royal wedding reels, behind-the-scenes & client features', href: 'https://instagram.com/ro.clickz', Icon: FiInstagram, gradient: 'from-purple-600 via-pink-500 to-orange-400', followers: 'Official Handle' },
  { name: 'WhatsApp Direct', handle: '+91 XXXXXXXXXX', desc: 'Instant date availability checks & fast session quotes', href: 'https://wa.me/91XXXXXXXXXX?text=Hi%20Rohit%20Nagre!%20I%20want%20to%20inquire%20about%20booking%20a%20photography%20shoot.', Icon: FaWhatsapp, gradient: 'from-green-600 to-emerald-500', followers: 'Instant Reply' },
  { name: 'YouTube Channel', handle: '@rohitnagre', desc: 'BTS shoots, editing tutorials, wedding films & portrait vlogs', href: 'https://youtube.com/@rohitnagre', Icon: FiYoutube, gradient: 'from-red-700 to-red-500', followers: 'Behind The Scenes' },
  { name: 'Facebook Page', handle: 'Rohit Nagre Photography', desc: 'Full event albums, family stories & high-res albums', href: 'https://facebook.com/YOUR_FACEBOOK', Icon: FaFacebook, gradient: 'from-blue-700 to-blue-500', followers: '10K+ Followers' },
  { name: 'LinkedIn Brand', handle: 'Rohit Nagre', desc: 'Corporate events, brand campaigns & commercial inquiries', href: 'https://linkedin.com/in/YOUR_LINKEDIN', Icon: FiLinkedin, gradient: 'from-sky-700 to-blue-600', followers: 'Professional Network' },
  { name: 'Pinterest Boards', handle: 'rohitnagrephoto', desc: 'Bridal poses, pre-wedding mood boards & location inspiration', href: 'https://pinterest.com/YOUR_PINTEREST', Icon: FaPinterest, gradient: 'from-rose-700 to-red-500', followers: 'Inspiration Hub' },
  { name: 'Behance Portfolio', handle: 'Rohit Nagre', desc: 'Curated creative fashion campaigns & fine art series', href: 'https://behance.net/YOUR_BEHANCE', Icon: FaBehance, gradient: 'from-blue-600 to-indigo-500', followers: 'Fine Art Portfolios' },
]

import SocialContentStrategy from './SocialContentStrategy'

export default function SocialHub() {
  return (
    <section id="social" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-yellow-500 tracking-[0.3em] uppercase text-xs sm:text-sm font-semibold mb-3">
            Digital Presence &amp; Social Ecosystem
          </p>
          <h2 className="section-title">Connect with Rohit Nagre</h2>
          <span className="gold-line" />
          <p className="section-subtitle">
            Experience our work across all official channels — from Google verified reviews to daily Instagram stories.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((p, i) => (
            <a key={i} href={p.href} target="_blank" rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-yellow-500/50 p-6 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between">
              <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div>
                <div className="inline-flex p-3 rounded-xl bg-zinc-800 border border-zinc-700 text-white text-2xl mb-4 group-hover:scale-110 group-hover:border-yellow-500/40 transition-all duration-300">
                  <p.Icon />
                </div>
                <h3 className="font-bold text-white text-lg mb-1">{p.name}</h3>
                <p className="text-yellow-500/90 text-xs font-medium mb-2">{p.handle}</p>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">{p.desc}</p>
              </div>

              <span className="text-xs text-yellow-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                {p.followers} →
              </span>
            </a>
          ))}
        </div>

        {/* WhatsApp & Google Inquiry Banner */}
        <div className="mt-16 text-center bg-gradient-to-r from-yellow-500/15 via-zinc-900 to-yellow-500/15 border border-yellow-500/30 rounded-3xl p-10 backdrop-blur-xl">
          <span className="text-xs uppercase font-bold tracking-widest text-yellow-400 block mb-2">
            Direct Studio Line
          </span>
          <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white mb-3">
            Plan Your Shoot with Rohit Nagre Photography
          </h3>
          <p className="text-gray-300 max-w-xl mx-auto mb-8 text-sm sm:text-base">
            Have an upcoming wedding, pre-wedding date, or portrait requirement? Chat directly with Rohit on WhatsApp.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/91XXXXXXXXXX?text=Hi%20Rohit%20Nagre!%20I%20want%20to%20book%20a%20photography%20session."
              target="_blank" rel="noopener noreferrer" className="btn-primary text-sm uppercase tracking-wider">
              📲 Open WhatsApp Chat
            </a>
            <a href="#card" className="btn-outline text-sm uppercase tracking-wider">
              Save Visiting Card
            </a>
          </div>
        </div>

        {/* Interactive Social Media Content Templates & Hashtag Toolkit */}
        <SocialContentStrategy />
      </div>
    </section>
  )
}
