import { NextResponse } from "next/server";
import { prisma } from '@/lib/prisma'
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params
    const movieId = parseInt(id)

    if (isNaN(movieId)) {
      return NextResponse.json(
        { error: 'ID inválido' },
        { status: 400 }
      )
    }


  } catch (error) {
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  } finally {
    await prisma.$disconnect()
  }

}