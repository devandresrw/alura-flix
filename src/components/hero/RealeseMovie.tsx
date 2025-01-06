interface RealeseMovieProps {
  releaseDate: string
}
export const RealeseMovie = ({ releaseDate }: RealeseMovieProps) => {
  return (
    <div className="flex flex-col">
      <span>{releaseDate}</span>
    </div>
  )
}