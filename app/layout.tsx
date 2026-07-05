import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'C.S.I. Christ New Church - Serving the Community of Faith',
  description: 'Welcome to C.S.I. Christ New Church - A historic Church of South India serving the community in Tamil Nadu since 2019. Join us for worship, prayer, and fellowship.',
  generator: 'v0.app',
  icons: {
    icon: '/csi-logo.png',
    apple: '/csi-logo.png',
  },
  openGraph: {
    title: 'C.S.I. Christ New Church',
    description: 'A historic Church of South India serving the community in Tamil Nadu',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#8B3A2B',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
