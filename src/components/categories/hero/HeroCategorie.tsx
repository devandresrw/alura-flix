'use client'
import Link from 'next/link'
import { ImageMovie, GenderMovie, TitleMovie } from '@/components'
export const HeroCategorie = () => {

  const movies: any = []

  return (
    <div className='h-[90vh]'>
      <div className=' overflow-x-auto whitespace-nowrap'>
        {
          movies.map((movie, index) => {
            const { id, posterPath, title, genres } = movie
            return (
              <>
                <div className='inline-block p-2
                justify-center' key={`movie-${index}`}>
                  <Link key={id} href={`/movie/${id}`}>
                    <ImageMovie
                      src={posterPath ?? '/images/default-poster.jpg'}
                      alt={movie.id.toString()}
                      height={100}
                      width={100}
                      styles=''
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