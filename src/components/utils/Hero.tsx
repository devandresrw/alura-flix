'use client'
import ItemHero from '@/components/utils/ItemHero'
import { useEffect, useState } from 'react'
import useHeroStore from '@/stores/useHeroStore'
import { getFullImagePath } from '@/lib/urlComplete'

export default function Hero() {

  const movies = useHeroStore((state) => state.movies)
  const fetchMovies = useHeroStore((state) => state.fetchMovies)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    fetchMovies()
  }, [fetchMovies])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex === movies.length - 1 ? 0 : prevIndex + 1)
    }, 15000)

    return () => clearInterval(interval)
  }, [movies.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {movies.map((movie, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <ItemHero
                title={movie.title}
                backdropPath={getFullImagePath(movie.backdropPath)}
                posterPath={getFullImagePath(movie.posterPath)}
                overview={movie.overview}
                genres={movie.genres}
                releaseDate={movie.releaseDate}
                voteAverage={movie.voteAverage}
                voteCount={movie.voteCount}
                adult={movie.adult}
                originalLanguage={movie.originalLanguage}
                originalTitle={movie.originalTitle}
                popularity={movie.popularity}
                video={movie.video}
                id={movie.id}
                tmdbId={movie.tmdbId}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {movies.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                w-3 h-3 rounded-full transition-all
                ${currentIndex === index
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/80'}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  )
}