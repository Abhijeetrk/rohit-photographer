'use client'
import { useState } from 'react'
import { FiPhone, FiMail, FiMapPin, FiShare2, FiDownload, FiCheck, FiCamera, FiGlobe } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

export default function VisitingCard() {
  const [copied, setCopied] = useState(false)

  const cardData = {
    brand: 'Rohit Nagre Photography',
    name: 'Rohit Nagre',
    title: 'Founder & Lead Photographer',
    phone: '+91 98765 43210',
    email: 'contact@rohitnagrephotography.com',
    location: 'Mumbai & Pan-India Coverage',
    website: 'https://rohit-photographer.vercel.app',
    tagline: 'Capturing Timeless Moments & Cinematic Stories',
  }

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: cardData.brand,
          text: `${cardData.brand} - ${cardData.tagline}`,
          url: cardData.website,
        })
      } catch {
        copyToClipboard()
      }
    } else {
      copyToClipboard()
    }
  }

  const copyToClipboard = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(cardData.website)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    }
  }

  const handleDownloadVCard = () => {
    const vCardContent = `BEGIN:VCARD
VERSION:3.0
FN:${cardData.name}
ORG:${cardData.brand}
TITLE:${cardData.title}
TEL;TYPE=CELL,VOICE:${cardData.phone}
EMAIL;TYPE=WORK,INTERNET:${cardData.email}
URL:${cardData.website}
ADR;TYPE=WORK:;;${cardData.location};;;;
NOTE:${cardData.tagline}
END:VCARD`

    const blob = new Blob([vCardContent], { type: 'text/vcard;charset=utf-8;' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.setAttribute('download', 'Rohit_Nagre_Photography.vcf')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="card" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-yellow-500 tracking-[0.3em] uppercase text-xs sm:text-sm font-semibold mb-3">
            Digital Brand Identity
          </p>
          <h2 className="section-title">Official Visiting Card</h2>
          <span className="gold-line" />
          <p className="section-subtitle">
            Save Rohit Nagre Photography directly into your phone contacts with 1 click or share our official card instantly.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Card Component */}
          <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-zinc-900 via-zinc-900/90 to-black border-2 border-yellow-500/40 shadow-2xl shadow-yellow-500/10 backdrop-blur-xl overflow-hidden group">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -z-10 group-hover:bg-yellow-500/15 transition-all duration-700" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-600/10 rounded-full blur-2xl -z-10" />

            {/* Header / Brand */}
            <div className="flex items-start justify-between border-b border-zinc-800 pb-6 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <FiCamera className="text-yellow-500 text-2xl" />
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide">
                    Rohit Nagre
                  </h3>
                </div>
                <p className="text-yellow-500/90 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase">
                  Photography Studio
                </p>
              </div>

              {/* Google Badge */}
              <div className="flex items-center gap-1.5 bg-black/60 border border-zinc-700 px-3 py-1 rounded-full text-xs text-white">
                <FcGoogle className="text-base" />
                <span className="font-semibold">5.0 ★</span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-gray-300 text-sm italic mb-8 border-l-2 border-yellow-500 pl-3">
              &ldquo;{cardData.tagline}&rdquo;
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              <a href={`tel:${cardData.phone}`} className="flex items-center gap-4 text-gray-300 hover:text-yellow-400 transition-colors group/row">
                <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-yellow-500 group-hover/row:border-yellow-500 transition-colors">
                  <FiPhone />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Direct Phone</p>
                  <p className="text-sm font-semibold text-white">{cardData.phone}</p>
                </div>
              </a>

              <a href={`mailto:${cardData.email}`} className="flex items-center gap-4 text-gray-300 hover:text-yellow-400 transition-colors group/row">
                <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-yellow-500 group-hover/row:border-yellow-500 transition-colors">
                  <FiMail />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email Address</p>
                  <p className="text-sm font-semibold text-white">{cardData.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-yellow-500">
                  <FiMapPin />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Studio &amp; Coverage</p>
                  <p className="text-sm font-semibold text-white">{cardData.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-yellow-500">
                  <FiGlobe />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Official Website</p>
                  <p className="text-sm font-semibold text-yellow-500 truncate max-w-[240px] sm:max-w-xs">{cardData.website}</p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-zinc-800">
              <button
                onClick={handleDownloadVCard}
                className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold text-xs py-3 px-4 rounded-xl transition-all shadow-lg hover:scale-102">
                <FiDownload className="text-base" />
                <span>Save Contact</span>
              </button>

              <a
                href="https://wa.me/91XXXXXXXXXX?text=Hi%20Rohit%20Nagre!%20I%20found%20your%20visiting%20card%20online%20and%20want%20to%20inquire."
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold text-xs py-3 px-4 rounded-xl transition-all shadow-lg">
                <FaWhatsapp className="text-base" />
                <span>WhatsApp</span>
              </a>

              <button
                onClick={handleShare}
                className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-yellow-500 text-white font-semibold text-xs py-3 px-4 rounded-xl transition-all">
                {copied ? <FiCheck className="text-yellow-400 text-base" /> : <FiShare2 className="text-base" />}
                <span>{copied ? 'Link Copied' : 'Share Card'}</span>
              </button>
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 mt-4">
            Tap &ldquo;Save Contact&rdquo; to add Rohit Nagre Photography directly to your mobile phonebook (.vcf).
          </p>
        </div>
      </div>
    </section>
  )
}
