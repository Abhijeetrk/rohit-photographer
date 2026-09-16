import { FaStar } from 'react-icons/fa'

const testimonials = [
  { name: 'Priya & Arjun Sharma', event: 'Wedding Photography', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80', review: 'Rohit captured every emotion of our special day so perfectly. The photos are absolutely breathtaking. We cried happy tears seeing our wedding album!' },
  { name: 'Meera Patel', event: 'Pre-Wedding Shoot', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80', review: 'The pre-wedding shoot was magical! Rohit made us feel so comfortable and natural. The photos look like they\'re straight out of a movie!' },
  { name: 'Rajesh Verma', event: 'Corporate Event', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80', review: 'Highly professional and punctual. Delivered stunning event photos within 48 hours. Our entire team loved the results. Will definitely book again!' },
  { name: 'Sneha Kapoor', event: 'Portfolio Shoot', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80', review: 'Best portfolio shoot experience ever! Got multiple calls after sharing my new portfolio. Rohit has an amazing eye for detail. Truly life-changing!' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-yellow-500 tracking-[0.3em] uppercase text-sm font-medium mb-4">Testimonials</p>
          <h2 className="section-title">What Clients Say</h2>
          <span className="gold-line" />
          <p className="section-subtitle">Don&apos;t just take my word for it — hear from the people I&apos;ve had the joy of photographing</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-yellow-500/30 transition-colors">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map((s) => <FaStar key={s} className="text-yellow-500 text-sm" />)}
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 italic">&ldquo;{t.review}&rdquo;</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-yellow-500/50" />
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-yellow-500 text-sm">{t.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
