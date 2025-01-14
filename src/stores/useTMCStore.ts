import {create } from 'zustand';
import {Movie} from '@/lib/types';

interface TMCStore{
  movies: Movie[];
  page: number
  hasMore: boolean;
  isLoading: boolean;
  error: string | null;  
  genreId: number | null;
  fetchMoviesByGenre: (genreId: number) => void;
  fetchMoreMovies: () => void;
  resetStore: () => void;
}

export const useMoviesByGenreStore = create<TMCStore>((set, get) => ({
  movies: [],
  page: 1,
  hasMore: true,
  isLoading: false,
  error: null,
  genreId: null,

  fetchMoviesByGenre: async (genreId: number) => {
    set({ 
      isLoading: true, 
      error: null, 
      movies: [], 
      page: 1,
      genreId                                                                 
    })

    try {
      const response = await fetch(`/api/categories/${genreId}?page=1`)
      const data = await response.json()
      
      set({
        movies: data.movies,
        hasMore: data.movies.length === 10,
        isLoading: false
      })
    } catch (error) {
      set({ 
        error: 'Error al cargar películas', 
        isLoading: false 
      })
    }
  },

  fetchMoreMovies: async () => {
    const { isLoading, hasMore, page, genreId } = get()
    
    if (isLoading || !hasMore || !genreId) return

    set({ isLoading: true })

    try {
      const nextPage = page + 1
      const response = await fetch(`/api/categories/${genreId}?page=${nextPage}`)
      const data = await response.json()

      set(state => ({
        movies: [...state.movies, ...data.movies],
        page: nextPage,
        hasMore: data.movies.length === 10,
        isLoading: false
      }))
    } catch (error) {
      set({ 
        error: 'Error al cargar más películas', 
        isLoading: false 
      })
    }
  },

  resetStore: () => {
    set({
      movies: [],
      page: 1,
      hasMore: true,
      isLoading: false,
      error: null,
      genreId: null
    })
  }
}))