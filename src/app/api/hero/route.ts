import { prisma } from '@/lib/prisma'
import { Movie } from "@prisma/client"
export const dynamic = 'force-static'


export async function GET() {

  try {
    const genres = await prisma.genre.findMany(
      {
        include: {
          movies: {
            take: 1,
            include: {
              genres: true
            }
          }
        }
      }
    )

    //Constante para almacenar Ids unicos 
    const movieSet = new Set<number>()
    //Array de peliculas sin repetir
    const uniqueMovies: Movie[] = []

    /*
      - Itera sobre cada género 
      - para cada genero itera sus peliculas
      - verifica ids duplicados
      - almacena peliculas unicas 
    */
    genres.forEach(genres => {

      genres.movies.forEach(movie => {

        if (!movieSet.has(movie.id)) {
          movieSet.add(movie.id)
          uniqueMovies.push(movie)
        }

      })
    })

    return new Response(JSON.stringify(uniqueMovies), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } finally {
    await prisma.$disconnect()
  }

}