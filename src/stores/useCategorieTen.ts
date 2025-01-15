import {create} from 'zustand';
import {Movie} from '@/lib/types';

interface CategoryStore{
  movies: Movie[]
  isLoading: boolean
  error: string | null
  fetchMoviesByCategory: (categoryId: number) => Promise<void>  
}


export const useCategoryStore = create<CategoryStore>((set) => ({
  movies: [],
  isLoading: false,
  error: null,
  fetchMoviesByCategory: async (categoryId: number) => {
    try {
      set({ isLoading: true, error: null })
      const response = await fetch(`/api/categories/${categoryId}`)

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Error al cargar las películas')
      }

      const data = await response.json()
      set({ movies: data, isLoading: false })
    } catch (error) {
      console.error('Error en fetchMoviesByCategory:', error)
      set({
        movies: [],
        isLoading: false,
        error: error instanceof Error ? error.message : 'Error desconocido'
      })
    }
  }
}))