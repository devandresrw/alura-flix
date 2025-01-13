import { prisma } from '@/lib/prisma'
import { Genre } from '@/lib/types'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const genres = await prisma.genre.findMany({
      include: {

      }
    })

  } catch (error) {

  } finally {
    await prisma.$disconnect()
  }
}