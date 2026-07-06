'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/navbar'
import SectionDivider from '@/components/section-divider'
import Footer from '@/components/footer'
import { Calendar, MapPin } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

export default function Events() {
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
      month: date.toLocaleDateString('en-US', { month: 'short' }),
      day: date.getDate().toString().padStart(2, '0'),
      time: date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4" style={{ fontFamily: 'Fraunces, serif' }}>
              Upcoming Events
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Join us for worship, fellowship, and community service opportunities. All are welcome!
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Events Grid */}
      <section className="py-16 px-4 flex-1">
        <div className="max-w-6xl mx-auto">
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
        </div>
      </section>

      <SectionDivider />

      <Footer />
    </div>
  )
}
