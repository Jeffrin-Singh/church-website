export default function UpcomingEvents() {
  const events = [
    {
      id: 1,
      date: 'Dec 24',
      month: 'Dec',
      day: '24',
      title: 'Christmas Eve Candlelight Service',
      time: '6:00 PM',
      location: 'Main Sanctuary',
      description: 'Join us for a special candlelight service celebrating the birth of Christ.',
      color: 'accent-red'
    },
    {
      id: 2,
      date: 'Dec 31',
      month: 'Dec',
      day: '31',
      title: 'New Year&apos;s Eve Prayer Vigil',
      time: '9:00 PM',
      location: 'Prayer Room',
      description: 'End the year in prayer and reflection as we welcome the new year.',
      color: 'accent-brass'
    },
    {
      id: 3,
      date: 'Jan 5',
      month: 'Jan',
      day: '5',
      title: 'Epiphany Celebration Service',
      time: '10:30 AM',
      location: 'Main Sanctuary',
      description: 'Celebrate the manifestation of Christ with special music and testimonies.',
      color: 'accent-teal'
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
      color: 'accent-indigo'
    }
  ]

  return (
    <section className="py-16 md:py-24 px-6 sm:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-accent-red mb-4" style={{ fontFamily: 'Fraunces, serif' }}>
          Upcoming Events
        </h2>
        <p className="text-lg text-foreground/70">Mark your calendar and join us</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <div key={event.id} className="relative">
            {/* Ticket Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-l-4 border-accent-red hover:shadow-xl transition">
              {/* Dashed divider line with perforation holes */}
              <div className="absolute top-1/3 left-0 right-0 h-px border-t-2 border-dashed border-muted pointer-events-none" />
              <div className="absolute top-1/3 left-0 right-0 flex justify-between px-6">
                <div className="w-2 h-2 bg-wall rounded-full" />
                <div className="w-2 h-2 bg-wall rounded-full" />
                <div className="w-2 h-2 bg-wall rounded-full" />
              </div>

              <div className="grid grid-cols-3 gap-4 p-6">
                {/* Date badge (left) */}
                <div className="flex flex-col items-center justify-center bg-accent-red text-white rounded-lg p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider">
                    {event.month}
                  </p>
                  <p className="text-4xl font-bold" style={{ fontFamily: 'Fraunces, serif' }}>
                    {event.day}
                  </p>
                </div>

                {/* Event details (right) */}
                <div className="col-span-2 flex flex-col justify-between py-2">
                  <div>
                    <h3 className="font-bold text-lg text-accent-red mb-1" style={{ fontFamily: 'Fraunces, serif' }}>
                      {event.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-mono mb-2">
                      {event.time}
                    </p>
                    <p className="text-sm text-foreground/70">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Location bar */}
              <div className="bg-secondary px-6 py-3 text-sm font-semibold text-foreground border-t border-border">
                📍 {event.location}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="/events"
          className="inline-block px-8 py-3 bg-accent-red text-white rounded-lg hover:bg-accent-red/90 transition font-semibold"
        >
          View All Events
        </a>
      </div>
    </section>
  )
}
