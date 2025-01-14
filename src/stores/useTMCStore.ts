import {create } from 'zustand';
import {Movie} from '@/lib/types';

interface TMCStore{
  movies: Movie[];
  page: number
  hasMore: boolean;
  isLoading: boolean;
  error: string;  
  genreId: number;
}