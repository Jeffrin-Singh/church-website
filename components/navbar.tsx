'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/csi-logo.png" alt="C.S.I. Christ New Church Logo" className="h-12 md:h-14 w-auto" />
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-accent-red" style={{ fontFamily: 'Fraunces, serif' }}>C.S.I. Christ New</h1>
              <p className="text-xs text-muted-foreground">Church of South India</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-accent-red transition font-medium">Home</Link>
            <Link href="/about" className="text-foreground hover:text-accent-red transition font-medium">About</Link>
            <Link href="/sermons" className="text-foreground hover:text-accent-red transition font-medium">Sermons</Link>
            <Link href="/events" className="text-foreground hover:text-accent-red transition font-medium">Events</Link>
            <Link href="/blog" className="text-foreground hover:text-accent-red transition font-medium">Blog</Link>
            <Link href="/give" className="text-foreground hover:text-accent-red transition font-medium">Give</Link>
            <Link href="/contact" className="text-foreground hover:text-accent-red transition font-medium">Contact</Link>
          </div>

          {/* Watch Live Button */}
          <a
            href="https://www.youtube.com/@csinewchurch"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block px-4 py-2 bg-accent-red text-white rounded-lg hover:bg-accent-red/90 transition font-medium text-sm"
          >
            Watch Live
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:bg-secondary rounded-lg"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <div className="px-4 py-4 space-y-2">
              <Link href="/" className="block py-2 text-foreground hover:text-accent-red font-medium">Home</Link>
              <Link href="/about" className="block py-2 text-foreground hover:text-accent-red font-medium">About</Link>
              <Link href="/sermons" className="block py-2 text-foreground hover:text-accent-red font-medium">Sermons</Link>
              <Link href="/events" className="block py-2 text-foreground hover:text-accent-red font-medium">Events</Link>
              <Link href="/blog" className="block py-2 text-foreground hover:text-accent-red font-medium">Blog</Link>
              <Link href="/give" className="block py-2 text-foreground hover:text-accent-red font-medium">Give</Link>
              <Link href="/contact" className="block py-2 text-foreground hover:text-accent-red font-medium">Contact</Link>
              <a
                href="https://www.youtube.com/@csinewchurch"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 px-4 py-2 bg-accent-red text-white rounded-lg hover:bg-accent-red/90 transition font-medium text-center"
              >
                Watch Live
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
