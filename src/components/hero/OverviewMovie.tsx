interface OverviewMovieProps {
  overview: string
}
export const OverviewMovie = ({ overview }: OverviewMovieProps) => {

  const truncateOverview = (overview: string, maxLength: number) => {
    if (overview.length > maxLength) {
      return overview.slice(0, maxLength) + '...'
    } else {
      return overview
    }
  }

  return (
    <p className="w-[30em] text-base font-normal">{truncateOverview(overview, 300)}</p>
  )
}