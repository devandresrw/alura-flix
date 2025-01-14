import { NextResponse } from "next/server";
import { prisma } from '@/lib/prisma'
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params
    const genderId = parseInt(id)
    const { searchParams } = new URL(request.url)
    const take = 10
    const skip = (page - 1) * take
vi
    if (isNaN(movieId)) {
      return NextResponse.json(
        { error: 'ID inválido' },
        { status: 400 }
      )
    } 

    const movies = await prisma.movie.findMany({
      where:{
        genres:{
          some:{
            id: genderId
          }
        }
      },
      include:{
        genres:true
      },
      take,
      skip,
      orderBy:{
        popularity:'desc'
      }
    })

    return NextResponse.json({
      movies,
      page,
      totalMovies: movies.length
    })

  } catch (error) {
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }

}