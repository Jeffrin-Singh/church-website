'use client'

import { useParallax } from '@/hooks/useParallax'

export default function SectionDivider() {
  const { offset } = useParallax(0.18)

  return (
    <div className="relative h-32 md:h-40 flex items-center justify-center bg-gradient-to-b from-wall via-secondary to-wall overflow-hidden">
      <svg
        className="absolute w-full h-full"
        style={{ transform: `translateY(${offset * 0.6}px)` }}
        viewBox="0 0 1200 160"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Decorative arches and geometric patterns */}
        <path d="M 100 120 Q 200 40 300 120" stroke="#8B3A2B" strokeWidth="3" fill="none" opacity="0.3" />
        <path d="M 300 120 Q 400 40 500 120" stroke="#B78A22" strokeWidth="3" fill="none" opacity="0.3" />
        <path d="M 500 120 Q 600 40 700 120" stroke="#2F6F6B" strokeWidth="3" fill="none" opacity="0.3" />
        <path d="M 700 120 Q 800 40 900 120" stroke="#8B3A2B" strokeWidth="3" fill="none" opacity="0.3" />
        <path d="M 900 120 Q 1000 40 1100 120" stroke="#B78A22" strokeWidth="3" fill="none" opacity="0.3" />

        {/* Center cross accent */}
        <line x1="600" y1="40" x2="600" y2="140" stroke="#8B3A2B" strokeWidth="2" opacity="0.2" />
        
        {/* Decorative diamonds */}
        <circle cx="200" cy="80" r="6" fill="#B78A22" opacity="0.4" />
        <circle cx="400" cy="80" r="6" fill="#2F6F6B" opacity="0.4" />
        <circle cx="600" cy="70" r="8" fill="#8B3A2B" opacity="0.4" />
        <circle cx="800" cy="80" r="6" fill="#2F6F6B" opacity="0.4" />
        <circle cx="1000" cy="80" r="6" fill="#B78A22" opacity="0.4" />
      </svg>

      {/* Center accent line */}
      <div className="absolute w-1 h-12 bg-gradient-to-b from-accent-red via-accent-brass to-accent-teal opacity-50" />
    </div>
  )
}
