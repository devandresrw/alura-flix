import { useMoviesByGenreStore } from '@/stores/useTMCStore'
import { useEffect } from 'react'
export const Slidercategories = () => {
  const genres = useMoviesByGenreStore(state => state.genres)
  const isLoading = useMoviesByGenreStore(state => state.isLoading)
  const error = useMoviesByGenreStore(state => state.error)
  const fetchMoviesByGenre = useMoviesByGenreStore(state => state.fetchMoviesByGenre)

  useEffect(() => {
    fetchMoviesByGenre()
  }, [])
  return (
    <div className="">
    </div>
  )
}