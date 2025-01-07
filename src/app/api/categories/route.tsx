import { prisma } from '@/lib/prisma'
import { Movie } from "@prisma/client"
import { NextResponse } from 'next/server'


export async function GET() {
  try {
    const genres = await prisma.genre.findMany({
      include: {
        movies: {
          take: 10,
          orderBy: {
            popularity: 'desc'
          },
          include: {
            genres: true
          }
        }
      }
    })

    const movieSet = new Set<number>()
    const uniqueMovies: Movie[] = []

    genres.forEach(genre => {
      genre.movies.forEach(movie => {
        if (!movieSet.has(movie.id)) {
          movieSet.add(movie.id)
          uniqueMovies.push(movie)
        }
      })
    })

    return new NextResponse(JSON.stringify(uniqueMovies), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })

  } catch (error) {
    return new NextResponse(JSON.stringify({ error: 'Error categories' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } finally {
    await prisma.$disconnect()
  }
}