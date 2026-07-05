export default function ServiceSchedule() {
  const services = [
    {
      day: 'Every Sunday',
      time: '9:00 AM - 11:00 AM',
      name: 'Sunday Worship Service',
      duration: '120 min',
      pastor: 'Church Community'
    },
    {
      day: '3rd Sunday',
      time: '7:00 AM - 9:00 AM',
      name: 'Sunday Prayer',
      duration: '120 min',
      pastor: 'Prayer Ministry'
    },
    {
      day: '3rd Friday',
      time: '7:00 PM - 9:00 PM',
      name: 'முன்னிரவு ஜெபம் (Night Prayer)',
      duration: '120 min',
      pastor: 'Prayer Ministry'
    },
    {
      day: '1st Day (Monthly)',
      time: '6:00 AM - 7:00 AM',
      name: 'Vagutha Aarathanai (Morning Prayer)',
      duration: '60 min',
      pastor: 'Church Community'
    }
  ]

  return (
    <section className="py-16 md:py-24 px-6 sm:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-accent-red mb-4" style={{ fontFamily: 'Fraunces, serif' }}>
          Service Schedule
        </h2>
        <p className="text-lg text-foreground/70">Join us for worship, prayer, and fellowship</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border-l-4 border-accent-red rounded-lg p-6 hover:shadow-lg transition"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="font-mono font-bold text-accent-brass text-xl">{service.time}</p>
                <p className="text-sm text-muted-foreground mt-1">{service.day}</p>
              </div>
              <span className="px-3 py-1 bg-secondary text-foreground text-xs font-semibold rounded-full">
                {service.duration}
              </span>
            </div>
            <h3 className="font-bold text-lg text-accent-red mb-2" style={{ fontFamily: 'Fraunces, serif' }}>
              {service.name}
            </h3>
            <p className="text-sm text-foreground/70">Led by: {service.pastor}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gradient-to-r from-accent-red/5 to-accent-teal/5 rounded-lg border border-border">
        <p className="text-center text-foreground/80">
          <span className="font-semibold">Address:</span> Bharath Petrol Pump Backside, Sivanthi Adithanar Nagar, Kalakkad East, Kalakkad, Tamil Nadu 627501, India
          <br />
          <span className="font-semibold">Phone:</span> +91-422-2234567 | <span className="font-semibold">Email:</span> hello@csinewchurch.church
        </p>
      </div>
    </section>
  )
}
