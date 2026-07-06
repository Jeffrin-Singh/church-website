'use client'

import { useState, useEffect } from 'react'
import { getLeadership, createLeadership, updateLeadership, deleteLeadership } from '@/app/actions/church-content'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type Leader = {
  id: string
  name: string
  role: string
  bio?: string | null
  image?: string | null
  order?: number | null
}

export default function LeadershipPage() {
  const [leaders, setLeaders] = useState<Leader[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    bio: '',
    image: '',
    order: '0',
  })

  useEffect(() => {
    loadLeaders()
  }, [])

  async function loadLeaders() {
    try {
      setLoading(true)
      const data = await getLeadership()
      setLeaders(data as Leader[])
    } catch (error) {
      console.error('Error loading leadership:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      if (editingId) {
        await updateLeadership(editingId, { ...formData, order: parseInt(formData.order) })
      } else {
        await createLeadership({ ...formData, order: parseInt(formData.order) })
      }
      setFormData({ name: '', role: '', bio: '', image: '', order: '0' })
      setEditingId(null)
      setShowForm(false)
      await loadLeaders()
    } catch (error) {
      console.error('Error saving leader:', error)
    }
  }

  async function handleDelete(id: string) {
    if (confirm('Are you sure?')) {
      try {
        await deleteLeadership(id)
        await loadLeaders()
      } catch (error) {
        console.error('Error deleting leader:', error)
      }
    }
  }

  function handleEdit(leader: Leader) {
    setFormData({
      name: leader.name,
      role: leader.role,
      bio: leader.bio || '',
      image: leader.image || '',
      order: (leader.order || 0).toString(),
    })
    setEditingId(leader.id)
    setShowForm(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Leadership</h1>
        <Button
          onClick={() => {
            setShowForm(!showForm)
            setEditingId(null)
            setFormData({ name: '', role: '', bio: '', image: '', order: '0' })
          }}
          className="bg-blue-600 hover:bg-blue-700"
        >
          {showForm ? 'Cancel' : 'Add Leader'}
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingId ? 'Edit Leader' : 'New Leader'}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Role</label>
                  <Input
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="e.g., Pastor, Deacon"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Bio</label>
                <Textarea
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  placeholder="Biography"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Image URL</label>
                  <Input
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Display Order</label>
                  <Input
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: e.target.value })}
                  />
                </div>
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
      ) : leaders.length === 0 ? (
        <div className="text-center py-8 text-gray-600">No leaders yet. Add your first leader!</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {leaders.map((leader) => (
            <Card key={leader.id}>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold">{leader.name}</h3>
                <p className="text-sm text-gray-600">{leader.role}</p>
                {leader.bio && <p className="text-sm mt-2">{leader.bio}</p>}
                <div className="flex gap-2 mt-4">
                  <Button
                    onClick={() => handleEdit(leader)}
                    variant="outline"
                    className="flex-1"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(leader.id)}
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
