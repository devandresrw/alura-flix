// route.ts (en /api/categories/[id]/route.ts)
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const categoryId = parseInt(id)

    if (isNaN(categoryId)) {
      return NextResponse.json(
        { error: 'ID de categoría inválido' },
        { status: 400 }
      )
    }

    const movies = await prisma.movie.findMany({
      where: {
        genres: {
          some: {
            id: categoryId
          }
        }
      },
      take: 30,
      orderBy: {
        popularity: 'desc'
      },
      include: {
        genres: true
      }
    })

    return NextResponse.json(movies)
  } catch (error) {
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }
}