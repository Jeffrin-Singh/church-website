import Navbar from '@/components/navbar'
import SectionDivider from '@/components/section-divider'
import Footer from '@/components/footer'
import { Play } from 'lucide-react'

export default function Sermons() {
  const sermons = [
    {
      id: 1,
      title: 'Grace Sufficient for Today',
      date: 'December 17, 2024',
      speaker: 'Rev. Samuel Jacoby',
      passage: '2 Corinthians 12:9',
      description: 'Discover how God\'s grace is new every morning and sufficient for all our needs.',
      youtubeId: 'dQw4w9WgXcQ',
      duration: '35 min'
    },
    {
      id: 2,
      title: 'The Gift of Forgiveness',
      date: 'December 10, 2024',
      speaker: 'Rev. Samuel Jacoby',
      passage: 'Matthew 18:21-35',
      description: 'Understanding the transformative power of forgiveness in our lives and relationships.',
      youtubeId: 'dQw4w9WgXcQ',
      duration: '42 min'
    },
    {
      id: 3,
      title: 'Hope in Dark Times',
      date: 'December 3, 2024',
      speaker: 'Rev. Samuel Jacoby',
      passage: 'Romans 8:28-39',
      description: 'When life feels overwhelming, God remains our anchor and source of eternal hope.',
      youtubeId: 'dQw4w9WgXcQ',
      duration: '38 min'
    },
    {
      id: 4,
      title: 'The Love of Christ',
      date: 'November 26, 2024',
      speaker: 'Rev. Samuel Jacoby',
      passage: 'Ephesians 3:14-21',
      description: 'Exploring the depth and width of Christ\'s love that surpasses all understanding.',
      youtubeId: 'dQw4w9WgXcQ',
      duration: '40 min'
    },
    {
      id: 5,
      title: 'Living as God\'s Witness',
      date: 'November 19, 2024',
      speaker: 'Rev. Samuel Jacoby',
      passage: 'Matthew 5:14-16',
      description: 'How to be a light in the world through our words, actions, and faith.',
      youtubeId: 'dQw4w9WgXcQ',
      duration: '36 min'
    },
    {
      id: 6,
      title: 'The Peace That Surpasses Understanding',
      date: 'November 12, 2024',
      speaker: 'Rev. Samuel Jacoby',
      passage: 'Philippians 4:4-7',
      description: 'Finding peace in Christ regardless of our circumstances.',
      youtubeId: 'dQw4w9WgXcQ',
      duration: '39 min'
    }
  ]

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {sermons.map((sermon) => (
              <div key={sermon.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition border border-border/50">
                {/* Video thumbnail */}
                <div className="relative bg-black aspect-video flex items-center justify-center group">
                  <img
                    src={`https://img.youtube.com/vi/${sermon.youtubeId}/hqdefault.jpg`}
                    alt={sermon.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex items-center justify-center">
                    <button className="p-4 bg-accent-red rounded-full hover:bg-accent-red/90 transition transform group-hover:scale-110">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </button>
                  </div>
                  <div className="absolute top-3 right-3 px-3 py-1 bg-accent-red text-white text-xs font-semibold rounded-full">
                    {sermon.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs font-mono text-muted-foreground mb-2">
                    {sermon.date} • {sermon.speaker}
                  </p>
                  <h3 className="text-xl font-bold text-accent-red mb-3" style={{ fontFamily: 'Fraunces, serif' }}>
                    {sermon.title}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4">
                    {sermon.description}
                  </p>
                  <p className="text-sm font-semibold text-accent-brass mb-4">
                    {sermon.passage}
                  </p>
                  <a
                    href={`https://www.youtube.com/watch?v=${sermon.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-accent-red text-white rounded-lg hover:bg-accent-red/90 transition font-semibold text-sm"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </div>
            ))}
          </div>

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
