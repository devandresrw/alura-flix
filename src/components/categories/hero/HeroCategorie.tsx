
'use client'
import Link from 'next/link'
import { ImageMovie, GenderMovie, TitleMovie } from '@/components'
import { Movie } from '@/lib/types'

interface HeroCategorieProps {
  movie: Movie[]
}

export const HeroCategorie = ({movie}: HeroCategorieProps) => {
  const duplicatedMovies = [...movie, ...movie] // Duplicamos el array

  return (
    <div className='min-h-screen px-5 py-8 overflow-hidden'>
      <div className='flex gap-4 animate-scroll hover:pause'>
        {duplicatedMovies.map((movieItem, index) => {
          const { id, title, posterPath, genres } = movieItem
          return (
            <div 
              className='flex-none w-[200px]' 
              key={`movie-${index}`}
            >
              <Link 
                href={`/movie/${id}`}
                className='block aspect-[2/3] mb-3'
              >
                <ImageMovie
                  src={posterPath ?? '/images/default-poster.jpg'}
                  alt={id.toString()}
                  height={450}
                  width={300}
                  styles='object-cover rounded-lg shadow-lg w-full h-full hover:scale-105 transition-transform'
                />
              </Link>
              <div className='flex text-center justify-center mb-3'>
              <TitleMovie title={title} id={id} styles={`cursor-pointer
              font-roboto font-medium text-xl hover:cursor-pointer
              hover:text-gray-300 text-center `}/>
               </div> 
              
              <GenderMovie genderList={genres} style='flex gap-2 text-center flex-wrap justify-center'/>
            </div>
          )
        })}
      </div>
    </div>
  )
}