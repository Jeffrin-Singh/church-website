'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

// Get authenticated user
async function getUser() {
  const supabase = await createClient()
  const { data: { user }, error } = await supabase.auth.getUser()
  if (error || !user) throw new Error('Unauthorized')
  return user
}

// Service Schedules
export async function getServiceSchedules() {
  const supabase = await createClient()
  await getUser() // Check auth
  
  const { data, error } = await supabase
    .from('service_schedules')
    .select('*')
    .order('dayOfWeek')
  
  if (error) throw new Error(error.message)
  return data
}

export async function createServiceSchedule(values: any) {
  const supabase = await createClient()
  const user = await getUser()

  const { error } = await supabase.from('service_schedules').insert({
    id: crypto.randomUUID(),
    userId: user.id,
    ...values,
  })

  if (error) throw new Error(error.message)
  revalidatePath('/admin/service-schedules')
}

export async function updateServiceSchedule(id: string, values: any) {
  const supabase = await createClient()
  const user = await getUser()

  const { error } = await supabase
    .from('service_schedules')
    .update(values)
    .eq('id', id)
    .eq('userId', user.id)

  if (error) throw new Error(error.message)
  revalidatePath('/admin/service-schedules')
}

export async function deleteServiceSchedule(id: string) {
  const supabase = await createClient()
  const user = await getUser()

  const { error } = await supabase
    .from('service_schedules')
    .delete()
    .eq('id', id)
    .eq('userId', user.id)

  if (error) throw new Error(error.message)
  revalidatePath('/admin/service-schedules')
}

// Events
export async function getEvents() {
  const supabase = await createClient()
  await getUser()

  const { data, error } = await supabase
    .from('events')
    .select('*')
    .order('date', { ascending: false })

  if (error) throw new Error(error.message)
  return data
}

export async function createEvent(values: any) {
  const supabase = await createClient()
  const user = await getUser()

  const { error } = await supabase.from('events').insert({
    id: crypto.randomUUID(),
    userId: user.id,
    ...values,
  })

  if (error) throw new Error(error.message)
  revalidatePath('/admin/events')
}

export async function updateEvent(id: string, values: any) {
  const supabase = await createClient()
  const user = await getUser()

  const { error } = await supabase
    .from('events')
    .update(values)
    .eq('id', id)
    .eq('userId', user.id)

  if (error) throw new Error(error.message)
  revalidatePath('/admin/events')
}

export async function deleteEvent(id: string) {
  const supabase = await createClient()
  const user = await getUser()

  const { error } = await supabase
    .from('events')
    .delete()
    .eq('id', id)
    .eq('userId', user.id)

  if (error) throw new Error(error.message)
  revalidatePath('/admin/events')
}

// Leadership
export async function getLeadership() {
  const supabase = await createClient()
  await getUser()

  const { data, error } = await supabase
    .from('leadership')
    .select('*')
    .order('order')

  if (error) throw new Error(error.message)
  return data
}

export async function createLeader(values: any) {
  const supabase = await createClient()
  const user = await getUser()

  const { error } = await supabase.from('leadership').insert({
    id: crypto.randomUUID(),
    userId: user.id,
    ...values,
  })

  if (error) throw new Error(error.message)
  revalidatePath('/admin/leadership')
}

export async function updateLeader(id: string, values: any) {
  const supabase = await createClient()
  const user = await getUser()

  const { error } = await supabase
    .from('leadership')
    .update(values)
    .eq('id', id)
    .eq('userId', user.id)

  if (error) throw new Error(error.message)
  revalidatePath('/admin/leadership')
}

export async function deleteLeader(id: string) {
  const supabase = await createClient()
  const user = await getUser()

  const { error } = await supabase
    .from('leadership')
    .delete()
    .eq('id', id)
    .eq('userId', user.id)

  if (error) throw new Error(error.message)
  revalidatePath('/admin/leadership')
}

// Sermons
export async function getSermons() {
  const supabase = await createClient()
  await getUser()

  const { data, error } = await supabase
    .from('sermons')
    .select('*')
    .order('date', { ascending: false })

  if (error) throw new Error(error.message)
  return data
}

export async function createSermon(values: any) {
  const supabase = await createClient()
  const user = await getUser()

  const { error } = await supabase.from('sermons').insert({
    id: crypto.randomUUID(),
    userId: user.id,
    ...values,
  })

  if (error) throw new Error(error.message)
  revalidatePath('/admin/sermons')
}

export async function updateSermon(id: string, values: any) {
  const supabase = await createClient()
  const user = await getUser()

  const { error } = await supabase
    .from('sermons')
    .update(values)
    .eq('id', id)
    .eq('userId', user.id)

  if (error) throw new Error(error.message)
  revalidatePath('/admin/sermons')
}

export async function deleteSermon(id: string) {
  const supabase = await createClient()
  const user = await getUser()

  const { error } = await supabase
    .from('sermons')
    .delete()
    .eq('id', id)
    .eq('userId', user.id)

  if (error) throw new Error(error.message)
  revalidatePath('/admin/sermons')
}

// Blog Posts
export async function getBlogPosts() {
  const supabase = await createClient()
  await getUser()

  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('createdAt', { ascending: false })

  if (error) throw new Error(error.message)
  return data
}

export async function createBlogPost(values: any) {
  const supabase = await createClient()
  const user = await getUser()

  const { error } = await supabase.from('blog_posts').insert({
    id: crypto.randomUUID(),
    userId: user.id,
    ...values,
  })

  if (error) throw new Error(error.message)
  revalidatePath('/admin/blog')
}

export async function updateBlogPost(id: string, values: any) {
  const supabase = await createClient()
  const user = await getUser()

  const { error } = await supabase
    .from('blog_posts')
    .update(values)
    .eq('id', id)
    .eq('userId', user.id)

  if (error) throw new Error(error.message)
  revalidatePath('/admin/blog')
}

export async function deleteBlogPost(id: string) {
  const supabase = await createClient()
  const user = await getUser()

  const { error } = await supabase
    .from('blog_posts')
    .delete()
    .eq('id', id)
    .eq('userId', user.id)

  if (error) throw new Error(error.message)
  revalidatePath('/admin/blog')
}

// Giving Options
export async function getGivingOptions() {
  const supabase = await createClient()
  await getUser()

  const { data, error } = await supabase
    .from('giving_options')
    .select('*')
    .eq('isActive', true)

  if (error) throw new Error(error.message)
  return data
}

export async function createGivingOption(values: any) {
  const supabase = await createClient()
  const user = await getUser()

  const { error } = await supabase.from('giving_options').insert({
    id: crypto.randomUUID(),
    userId: user.id,
    ...values,
  })

  if (error) throw new Error(error.message)
  revalidatePath('/admin/giving')
}

export async function updateGivingOption(id: string, values: any) {
  const supabase = await createClient()
  const user = await getUser()

  const { error } = await supabase
    .from('giving_options')
    .update(values)
    .eq('id', id)
    .eq('userId', user.id)

  if (error) throw new Error(error.message)
  revalidatePath('/admin/giving')
}

export async function deleteGivingOption(id: string) {
  const supabase = await createClient()
  const user = await getUser()

  const { error } = await supabase
    .from('giving_options')
    .delete()
    .eq('id', id)
    .eq('userId', user.id)

  if (error) throw new Error(error.message)
  revalidatePath('/admin/giving')
}
