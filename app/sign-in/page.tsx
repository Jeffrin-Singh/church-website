import { redirect } from 'next/navigation'

export default function SignInPage() {
  // Redirect to Supabase login
  redirect('/auth/login')
}
