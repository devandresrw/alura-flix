'use client'
import { useParams } from 'next/navigation'
import {useEffect} from 'react'
import { HeroCategorie } from '@/components'
import {useCategoryStore} from '@/stores/useCategorieTen'

export default function Page() {
  const params = useParams()
  const movies = useCategoryStore(e=>e.movies)
  const isLoading = useCategoryStore(e=>e.isLoading)
  const error = useCategoryStore(e=>e.error)
  const fetchMoviesByCategory = useCategoryStore(e=> e.fetchMoviesByCategory)
 
  useEffect(()=>{
    const categorieId = Number(params.id)
    if(!isNaN(categorieId)){
      fetchMoviesByCategory(categorieId)
    }
    
  },[])
 
  return(
    <div className="w-">
      <HeroCategorie movie={movies} />
      
    </div>
  )
}