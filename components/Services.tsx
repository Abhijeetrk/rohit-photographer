import { FiHeart, FiUser, FiStar, FiCamera, FiBriefcase, FiSun } from 'react-icons/fi'

const services = [
  {
    icon: <FiHeart className="text-rose-400" />,
    title: 'Luxury Wedding Photography',
    desc: 'Complete ceremonial, candid & traditional coverage with master lighting and handcrafted signature albums.',
    price: 'Starting ₹35,000',
    features: ['Full Multi-Day Coverage', '4K Teaser & Cinematic Film', 'Unlimited Color-Graded Photos', 'Premium Handbound Royal Album'],
  },
  {
    icon: <FiStar className="text-yellow-400" />,
    title: 'Pre-Wedding & Couple Shoot',
    desc: 'Romantic, high-fashion concept shoots at heritage forts, beaches, or private exotic locations.',
    price: 'Starting ₹18,000',
    features: ['Full Day On-Location', 'Drone Aerial Footage', 'Styling & Moodboard Direction', '100+ Edited High-Res Photos'],
  },
  {
    icon: <FiUser className="text-blue-400" />,
    title: 'Signature Portrait Sessions',
    desc: 'Bespoke editorial portraits for personalities, artists, founders, and families with studio aesthetics.',
    price: 'Starting ₹7,500',
    features: ['2-3 Hours Guided Session', 'Studio or Outdoor Lighting', 'Multiple Wardrobe Looks', 'Magazine-Grade Skin Retouching'],
  },
  {
    icon: <FiCamera className="text-purple-400" />,
    title: 'Grand Events & Celebrations',
    desc: 'Sangeet, cocktail parties, birthday galas, and cultural events covered with lively candid emotion.',
    price: 'Starting ₹12,000',
    features: ['High-Speed Candid Coverage', '48-Hour Preview Turnaround', 'Highlight Reel for Instagram', 'Digital Cloud Gallery Access'],
  },
  {
    icon: <FiBriefcase className="text-emerald-400" />,
    title: 'Commercial & Brand Shoots',
    desc: 'High-converting visual assets for fashion labels, jewelry, architecture, restaurants, and hospitality.',
    price: 'Starting ₹15,000',
    features: ['Commercial Copyright Release', 'White-Glove Color Consistency', 'E-commerce & Lookbook Formats', 'High-Volume Batch Delivery'],
  },
  {
    icon: <FiSun className="text-amber-400" />,
    title: 'Fashion & Model Portfolios',
    desc: 'Casting-ready model portfolios, actor headshots, and influencer campaigns curated to book top work.',
    price: 'Starting ₹9,000',
    features: ['International Posing Guidance', 'Studio Strobes & Modifiers', 'Comp-Card Layout Included', 'High-Fashion Mood Grade'],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-yellow-500 tracking-[0.3em] uppercase text-xs sm:text-sm font-semibold mb-3">
            Signature Offerings
          </p>
          <h2 className="section-title">What Rohit Nagre Offers</h2>
          <span className="gold-line" />
          <p className="section-subtitle">
            Tailored, premium photography collections crafted with artistic precision and world-class client service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group bg-zinc-900/90 rounded-3xl p-8 border border-zinc-800 hover:border-[#C9A84C]/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl">
              <div>
                <div className="text-3xl mb-4 p-3 bg-zinc-800/80 border border-zinc-700 w-fit rounded-xl group-hover:scale-110 group-hover:border-[#C9A84C]/40 transition-all duration-300">
                  {s.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2.5 mb-8">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300">
                      <span className="text-[#C9A84C] font-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-5 border-t border-zinc-800">
                <span className="text-[#C9A84C] font-bold text-sm tracking-wide">{s.price}</span>
                <a href="#contact" className="text-xs uppercase tracking-wider font-semibold text-gray-400 hover:text-[#C9A84C] transition-colors">
                  Inquire Now →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
