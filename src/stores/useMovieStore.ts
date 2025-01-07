import { create } from 'zustand'
import { Movie } from '@/lib/types'

interface MovieStore {
  movie: Movie | null
  isLoading: boolean
  error: string | null
  fetchMovie: (id: number) => Promise<void>  // Cambiado de string a number
}

export const useMovieStore = create<MovieStore>((set) => ({
  movie: null,
  isLoading: false,
  error: null,
  fetchMovie: async (id: number) => {
    try {
      set({ isLoading: true, error: null })
      const response = await fetch(`/api/findmovie/${id}`)
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Error al cargar la película')
      }
      const data = await response.json()
      set({ movie: data, isLoading: false })
    } catch (error) {
      console.error('Error en fetchMovie:', error)
      set({
        movie: null,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Error desconocido'
      })
    }
  }
}))