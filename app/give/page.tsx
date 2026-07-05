import Navbar from '@/components/navbar'
import SectionDivider from '@/components/section-divider'
import Footer from '@/components/footer'
import { Heart, Users, Building2, BookOpen } from 'lucide-react'

export default function Give() {
  return (
    <>
      <Navbar />

      <section className="py-16 md:py-24 px-6 sm:px-8 bg-gradient-to-b from-wall to-secondary">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-accent-red mb-4" style={{ fontFamily: 'Fraunces, serif' }}>
              Support Our Ministry
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Your generosity enables our church to continue its mission of worship, spiritual growth, and community service.
            </p>
          </div>

          {/* Giving Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Online Giving */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-border/50">
              <div className="w-12 h-12 bg-accent-red text-white rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-accent-red mb-4" style={{ fontFamily: 'Fraunces, serif' }}>
                Online Giving
              </h3>
              <p className="text-foreground/70 mb-6">
                Make a secure donation online through our trusted payment platform. Give once or set up recurring gifts.
              </p>
              <button className="w-full px-6 py-3 bg-accent-red text-white rounded-lg hover:bg-accent-red/90 transition font-semibold">
                Give Online Now
              </button>
            </div>

            {/* Bank Transfer */}
            <div className="bg-white rounded-lg p-8 shadow-lg border border-border/50">
              <div className="w-12 h-12 bg-accent-brass text-white rounded-lg flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-accent-red mb-4" style={{ fontFamily: 'Fraunces, serif' }}>
                Bank Transfer
              </h3>
              <p className="text-foreground/70 mb-6">
                Transfer directly from your bank account. Please contact us for bank details and reference information.
              </p>
              <button className="w-full px-6 py-3 border-2 border-accent-red text-accent-red rounded-lg hover:bg-accent-red/5 transition font-semibold">
                Request Bank Details
              </button>
            </div>
          </div>

          {/* How Your Gift Helps */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-accent-red text-center mb-8" style={{ fontFamily: 'Fraunces, serif' }}>
              Where Your Gift Goes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 border-l-4 border-accent-red">
                <Users className="w-8 h-8 text-accent-red mb-3" />
                <h4 className="font-bold text-lg text-foreground mb-2">Ministry & Outreach</h4>
                <p className="text-foreground/70 text-sm">
                  Community service, food distribution, and helping those in need.
                </p>
                <p className="text-accent-brass font-semibold text-sm mt-3">35%</p>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-accent-brass">
                <BookOpen className="w-8 h-8 text-accent-brass mb-3" />
                <h4 className="font-bold text-lg text-foreground mb-2">Spiritual Development</h4>
                <p className="text-foreground/70 text-sm">
                  Bible study programs, Sunday School, and discipleship initiatives.
                </p>
                <p className="text-accent-brass font-semibold text-sm mt-3">25%</p>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-accent-teal">
                <Building2 className="w-8 h-8 text-accent-teal mb-3" />
                <h4 className="font-bold text-lg text-foreground mb-2">Facility Maintenance</h4>
                <p className="text-foreground/70 text-sm">
                  Keeping our sanctuary and fellowship spaces welcoming and functional.
                </p>
                <p className="text-accent-brass font-semibold text-sm mt-3">30%</p>
              </div>
              <div className="bg-white rounded-lg p-6 border-l-4 border-accent-indigo">
                <Heart className="w-8 h-8 text-accent-indigo mb-3" />
                <h4 className="font-bold text-lg text-foreground mb-2">Staff & Ministry</h4>
                <p className="text-foreground/70 text-sm">
                  Supporting our pastoral team and church administration.
                </p>
                <p className="text-accent-brass font-semibold text-sm mt-3">10%</p>
              </div>
            </div>
          </div>

          {/* Giving Levels */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-accent-red text-center mb-8" style={{ fontFamily: 'Fraunces, serif' }}>
              Choose Your Gift Amount
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {['₹500', '₹1000', '₹2000', '₹5000'].map((amount) => (
                <button
                  key={amount}
                  className="px-6 py-4 border-2 border-border rounded-lg font-bold text-lg text-foreground hover:border-accent-red hover:text-accent-red transition"
                >
                  {amount}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Or enter custom amount"
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-red/50"
              />
              <button className="px-6 py-3 bg-accent-red text-white rounded-lg hover:bg-accent-red/90 transition font-semibold whitespace-nowrap">
                Proceed
              </button>
            </div>
          </div>

          {/* Tax Information */}
          <div className="bg-gradient-to-r from-accent-teal/5 to-accent-brass/5 rounded-lg p-8 border border-border">
            <h3 className="text-xl font-bold text-accent-red mb-4" style={{ fontFamily: 'Fraunces, serif' }}>
              Tax Information
            </h3>
            <p className="text-foreground/80 mb-4">
              C.S.I. Christ New Church is a registered charitable organization. Your donation may be tax-deductible under applicable laws. We will provide you with a tax receipt upon request.
            </p>
            <p className="text-sm text-foreground/70">
              For more information about how your donation supports our mission or for tax-related questions, please contact us at <a href="mailto:hello@csinewchurch.church" className="text-accent-red font-semibold hover:underline">hello@csinewchurch.church</a>
            </p>
          </div>

          {/* FAQ */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-accent-red text-center mb-8" style={{ fontFamily: 'Fraunces, serif' }}>
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 border border-border/50">
                <h4 className="font-bold text-foreground mb-2">Is my donation secure?</h4>
                <p className="text-foreground/70 text-sm">
                  Yes, all online donations are processed through encrypted, industry-standard payment gateways.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-border/50">
                <h4 className="font-bold text-foreground mb-2">Can I set up recurring gifts?</h4>
                <p className="text-foreground/70 text-sm">
                  Absolutely! You can set up weekly, monthly, or annual recurring donations on our giving platform.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-border/50">
                <h4 className="font-bold text-foreground mb-2">What other ways can I give?</h4>
                <p className="text-foreground/70 text-sm">
                  You can give via cash, check, bank transfer, or online. Contact us to discuss planned giving options.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-border/50">
                <h4 className="font-bold text-foreground mb-2">Can I give in memory of someone?</h4>
                <p className="text-foreground/70 text-sm">
                  Yes, memorial gifts are deeply appreciated. Please note this in the comment section when giving online.
                </p>
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
