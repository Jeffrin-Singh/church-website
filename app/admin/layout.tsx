import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">Admin Panel</h1>
          <p className="text-sm text-gray-600 mt-1">Welcome, {user.email}</p>
        </div>
        
        <nav className="mt-6 space-y-2 px-4">
          <Link href="/admin" className="block px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700">Dashboard</Link>
          <Link href="/admin/service-schedules" className="block px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700">Service Schedules</Link>
          <Link href="/admin/events" className="block px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700">Events</Link>
          <Link href="/admin/leadership" className="block px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700">Leadership</Link>
          <Link href="/admin/sermons" className="block px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700">Sermons</Link>
          <Link href="/admin/blog" className="block px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700">Blog Posts</Link>
          <Link href="/admin/giving" className="block px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700">Giving Options</Link>
        </nav>

        <div className="absolute bottom-0 left-0 w-64 p-4 border-t">
          <form
            action={async () => {
              'use server'
              const supabase = await createClient()
              await supabase.auth.signOut()
              redirect('/auth/login')
            }}
          >
            <button
              type="submit"
              className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Sign Out
            </button>
          </form>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {children}
      </div>
    </div>
  )
}
