const services = [
  { emoji: '💍', title: 'Wedding Photography', desc: 'Complete wedding coverage — ceremony, reception, candid moments & more.', price: 'Starting ₹25,000', features: ['Full-day coverage', 'Edited digital photos', 'Online gallery', 'Printed album'] },
  { emoji: '👤', title: 'Portrait Sessions', desc: 'Professional individual, couple & family portraits that capture your personality.', price: 'Starting ₹5,000', features: ['2-hour session', '50+ edited photos', 'Multiple outfits', 'Studio or outdoor'] },
  { emoji: '🌟', title: 'Pre-Wedding Shoot', desc: 'Romantic, fun & creative pre-wedding shoots at beautiful locations.', price: 'Starting ₹15,000', features: ['Full day shoot', 'Multiple locations', '100+ photos', 'Cinematic video'] },
  { emoji: '📷', title: 'Events & Functions', desc: 'Birthdays, corporate events, engagements & all types of special functions.', price: 'Starting ₹8,000', features: ['4-8 hour coverage', 'Same-day previews', 'HD video', 'Quick delivery'] },
  { emoji: '💼', title: 'Commercial Photography', desc: 'Product photography & brand shoots for businesses.', price: 'Starting ₹10,000', features: ['White background', 'Lifestyle shots', 'Post-processing', 'Commercial rights'] },
  { emoji: '✨', title: 'Fashion & Portfolio', desc: 'Stunning portfolio shoots for models, actors & influencers.', price: 'Starting ₹7,000', features: ['Studio lighting', 'Styling tips', 'Retouched edits', 'Model release'] },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-yellow-500 tracking-[0.3em] uppercase text-sm font-medium mb-4">Services</p>
          <h2 className="section-title">What I Offer</h2>
          <span className="gold-line" />
          <p className="section-subtitle">Tailored photography packages for every occasion</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-yellow-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4">{s.emoji}</div>
              <h3 className="font-serif text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{s.desc}</p>
              <ul className="space-y-2 mb-6">
                {s.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-yellow-500">✓</span> {f}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                <span className="text-yellow-500 font-semibold text-sm">{s.price}</span>
                <a href="#contact" className="text-sm text-gray-400 hover:text-yellow-500 transition-colors">Book Now →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
