'use client'
import { useParams } from "next/navigation"
import { useEffect } from "react"
import { useMovieStore } from "@/stores/useMovieStore"

export default function MoviePage() {
  const params = useParams()
  const movie = useMovieStore((state) => state.movie)
  const isLoading = useMovieStore((state) => state.isLoading)
  const error = useMovieStore((state) => state.error)
  const fetchMovie = useMovieStore((state) => state.fetchMovie)

  useEffect(() => {
    if (params.id) {
      fetchMovie(Number(params.id))
    }
  }, [params.id])

  if (isLoading) return <div>Cargando...</div>
  if (error) return <div>Error: {error}</div>
  if (!movie) return <div>Película no encontrada</div>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{movie.title}</h1>
      <div className="aspect-video mb-4">
        <iframe
          width="100%"
          height="100%"
          src={movie.backdropPath}
          title={movie.title}
          allowFullScreen
        ></iframe>
      </div>
      <p className="text-gray-600">{movie.overview}</p>
    </div>
  )
}