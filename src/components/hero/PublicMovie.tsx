import { MdFamilyRestroom, MdNoAdultContent } from "react-icons/md";

interface PublicModeProps {
  adult: boolean
}
export const PublicMode = ({ adult }: PublicModeProps) => {
  return (
    <div className="">
      <span>{adult ? <MdNoAdultContent /> : <MdFamilyRestroom />}</span>
    </div>
  )
}