'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FiYoutube, FiCopy, FiCheck, FiPlayCircle, FiEye, FiTv } from 'react-icons/fi'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

const channelDescription = `Welcome to Rohit Nagre Photography! 📸
I'm Rohit — a professional photographer based in Pune, 
specializing in weddings, portraits & lifestyle photography.

On this channel you'll find:
🎬 Behind the scenes of my shoots
✨ Photo editing tutorials
💍 Full wedding films & highlights
📸 Portrait session vlogs
💡 Photography tips for beginners

📩 For bookings: WhatsApp (+91 XXXXXXXXXX)
📱 Instagram: @ro.clickz
🌐 Website: rohitnagre.com

Your Story. My Lens. 🎯`

const contentIdeas = [
  {
    type: 'BTS Wedding',
    title: 'I shot a 500-person Pune wedding — Full BTS',
    potential: 'High',
    potentialBadge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
    icon: '🎬',
    desc: 'Exclusive behind-the-scenes footage capturing candid emotional moments, lighting setup, and crew orchestration.'
  },
  {
    type: 'Editing Tutorial',
    title: 'How I edit wedding photos in Lightroom',
    potential: 'Very High',
    potentialBadge: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    icon: '✨',
    desc: 'Step-by-step color grading tutorial showing preset creation, skin tone preservation, and gold warmth adjustment.'
  },
  {
    type: 'Gear Review',
    title: 'My camera bag for ₹50,000 budget',
    potential: 'High',
    potentialBadge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
    icon: '🎥',
    desc: 'Budget-friendly lens & camera breakdown for aspiring Indian wedding & portrait photographers.'
  },
  {
    type: 'Day in Life',
    title: 'A day in my life as a photographer in Pune',
    potential: 'Medium',
    potentialBadge: 'bg-blue-500/20 text-blue-400 border-blue-500/40',
    icon: '📸',
    desc: 'Vlog style video exploring Pune pre-wedding shoot locations, client meetings, and studio routine.'
  },
  {
    type: 'Before/After',
    title: 'RAW vs EDITED — Can you spot the difference?',
    potential: 'Very High',
    potentialBadge: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    icon: '🔍',
    desc: 'Visual split-screen showcase demonstrating raw camera files transformed into high-end editorial portraits.'
  },
  {
    type: 'Tips',
    title: '5 poses every photographer should know',
    potential: 'High',
    potentialBadge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
    icon: '💡',
    desc: 'Quick guide for effortless couple posing, body angles, and natural expressions during shoots.'
  }
]

