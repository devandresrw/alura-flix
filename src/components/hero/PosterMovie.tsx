import { ImageMovie } from '@/components'
interface PosterMovieProps {
  src: string
  alt: string
  width?: number
  height?: number
  styles?: string
}
export const PosterMovie = ({
  alt,
  src,
  height,
  width,
  styles
}: PosterMovieProps) => {
  return (
    <ImageMovie
      alt={alt}
      src={src}
      height={height}
      width={width}
      styles={styles}
    />
  )
}