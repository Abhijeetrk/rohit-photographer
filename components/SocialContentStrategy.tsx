'use client'

import React, { useState } from 'react'
import { FiCopy, FiCheck, FiInstagram, FiHeart, FiStar, FiImage } from 'react-icons/fi'

const templates = [
  {
    id: 1,
    name: 'Template 1 — Portfolio Showcase',
    category: 'Wedding & Hero Moments',
    previewType: 'portfolio',
    watermark: '© ro.clickz',
    quote: '[Full Bleed High-Res Photograph]',
    captionHook: 'The moment she saw him and forgot the whole world existed...',
    captionBody: 'Captured at Sun-n-Sand Hotel, Pune during sunset rituals.\nWhat made this shot special was the natural golden rim light catching her veil.\nEvery frame has a story — this one made us cry happy tears.',
    cta: '💌 DM us to book your session | Link in bio',
    defaultHashtagSet: 'A',
  },
  {
    id: 2,
    name: 'Template 2 — Quote / Value Post',
    category: 'Brand Identity & Philosophy',
    previewType: 'quote',
    mainText: '"Your Story. My Lens."',
    author: '— Rohit Nagre Photography',
    captionHook: 'Every couple has a story waiting to be immortalized...',
    captionBody: 'We don’t just take pictures; we capture how it felt.\nYour wedding day passes in a heartbeat, but these frames stay forever.',
    cta: '💌 DM us to reserve your dates | Link in bio',
    defaultHashtagSet: 'B',
  },
  {
    id: 3,
    name: 'Template 3 — Testimonial Post',
    category: 'Social Proof & Client Love',
    previewType: 'testimonial',
    stars: 5,
    quote: '"Rohit captured every tear, laugh, and emotion at our wedding! Looking through our album feels like reliving the best day of our lives."',
    client: '— Priya & Aniket, Pune',
    handle: 'ro.clickz',
    captionHook: 'When our clients relive their special day through our frames... ✨',
    captionBody: 'Grateful for wonderful couples who trust us with their precious moments.\nFeedback like this fuels our passion every single day.',
    cta: '💌 Check date availability via DM | Link in bio',
    defaultHashtagSet: 'A',
  },
  {
    id: 4,
    name: 'Template 4 — Before/After Carousel',
    category: 'Editing Mastery & BTS',
    previewType: 'before_after',
    slide1: 'Slide 1: RAW unedited photo (with "BEFORE" badge)',
    slide2: 'Slide 2: Final edited photo (with "AFTER" badge)',
    slide3: 'Slide 3: Behind the scene / gear used (Sony A7IV + 85mm)',
    captionHook: 'This is the magic of editing ✨ Swipe to see the transformation →',
    captionBody: 'From neutral RAW file to royal golden tones.\nColor grading is where the emotion and depth come alive.',
    cta: 'Which slide is your favorite? 1, 2, or 3? Let us know below 👇',
    defaultHashtagSet: 'C',
  },
]

const hashtagSets = {
  A: {
    title: 'Set A — Wedding Focus',
    tags: [
      '#weddingphotography', '#weddingphotographer', '#indianwedding', '#weddingday',
      '#bridalphotography', '#weddingreels', '#maharashtrawedding', '#punewedding',
      '#mumbaiwedding', '#couplegoals', '#weddingstory', '#candidphotography',
      '#bridetobe', '#groomtobe', '#nuptials', '#weddingfilm', '#goldenhour',
      '#portraitphotography', '#ro_clickz', '#rohitnagrephotography', '#punephotographer',
      '#photographylovers', '#indianphotographer', '#clicksofIndia', '#weddinginspo', '#weddingseason'
    ],
  },
  B: {
    title: 'Set B — Portrait Focus',
    tags: [
      '#portraitphotography', '#portraitmode', '#portraitoftheday', '#faceoftheday',
      '#lifestyle', '#lifestylephotography', '#punephotographer', '#indianphotographer',
      '#modelshoot', '#naturallightphotography', '#goldenhourlighting', '#candid',
      '#candidmoments', '#candidphotography', '#beautifulpeople', '#portraitmood',
      '#ro_clickz', '#rohitnagre', '#clicksofIndia', '#_soi', '#desi_diaries',
      '#indianblogger', '#fashionphotography'
    ],
  },
  C: {
    title: 'Set C — General / Viral',
    tags: [
      '#photography', '#photographer', '#photooftheday', '#picoftheday',
      '#instaphoto', '#photoshoot', '#punephotographer', '#maharashtraphotographer',
      '#indianphotography', '#clicksofIndia', '#_soi', '#naturephotography',
      '#goldenhour', '#reelsindia', '#instareels', '#reelsinstagram', '#viralreels',
      '#ro_clickz', '#rohitnagre', '#behindthelens', '#photographyislife', '#momentsphotography'
    ],
  }
}

