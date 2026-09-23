'use client'
import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Booking Inquiry for Rohit Nagre Photography - ${form.service}`
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AService: ${form.service}%0AMessage: ${form.message}`
    window.open(`mailto:contact@rohitnagrephotography.com?subject=${encodeURIComponent(subject)}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-yellow-500 tracking-[0.3em] uppercase text-xs sm:text-sm font-semibold mb-3">
            Direct Bookings &amp; Consultations
          </p>
          <h2 className="section-title">Reserve Your Date with Rohit Nagre</h2>
          <span className="gold-line" />
          <p className="section-subtitle">
            Let&apos;s create something remarkable together. Reach out for availability, packages, or custom destination shoots.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Studio & Brand Info */}
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
              Rohit Nagre Photography Studio
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              We take on a selective number of weddings and luxury assignments each season to ensure unmatched attention to detail. Get in touch early to secure your dates.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl flex items-center justify-center text-yellow-500 shrink-0 text-xl">
                  <FiPhone />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase font-medium tracking-wider">Direct Studio Contact</p>
                  <p className="text-white font-semibold text-base mt-0.5">+91 98765 43210</p>
                  <p className="text-gray-400 text-xs mt-0.5">Available Mon-Sat (10:00 AM - 8:00 PM IST)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl flex items-center justify-center text-yellow-500 shrink-0 text-xl">
                  <FiMail />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase font-medium tracking-wider">Official Email</p>
                  <p className="text-white font-semibold text-base mt-0.5">contact@rohitnagrephotography.com</p>
                  <p className="text-gray-400 text-xs mt-0.5">Prompt response within 24 business hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl flex items-center justify-center text-yellow-500 shrink-0 text-xl">
                  <FiMapPin />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase font-medium tracking-wider">Studio Base &amp; Travel</p>
                  <p className="text-white font-semibold text-base mt-0.5">Mumbai, Maharashtra, India</p>
                  <p className="text-gray-400 text-xs mt-0.5">Available for Destination Weddings across India &amp; Worldwide</p>
                </div>
              </div>
            </div>

            {/* Google Reviews & WhatsApp Badges */}
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <a href="https://wa.me/91XXXXXXXXXX?text=Hello%20Rohit%20Nagre%20Photography!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20shoot."
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white px-6 py-4 rounded-2xl font-semibold text-sm transition-all shadow-lg hover:scale-102">
                <FaWhatsapp className="text-2xl" />
                <span>Chat on WhatsApp Directly</span>
              </a>

              <a href="https://maps.google.com/?q=Rohit+Nagre+Photography"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-700 hover:border-yellow-500 text-white px-5 py-4 rounded-2xl font-semibold text-sm transition-all">
                <FcGoogle className="text-xl" />
                <span>Google Verified (5.0 ★)</span>
              </a>
            </div>
          </div>

          {/* Booking Inquiry Form */}
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-md">
            <h4 className="font-serif text-xl font-bold text-white mb-2">Send an Official Inquiry</h4>
            <p className="text-gray-400 text-xs sm:text-sm mb-6">Fill in your shoot details and Rohit will connect with you.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-xs uppercase font-medium mb-1.5">Your Full Name *</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="e.g. Arjun Mehta"
                    className="w-full min-h-[44px] bg-zinc-800/90 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-[#C9A84C] focus:outline-none text-sm" />
                </div>
                <div>
                  <label className="block text-gray-300 text-xs uppercase font-medium mb-1.5">Phone Number *</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 98765 43210"
                    className="w-full min-h-[44px] bg-zinc-800/90 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-[#C9A84C] focus:outline-none text-sm" />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 text-xs uppercase font-medium mb-1.5">Email Address *</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@example.com"
                  className="w-full min-h-[44px] bg-zinc-800/90 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-[#C9A84C] focus:outline-none text-sm" />
              </div>

              <div>
                <label className="block text-gray-300 text-xs uppercase font-medium mb-1.5">Photography Category</label>
                <select name="service" value={form.service} onChange={handleChange}
                  className="w-full min-h-[44px] bg-zinc-800/90 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:border-[#C9A84C] focus:outline-none text-sm">
                  <option value="">Select Service / Occasion...</option>
                  <option>Luxury Wedding Photography</option>
                  <option>Pre-Wedding &amp; Couple Shoot</option>
                  <option>Signature Portrait Session</option>
                  <option>Grand Events &amp; Celebrations</option>
                  <option>Commercial &amp; Brand Campaign</option>
                  <option>Fashion &amp; Model Portfolio</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 text-xs uppercase font-medium mb-1.5">Event Date, City &amp; Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                  placeholder="Share expected dates, venue/city, and any specific creative vision..."
                  className="w-full bg-zinc-800/90 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-[#C9A84C] focus:outline-none text-sm resize-none" />
              </div>

              <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2 py-3.5 text-sm uppercase tracking-wider">
                <FiSend /> {sent ? 'Inquiry Dispatched!' : 'Submit Booking Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
