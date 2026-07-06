'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/navbar'
import SectionDivider from '@/components/section-divider'
import Footer from '@/components/footer'
import { Play } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

export default function Sermons() {
  const [sermons, setSermons] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSermons = async () => {
      try {
        const supabase = createClient()
        const { data, error } = await supabase
          .from('sermons')
          .select('*')
          .order('date', { ascending: false })

        if (error) throw error
        setSermons(data || [])
      } catch (error) {
        console.error('Error fetching sermons:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchSermons()
  }, [])

  return (
    <>
      <Navbar />

      <section className="py-16 md:py-24 px-6 sm:px-8 bg-gradient-to-b from-wall to-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-accent-red mb-4" style={{ fontFamily: 'Fraunces, serif' }}>
              Sermons & Teachings
            </h1>
            <p className="text-lg text-foreground/70">
              Listen to inspiring messages grounded in Scripture. Watch our latest sermons on YouTube or subscribe to our podcast.
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-foreground/70">Loading sermons...</p>
            </div>
          ) : sermons.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg border border-border">
              <p className="text-foreground/70 text-lg">No sermons available yet.</p>
              <p className="text-foreground/50 text-sm mt-2">Check back soon for new sermons!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {sermons.map((sermon) => (
                <div key={sermon.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition border border-border/50">
                  {/* Video thumbnail or placeholder */}
                  {sermon.youtubeVideoId ? (
                    <div className="relative bg-black aspect-video flex items-center justify-center group">
                      <img
                        src={`https://img.youtube.com/vi/${sermon.youtubeVideoId}/hqdefault.jpg`}
                        alt={sermon.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
                        <button className="p-4 bg-accent-red rounded-full hover:bg-accent-red/90 transition transform group-hover:scale-110">
                          <Play className="w-6 h-6 text-white fill-white" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="relative bg-gradient-to-br from-gray-700 to-gray-900 aspect-video flex items-center justify-center">
                      <div className="text-center text-white">
                        <p className="text-lg font-semibold">No live right now</p>
                        <p className="text-sm text-gray-300 mt-2">Video link coming soon</p>
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-xs font-mono text-muted-foreground mb-2">
                      {new Date(sermon.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })} {sermon.speaker && `• ${sermon.speaker}`}
                    </p>
                    <h3 className="text-xl font-bold text-accent-red mb-3" style={{ fontFamily: 'Fraunces, serif' }}>
                      {sermon.title}
                    </h3>
                    <p className="text-foreground/70 text-sm mb-4">
                      {sermon.description}
                    </p>
                    {sermon.youtubeVideoId ? (
                      <a
                        href={`https://www.youtube.com/watch?v=${sermon.youtubeVideoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-accent-red text-white rounded-lg hover:bg-accent-red/90 transition font-semibold text-sm"
                      >
                        Watch on YouTube
                      </a>
                    ) : (
                      <button disabled className="inline-block px-4 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed font-semibold text-sm">
                        Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-accent-red/10 to-accent-teal/10 rounded-lg p-8 md:p-12 border border-border text-center">
            <h2 className="text-3xl font-bold text-accent-red mb-4" style={{ fontFamily: 'Fraunces, serif' }}>
              Subscribe to Our Podcast
            </h2>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              Get new sermons delivered directly to your device. Available on all major podcast platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.youtube.com/@csinewchurch"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-accent-red text-white rounded-lg hover:bg-accent-red/90 transition font-semibold"
              >
                Subscribe on YouTube
              </a>
              <a
                href="#"
                className="px-6 py-3 border-2 border-accent-red text-accent-red hover:bg-accent-red/5 rounded-lg transition font-semibold"
              >
                Apple Podcasts
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />
      <Footer />
    </>
  )
}
