'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function UpcomingEvents() {
  const [events, setEvents] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const supabase = createClient()
        const { data, error } = await supabase
          .from('events')
          .select('*')
          .order('date', { ascending: true })
          .limit(4)

        if (error) throw error
        setEvents(data || [])
      } catch (error) {
        console.error('Error fetching events:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const formatEventDate = (dateString: string) => {
    const date = new Date(dateString)
    return {
      month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
      day: date.getDate().toString().padStart(2, '0'),
      time: date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    }
  }

  return (
    <section className="py-16 md:py-24 px-6 sm:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-accent-red mb-4" style={{ fontFamily: 'Fraunces, serif' }}>
          Upcoming Events
        </h2>
        <p className="text-lg text-foreground/70">Mark your calendar and join us</p>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <p className="text-foreground/70">Loading events...</p>
        </div>
      ) : events.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg border border-border">
          <p className="text-foreground/70 text-lg">No upcoming events at this time.</p>
          <p className="text-foreground/50 text-sm mt-2">Check back soon for new events!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => {
            const { month, day, time } = formatEventDate(event.date)
            return (
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
                        {month}
                      </p>
                      <p className="text-4xl font-bold" style={{ fontFamily: 'Fraunces, serif' }}>
                        {day}
                      </p>
                    </div>

                    {/* Event details (right) */}
                    <div className="col-span-2 flex flex-col justify-between py-2">
                      <div>
                        <h3 className="font-bold text-lg text-accent-red mb-1" style={{ fontFamily: 'Fraunces, serif' }}>
                          {event.title}
                        </h3>
                        <p className="text-xs text-muted-foreground font-mono mb-2">
                          {time}
                        </p>
                        <p className="text-sm text-foreground/70">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Location bar */}
                  <div className="bg-secondary px-6 py-3 text-sm font-semibold text-foreground border-t border-border">
                    📍 {event.location || 'Church Venue'}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}

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