export default function YouTubeShowcase() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(channelDescription)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="youtube" className="py-24 bg-[#0A0A0A] border-t border-[#2C2C2C] relative overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#C9A84C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/40 border border-red-600/40 text-red-400 text-xs sm:text-sm font-semibold mb-4 tracking-wider uppercase">
            <FiYoutube className="text-red-500 text-lg" />
            <span>Section 9 • YouTube Channel Setup</span>
          </div>
          <h2 className="section-title text-white">Rohit Nagre Photography YouTube Hub</h2>
          <span className="gold-line" />
          <p className="section-subtitle max-w-2xl mx-auto text-gray-300 text-sm sm:text-base">
            Official channel architecture, 2560x1440px dark &amp; gold channel art, verified description, and high-impact content strategy.
          </p>
        </div>

        {/* Channel Specs & Quick Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 text-center">
            <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Channel Name</span>
            <span className="text-white font-serif font-bold text-base sm:text-lg">Rohit Nagre Photography</span>
          </div>
          <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 text-center">
            <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Channel Handle</span>
            <span className="text-[#C9A84C] font-mono font-bold text-sm sm:text-base">@rohitnagre / @ro.clickz</span>
          </div>
          <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 text-center">
            <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Banner Dimension</span>
            <span className="text-gray-200 font-mono font-semibold text-sm sm:text-base">2560 x 1440 px</span>
          </div>
          <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 text-center">
            <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Brand Tagline</span>
            <span className="text-yellow-400 font-serif italic text-sm sm:text-base">&quot;Your Story. My Lens.&quot;</span>
          </div>
        </div>

        {/* Banner Preview Frame */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <FiTv className="text-[#C9A84C]" /> Channel Art Preview (2560 x 1440px Banner Design)
            </h3>
            <span className="text-xs text-[#C9A84C] bg-[#C9A84C]/10 px-3 py-1 rounded-full border border-[#C9A84C]/30">
              Dark Background + Gold Typography
            </span>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-[#C9A84C]/40 shadow-2xl shadow-black group">
            <div className="aspect-[16/9] w-full relative bg-zinc-950">
              <Image 
                src="/youtube_banner.jpg" 
                alt="Rohit Nagre Photography YouTube Banner (2560x1440)"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
            {/* Banner Overlay Badge */}
            <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-4 py-2 rounded-lg border border-zinc-800 text-xs text-gray-300 flex items-center gap-4">
              <span>📍 Pune, India</span>
              <span>📱 @ro.clickz</span>
              <span>🎯 Your Story. My Lens.</span>
            </div>
          </div>
        </div>

        {/* Channel Description & Bio Grid */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          {/* Description Copy Box */}
          <div className="lg:col-span-7 bg-zinc-900/90 rounded-2xl border border-zinc-800 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <FiYoutube className="text-red-500 text-xl" /> Official Channel Description
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">Optimized for YouTube SEO &amp; Brand Inquiries</p>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 text-xs font-semibold text-gray-200 hover:text-[#C9A84C] hover:border-[#C9A84C]/50 transition-all"
                >
                  {copied ? (
                    <>
                      <FiCheck className="text-green-400 text-sm" />
                      <span className="text-green-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <FiCopy className="text-sm" />
                      <span>Copy Text</span>
                    </>
                  )}
                </button>
              </div>

              <pre className="whitespace-pre-wrap font-sans text-sm text-gray-300 leading-relaxed bg-black/50 p-5 rounded-xl border border-zinc-800/80">
                {channelDescription}
              </pre>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/80 flex flex-wrap gap-4 items-center justify-between">
              <span className="text-xs text-gray-400">
                Direct Social Sync: <span className="text-[#C9A84C]">@ro.clickz</span> &amp; <span className="text-[#C9A84C]">rohitnagre.com</span>
              </span>
              <a 
                href="https://youtube.com/@rohitnagre" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-lg shadow-red-900/30"
              >
                <FiYoutube className="text-base" /> Visit Channel
              </a>
            </div>
          </div>

          {/* Highlights Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-zinc-900 to-black rounded-2xl border border-[#C9A84C]/30 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C9A84C] font-semibold block mb-2">
                Channel Content Structure
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mb-6">
                What Viewers Experience
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                  <span className="text-xl">🎬</span>
                  <div>
                    <h4 className="font-semibold text-white">Behind The Scenes (BTS)</h4>
                    <p className="text-xs text-gray-400">Real wedding shoots, lighting setups &amp; Pune location vlogs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                  <span className="text-xl">✨</span>
                  <div>
                    <h4 className="font-semibold text-white">Editing &amp; Color Grading</h4>
                    <p className="text-xs text-gray-400">Lightroom &amp; Photoshop presets masterclasses for warm tones.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                  <span className="text-xl">💍</span>
                  <div>
                    <h4 className="font-semibold text-white">Cinematic Wedding Films</h4>
                    <p className="text-xs text-gray-400">High-definition 4K highlights &amp; royal wedding teasers.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                  <span className="text-xl">💡</span>
                  <div>
                    <h4 className="font-semibold text-white">Gear &amp; Photography Tips</h4>
                    <p className="text-xs text-gray-400">Budget camera recommendations &amp; natural portrait posing.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs">
              <span className="text-gray-400 flex items-center gap-1">
                <FaInstagram className="text-[#C9A84C]" /> @ro.clickz
              </span>
              <span className="text-gray-400 flex items-center gap-1">
                <FaWhatsapp className="text-green-400" /> Studio Bookings Active
              </span>
            </div>
          </div>
        </div>

        {/* Content Ideas & Growth Strategy Table */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest mb-1">
                YouTube Growth Roadmap
              </p>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Content Ideas &amp; View Potential
              </h3>
            </div>
            <span className="hidden sm:flex items-center gap-1.5 text-xs text-gray-400 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800">
              <FiEye className="text-[#C9A84C]" /> 6 Core Video Strategies
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentIdeas.map((idea, index) => (
              <div 
                key={index} 
                className="group p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 hover:border-[#C9A84C]/50 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{idea.icon}</span>
                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${idea.potentialBadge}`}>
                      {idea.potential} Potential
                    </span>
                  </div>

                  <span className="text-[11px] uppercase tracking-wider text-gray-400 font-medium block mb-1">
                    {idea.type}
                  </span>

                  <h4 className="text-base font-bold text-white group-hover:text-[#C9A84C] transition-colors mb-3 leading-snug">
                    &quot;{idea.title}&quot;
                  </h4>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    {idea.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1 text-red-400">
                    <FiPlayCircle /> Planned Release
                  </span>
                  <span className="font-mono text-[#C9A84C]/80">Idea #{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
