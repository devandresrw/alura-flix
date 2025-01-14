// src/app/movie/[id]/page.tsx
'use client'
import { useParams } from "next/navigation"
import { useEffect } from "react"
import { useMovieStore } from "@/stores/useMovieStore"
import Loading from "@/app/loading"

export default function MoviePage() {
  const params = useParams()
  const movie = useMovieStore(state => state.movie)
  const isLoading = useMovieStore(state => state.isLoading)
  const error = useMovieStore(state => state.error)
  const fetchMovie = useMovieStore(state => state.fetchMovie)

  useEffect(() => {
    const movieId = Number(params.id)
    if (!isNaN(movieId)) {
      fetchMovie(movieId)
    }
  }, [params.id, fetchMovie])

  if (isLoading) return <Loading />
  if (error) return <div className="text-red-500">Error: {error}</div>
  if (!movie) return <div className="text-gray-500">Película no encontrada</div>

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{movie.title}</h1>
      {movie.backdropPath && (
        <div className="aspect-video mb-4">
          <img
            src={movie.backdropPath}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <p className="text-gray-600">{movie.overview}</p>
    </div>
  )
}