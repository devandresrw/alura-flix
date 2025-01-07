import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const movieId = parseInt(params.id)

    const movie = await prisma.movie.findUnique({
      where: {
        id: movieId
      },
      include: {
        genres: true
      }
    })

    if (!movie) {
      return NextResponse.json(
        { error: 'Película no encontrada' },
        { status: 404 }
      )
    }

    return NextResponse.json(movie)

  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}