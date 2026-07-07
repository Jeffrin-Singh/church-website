'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-white">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative z-20 text-center px-6 sm:px-8 max-w-2xl mx-auto"
      >
        <div className="mb-4 animate-shimmer">
          <div className="inline-block px-4 py-2 bg-accent-red/10 rounded-full border border-accent-red/30">
            <p className="text-accent-red font-semibold text-sm">Welcome to Our Church</p>
          </div>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6" style={{ fontFamily: 'Fraunces, serif' }}>
          C.S.I. Christ New Church
        </h2>

        <p className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed">
          A community of faith rooted in prayer, worship, and service. Join us to experience the love and grace of Christ in a warm, welcoming atmosphere.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/sermons"
            className="px-8 py-3 bg-accent-red text-white rounded-lg hover:bg-accent-red/90 transition font-semibold"
          >
            Listen to Sermons
          </Link>
          <a
            href="https://www.youtube.com/@csinewchurch"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-accent-red text-accent-red hover:bg-accent-red/10 rounded-lg transition font-semibold"
          >
            Watch Live
          </a>
        </div>

        {/* Service times preview */}
        <div className="bg-secondary rounded-lg p-6 border border-border">
          <h3 className="font-semibold text-foreground mb-4" style={{ fontFamily: 'Fraunces, serif' }}>Sunday Service Times</h3>
          <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
            <div>
              <p className="font-mono font-semibold text-accent-brass">9:00 AM - 11:00 AM</p>
              <p className="text-foreground/70">Sunday Worship</p>
            </div>
            <div>
              <p className="font-mono font-semibold text-accent-brass">3rd Sunday</p>
              <p className="text-foreground/70">7:00 AM - 9:00 AM</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Decorative bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-red via-accent-brass to-accent-teal opacity-80" />
    </section>
  )
}