export default function SocialContentStrategy() {
  const [activeTemplate, setActiveTemplate] = useState(0)
  const [activeHashtagSet, setActiveHashtagSet] = useState<'A' | 'B' | 'C'>('A')
  const [copiedHashtags, setCopiedHashtags] = useState(false)
  const [copiedCaption, setCopiedCaption] = useState(false)

  const currentTpl = templates[activeTemplate]

  const fullCaption = `${currentTpl.captionHook}\n\n${currentTpl.captionBody}\n\n${currentTpl.cta}\n.\n.\n${hashtagSets[activeHashtagSet].tags.join(' ')}`

  const handleCopyHashtags = () => {
    navigator.clipboard.writeText(hashtagSets[activeHashtagSet].tags.join(' '))
    setCopiedHashtags(true)
    setTimeout(() => setCopiedHashtags(false), 2000)
  }

  const handleCopyCaption = () => {
    navigator.clipboard.writeText(fullCaption)
    setCopiedCaption(true)
    setTimeout(() => setCopiedCaption(false), 2000)
  }

  return (
    <div className="mt-20 border-t border-zinc-800 pt-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-semibold tracking-wider uppercase mb-3">
          <FiStar className="text-yellow-400" /> Instagram Post Styles &amp; Content Engine
        </div>
        <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-3">
          Social Content Templates &amp; Hashtag Toolkit
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
          Interactive content blueprints, caption formulas, and rotational hashtag strategy for <strong>@ro.clickz</strong>.
        </p>
      </div>

      {/* Template Selectors */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {templates.map((tpl, idx) => (
          <button
            key={tpl.id}
            onClick={() => {
              setActiveTemplate(idx)
              setActiveHashtagSet(tpl.defaultHashtagSet as 'A' | 'B' | 'C')
            }}
            className={`p-4 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between ${
              activeTemplate === idx
                ? 'bg-zinc-800 border-yellow-500 text-white shadow-lg shadow-yellow-500/10'
                : 'bg-zinc-900/80 border-zinc-800 text-gray-400 hover:border-zinc-700 hover:text-gray-200'
            }`}
          >
            <div>
              <span className="text-[10px] uppercase tracking-widest text-yellow-500 font-bold block mb-1">
                {tpl.category}
              </span>
              <h4 className="font-bold text-sm text-white">{tpl.name.split(' — ')[1]}</h4>
            </div>
            <span className="text-xs text-yellow-400/80 mt-3 flex items-center gap-1">
              Select Preset →
            </span>
          </button>
        ))}
      </div>

      {/* Interactive Mockup & Caption Grid */}
      <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Left Column: Visual Post Frame Mockup (5 Cols) */}
        <div className="lg:col-span-5 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 sm:p-6 shadow-2xl">
          <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-yellow-500 via-amber-400 to-yellow-600 p-[2px]">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-xs font-bold text-yellow-400">
                  RC
                </div>
              </div>
              <div>
                <p className="text-white text-xs font-bold flex items-center gap-1">
                  ro.clickz <span className="text-blue-400 text-[10px]">✔</span>
                </p>
                <p className="text-[10px] text-gray-400">Rohit Nagre Photography</p>
              </div>
            </div>
            <FiInstagram className="text-pink-500 text-xl" />
          </div>

          {/* Canvas Box */}
          <div className="relative aspect-square rounded-xl overflow-hidden bg-black border border-zinc-800 flex flex-col justify-between p-6 shadow-inner">
            {currentTpl.previewType === 'portfolio' && (
              <div className="inset-0 absolute bg-gradient-to-t from-black via-zinc-900/60 to-zinc-900 flex flex-col justify-between p-6">
                <div className="flex justify-end">
                  <span className="px-2 py-1 bg-black/60 rounded text-[10px] text-yellow-400 font-mono border border-yellow-500/20">
                    FULL BLEED PHOTO
                  </span>
                </div>
                <div className="text-center py-12">
                  <FiImage className="text-5xl text-yellow-500/40 mx-auto mb-2" />
                  <p className="text-zinc-400 text-xs font-serif italic">High-Res Royal Wedding Frame</p>
                </div>
                <div className="text-right">
                  <span className="text-yellow-400/90 text-xs font-mono font-bold tracking-wider">
                    © ro.clickz
                  </span>
                </div>
              </div>
            )}

            {currentTpl.previewType === 'quote' && (
              <div className="inset-0 absolute bg-zinc-950 flex flex-col items-center justify-center text-center p-8 border border-yellow-500/20">
                <p className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide mb-4 leading-tight">
                  {currentTpl.mainText}
                </p>
                <p className="text-yellow-400 text-xs uppercase tracking-[0.2em] font-semibold">
                  {currentTpl.author}
                </p>
              </div>
            )}

            {currentTpl.previewType === 'testimonial' && (
              <div className="inset-0 absolute bg-gradient-to-b from-zinc-900 to-black flex flex-col items-center justify-center text-center p-6 border border-zinc-800">
                <div className="flex gap-1 text-yellow-400 text-lg mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="fill-yellow-400" />
                  ))}
                </div>
                <p className="font-serif italic text-gray-200 text-sm sm:text-base leading-relaxed mb-4 max-w-xs">
                  {currentTpl.quote}
                </p>
                <p className="text-yellow-400 text-xs font-semibold">{currentTpl.client}</p>
                <span className="text-zinc-500 text-[10px] mt-4 font-mono">{currentTpl.handle}</span>
              </div>
            )}

            {currentTpl.previewType === 'before_after' && (
              <div className="inset-0 absolute bg-zinc-900 p-4 flex flex-col justify-between">
                <div className="grid grid-cols-2 gap-2 h-3/4">
                  <div className="bg-zinc-800 rounded-lg p-2 relative flex items-center justify-center border border-zinc-700">
                    <span className="absolute top-2 left-2 bg-red-600/80 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                      BEFORE (RAW)
                    </span>
                    <span className="text-[10px] text-zinc-400 text-center">Flat Profile</span>
                  </div>
                  <div className="bg-gradient-to-tr from-amber-950 via-zinc-900 to-amber-900 rounded-lg p-2 relative flex items-center justify-center border border-yellow-500/40">
                    <span className="absolute top-2 left-2 bg-emerald-600/90 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                      AFTER (GRADED)
                    </span>
                    <span className="text-[10px] text-yellow-300 text-center">Warm Golden Tones</span>
                  </div>
                </div>
                <div className="bg-black/60 p-2 rounded text-[11px] text-center text-gray-300 border border-zinc-800">
                  Slide 3: BTS &amp; Camera Gear (Sony A7IV)
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between items-center mt-4 text-zinc-400 text-xs px-1">
            <span className="flex items-center gap-1 text-pink-500 font-semibold">
              <FiHeart className="fill-pink-500" /> Liked by clients &amp; couples
            </span>
            <span className="text-yellow-500 font-mono text-[11px]">Template #{currentTpl.id}</span>
          </div>
        </div>

        {/* Right Column: 4-Part Caption & Hashtags Generator (7 Cols) */}
        <div className="lg:col-span-7 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800">
            <h4 className="font-serif text-xl font-bold text-white flex items-center gap-2">
              📝 4-Part Caption Formula
            </h4>
            <button
              onClick={handleCopyCaption}
              className="px-3 py-1.5 rounded-lg bg-yellow-500 text-black text-xs font-bold hover:bg-yellow-400 transition flex items-center gap-1.5"
            >
              {copiedCaption ? <FiCheck className="text-black" /> : <FiCopy />}
              {copiedCaption ? 'Caption Copied!' : 'Copy Full Post'}
            </button>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            {/* Hook */}
            <div className="p-3 bg-zinc-900 rounded-xl border border-yellow-500/20">
              <span className="text-[10px] font-bold uppercase tracking-wider text-yellow-400 block mb-1">
                LINE 1: Attention Hook
              </span>
              <p className="text-white font-medium">{currentTpl.captionHook}</p>
            </div>

            {/* Story */}
            <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                LINES 2-4: Story &amp; Emotion
              </span>
              <p className="text-gray-300 whitespace-pre-line leading-relaxed">{currentTpl.captionBody}</p>
            </div>

            {/* CTA */}
            <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                LINE 5: Call to Action (CTA)
              </span>
              <p className="text-white font-medium">{currentTpl.cta}</p>
            </div>

            {/* Hashtag Set Selector */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-yellow-400">
                  LINES 6+: Rotational Hashtag Strategy
                </span>
                <button
                  onClick={handleCopyHashtags}
                  className="text-yellow-400 hover:text-yellow-300 text-xs font-semibold flex items-center gap-1"
                >
                  {copiedHashtags ? <FiCheck /> : <FiCopy />}
                  {copiedHashtags ? 'Copied Set!' : 'Copy Hashtags'}
                </button>
              </div>

              {/* Set Tabs */}
              <div className="flex gap-2 mb-3">
                {(['A', 'B', 'C'] as const).map((setKey) => (
                  <button
                    key={setKey}
                    onClick={() => setActiveHashtagSet(setKey)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                      activeHashtagSet === setKey
                        ? 'bg-yellow-500 text-black font-bold'
                        : 'bg-zinc-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    {hashtagSets[setKey].title}
                  </button>
                ))}
              </div>

              {/* Tags Container */}
              <div className="p-3 bg-black rounded-xl border border-zinc-800 max-h-32 overflow-y-auto font-mono text-[11px] text-gray-400 leading-relaxed">
                {hashtagSets[activeHashtagSet].tags.join(' ')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
