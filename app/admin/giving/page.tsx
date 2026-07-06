'use client'

import { useState, useEffect } from 'react'
import { getGivingOptions, createGivingOption, updateGivingOption, deleteGivingOption } from '@/app/actions/church-content'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type GivingOption = {
  id: string
  title: string
  description?: string | null
  type: string
  bankName?: string | null
  accountNumber?: string | null
  routingNumber?: string | null
  paymentLink?: string | null
  isActive?: boolean | null
}

const GIVING_TYPES = ['Bank Transfer', 'Online Payment', 'Credit Card', 'Mobile Payment', 'Check', 'Other']

export default function GivingPage() {
  const [options, setOptions] = useState<GivingOption[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'Online Payment',
    bankName: '',
    accountNumber: '',
    routingNumber: '',
    paymentLink: '',
    isActive: true,
  })

  useEffect(() => {
    loadOptions()
  }, [])

  async function loadOptions() {
    try {
      setLoading(true)
      const data = await getGivingOptions()
      setOptions(data as GivingOption[])
    } catch (error) {
      console.error('Error loading giving options:', error)
    } finally {
      setLoading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      if (editingId) {
        await updateGivingOption(editingId, formData)
      } else {
        await createGivingOption(formData)
      }
      setFormData({
        title: '',
        description: '',
        type: 'Online Payment',
        bankName: '',
        accountNumber: '',
        routingNumber: '',
        paymentLink: '',
        isActive: true,
      })
      setEditingId(null)
      setShowForm(false)
      await loadOptions()
    } catch (error) {
      console.error('Error saving giving option:', error)
    }
  }

  async function handleDelete(id: string) {
    if (confirm('Are you sure?')) {
      try {
        await deleteGivingOption(id)
        await loadOptions()
      } catch (error) {
        console.error('Error deleting giving option:', error)
      }
    }
  }

  function handleEdit(option: GivingOption) {
    setFormData({
      title: option.title,
      description: option.description || '',
      type: option.type,
      bankName: option.bankName || '',
      accountNumber: option.accountNumber || '',
      routingNumber: option.routingNumber || '',
      paymentLink: option.paymentLink || '',
      isActive: option.isActive ?? true,
    })
    setEditingId(option.id)
    setShowForm(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Giving Options</h1>
        <Button
          onClick={() => {
            setShowForm(!showForm)
            setEditingId(null)
            setFormData({
              title: '',
              description: '',
              type: 'Online Payment',
              bankName: '',
              accountNumber: '',
              routingNumber: '',
              paymentLink: '',
              isActive: true,
            })
          }}
          className="bg-blue-600 hover:bg-blue-700"
        >
          {showForm ? 'Cancel' : 'Add Option'}
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>{editingId ? 'Edit Option' : 'New Giving Option'}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Title</label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="e.g., Online Giving"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Type</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg"
                  >
                    {GIVING_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Instructions or details"
                />
              </div>

              {formData.type === 'Bank Transfer' && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Bank Name</label>
                      <Input
                        value={formData.bankName}
                        onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                        placeholder="Bank name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Routing Number</label>
                      <Input
                        value={formData.routingNumber}
                        onChange={(e) => setFormData({ ...formData, routingNumber: e.target.value })}
                        placeholder="Routing number"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Account Number</label>
                    <Input
                      value={formData.accountNumber}
                      onChange={(e) => setFormData({ ...formData, accountNumber: e.target.value })}
                      placeholder="Account number"
                    />
                  </div>
                </>
              )}

              {(formData.type === 'Online Payment' || formData.type === 'Credit Card') && (
                <div>
                  <label className="block text-sm font-medium mb-1">Payment Link</label>
                  <Input
                    value={formData.paymentLink}
                    onChange={(e) => setFormData({ ...formData, paymentLink: e.target.value })}
                    placeholder="https://..."
                  />
                </div>
              )}

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={formData.isActive}
                  onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                  className="h-4 w-4"
                />
                <label htmlFor="isActive" className="text-sm font-medium">
                  Active
                </label>
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
      ) : options.length === 0 ? (
        <div className="text-center py-8 text-gray-600">No giving options yet. Add your first option!</div>
      ) : (
        <div className="space-y-4">
          {options.map((option) => (
            <Card key={option.id}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{option.title}</h3>
                    <p className="text-sm text-gray-600">{option.type}</p>
                    {option.description && <p className="text-sm mt-2">{option.description}</p>}
                    {option.bankName && <p className="text-sm text-gray-600">Bank: {option.bankName}</p>}
                    <span className={`text-xs mt-2 inline-block px-2 py-1 rounded ${option.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {option.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleEdit(option)}
                      variant="outline"
                      size="sm"
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => handleDelete(option.id)}
                      variant="destructive"
                      size="sm"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
