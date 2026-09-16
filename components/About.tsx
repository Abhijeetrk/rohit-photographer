import { FiAward, FiCamera, FiHeart, FiUsers } from 'react-icons/fi'

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=800&q=80"
                alt="Rohit Photographer" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-black px-6 py-4 rounded-xl shadow-xl">
              <p className="text-3xl font-bold font-serif">8+</p>
              <p className="text-xs font-semibold uppercase tracking-wide">Years of<br />Experience</p>
            </div>
          </div>
          <div>
            <p className="text-yellow-500 tracking-[0.3em] uppercase text-sm font-medium mb-4">About Me</p>
            <h2 className="section-title">Telling Stories Through the Lens</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Hello! I&apos;m <strong className="text-white">Rohit</strong>, a passionate professional photographer
              based in India. With over 8 years of experience, I specialize in capturing precious and
              candid moments of life — from grand weddings to intimate portraits.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              My philosophy: every moment tells a story, and it&apos;s my job to tell it beautifully.
              Using the latest equipment and a creative eye, I deliver stunning images you&apos;ll treasure forever.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {['Wedding Photography', 'Portrait', 'Events', 'Commercial', 'Pre-Wedding', 'Fashion'].map((skill) => (
                <span key={skill} className="px-4 py-1.5 bg-zinc-800 border border-zinc-700 rounded-full text-sm text-gray-300">
                  {skill}
                </span>
              ))}
            </div>
            <a href="#contact" className="btn-primary">Let&apos;s Work Together</a>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
          {[
            { icon: <FiCamera className="text-yellow-500 text-3xl mb-3 mx-auto" />, value: '5000+', label: 'Photos Taken' },
            { icon: <FiHeart className="text-yellow-500 text-3xl mb-3 mx-auto" />, value: '300+', label: 'Weddings Covered' },
            { icon: <FiUsers className="text-yellow-500 text-3xl mb-3 mx-auto" />, value: '800+', label: 'Happy Clients' },
            { icon: <FiAward className="text-yellow-500 text-3xl mb-3 mx-auto" />, value: '8+', label: 'Years Experience' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-yellow-500/50 transition-colors">
              {stat.icon}
              <p className="font-serif text-4xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
