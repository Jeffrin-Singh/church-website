'use client'

import { useEffect, useState } from 'react'

export default function VerseOfDay() {
  const [dayIndex, setDayIndex] = useState(0)

  // Sunday-indexed Tamil verses (BSI Bible version)
  const verses = [
    {
      tamil: 'கர்த்தர் என்னுடைய ஆளுமான் ஆயிருக்கிறார்; எனக்குப் பாக்குவோ.',
      english: '"The Lord is my Shepherd; I shall not want."',
      reference: 'Psalm 23:1 (BSI)',
      day: 'Sunday'
    },
    {
      tamil: 'உங்களுக்குச் சாந்தி விட்டுப் போய்விடுகிறேன்; என்னுடைய சாந்தியை உங்களுக்குக் கொடுத்துவிடுகிறேன்.',
      english: '"Peace I leave with you; my peace I give to you."',
      reference: 'John 14:27 (BSI)',
      day: 'Monday'
    },
    {
      tamil: 'நீ என்று தேவனை வேண்டினாயோ, அவர் உன்னுக்குக் காது கொடுப்பார்.',
      english: '"Call to me and I will answer you."',
      reference: 'Jeremiah 33:3 (BSI)',
      day: 'Tuesday'
    },
    {
      tamil: 'கிறிஸ்து என் சக்தியும், ஆனந்தமும், என்றும் பிரதிபலனும் ஆயிருக்கிறார்.',
      english: '"I can do all things through Christ who strengthens me."',
      reference: 'Philippians 4:13 (BSI)',
      day: 'Wednesday'
    },
    {
      tamil: 'தேவன் நம்மைக் கடுமையாய் எண்ணி, நம்மை விட்டுவிடாமல் இருப்பார்.',
      english: '"For God is not unrighteous to forget your work and labour of love."',
      reference: 'Hebrews 6:10 (BSI)',
      day: 'Thursday'
    },
    {
      tamil: 'கிறிஸ்தவனாய் இருக்கிற இயேசுகிறிஸ்து, நேற்றும் இன்றும் என்றென்றும் ஒரே சொரூபமாய் இருக்கிறார்.',
      english: '"Jesus Christ the same yesterday, and to day, and for ever."',
      reference: 'Hebrews 13:8 (BSI)',
      day: 'Friday'
    },
    {
      tamil: 'என்பேர்த்தைக் கர்த்தரிடத்தில் ஆப்புக்கொடுங்கள்; அவரே உங்களைக் காக்கிறவர்.',
      english: '"Cast all your anxiety on him, because he cares for you."',
      reference: '1 Peter 5:7 (BSI)',
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
