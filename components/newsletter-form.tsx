'use client'

export default function NewsletterForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle subscription logic here
    alert('Thank you for subscribing!')
  }

  return (
    <div className="bg-gradient-to-r from-accent-red/10 to-accent-teal/10 rounded-lg p-8 md:p-12 border border-border text-center">
      <h2 className="text-3xl font-bold text-accent-red mb-4" style={{ fontFamily: 'Fraunces, serif' }}>
        Subscribe to Our Blog
      </h2>
      <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
        Get new articles delivered to your inbox every week. Join our community of readers seeking spiritual growth.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
        <input
          type="email"
          placeholder="Enter your email address"
          className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red/50"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-accent-red text-white rounded-lg hover:bg-accent-red/90 transition font-semibold whitespace-nowrap"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}
