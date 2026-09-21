'use client'
import { useState } from 'react'

export default function LogoShowcase() {
  const [activeConcept, setActiveConcept] = useState<1 | 2 | 3>(1)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  return (
    <section id="logos" className="py-24 bg-[#0A0A0A] border-t border-[#2C2C2C] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-[#C9A84C] tracking-[0.3em] uppercase text-xs sm:text-sm font-semibold mb-3">
            Brand Identity Suite
          </p>
          <h2 className="section-title">Official Brand Logos</h2>
          <span className="gold-line" />
          <p className="section-subtitle">
            Explore the official logo concepts, monograms, and signature marks crafted for Rohit Nagre Photography.
          </p>
        </div>

        {/* Controls Container */}
        <div className="bg-[#0A0A0A] border border-[#2C2C2C] rounded-3xl p-6 sm:p-10 shadow-2xl">
          {/* Header Bar: Concept Tabs + Background Switcher */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 border-b border-[#2C2C2C] pb-6 mb-8">
            {/* Concept Selectors */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => setActiveConcept(1)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeConcept === 1
                    ? 'bg-[#C9A84C] text-[#0A0A0A] shadow-md shadow-[#C9A84C]/20'
                    : 'bg-[#2C2C2C]/50 text-gray-300 hover:text-white hover:bg-[#2C2C2C]'
                }`}
              >
                Concept 1: Wordmark
              </button>

              <button
                onClick={() => setActiveConcept(2)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeConcept === 2
                    ? 'bg-[#C9A84C] text-[#0A0A0A] shadow-md shadow-[#C9A84C]/20'
                    : 'bg-[#2C2C2C]/50 text-gray-300 hover:text-white hover:bg-[#2C2C2C]'
                }`}
              >
                Concept 2: RN Monogram
              </button>

              <button
                onClick={() => setActiveConcept(3)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeConcept === 3
                    ? 'bg-[#C9A84C] text-[#0A0A0A] shadow-md shadow-[#C9A84C]/20'
                    : 'bg-[#2C2C2C]/50 text-gray-300 hover:text-white hover:bg-[#2C2C2C]'
                }`}
              >
                Concept 3: Camera Aperture
              </button>
            </div>

            {/* Background Theme Switcher */}
            <div className="flex items-center gap-1.5 bg-[#2C2C2C]/50 p-1.5 rounded-2xl border border-zinc-800">
              <button
                onClick={() => setTheme('dark')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  theme === 'dark'
                    ? 'bg-[#0A0A0A] text-[#C9A84C] border border-[#C9A84C]/40 shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Gold on Dark
              </button>
              <button
                onClick={() => setTheme('light')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  theme === 'light'
                    ? 'bg-white text-zinc-900 shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Black on Light
              </button>
            </div>
          </div>

          {/* Canvas Display */}
          <div
            className={`rounded-2xl p-10 sm:p-16 min-h-[300px] flex items-center justify-center transition-all duration-500 border ${
              theme === 'dark'
                ? 'bg-[#0A0A0A] border-zinc-800 shadow-inner'
                : 'bg-white border-zinc-200 shadow-xl'
            }`}
          >
            {/* CONCEPT 1: LUXURY WORDMARK */}
            {activeConcept === 1 && (
              <div className="flex flex-col items-center text-center animate-fade-in">
                <h3
                  className={`font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-[0.15em] uppercase transition-colors ${
                    theme === 'dark' ? 'text-[#C9A84C]' : 'text-zinc-900'
                  }`}
                >
                  ROHIT NAGRE
                </h3>
                <div
                  className={`w-40 sm:w-64 h-[2px] mx-auto my-3.5 sm:my-4 transition-colors ${
                    theme === 'dark' ? 'bg-[#C9A84C]' : 'bg-zinc-900'
                  }`}
                />
                <p
                  className={`text-xs sm:text-sm font-medium tracking-[0.45em] uppercase transition-colors ${
                    theme === 'dark' ? 'text-[#C9A84C]/90' : 'text-zinc-700'
                  }`}
                >
                  P H O T O G R A P H Y
                </p>
                <p
                  className={`font-script text-2xl sm:text-3xl mt-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-zinc-600'
                  }`}
                >
                  Your Story. My Lens.
                </p>
              </div>
            )}

            {/* CONCEPT 2: MONOGRAM "RN" (Circle & Diamond) */}
            {activeConcept === 2 && (
              <div className="flex flex-col items-center text-center gap-8 animate-fade-in">
                <div className="flex items-center gap-8 sm:gap-12 flex-wrap justify-center">
                  {/* Circle Emblem */}
                  <div className="flex flex-col items-center gap-2.5">
                    <div
                      className={`w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 flex items-center justify-center shadow-lg transition-all ${
                        theme === 'dark'
                          ? 'border-[#C9A84C] bg-[#0A0A0A] shadow-[#C9A84C]/15'
                          : 'border-zinc-900 bg-zinc-50'
                      }`}
                    >
                      <span
                        className={`font-serif text-3xl sm:text-4xl font-bold tracking-widest ${
                          theme === 'dark' ? 'text-[#C9A84C]' : 'text-zinc-900'
                        }`}
                      >
                        RN
                      </span>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
                      Circle Seal
                    </span>
                  </div>

                  {/* Diamond Emblem */}
                  <div className="flex flex-col items-center gap-2.5">
                    <div
                      className={`w-24 h-24 sm:w-32 sm:h-32 rotate-45 border-2 flex items-center justify-center transition-all my-2 shadow-lg ${
                        theme === 'dark'
                          ? 'border-[#C9A84C] bg-[#0A0A0A] shadow-[#C9A84C]/15'
                          : 'border-zinc-900 bg-zinc-50'
                      }`}
                    >
                      <span
                        className={`-rotate-45 font-serif text-2xl sm:text-3xl font-bold tracking-widest ${
                          theme === 'dark' ? 'text-[#C9A84C]' : 'text-zinc-900'
                        }`}
                      >
                        RN
                      </span>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
                      Diamond Seal
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <p
                    className={`font-serif text-lg sm:text-xl font-bold tracking-widest ${
                      theme === 'dark' ? 'text-[#C9A84C]' : 'text-zinc-900'
                    }`}
                  >
                    ROHIT NAGRE
                  </p>
                  <p
                    className={`text-[10px] tracking-[0.35em] uppercase font-medium ${
                      theme === 'dark' ? 'text-[#C9A84C]/80' : 'text-zinc-600'
                    }`}
                  >
                    PHOTOGRAPHY
                  </p>
                </div>
              </div>
            )}

            {/* CONCEPT 3: CAMERA APERTURE + NAME */}
            {activeConcept === 3 && (
              <div className="flex items-center justify-center gap-5 sm:gap-8 flex-wrap text-left animate-fade-in">
                {/* SVG 6-Blade Camera Aperture */}
                <svg
                  className={`w-16 h-16 sm:w-24 sm:h-24 fill-none transition-colors ${
                    theme === 'dark' ? 'stroke-[#C9A84C]' : 'stroke-zinc-900'
                  }`}
                  viewBox="0 0 100 100"
                  strokeWidth="2.5"
                >
                  <circle cx="50" cy="50" r="44" strokeWidth="2.5" />
                  <circle cx="50" cy="50" r="16" strokeDasharray="3 3" opacity="0.6" />
                  <line x1="50" y1="6" x2="78" y2="40" />
                  <line x1="78" y1="40" x2="68" y2="82" />
                  <line x1="68" y1="82" x2="28" y2="80" />
                  <line x1="28" y1="80" x2="10" y2="46" />
                  <line x1="10" y1="46" x2="38" y2="12" />
                  <line x1="38" y1="12" x2="78" y2="40" />
                </svg>

                <div
                  className={`border-l-2 pl-4 sm:pl-6 py-1 ${
                    theme === 'dark' ? 'border-[#C9A84C]/40' : 'border-zinc-300'
                  }`}
                >
                  <h3
                    className={`font-serif text-2xl sm:text-4xl font-bold tracking-wider uppercase ${
                      theme === 'dark' ? 'text-[#C9A84C]' : 'text-zinc-900'
                    }`}
                  >
                    ROHIT NAGRE
                  </h3>
                  <p
                    className={`text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase mt-1 ${
                      theme === 'dark' ? 'text-[#C9A84C]/90' : 'text-zinc-700'
                    }`}
                  >
                    P H O T O G R A P H Y
                  </p>
                  <p className="font-script text-xl sm:text-2xl text-yellow-500 mt-1">
                    Your Story. My Lens.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Concept Guide / Usage Description */}
          <div className="mt-8 bg-[#2C2C2C]/30 border border-[#2C2C2C] rounded-2xl p-5 sm:p-6 text-xs sm:text-sm">
            {activeConcept === 1 && (
              <div>
                <h4 className="font-bold text-[#C9A84C] uppercase tracking-wider mb-1">
                  Concept 1: Minimalist Wordmark
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Best Used For:</strong> Official Website Headers, Brand Watermarks, High-End Print Materials, and Letterheads. Features <em>Playfair Display Bold</em> with luxury letter-spacing.
                </p>
              </div>
            )}

            {activeConcept === 2 && (
              <div>
                <h4 className="font-bold text-[#C9A84C] uppercase tracking-wider mb-1">
                  Concept 2: RN Monogram Seal
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Best Used For:</strong> Instagram Profile Photo (<code>@ro.clickz</code>), Website Favicon, Corner Photo Watermarks, and Wax Seal Wax Stamps for physical wedding albums.
                </p>
              </div>
            )}

            {activeConcept === 3 && (
              <div>
                <h4 className="font-bold text-[#C9A84C] uppercase tracking-wider mb-1">
                  Concept 3: Camera Aperture + Wordmark
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  <strong>Best Used For:</strong> Studio Signage, Mobile App &amp; Web Headers, Social Media Banners, and Equipment Branding. The geometric 6-blade aperture immediately signals high-end photography.
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
