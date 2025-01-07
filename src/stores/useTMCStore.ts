import { create } from 'zustand'
import { Movie, Genre } from '@/lib/types'

interface MoviesByGenre {
  genres: Genre[]
  isLoading: boolean
  error: string | null
  fetchMoviesByGenre: () => Promise<void>
}

interface UniqueMovies {
  movies: Movie[]
  isLoading: boolean
  error: string | null
  fetchUniqueMovies: () => Promise<void>
}


export const useMoviesByGenreStore = create<MoviesByGenre>((set) => ({
  genres: [],
  isLoading: false,
  error: null,
  fetchMoviesByGenre: async () => {
    try {
      set({ isLoading: true, error: null })
      const response = await fetch('/api/categories')
      if (!response.ok) throw new Error('Error al cargar géneros')
      const data = await response.json()
      set({ genres: data, isLoading: false })
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Error desconocido',
        isLoading: false
      })
    }
  }
}))

export const useUniqueMoviesStore = create<UniqueMovies>((set) => ({
  movies: [],
  isLoading: false,
  error: null,
  fetchUniqueMovies: async () => {
    try {
      set({ isLoading: true, error: null })
      const response = await fetch('/api/uniquecategorie')
      if (!response.ok) throw new Error('Error al cargar películas únicas')
      const data = await response.json()
      set({ movies: data, isLoading: false })
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : 'Error desconocido',
        isLoading: false
      })
    }
  }
}))
