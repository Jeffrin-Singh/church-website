'use client'

import { useEffect, useState } from 'react'

export const useParallax = (speed: number = 0.3) => {
  const [offset, setOffset] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleScroll = () => {
      if (!mediaQuery.matches) {
        setOffset(window.scrollY * speed)
      }
    }

    window.addEventListener('scroll', handleScroll)
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', listener)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      mediaQuery.removeEventListener('change', listener)
    }
  }, [speed])

  return { offset, prefersReducedMotion }
}
