'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Alert } from '@/components/ui/alert'

export default function AdminInitPage() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleInit = async () => {
    setLoading(true)
    setError(null)
    setMessage(null)

    try {
      const response = await fetch('/api/init-admin', { method: 'POST' })
      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Failed to initialize admin user')
      } else {
        setMessage(data.message)
        // Redirect to sign-in after 2 seconds
        setTimeout(() => {
          window.location.href = '/sign-in'
        }, 2000)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-svh bg-background flex items-center justify-center px-4">
      <Card className="w-full max-w-sm p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Admin Setup
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Initialize the default admin account
          </p>
        </div>

        {message && (
          <Alert className="mb-4 bg-green-50 border-green-200 text-green-800">
            {message}
          </Alert>
        )}

        {error && (
          <Alert className="mb-4 bg-red-50 border-red-200 text-red-800">
            {error}
          </Alert>
        )}

        <Button
          onClick={handleInit}
          disabled={loading}
          className="w-full"
        >
          {loading ? 'Initializing...' : 'Initialize Admin User'}
        </Button>

        <div className="mt-6 p-4 bg-muted rounded-lg">
          <p className="text-xs text-muted-foreground">
            <strong>Admin Credentials:</strong><br/>
            Email: <code className="bg-background px-1 py-0.5 rounded">admin@csi-church.local</code><br/>
            Password: <code className="bg-background px-1 py-0.5 rounded">Jesus@123</code>
          </p>
        </div>
      </Card>
    </main>
  )
}
