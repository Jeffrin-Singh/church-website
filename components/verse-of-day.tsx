'use client'

import { useEffect, useState } from 'react'

export default function VerseOfDay() {
  const [dayIndex, setDayIndex] = useState(0)

  // Sunday-indexed Tamil verses (Psalms and Gospels)
  const verses = [
    {
      tamil: 'கர்த்தர் என்னுடைய ஆளுமான் ஆயிருக்கிறார்;',
      english: '"The Lord is my Shepherd;"',
      reference: 'Psalm 23:1',
      day: 'Sunday'
    },
    {
      tamil: '"கிறிஸ்து எல்லாக்குரல் ஆயிருக்கிறார்"',
      english: '"Christ is all, and in all."',
      reference: 'Colossians 3:11',
      day: 'Monday'
    },
    {
      tamil: 'என் ஆத்மாவே, கர்த்தரைப் போற்றுவாய்;',
      english: 'My soul, praise the Lord;',
      reference: 'Psalm 103:1',
      day: 'Tuesday'
    },
    {
      tamil: '"நீ ஆசீர்வதிக்கப்பட்டவன் ஆயிருக்கிறாய்"',
      english: '"You are blessed,"',
      reference: 'Luke 1:42',
      day: 'Wednesday'
    },
    {
      tamil: 'கர்த்தரிடத்தில் உகந்தம் உள்ளவை நினைக்கிறேன்;',
      english: 'I think on the things of the Lord;',
      reference: 'Psalm 77:6',
      day: 'Thursday'
    },
    {
      tamil: '"நம்பிக்கையுள்ளவர்கள் பலவந்த நன்மை பெறுவார்"',
      english: '"Blessed are the faithful,"',
      reference: 'Matthew 5:8',
      day: 'Friday'
    },
    {
      tamil: '"சாந்தியை நিงৃ் ಠಿಕಾಕೆ"',
      english: '"Peace I leave with you,"',
      reference: 'John 14:27',
      day: 'Saturday'
    }
  ]

  useEffect(() => {
    const today = new Date().getDay()
    setDayIndex(today === 0 ? 0 : today - 1)
  }, [])

  const current = verses[dayIndex]

  // Calculate the date for the selected day
  const getDateForDay = () => {
    const today = new Date()
    const currentDayOfWeek = today.getDay()
    
    // Calculate the difference between the selected day and today
    let diff = dayIndex - (currentDayOfWeek === 0 ? 0 : currentDayOfWeek - 1)
    
    // If the difference is negative and not 0, go to previous week
    if (diff < 0) {
      diff += 7
    }
    
    // If we're selecting today but it's not the current day, handle it
    if (diff === 0 && dayIndex === currentDayOfWeek) {
      return today
    }
    
    const selectedDate = new Date(today)
    selectedDate.setDate(selectedDate.getDate() + diff)
    
    return selectedDate
  }

  const selectedDate = getDateForDay()

  return (
    <section className="py-16 md:py-24 px-6 sm:px-8 bg-gradient-to-b from-wall to-secondary">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg border border-border/50">
          <p className="text-sm font-semibold text-accent-red uppercase tracking-widest mb-4">
            Verse of the Day
          </p>
          
          <p className="text-center text-muted-foreground text-sm mb-6 font-mono">
            {current.day}, {selectedDate.toLocaleDateString('en-GB')}
          </p>

          <p className="text-center text-2xl md:text-3xl font-bold text-accent-red mb-6 leading-relaxed" style={{ fontFamily: 'Fraunces, serif' }}>
            {current.english}
          </p>

          <p className="text-center text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed tamil-text">
            {current.tamil}
          </p>

          <div className="text-center pt-6 border-t border-border/30">
            <p className="font-semibold text-accent-brass font-mono">{current.reference}</p>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {verses.map((_, i) => (
              <button
                key={i}
                onClick={() => setDayIndex(i)}
                className={`w-2 h-2 rounded-full transition ${
                  i === dayIndex ? 'bg-accent-red w-6' : 'bg-muted hover:bg-muted-foreground'
                }`}
                aria-label={`Verse for ${verses[i].day}`}
              />
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-foreground/60 mt-8">
          Meditate on God&apos;s word. New verses posted daily at midnight (IST).
        </p>
      </div>
    </section>
  )
}
