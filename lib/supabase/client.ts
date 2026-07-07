import { createBrowserClient } from '@supabase/ssr'

/**
 * Create a Supabase client for browser-side operations.
 * Safe to call even during build time - returns null if env vars are missing.
 */
export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // Return early if environment variables are missing
  if (!url || !key) {
    return null as any
  }

  return createBrowserClient(url, key)
}
