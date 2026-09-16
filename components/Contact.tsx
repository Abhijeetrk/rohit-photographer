'use client'
import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Booking Inquiry - ${form.service}`
    const body = `Name: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0AService: ${form.service}%0AMessage: ${form.message}`
    window.open(`mailto:rohit@yourphotography.com?subject=${subject}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-yellow-500 tracking-[0.3em] uppercase text-sm font-medium mb-4">Get in Touch</p>
          <h2 className="section-title">Book a Session</h2>
          <span className="gold-line" />
          <p className="section-subtitle">Ready to create something beautiful? Let&apos;s connect!</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="font-serif text-2xl font-bold text-white mb-8">Let&apos;s Talk</h3>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center text-yellow-500 flex-shrink-0"><FiPhone /></div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Call / WhatsApp</p>
                  <p className="text-white font-semibold">+91 XXXXXXXXXX</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center text-yellow-500 flex-shrink-0"><FiMail /></div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Email</p>
                  <p className="text-white font-semibold">rohit@yourphotography.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center text-yellow-500 flex-shrink-0"><FiMapPin /></div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Location</p>
                  <p className="text-white font-semibold">Mumbai, Maharashtra, India</p>
                  <p className="text-gray-400 text-sm">Available for travel across India</p>
                </div>
              </div>
            </div>
            <a href="https://wa.me/91XXXXXXXXXX?text=Hi+Rohit!+I+want+to+book+a+photography+session"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white px-6 py-4 rounded-xl font-semibold transition-colors w-fit">
              <FaWhatsapp className="text-2xl" /> Chat on WhatsApp Instantly
            </a>
          </div>
          <form onSubmit={handleSubmit} className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Full Name *</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Phone *</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 XXXXXXXXXX"
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-2">Email *</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com"
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-2">Service Required</label>
              <select name="service" value={form.service} onChange={handleChange}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:border-yellow-500 focus:outline-none">
                <option value="">Select a service...</option>
                <option>Wedding Photography</option>
                <option>Pre-Wedding Shoot</option>
                <option>Portrait Session</option>
                <option>Events &amp; Functions</option>
                <option>Commercial Photography</option>
                <option>Fashion &amp; Portfolio</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="block text-gray-400 text-sm mb-2">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                placeholder="Tell me about your event, date, location..."
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none resize-none" />
            </div>
            <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
              <FiSend /> {sent ? '✅ Message Sent!' : 'Send Inquiry'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
