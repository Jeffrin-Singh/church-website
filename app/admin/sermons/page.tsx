'use client'

import { useState, useEffect } from 'react'
import { getSermons, createSermon, updateSermon, deleteSermon } from '@/app/actions/supabase-data'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type Sermon = {
  id: string
  title: string
  description?: string | null
  speaker?: string | null
  date: Date | string
  youtubeVideoId?: string | null
}

export default function SermonsPage() {
  const [sermons, setSermons] = useState<Sermon[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    speaker: '',
    date: '',
    youtubeVideoId: '',
  })

  useEffect(() => {
    loadSermons()
  }, [])

  async function loadSermons() {
    try {
      setLoading(true)
      const data = await getSermons()
      setSermons(data as Sermon[])
    } catch (error) {
      console.error('Error loading sermons:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      if (editingId) {
        await updateSermon(editingId, formData)
      } else {
        await createSermon(formData)
      }
      setFormData({ title: '', description: '', speaker: '', date: '', youtubeVideoId: '' })
      setEditingId(null)
      setShowForm(false)
      await loadSermons()
    } catch (error) {
      console.error('Error saving sermon:', error)
    }
  }

  async function handleDelete(id: string) {
    if (confirm('Are you sure?')) {
      try {
        await deleteSermon(id)
        await loadSermons()
      } catch (error) {
        console.error('Error deleting sermon:', error)
      }
    }
  }

  function handleEdit(sermon: Sermon) {
    setFormData({
      title: sermon.title,
      description: sermon.description || '',
      speaker: sermon.speaker || '',
      date: sermon.date instanceof Date ? sermon.date.toISOString().split('T')[0] : sermon.date?.split('T')[0] || '',
      youtubeVideoId: sermon.youtubeVideoId || '',
    })
    setEditingId(sermon.id)
    setShowForm(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Sermons & Teachings</h1>
        <Button
          onClick={() => {
            setShowForm(!showForm)
            setEditingId(null)
            setFormData({ title: '', description: '', speaker: '', date: '', youtubeVideoId: '' })
          }}
          className="bg-blue-600 hover:bg-blue-700"
        >
          {showForm ? 'Cancel' : 'Add Sermon'}
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingId ? 'Edit Sermon' : 'New Sermon'}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <Input
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Sermon title"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Speaker</label>
                  <Input
                    value={formData.speaker}
                    onChange={(e) => setFormData({ ...formData, speaker: e.target.value })}
                    placeholder="Speaker name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Date</label>
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">YouTube Video ID</label>
                <Input
                  value={formData.youtubeVideoId}
                  onChange={(e) => setFormData({ ...formData, youtubeVideoId: e.target.value })}
                  placeholder="e.g., dQw4w9WgXcQ"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Sermon description"
                />
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                {editingId ? 'Update' : 'Create'}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : sermons.length === 0 ? (
        <div className="text-center py-8 text-gray-600">No sermons yet. Add your first sermon!</div>
      ) : (
        <div className="space-y-4">
          {sermons.map((sermon) => (
            <Card key={sermon.id}>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold">{sermon.title}</h3>
                <p className="text-sm text-gray-600">
                  {sermon.date instanceof Date ? sermon.date.toLocaleDateString() : new Date(sermon.date).toLocaleDateString()}
                  {sermon.speaker && ` • ${sermon.speaker}`}
                </p>
                {sermon.description && <p className="text-sm mt-2">{sermon.description}</p>}
                {sermon.youtubeVideoId && <p className="text-sm text-blue-600">YouTube: {sermon.youtubeVideoId}</p>}
                <div className="flex gap-2 mt-4">
                  <Button
                    onClick={() => handleEdit(sermon)}
                    variant="outline"
                    className="flex-1"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(sermon.id)}
                    variant="destructive"
                    className="flex-1"
                  >
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
