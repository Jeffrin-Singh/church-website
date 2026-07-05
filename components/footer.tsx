import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-accent-indigo text-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-16 md:py-20">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Fraunces, serif' }}>
              C.S.I. Christ New Church
            </h3>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Serving the community with faith, hope, and love since 2019. A warm and welcoming congregation of believers.
            </p>
            <div className="flex gap-4 text-sm font-bold">
              <a href="https://www.youtube.com/@csinewchurch" target="_blank" rel="noopener noreferrer" className="hover:text-accent-brass transition">
                YT
              </a>
              <a href="https://instagram.com/csinewchurch" target="_blank" rel="noopener noreferrer" className="hover:text-accent-brass transition">
                IG
              </a>
              <a href="https://facebook.com/csinewchurch" target="_blank" rel="noopener noreferrer" className="hover:text-accent-brass transition">
                FB
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/" className="hover:text-accent-brass transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-accent-brass transition">About Us</Link></li>
              <li><Link href="/sermons" className="hover:text-accent-brass transition">Sermons</Link></li>
              <li><Link href="/events" className="hover:text-accent-brass transition">Events</Link></li>
              <li><Link href="/blog" className="hover:text-accent-brass transition">Blog</Link></li>
            </ul>
          </div>

          {/* Ministry Links */}
          <div>
            <h4 className="font-bold mb-4">Ministry</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/give" className="hover:text-accent-brass transition">Give Online</Link></li>
              <li><Link href="/contact" className="hover:text-accent-brass transition">Contact Us</Link></li>
              <li><a href="https://www.youtube.com/@csinewchurch" target="_blank" rel="noopener noreferrer" className="hover:text-accent-brass transition">Watch Live</a></li>
              <li><Link href="/sermons" className="hover:text-accent-brass transition">Subscribe to Podcasts</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent-brass" />
                <div>
                  <p>Bharath Petrol Pump Backside</p>
                  <p>Sivanthi Adithanar Nagar, Kalakkad East</p>
                  <p>Kalakkad, Tamil Nadu 627501, India</p>
                  <a href="https://maps.app.goo.gl/72XGHHvoqR6wZ2mP9" target="_blank" rel="noopener noreferrer" className="text-accent-brass hover:underline text-xs mt-1 inline-block">View on Maps →</a>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="w-4 h-4 flex-shrink-0 text-accent-brass" />
                <a href="tel:+914222234567" className="hover:text-accent-brass transition">+91-422-2234567</a>
              </div>
              <div className="flex gap-3">
                <Mail className="w-4 h-4 flex-shrink-0 text-accent-brass" />
                <a href="mailto:hello@csinewchurch.church" className="hover:text-accent-brass transition">hello@csinewchurch.church</a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8" />

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
          <p>&copy; {currentYear} C.S.I. Christ New Church. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-accent-brass transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent-brass transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
