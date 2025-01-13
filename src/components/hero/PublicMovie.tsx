import { MdFamilyRestroom, MdNoAdultContent } from "react-icons/md";

interface PublicModeProps {
  adult: boolean
}
export const PublicMode = ({ adult }: PublicModeProps) => {
  return (
    <div className="">
      <span>{adult ? <MdNoAdultContent size={20} />
        : <MdFamilyRestroom size={20} />}</span>
    </div>
  )
}