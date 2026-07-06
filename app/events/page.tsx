import Navbar from '@/components/navbar'
import SectionDivider from '@/components/section-divider'
import Footer from '@/components/footer'
import { Calendar, MapPin, Users } from 'lucide-react'

export default function Events() {
  const allEvents = [
    {
      id: 1,
      date: 'Dec 24',
      month: 'Dec',
      day: '24',
      title: 'Christmas Eve Candlelight Service',
      time: '6:00 PM',
      location: 'Main Sanctuary',
      description: 'Join us for a special candlelight service celebrating the birth of Christ.',
      category: 'Celebration'
    },
    {
      id: 2,
      date: 'Dec 31',
      month: 'Dec',
      day: '31',
      title: 'New Year\'s Eve Prayer Vigil',
      time: '9:00 PM',
      location: 'Prayer Room',
      description: 'End the year in prayer and reflection as we welcome the new year.',
      category: 'Prayer'
    },
    {
      id: 3,
      date: 'Jan 5',
      month: 'Jan',
      day: '05',
      title: 'Epiphany Celebration Service',
      time: '10:30 AM',
      location: 'Main Sanctuary',
      description: 'Celebrate the manifestation of Christ with special music and testimonies.',
      category: 'Worship'
    },
    {
      id: 4,
      date: 'Jan 12',
      month: 'Jan',
      day: '12',
      title: 'Community Outreach & Food Distribution',
      time: '9:00 AM',
      location: 'Fellowship Hall',
      description: 'Join us in serving the local community. Volunteers welcome!',
      category: 'Service'
    },
    {
      id: 5,
      date: 'Jan 19',
      month: 'Jan',
      day: '19',
      title: 'Youth Fellowship & Games Night',
      time: '6:00 PM',
      location: 'Youth Center',
      description: 'Fun evening of games, fellowship, and snacks for young adults.',
      category: 'Fellowship'
    },
    {
      id: 6,
      date: 'Jan 26',
      month: 'Jan',
      day: '26',
      title: 'Women\'s Bible Study & Craft Workshop',
      time: '10:00 AM',
      location: 'Fellowship Hall',
      description: 'Interactive Bible study with craft activities and refreshments.',
      category: 'Study'
    },
    {
      id: 7,
      date: 'Feb 2',
      month: 'Feb',
      day: '02',
      title: 'Candlemas Service & Child Dedication',
      time: '10:30 AM',
      location: 'Main Sanctuary',
      description: 'A special service of blessing for young children and their families.',
      category: 'Worship'
    },
    {
      id: 8,
      date: 'Feb 9',
      month: 'Feb',
      day: '09',
      title: 'Men\'s Breakfast & Discussion Group',
      time: '8:00 AM',
      location: 'Fellowship Hall',
      description: 'Breakfast and discussion on leadership and faith topics.',
      category: 'Fellowship'
    }
  ]

  return (
    <>
      <Navbar />

      <section className="py-16 md:py-24 px-6 sm:px-8 bg-gradient-to-b from-wall to-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-accent-red mb-4" style={{ fontFamily: 'Fraunces, serif' }}>
              Church Events
            </h1>
            <p className="text-lg text-foreground/70">
              Join us for worship, fellowship, learning, and service. Find an event that speaks to your heart.
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-foreground/70">Loading events...</p>
            </div>
          ) : events.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg border border-border">
              <Calendar className="w-12 h-12 text-accent-red/50 mx-auto mb-4" />
              <p className="text-foreground/70 text-lg">No upcoming events at this time.</p>
              <p className="text-foreground/50 text-sm mt-2">Check back soon for new events!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event) => {
                const { month, day, time } = formatEventDate(event.date)
                return (
                  <div key={event.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition overflow-hidden border-l-4 border-accent-red">
                    <div className="p-6">
                      {/* Date and Location */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="bg-accent-red text-white rounded-lg p-3 text-center">
                            <p className="text-xs font-semibold uppercase">{month}</p>
                            <p className="text-2xl font-bold" style={{ fontFamily: 'Fraunces, serif' }}>
                              {day}
                            </p>
                          </div>
                          <div>
                            <p className="font-mono font-semibold text-accent-brass">{time}</p>
                            <p className="text-xs text-muted-foreground">Church Event</p>
                          </div>
                        </div>
                      </div>

                      {/* Event Details */}
                      <h3 className="text-xl font-bold text-accent-red mb-2" style={{ fontFamily: 'Fraunces, serif' }}>
                        {event.title}
                      </h3>
                      <p className="text-foreground/70 text-sm mb-4">
                        {event.description}
                      </p>

                      {/* Location */}
                      {event.location && (
                        <div className="flex items-center gap-2 text-sm text-foreground/70 mb-4">
                          <MapPin className="w-4 h-4 text-accent-brass" />
                          <span>{event.location}</span>
                        </div>
                      )}

                      {/* Action */}
                      <button className="w-full px-4 py-2 bg-accent-red text-white rounded-lg hover:bg-accent-red/90 transition font-semibold text-sm">
                        Learn More
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* Information Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 border border-border/50 text-center">
              <Calendar className="w-12 h-12 text-accent-red mx-auto mb-4" />
              <h3 className="font-bold text-lg text-foreground mb-2">Weekly Schedule</h3>
              <p className="text-foreground/70 text-sm">
                Regular services every Sunday at 8:30 AM and 10:30 AM, plus weekday prayer and study groups.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-border/50 text-center">
              <Users className="w-12 h-12 text-accent-brass mx-auto mb-4" />
              <h3 className="font-bold text-lg text-foreground mb-2">Ministries</h3>
              <p className="text-foreground/70 text-sm">
                Youth, women, men, and children ministries available year-round with special seasonal activities.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-border/50 text-center">
              <MapPin className="w-12 h-12 text-accent-teal mx-auto mb-4" />
              <h3 className="font-bold text-lg text-foreground mb-2">Location</h3>
              <p className="text-foreground/70 text-sm">
                234 Temple Street, Coimbatore, Tamil Nadu 641001. Easy parking and accessible facilities.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-gradient-to-r from-accent-red/5 to-accent-teal/5 rounded-lg p-8 text-center border border-border">
            <h2 className="text-2xl font-bold text-accent-red mb-4" style={{ fontFamily: 'Fraunces, serif' }}>
              Questions About Our Events?
            </h2>
            <p className="text-foreground/80 mb-6">
              Contact us at <a href="mailto:hello@csinewchurch.church" className="text-accent-red font-semibold hover:underline">hello@csinewchurch.church</a> or call <a href="tel:+914222234567" className="text-accent-red font-semibold hover:underline">+91-422-2234567</a>
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />
      <Footer />
    </>
  )
}
