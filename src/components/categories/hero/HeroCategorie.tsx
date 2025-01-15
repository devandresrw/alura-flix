'use client'
import Link from 'next/link'
import { ImageMovie, GenderMovie, TitleMovie } from '@/components'
import { Movie } from '@/lib/types'

interface HeroCategorieProps {
    movie: Movie[]
}
export const HeroCategorie = ({movie}: HeroCategorieProps) => {

  

  return (
    <div className='min-h-screen px-5 py-8'>
      <div className='flex overflow-x-auto gap-4 scroll-smooth pb-4 scrollbar-hide' key={1}>
        {
          movie.map((movie, index) => {
            const { id, posterPath, title, genres } = movie
            return (
              <>
                <div className='flex-none w-[200px]' key={`movie-${index}`}>
                  <Link key={id} href={`/movie/${id}`}
                    className='block aspect-[2/3]'
                  >
                    <ImageMovie
                      src={posterPath ?? '/images/default-poster.jpg'}
                      alt={movie.id.toString()}
                      height={ 450}
                      width={300}
                      styles='object-cover rounded-lg shadow-lg w-full h-full hover:scale-105 transition-transform'
                    />
                  </Link>
                  <TitleMovie title={title} id={id} />
                  <GenderMovie genderList={genres} />
                </div>
              </>

            )
          })
        }
      </div>
    
    </div>

  )
}