'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { Alert } from '@/components/ui/alert'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('admin@csi-new-church.com')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [supabase, setSupabase] = useState<any>(null)

  useEffect(() => {
    // Initialize Supabase client only on client side after hydration
    const client = createClient()
    setSupabase(client)
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    if (!supabase) {
      setError('Authentication service is not configured. Please check environment variables.')
      setLoading(false)
      return
    }

    try {
      if (typeof supabase.auth?.signInWithPassword !== 'function') {
        setError('Authentication service is not properly initialized.')
        setLoading(false)
        return
      }

      const { error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (authError) {
        setError(authError.message)
        setLoading(false)
        return
      }

      // Redirect to admin dashboard
      router.push('/admin')
      router.refresh()
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to sign in'
      setError(errorMessage)
      console.error('[v0] Login error:', errorMessage)
      setLoading(false)
    }
  }

  return (
    <main className="min-h-svh bg-background flex items-center justify-center px-4">
      <Card className="w-full max-w-sm p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            Admin Sign In
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Sign in to manage church content
          </p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              disabled={!supabase || loading}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              disabled={!supabase || loading}
            />
          </div>

          {error && (
            <Alert className="border-destructive bg-destructive/10">
              <p className="text-sm text-destructive">{error}</p>
            </Alert>
          )}

          <Button type="submit" disabled={loading || !supabase} className="w-full">
            {!supabase ? 'Loading...' : loading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>


      </Card>
    </main>
  )
}
