'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import SectionDivider from '@/components/section-divider'
import Footer from '@/components/footer'
import BorderGlow from '@/components/BorderGlow'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In a real app, this would send to a backend or email service
    console.log('Form submitted:', formData)
    alert('Thank you for reaching out! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <>
      <Navbar />

      <section className="py-16 md:py-24 px-6 sm:px-8 bg-gradient-to-b from-wall to-secondary">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-accent-red mb-4" style={{ fontFamily: 'Fraunces, serif' }}>
              Get In Touch
            </h1>
            <p className="text-lg text-foreground/70">
              Have questions, prayer requests, or feedback? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Info */}
            <div className="space-y-6">
              {/* Address */}
              <BorderGlow
                backgroundColor="rgba(255, 255, 255, 0.05)"
                borderRadius={12}
                glowColor="0 0 100"
                glowIntensity={0.6}
                colors={['#8B3A2B', '#B78A22', '#2F6F6B']}
                edgeSensitivity={25}
                glowRadius={30}
                fillOpacity={0.4}
              >
                <div className="rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent-red flex-shrink-0 mt-1 group-hover:animate-bounce" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Address</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Bharath Petrol Pump Backside<br />
                      Sivanthi Adithanar Nagar, Kalakkad East<br />
                      Kalakkad, Tamil Nadu 627501, India
                    </p>
                    <a href="https://maps.app.goo.gl/72XGHHvoqR6wZ2mP9" target="_blank" rel="noopener noreferrer" className="text-accent-red font-semibold hover:underline inline-block mt-2">View on Google Maps →</a>
                  </div>
                </div>
                </div>
              </BorderGlow>

              {/* Phone */}
              <BorderGlow
                backgroundColor="rgba(255, 255, 255, 0.05)"
                borderRadius={12}
                glowColor="40 70 60"
                glowIntensity={0.6}
                colors={['#8B3A2B', '#B78A22', '#2F6F6B']}
                edgeSensitivity={25}
                glowRadius={30}
                fillOpacity={0.4}
              >
                <div className="rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-accent-brass flex-shrink-0 mt-1 hover:animate-pulse" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Phone</h3>
                    <a href="tel:+914222234567" className="text-accent-red font-semibold hover:underline block mb-1">
                      +91-422-2234567
                    </a>
                    <p className="text-foreground/70 text-sm">
                      Monday-Friday, 9 AM - 5 PM IST
                    </p>
                  </div>
                </div>
                </div>
              </BorderGlow>

              {/* Email */}
              <BorderGlow
                backgroundColor="rgba(255, 255, 255, 0.05)"
                borderRadius={12}
                glowColor="180 70 60"
                glowIntensity={0.6}
                colors={['#8B3A2B', '#B78A22', '#2F6F6B']}
                edgeSensitivity={25}
                glowRadius={30}
                fillOpacity={0.4}
              >
                <div className="rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-accent-teal flex-shrink-0 mt-1 group-hover:rotate-12 transition-transform" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Email</h3>
                    <a href="mailto:hello@csinewchurch.church" className="text-accent-red font-semibold hover:underline block mb-1">
                      hello@csinewchurch.church
                    </a>
                    <p className="text-foreground/70 text-sm">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>
                </div>
              </BorderGlow>

              {/* Office Hours */}
              <BorderGlow
                backgroundColor="rgba(255, 255, 255, 0.05)"
                borderRadius={12}
                glowColor="260 70 60"
                glowIntensity={0.6}
                colors={['#8B3A2B', '#B78A22', '#2F6F6B']}
                edgeSensitivity={25}
                glowRadius={30}
                fillOpacity={0.4}
              >
                <div className="rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-accent-indigo flex-shrink-0 mt-1 animate-spin hover:animate-none transition" />
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Office Hours</h3>
                    <div className="text-foreground/70 text-sm space-y-1">
                      <p>Monday - Friday: 9 AM - 5 PM</p>
                      <p>Saturday: 10 AM - 2 PM</p>
                      <p>Sunday: 7 AM - 1 PM</p>
                    </div>
                  </div>
                </div>
                </div>
              </BorderGlow>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fadeIn">
              <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-lg border border-border/50 hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-accent-red mb-6" style={{ fontFamily: 'Fraunces, serif' }}>
                  Send Us a Message
                </h2>

                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red/50 transition-all duration-200 hover:border-accent-red/50"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red/50 transition-all duration-200 hover:border-accent-red/50"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red/50 transition-all duration-200 hover:border-accent-red/50"
                      placeholder="+91-..."
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red/50 transition-all duration-200 hover:border-accent-red/50"
                      placeholder="How can we help?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red/50 resize-none transition-all duration-200 hover:border-accent-red/50"
                      placeholder="Your message here..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-accent-red text-white rounded-lg hover:bg-accent-red/90 active:scale-95 hover:shadow-lg transition-all duration-200 font-semibold transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Map Section (Placeholder) */}
          <a href="https://maps.app.goo.gl/72XGHHvoqR6wZ2mP9" target="_blank" rel="noopener noreferrer" className="block bg-white rounded-lg overflow-hidden shadow-lg border border-border/50 hover:shadow-xl transition">
            <div className="h-96 bg-gradient-to-br from-secondary to-wall flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-accent-red/20 mx-auto mb-4" />
                <p className="text-foreground/60 font-semibold">
                  Bharath Petrol Pump Backside
                </p>
                <p className="text-foreground/60 font-semibold text-sm">
                  Sivanthi Adithanar Nagar, Kalakkad East
                </p>
                <p className="text-foreground/60 font-semibold text-sm">
                  Tamil Nadu 627501
                </p>
                <p className="text-foreground/50 text-sm mt-2">
                  Click to Open in Google Maps →
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>

      <SectionDivider />
      <Footer />
    </>
  )
}
