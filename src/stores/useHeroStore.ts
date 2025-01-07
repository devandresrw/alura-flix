import { create } from 'zustand'
import { Movie } from '@/lib/types'


interface HeroStore {
  movies: Movie[]
  currentMovie: Movie | null
  fetchMovies: () => Promise<void>
}

export const useHeroStore = create<HeroStore>((set) => ({
  movies: [],
  currentMovie: null,
  fetchMovies: async () => {
    try {
      const response = await fetch('/api/hero')
      const data: Movie[] = await response.json()
      set({
        movies: data,
        currentMovie: data[0]
      })
    } catch (error) {
      console.error('Failed to fetch movies:', error)
    }
  },
}))

