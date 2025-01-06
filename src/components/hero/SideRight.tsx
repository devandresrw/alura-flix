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
    <div className="">
      <div className=''>
        <PosterMovie
          src={posterPath || '/images/default-poster.jpg'}
          alt={`pelicula ${id}`}
          width={448}
          height={673}
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