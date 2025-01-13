import Link from 'next/link'
import { ImageMovie } from '@/components'
interface PosterMovieProps {
  src: string
  alt: string
  width: number
  height: number
  styles?: string
  id: number
}
export const PosterMovie = ({
  alt,
  src,
  height,
  width,
  styles,
  id
}: PosterMovieProps) => {
  return (
    <Link href={`/movie/${id}`}>
      <ImageMovie
        alt={alt}
        src={src}
        height={height}
        width={width}
        styles={styles}
      />
    </Link>

  )
}