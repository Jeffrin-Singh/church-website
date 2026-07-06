'use server'

import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { serviceSchedules, events, leadership, sermons, blogPosts, givingOptions } from '@/lib/db/schema'
import { and, desc, eq } from 'drizzle-orm'
import { headers } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { nanoid } from 'nanoid'

async function getUserId() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error('Unauthorized')
  return session.user.id
}

// Service Schedules
export async function getServiceSchedules() {
  const userId = await getUserId()
  return db.select().from(serviceSchedules).where(eq(serviceSchedules.userId, userId)).orderBy(desc(serviceSchedules.createdAt))
}

export async function createServiceSchedule(data: { dayOfWeek: string; time: string; title: string; description?: string }) {
  const userId = await getUserId()
  const id = nanoid()
  await db.insert(serviceSchedules).values({ ...data, id, userId })
  revalidatePath('/admin')
}

export async function updateServiceSchedule(id: string, data: Partial<typeof serviceSchedules.$inferInsert>) {
  const userId = await getUserId()
  await db.update(serviceSchedules).set(data).where(and(eq(serviceSchedules.id, id), eq(serviceSchedules.userId, userId)))
  revalidatePath('/admin')
}

export async function deleteServiceSchedule(id: string) {
  const userId = await getUserId()
  await db.delete(serviceSchedules).where(and(eq(serviceSchedules.id, id), eq(serviceSchedules.userId, userId)))
  revalidatePath('/admin')
}

// Events
export async function getEvents() {
  const userId = await getUserId()
  return db.select().from(events).where(eq(events.userId, userId)).orderBy(desc(events.date))
}

export async function createEvent(data: { title: string; description?: string; date: string; location?: string; image?: string }) {
  const userId = await getUserId()
  const id = nanoid()
  await db.insert(events).values({ ...data, id, userId, date: new Date(data.date) })
  revalidatePath('/admin')
}

export async function updateEvent(id: string, data: Partial<typeof events.$inferInsert>) {
  const userId = await getUserId()
  await db.update(events).set(data).where(and(eq(events.id, id), eq(events.userId, userId)))
  revalidatePath('/admin')
}

export async function deleteEvent(id: string) {
  const userId = await getUserId()
  await db.delete(events).where(and(eq(events.id, id), eq(events.userId, userId)))
  revalidatePath('/admin')
}

// Leadership
export async function getLeadership() {
  const userId = await getUserId()
  return db.select().from(leadership).where(eq(leadership.userId, userId)).orderBy(leadership.order)
}

export async function createLeadership(data: { name: string; role: string; bio?: string; image?: string; order?: number }) {
  const userId = await getUserId()
  const id = nanoid()
  await db.insert(leadership).values({ ...data, id, userId })
  revalidatePath('/admin')
}

export async function updateLeadership(id: string, data: Partial<typeof leadership.$inferInsert>) {
  const userId = await getUserId()
  await db.update(leadership).set(data).where(and(eq(leadership.id, id), eq(leadership.userId, userId)))
  revalidatePath('/admin')
}

export async function deleteLeadership(id: string) {
  const userId = await getUserId()
  await db.delete(leadership).where(and(eq(leadership.id, id), eq(leadership.userId, userId)))
  revalidatePath('/admin')
}

// Sermons
export async function getSermons() {
  const userId = await getUserId()
  return db.select().from(sermons).where(eq(sermons.userId, userId)).orderBy(desc(sermons.date))
}

export async function createSermon(data: { title: string; description?: string; speaker?: string; date: string; youtubeVideoId?: string }) {
  const userId = await getUserId()
  const id = nanoid()
  await db.insert(sermons).values({ ...data, id, userId, date: new Date(data.date) })
  revalidatePath('/admin')
}

export async function updateSermon(id: string, data: Partial<typeof sermons.$inferInsert>) {
  const userId = await getUserId()
  await db.update(sermons).set(data).where(and(eq(sermons.id, id), eq(sermons.userId, userId)))
  revalidatePath('/admin')
}

export async function deleteSermon(id: string) {
  const userId = await getUserId()
  await db.delete(sermons).where(and(eq(sermons.id, id), eq(sermons.userId, userId)))
  revalidatePath('/admin')
}

// Blog Posts
export async function getBlogPosts() {
  const userId = await getUserId()
  return db.select().from(blogPosts).where(eq(blogPosts.userId, userId)).orderBy(desc(blogPosts.createdAt))
}

export async function createBlogPost(data: { title: string; content?: string; excerpt?: string; image?: string; published?: boolean }) {
  const userId = await getUserId()
  const id = nanoid()
  const publishedAt = data.published ? new Date() : null
  await db.insert(blogPosts).values({ ...data, id, userId, publishedAt })
  revalidatePath('/admin')
}

export async function updateBlogPost(id: string, data: Partial<typeof blogPosts.$inferInsert>) {
  const userId = await getUserId()
  await db.update(blogPosts).set(data).where(and(eq(blogPosts.id, id), eq(blogPosts.userId, userId)))
  revalidatePath('/admin')
}

export async function deleteBlogPost(id: string) {
  const userId = await getUserId()
  await db.delete(blogPosts).where(and(eq(blogPosts.id, id), eq(blogPosts.userId, userId)))
  revalidatePath('/admin')
}

// Giving Options
export async function getGivingOptions() {
  const userId = await getUserId()
  return db.select().from(givingOptions).where(eq(givingOptions.userId, userId)).orderBy(desc(givingOptions.createdAt))
}

export async function createGivingOption(data: {
  title: string
  description?: string
  type: string
  bankName?: string
  accountNumber?: string
  routingNumber?: string
  paymentLink?: string
  isActive?: boolean
}) {
  const userId = await getUserId()
  const id = nanoid()
  await db.insert(givingOptions).values({ ...data, id, userId })
  revalidatePath('/admin')
}

export async function updateGivingOption(id: string, data: Partial<typeof givingOptions.$inferInsert>) {
  const userId = await getUserId()
  await db.update(givingOptions).set(data).where(and(eq(givingOptions.id, id), eq(givingOptions.userId, userId)))
  revalidatePath('/admin')
}

export async function deleteGivingOption(id: string) {
  const userId = await getUserId()
  await db.delete(givingOptions).where(and(eq(givingOptions.id, id), eq(givingOptions.userId, userId)))
  revalidatePath('/admin')
}
