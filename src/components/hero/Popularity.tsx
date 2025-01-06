
interface PopularityProps {
  popularity: number
}
export const Popularity = ({ popularity }: PopularityProps) => {
  return (
    <div className="">
      <span>{popularity}</span>
    </div>
  )
}