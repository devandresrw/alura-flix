
import {
  RatingMovie,
  VoteAverague,
  VoteCount,
  PosterMovie
} from '@/components'

interface SideRightProps {
  voteAverage: number
  voteCount: number
  posterPath: string
  id: number
}
export const SideRight = ({
  id,
  posterPath,
  voteAverage,
  voteCount
}: SideRightProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className=''>

        <PosterMovie
          src={posterPath || '/images/default-poster.jpg'}
          alt={`pelicula ${id}`}
          width={248}
          height={473}
          id={id}
          styles='rounded-lg'
        />
      </div>
      <div className=''>
        <RatingMovie />
        <VoteAverague />
        <VoteCount />
      </div>
    </div>
  )
}