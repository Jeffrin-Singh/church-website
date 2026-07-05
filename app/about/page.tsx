import Navbar from '@/components/navbar'
import SectionDivider from '@/components/section-divider'
import Footer from '@/components/footer'

export default function About() {
  return (
    <>
      <Navbar />
      
      <section className="py-16 md:py-24 px-6 sm:px-8 bg-gradient-to-b from-wall to-secondary">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-accent-red mb-8" style={{ fontFamily: 'Fraunces, serif' }}>
            About C.S.I. Christ New Church
          </h1>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg border border-border/50 mb-8">
              <h2 className="text-3xl font-bold text-accent-red mb-6" style={{ fontFamily: 'Fraunces, serif' }}>
                Our Story
              </h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                C.S.I. Christ New Church was founded in 2019 as a community of believers devoted to spreading the Gospel of Jesus Christ. Rooted in the rich traditions of the Church of South India (CSI), we blend historic Christian heritage with contemporary worship, creating a welcoming space for all who seek to know God.
              </p>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Located in the heart of Coimbatore, Tamil Nadu, our congregation represents a diverse community united by faith, hope, and love. We are committed to serving not just our members, but the entire community through outreach, education, and spiritual guidance.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg border border-border/50 mb-8">
              <h2 className="text-3xl font-bold text-accent-red mb-6" style={{ fontFamily: 'Fraunces, serif' }}>
                Our Mission
              </h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                To proclaim the Gospel of Jesus Christ, nurture spiritual growth, and serve our community with compassion, integrity, and faith. We believe in the power of prayer, the importance of fellowship, and the transformative grace of God.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg border border-border/50 mb-8">
              <h2 className="text-3xl font-bold text-accent-red mb-6" style={{ fontFamily: 'Fraunces, serif' }}>
                Our Values
              </h2>
              <ul className="space-y-4 text-foreground/80">
                <li className="flex gap-4">
                  <span className="text-accent-brass font-bold text-2xl">✦</span>
                  <div>
                    <h3 className="font-bold text-foreground">Faith</h3>
                    <p>Believing in the saving grace of Jesus Christ and the transformative power of God's Word.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent-brass font-bold text-2xl">✦</span>
                  <div>
                    <h3 className="font-bold text-foreground">Community</h3>
                    <p>Building strong relationships, supporting one another, and worshiping together in unity.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent-brass font-bold text-2xl">✦</span>
                  <div>
                    <h3 className="font-bold text-foreground">Service</h3>
                    <p>Serving our community with compassion, reaching the marginalized, and being Christ's hands and feet.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="text-accent-brass font-bold text-2xl">✦</span>
                  <div>
                    <h3 className="font-bold text-foreground">Growth</h3>
                    <p>Encouraging spiritual maturity, lifelong learning, and deepening our relationship with God.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-accent-red/5 to-accent-teal/5 rounded-lg p-8 md:p-12 border border-border">
              <h2 className="text-3xl font-bold text-accent-red mb-6" style={{ fontFamily: 'Fraunces, serif' }}>
                Leadership
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Rev. Samuel Jacoby</h3>
                  <p className="text-accent-red font-semibold mb-3">Senior Pastor</p>
                  <p className="text-foreground/70 text-sm">
                    With over 20 years of pastoral experience, Rev. Jacoby leads our church with vision, compassion, and a deep commitment to the Gospel. He holds a Master&apos;s degree in Theology and is actively involved in community outreach initiatives.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Church Council</h3>
                  <p className="text-accent-red font-semibold mb-3">Leadership Team</p>
                  <p className="text-foreground/70 text-sm">
                    Our church is governed by a dedicated council of elders and deacons who work together to support the pastor, oversee ministries, and ensure spiritual growth within our congregation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />
      <Footer />
    </>
  )
}
