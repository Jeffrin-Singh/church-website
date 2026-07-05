import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import ServiceSchedule from '@/components/service-schedule'
import SectionDivider from '@/components/section-divider'
import VerseOfDay from '@/components/verse-of-day'
import UpcomingEvents from '@/components/upcoming-events'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <VerseOfDay />
      <SectionDivider />
      <ServiceSchedule />
      <SectionDivider />
      <UpcomingEvents />
      <Footer />
    </>
  )
}
