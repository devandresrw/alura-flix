import { create } from 'zustand'
import { Movie } from '@/lib/types'


interface HeroStore {
  movies: Movie[]
  fetchMovies: () => Promise<void>
}

const useHeroStore = create<HeroStore>((set) => ({
  movies: [],
  fetchMovies: async () => {
    try {
      const response = await fetch('/api/hero')
      const data: Movie[] = await response.json()
      set({ movies: data })
    } catch (error) {
      console.error('Failed to fetch movies:', error)
    }
  },
}))

export default useHeroStore