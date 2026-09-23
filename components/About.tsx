import { FiAward, FiCamera, FiHeart, FiUsers, FiCheckCircle } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photographer Brand Card / Image */}
          <div className="relative">
            <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 relative group">
              <img src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=800&q=80"
                alt="Rohit Nagre Photography" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-1">Founder &amp; Principal Lead</p>
                <h3 className="font-serif text-2xl font-bold text-white">Rohit Nagre</h3>
                <p className="text-gray-300 text-xs mt-1">Specialized in Royal Weddings &amp; Candid Portraiture</p>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-gradient-to-br from-[#C9A84C] to-[#9A7B2C] text-black px-6 py-4 rounded-xl shadow-2xl border-2 border-black">
              <p className="text-3xl font-bold font-serif leading-none">8+</p>
              <p className="text-xs font-bold uppercase tracking-wider mt-1">Years of<br />Excellence</p>
            </div>
          </div>

          {/* Bio & Credentials */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-full mb-4">
              <FcGoogle className="text-base" />
              <span className="text-[#C9A84C] text-xs font-semibold tracking-wider uppercase">Verified Professional Brand</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Crafting Timeless Stories with Rohit Nagre
            </h2>

            <p className="text-gray-300 leading-relaxed mb-4 text-base">
              Welcome to <strong className="text-[#C9A84C]">Rohit Nagre Photography</strong>. We believe every frame holds a heartfelt story waiting to be immortalized. With over 8 years behind the lens, Rohit and his team specialize in turning raw, candid moments into cinematic treasures.
            </p>

            <p className="text-gray-400 leading-relaxed mb-6 text-sm">
              Whether documenting high-profile weddings, private celebrations, or commercial brand campaigns across India, we bring high-end lighting gear, cinematic color grading, and an effortless client experience from first consultation to final album delivery.
            </p>

            {/* Brand Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                'Google 5-Star Rated Studio',
                'Comprehensive Wedding Packages',
                'Ultra-HD Cinematic Equipment',
                'Quick 48-Hr Teaser Turnaround',
                'Premium Handcrafted Albums',
                'Pan-India Travel Availability',
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                  <FiCheckCircle className="text-[#C9A84C] shrink-0 text-base" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <a href="#contact" className="btn-primary text-sm uppercase tracking-wider">
                Book a Session
              </a>
              <a href="#card" className="btn-outline text-sm uppercase tracking-wider">
                Save Visiting Card
              </a>
            </div>
          </div>
        </div>

        {/* Brand Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
          {[
            { icon: <FiCamera className="text-[#C9A84C] text-3xl mb-3 mx-auto" />, value: '5000+', label: 'Stunning Captures' },
            { icon: <FiHeart className="text-[#C9A84C] text-3xl mb-3 mx-auto" />, value: '300+', label: 'Grand Weddings' },
            { icon: <FiUsers className="text-[#C9A84C] text-3xl mb-3 mx-auto" />, value: '800+', label: 'Delighted Clients' },
            { icon: <FiAward className="text-[#C9A84C] text-3xl mb-3 mx-auto" />, value: '5.0 ★', label: 'Google Rating' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-zinc-900/90 rounded-2xl border border-zinc-800 hover:border-[#C9A84C]/50 transition-all duration-300 hover:-translate-y-1">
              {stat.icon}
              <p className="font-serif text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-gray-400 text-xs sm:text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
