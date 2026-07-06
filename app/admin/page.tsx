'use client'

import { useEffect, useState } from 'react'
import { getServiceSchedules, getEvents, getLeadership, getSermons, getBlogPosts, getGivingOptions } from '@/app/actions/church-content'
import Link from 'next/link'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    serviceSchedules: 0,
    events: 0,
    leadership: 0,
    sermons: 0,
    blogPosts: 0,
    givingOptions: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadStats() {
      try {
        const [
          serviceSchedulesData,
          eventsData,
          leadershipData,
          sermonsData,
          blogPostsData,
          givingOptionsData,
        ] = await Promise.all([
          getServiceSchedules(),
          getEvents(),
          getLeadership(),
          getSermons(),
          getBlogPosts(),
          getGivingOptions(),
        ])

        setStats({
          serviceSchedules: serviceSchedulesData.length,
          events: eventsData.length,
          leadership: leadershipData.length,
          sermons: sermonsData.length,
          blogPosts: blogPostsData.length,
          givingOptions: givingOptionsData.length,
        })
      } catch (error) {
        console.error('Error loading stats:', error)
      } finally {
        setLoading(false)
      }
    }

    loadStats()
  }, [])

  const dashboardItems = [
    { label: 'Service Schedules', count: stats.serviceSchedules, href: '/admin/service-schedules' },
    { label: 'Events', count: stats.events, href: '/admin/events' },
    { label: 'Leadership', count: stats.leadership, href: '/admin/leadership' },
    { label: 'Sermons', count: stats.sermons, href: '/admin/sermons' },
    { label: 'Blog Posts', count: stats.blogPosts, href: '/admin/blog' },
    { label: 'Giving Options', count: stats.givingOptions, href: '/admin/giving' },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage your church website content</p>
      </div>

      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition cursor-pointer">
                <h3 className="text-lg font-semibold text-gray-900">{item.label}</h3>
                <p className="text-3xl font-bold text-blue-600 mt-2">{item.count}</p>
                <p className="text-sm text-gray-600 mt-2">Click to manage</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
