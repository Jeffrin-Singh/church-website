'use client'

import Link from 'next/link'
import { useParallax } from '@/hooks/useParallax'
import LightRays from './LightRays'

export default function Hero() {
  const { offset } = useParallax(0.35)

  return (
    <section className="relative min-h-screen md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-gray-900 to-black">
      {/* Golden Light Rays Background Effect */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#d4af37"
          raysSpeed={1.5}
          lightSpread={1.0}
          rayLength={2.0}
          followMouse={true}
          mouseInfluence={0.2}
          noiseAmount={0.12}
          distortion={0.05}
          fadeDistance={1.8}
          saturation={1.0}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 sm:px-8 max-w-2xl mx-auto" style={{ transform: `translateY(${offset * 0.3}px)` }}>
        <div className="mb-4 animate-shimmer">
          <div className="inline-block px-4 py-2 bg-white/10 rounded-full border border-white/30">
            <p className="text-white font-semibold text-sm">Welcome to Our Church</p>
          </div>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Fraunces, serif' }}>
          C.S.I. Christ New Church
        </h2>

        <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
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
            className="px-8 py-3 border-2 border-white text-white hover:bg-white/10 rounded-lg transition font-semibold"
          >
            Watch Live
          </a>
        </div>

        {/* Service times preview */}
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/20">
          <h3 className="font-semibold text-white mb-4" style={{ fontFamily: 'Fraunces, serif' }}>Sunday Service Times</h3>
          <div className="grid grid-cols-2 gap-4 text-sm md:text-base">
            <div>
              <p className="font-mono font-semibold text-accent-brass">9:00 AM - 11:00 AM</p>
              <p className="text-white/70">Sunday Worship</p>
            </div>
            <div>
              <p className="font-mono font-semibold text-accent-brass">3rd Sunday</p>
              <p className="text-white/70">7:00 AM - 9:00 AM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-red via-white to-accent-teal opacity-60" />
    </section>
  )
}
