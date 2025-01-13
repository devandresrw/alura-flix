'use client'
import { useEffect } from 'react'
import { ImageMovie } from '@/components/utils/ImageMovie'
import { useUniqueMoviesStore } from '@/stores/useTMCStore'
export const HeroCategorie = () => {

  const movies = useUniqueMoviesStore(state => state.movies)
  const isLoading = useUniqueMoviesStore(state => state.isLoading)
  const error = useUniqueMoviesStore(state => state.error)
  const fetchUniqueMovies = useUniqueMoviesStore(state => state.fetchUniqueMovies)

  useEffect(() => {
    fetchUniqueMovies()
  }, [])

  if (isLoading) return <div>Cargando...</div>
  if (error) return <div>Error: {error}</div>


  return (
    <div className='h-[90vh]'>
      {
        movies.map((movie, index) => {
          const { id, posterPath, title, genres } = movie
          return (
            <>
              <div className='' key={`movie-${index}`}>
                <ImageMovie
                  src={posterPath ?? '/images/default-poster.jpg'}
                  alt={movie.id.toString()}
                  height={100}
                  width={100}
                  styles=''
                />
                <span>{title}</span>
                <span>{genres.map(genre => genre.name).join(', ')}</span>
              </div>
            </>

          )
        })
      }
    </div>
  )
}