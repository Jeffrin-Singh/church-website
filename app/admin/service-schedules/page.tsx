'use client'

import { useState, useEffect } from 'react'
import { getServiceSchedules, createServiceSchedule, updateServiceSchedule, deleteServiceSchedule } from '@/app/actions/supabase-data'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type ServiceSchedule = {
  id: string
  dayOfWeek: string
  time: string
  title: string
  description?: string | null
}

const DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export default function ServiceSchedulesPage() {
  const [schedules, setSchedules] = useState<ServiceSchedule[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    dayOfWeek: 'Sunday',
    time: '',
    title: '',
    description: '',
  })

  useEffect(() => {
    loadSchedules()
  }, [])

  async function loadSchedules() {
    try {
      setLoading(true)
      const data = await getServiceSchedules()
      setSchedules(data as ServiceSchedule[])
    } catch (error) {
      console.error('Error loading schedules:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      if (editingId) {
        await updateServiceSchedule(editingId, formData)
      } else {
        await createServiceSchedule(formData)
      }
      setFormData({ dayOfWeek: 'Sunday', time: '', title: '', description: '' })
      setEditingId(null)
      setShowForm(false)
      await loadSchedules()
    } catch (error) {
      console.error('Error saving schedule:', error)
    }
  }

  async function handleDelete(id: string) {
    if (confirm('Are you sure?')) {
      try {
        await deleteServiceSchedule(id)
        await loadSchedules()
      } catch (error) {
        console.error('Error deleting schedule:', error)
      }
    }
  }

  function handleEdit(schedule: ServiceSchedule) {
    setFormData({
      dayOfWeek: schedule.dayOfWeek,
      time: schedule.time,
      title: schedule.title,
      description: schedule.description || '',
    })
    setEditingId(schedule.id)
    setShowForm(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Service Schedules</h1>
        <Button
          onClick={() => {
            setShowForm(!showForm)
            setEditingId(null)
            setFormData({ dayOfWeek: 'Sunday', time: '', title: '', description: '' })
          }}
          className="bg-blue-600 hover:bg-blue-700"
        >
          {showForm ? 'Cancel' : 'Add Schedule'}
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingId ? 'Edit Schedule' : 'New Schedule'}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Day of Week</label>
                  <select
                    value={formData.dayOfWeek}
                    onChange={(e) => setFormData({ ...formData, dayOfWeek: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg"
                  >
                    {DAYS_OF_WEEK.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Time</label>
                  <Input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Service Title</label>
                <Input
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., Morning Service"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Optional description"
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
      ) : schedules.length === 0 ? (
        <div className="text-center py-8 text-gray-600">No schedules yet. Create your first one!</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {schedules.map((schedule) => (
            <Card key={schedule.id}>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold">{schedule.title}</h3>
                <p className="text-sm text-gray-600">
                  {schedule.dayOfWeek} at {schedule.time}
                </p>
                {schedule.description && <p className="text-sm mt-2">{schedule.description}</p>}
                <div className="flex gap-2 mt-4">
                  <Button
                    onClick={() => handleEdit(schedule)}
                    variant="outline"
                    className="flex-1"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(schedule.id)}
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
