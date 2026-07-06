import { text, timestamp, boolean, integer, index } from 'drizzle-orm/pg-core'
import { pgTable } from 'drizzle-orm/pg-core'

// Better Auth Tables
export const user = pgTable('user', {
  id: text('id').primaryKey(),
  name: text('name'),
  email: text('email').notNull().unique(),
  emailVerified: boolean('emailVerified').notNull().default(false),
  image: text('image'),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const session = pgTable('session', {
  id: text('id').primaryKey(),
  userId: text('userId')
    .notNull()
    .references(() => user.id),
  token: text('token').notNull().unique(),
  expiresAt: timestamp('expiresAt').notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const account = pgTable('account', {
  id: text('id').primaryKey(),
  userId: text('userId')
    .notNull()
    .references(() => user.id),
  type: text('type').notNull(),
  provider: text('provider').notNull(),
  providerAccountId: text('providerAccountId').notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

export const verification = pgTable('verification', {
  id: text('id').primaryKey(),
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expiresAt').notNull(),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
})

// App Tables
export const serviceSchedules = pgTable(
  'service_schedules',
  {
    id: text('id').primaryKey(),
    userId: text('userId').notNull(),
    dayOfWeek: text('dayOfWeek').notNull(),
    time: text('time').notNull(),
    title: text('title').notNull(),
    description: text('description'),
    createdAt: timestamp('createdAt').notNull().defaultNow(),
    updatedAt: timestamp('updatedAt').notNull().defaultNow(),
  },
  (table) => [index('idx_service_userId').on(table.userId)]
)

export const events = pgTable(
  'events',
  {
    id: text('id').primaryKey(),
    userId: text('userId').notNull(),
    title: text('title').notNull(),
    description: text('description'),
    date: timestamp('date').notNull(),
    location: text('location'),
    image: text('image'),
    createdAt: timestamp('createdAt').notNull().defaultNow(),
    updatedAt: timestamp('updatedAt').notNull().defaultNow(),
  },
  (table) => [index('idx_events_userId').on(table.userId)]
)

export const leadership = pgTable(
  'leadership',
  {
    id: text('id').primaryKey(),
    userId: text('userId').notNull(),
    name: text('name').notNull(),
    role: text('role').notNull(),
    bio: text('bio'),
    image: text('image'),
    order: integer('order').default(0),
    createdAt: timestamp('createdAt').notNull().defaultNow(),
    updatedAt: timestamp('updatedAt').notNull().defaultNow(),
  },
  (table) => [index('idx_leadership_userId').on(table.userId)]
)

export const sermons = pgTable(
  'sermons',
  {
    id: text('id').primaryKey(),
    userId: text('userId').notNull(),
    title: text('title').notNull(),
    description: text('description'),
    speaker: text('speaker'),
    date: timestamp('date').notNull(),
    youtubeVideoId: text('youtubeVideoId'),
    createdAt: timestamp('createdAt').notNull().defaultNow(),
    updatedAt: timestamp('updatedAt').notNull().defaultNow(),
  },
  (table) => [index('idx_sermons_userId').on(table.userId)]
)

export const blogPosts = pgTable(
  'blog_posts',
  {
    id: text('id').primaryKey(),
    userId: text('userId').notNull(),
    title: text('title').notNull(),
    content: text('content'),
    excerpt: text('excerpt'),
    image: text('image'),
    published: boolean('published').default(false),
    publishedAt: timestamp('publishedAt'),
    createdAt: timestamp('createdAt').notNull().defaultNow(),
    updatedAt: timestamp('updatedAt').notNull().defaultNow(),
  },
  (table) => [index('idx_blog_userId').on(table.userId)]
)

export const givingOptions = pgTable(
  'giving_options',
  {
    id: text('id').primaryKey(),
    userId: text('userId').notNull(),
    title: text('title').notNull(),
    description: text('description'),
    type: text('type').notNull(),
    bankName: text('bankName'),
    accountNumber: text('accountNumber'),
    routingNumber: text('routingNumber'),
    paymentLink: text('paymentLink'),
    isActive: boolean('isActive').default(true),
    createdAt: timestamp('createdAt').notNull().defaultNow(),
    updatedAt: timestamp('updatedAt').notNull().defaultNow(),
  },
  (table) => [index('idx_giving_userId').on(table.userId)]
)
