'use client'
import { useState } from 'react'
import { FiZoomIn } from 'react-icons/fi'

const categories = ['All', 'Wedding', 'Portrait', 'Events', 'Commercial']

const photos = [
  { id: 1, url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', category: 'Wedding', title: 'Golden Vows' },
  { id: 2, url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80', category: 'Portrait', title: 'Soulful Gaze' },
  { id: 3, url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', category: 'Events', title: 'Grand Celebration' },
  { id: 4, url: 'https://images.unsplash.com/photo-1529636444744-adffc9135a5e?w=800&q=80', category: 'Wedding', title: 'Sacred Moments' },
  { id: 5, url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80', category: 'Portrait', title: 'Natural Beauty' },
  { id: 6, url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80', category: 'Events', title: 'Night Lights' },
  { id: 7, url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80', category: 'Wedding', title: 'Forever Together' },
  { id: 8, url: 'https://images.unsplash.com/photo-1559181567-c3190ebb9e5e?w=800&q=80', category: 'Commercial', title: 'Product Elegance' },
  { id: 9, url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80', category: 'Portrait', title: 'City Stories' },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxImage, setLightboxImage] = useState('')

  const filtered = activeCategory === 'All' ? photos : photos.filter((p) => p.category === activeCategory)

  return (
    <section id="gallery" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-yellow-500 tracking-[0.3em] uppercase text-sm font-medium mb-4">Portfolio</p>
          <h2 className="section-title">My Best Work</h2>
          <span className="gold-line" />
          <p className="section-subtitle">A curated collection of moments frozen in time</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat ? 'bg-yellow-500 text-black' : 'bg-zinc-900 text-gray-400 hover:bg-zinc-800 border border-zinc-700'
              }`}>
              {cat}
            </button>
          ))}
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((photo) => (
            <div key={photo.id} onClick={() => setLightboxImage(photo.url)}
              className="relative group break-inside-avoid cursor-pointer overflow-hidden rounded-xl">
              <img src={photo.url} alt={photo.title} className="w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center">
                <FiZoomIn className="text-white text-4xl mb-2" />
                <p className="text-white font-semibold">{photo.title}</p>
                <p className="text-yellow-500 text-sm">{photo.category}</p>
              </div>
            </div>
          ))}
        </div>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setLightboxImage('')}>
            <img src={lightboxImage} alt="Preview" className="max-w-full max-h-full object-contain rounded-lg" />
            <button className="absolute top-4 right-4 text-white text-5xl leading-none hover:text-yellow-500" onClick={() => setLightboxImage('')}>
              &times;
            </button>
          </div>
        )}
        <div className="text-center mt-12">
          <a href="https://instagram.com/YOUR_INSTAGRAM" target="_blank" rel="noopener noreferrer" className="btn-outline">
            See More on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
