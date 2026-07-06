import { auth } from '@/lib/auth'
import { NextResponse } from 'next/server'

export async function POST() {
  try {
    const email = 'admin@csi-church.local'
    const password = 'Jesus@123'
    const name = 'CSI New Church Admin'

    // Use Better Auth's signUp method to create user with password
    const response = await auth.api.signUpEmail({
      email,
      password,
      name,
    } as any)

    if ('error' in response && response.error) {
      // User might already exist
      if (
        response.error.includes('already exists') ||
        response.error.includes('unique')
      ) {
        return NextResponse.json(
          { message: 'Admin user already exists' },
          { status: 200 }
        )
      }
      throw new Error(response.error)
    }

    return NextResponse.json(
      {
        message: 'Admin user created successfully',
        email,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating admin user:', error)
    
    // Check if it's a duplicate user error
    const errorMessage =
      error instanceof Error ? error.message : 'Failed to create admin user'
    
    if (errorMessage.includes('already exists') || errorMessage.includes('unique')) {
      return NextResponse.json(
        { message: 'Admin user already exists' },
        { status: 200 }
      )
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}
