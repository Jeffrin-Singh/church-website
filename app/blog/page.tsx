'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import SectionDivider from '@/components/section-divider'
import Footer from '@/components/footer'
import NewsletterForm from '@/components/newsletter-form'
import BorderGlow from '@/components/BorderGlow'
import { ArrowRight } from 'lucide-react'

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All Posts')

  const posts = [
    {
      id: 1,
      title: 'Finding Peace in Prayer',
      excerpt: 'Prayer is not just a religious practice—it\'s a powerful conversation with God. Learn how to develop a meaningful prayer life.',
      date: '5/12/2024',
      category: 'Spiritual Life',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'The Language of Love in Scripture',
      excerpt: 'Exploring the different Greek words for love in the Bible and what they teach us about relationships.',
      date: '5/11/2024',
      category: 'Bible Study',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'Service with Joy: The Deacon\'s Heart',
      excerpt: 'What does it truly mean to serve? Discover how acts of service become expressions of God\'s love.',
      date: '5/10/2024',
      category: 'Ministry',
      readTime: '4 min read'
    },
    {
      id: 4,
      title: 'Family Bible Stories in Tamil - குடும்ப பைபிள் கதைகள்',
      excerpt: 'Explore heartwarming Bible stories for families. Learn how Abraham\'s faith, Jacob\'s journey, and David\'s courage inspire modern families.',
      date: '5/9/2024',
      category: 'Family',
      readTime: '7 min read',
      language: 'Tamil'
    },
    {
      id: 5,
      title: 'The Gifts of the Holy Spirit',
      excerpt: 'Understanding the spiritual gifts listed in 1 Corinthians 12 and how to discover your own gifts.',
      date: '5/8/2024',
      category: 'Bible Study',
      readTime: '8 min read'
    },
    {
      id: 6,
      title: 'Living Out Forgiveness Daily',
      excerpt: 'From theory to practice: how to apply the principle of forgiveness in everyday relationships and conflicts.',
      date: '5/7/2024',
      category: 'Christian Living',
      readTime: '5 min read'
    },
    {
      id: 7,
      title: 'கணிதம் மற்றும் நம்பிக்கை - Mathematics and Faith',
      excerpt: 'How mathematical patterns in creation reveal God\'s design. A fascinating exploration of numbers in nature and Scripture.',
      date: '5/6/2024',
      category: 'Theology',
      readTime: '6 min read',
      language: 'Tamil'
    },
    {
      id: 8,
      title: 'Teaching Children About Faith',
      excerpt: 'A guide for parents on age-appropriate ways to teach children about God, Scripture, and Christian values.',
      date: '5/5/2024',
      category: 'Family',
      readTime: '7 min read'
    },
    {
      id: 9,
      title: 'செபமும் ஞானமும் - Prayer and Wisdom in Tamil Life',
      excerpt: 'Traditional Tamil Christian wisdom on prayer practices and how they shape family life and community bonds.',
      date: '5/4/2024',
      category: 'Spiritual Life',
      readTime: '5 min read',
      language: 'Tamil'
    },
    {
      id: 10,
      title: 'Parables of Jesus: Ancient Wisdom for Modern Times',
      excerpt: 'Unpacking the parables of Jesus and discovering their profound lessons for contemporary Christian living.',
      date: '5/3/2024',
      category: 'Bible Study',
      readTime: '6 min read'
    }
  ]

  const categories = ['All Posts', 'Spiritual Life', 'Bible Study', 'Ministry', 'Family', 'Theology', 'Christian Living']

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === 'All Posts' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory)

  return (
    <>
      <Navbar />

      <section className="py-16 md:py-24 px-6 sm:px-8 bg-gradient-to-b from-wall to-secondary">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-accent-red mb-4" style={{ fontFamily: 'Fraunces, serif' }}>
              Church Blog
            </h1>
            <p className="text-lg text-foreground/70">
              Insights on faith, Scripture, and Christian living. Monthly articles to inspire and encourage your spiritual journey.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12 animate-slideInUp">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-accent-red text-white shadow-lg scale-105'
                    : 'border border-border text-foreground hover:bg-secondary hover:border-accent-red'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post) => (
                <BorderGlow
                  key={post.id}
                  backgroundColor="white"
                  borderRadius={12}
                  glowColor="40 80 80"
                  glowIntensity={0.8}
                  colors={['#8B3A2B', '#B78A22', '#2F6F6B']}
                  edgeSensitivity={25}
                  glowRadius={30}
                  fillOpacity={0.3}
                  className="animate-slideInUp"
                >
                  <article
                    className="bg-white rounded-lg overflow-hidden flex flex-col p-6"
                  >
                {/* Featured Image */}
                <div className="h-48 bg-gradient-to-br from-accent-red/10 to-accent-teal/10 flex items-center justify-center border-b border-border/50">
                  <div className="text-6xl text-accent-brass opacity-20">✧</div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex gap-2 items-center mb-2">
                    <p className="text-xs font-semibold text-accent-brass uppercase tracking-wider">
                      {post.category}
                    </p>
                    {post.language && (
                      <span className="text-xs bg-accent-teal/20 text-accent-teal font-semibold px-2 py-1 rounded-full">
                        {post.language}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-accent-red mb-3" style={{ fontFamily: 'Fraunces, serif' }}>
                    {post.title}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-4 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border/30 pt-4">
                    <span className="font-mono">{post.date}</span>
                    <span className="font-mono">{post.readTime}</span>
                  </div>

                  {/* Read More Link */}
                  <button className="mt-4 flex items-center gap-2 text-accent-red font-semibold hover:gap-3 transition group">
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </button>
                </div>
                  </article>
                </BorderGlow>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-lg text-foreground/60">No blog posts found in this category.</p>
              </div>
            )}
          </div>

          {/* Newsletter Section */}
          <NewsletterForm />
        </div>
      </section>

      <SectionDivider />
      <Footer />
    </>
  )
}
