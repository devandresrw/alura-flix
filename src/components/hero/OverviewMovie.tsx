interface OverviewMovieProps {
  overview: string
}
export const OverviewMovie = ({ overview }: OverviewMovieProps) => {
  return (
    <p>{overview}</p>
  )
}