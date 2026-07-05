'use client'

import Link from 'next/link'
import { useParallax } from '@/hooks/useParallax'
import LightRays from './LightRays'

export default function Hero() {
  const { offset } = useParallax(0.35)

  return (
    <section className="relative min-h-screen md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Light Rays Background Effect */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.2}
          lightSpread={0.8}
          rayLength={1.8}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0.08}
          distortion={0.03}
          fadeDistance={1.5}
          saturation={0.9}
        />
      </div>
      {/* Animated stained glass background with multiple parallax layers */}
      <div className="absolute inset-0 z-10" style={{ transform: `translateY(${offset * 0.6}px)` }}>
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          {/* Outer arch frame */}
          <path d="M 150 200 Q 150 100 300 100 L 900 100 Q 1050 100 1050 200" stroke="#ffffff" strokeWidth="8" fill="none" opacity="0.15" />
          <path d="M 150 200 Q 150 100 300 100 L 900 100 Q 1050 100 1050 200" stroke="#B78A22" strokeWidth="4" fill="none" opacity="0.4" />
          
          {/* Central cross */}
          <line x1="600" y1="150" x2="600" y2="650" stroke="#ffffff" strokeWidth="6" opacity="0.2" />
          <line x1="350" y1="400" x2="850" y2="400" stroke="#ffffff" strokeWidth="6" opacity="0.2" />
          
          {/* Lead lines forming geometric patterns */}
          <path d="M 300 150 Q 350 250 400 350 T 500 550" stroke="#2F6F6B" strokeWidth="3" fill="none" opacity="0.3" />
          <path d="M 900 150 Q 850 250 800 350 T 700 550" stroke="#2F6F6B" strokeWidth="3" fill="none" opacity="0.3" />
          
          {/* Decorative glass panes */}
          <circle cx="300" cy="300" r="40" fill="#ffffff" opacity="0.08" />
          <circle cx="900" cy="300" r="40" fill="#2F6F6B" opacity="0.1" />
          <circle cx="600" cy="250" r="50" fill="#B78A22" opacity="0.1" />
          <circle cx="600" cy="500" r="45" fill="#ffffff" opacity="0.05" />
          
          {/* Geometric mosaic pattern */}
          <polygon points="450,200 550,200 600,280 500,280" fill="#ffffff" opacity="0.08" />
          <polygon points="650,200 750,200 700,280 600,280" fill="#2F6F6B" opacity="0.1" />
          <polygon points="500,400 700,400 750,500 450,500" fill="#B78A22" opacity="0.08" />
        </svg>
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
