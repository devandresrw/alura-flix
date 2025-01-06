import { Genre } from '@/lib/types'
import {
  TitleMovie,
  PublicMode,
  Languege,
  OverviewMovie,
  Popularity,
  RealeseMovie,
  GenderMovie
} from '@/components'

interface SideLeftProps {
  title: string
  adult: boolean
  originalLanguage: string
  overview: string
  popularity: number
  realeseDate: string
  genderList: Genre[]
}

export const SideLeft = ({ ...props }: SideLeftProps) => {
  return (
    <div className=''>
      <TitleMovie title={props.title} />
      <PublicMode adult={props.adult} />
      <Languege originalLanguage={props.originalLanguage} />
      <div className=''>
        <OverviewMovie overview={props.overview} />
      </div>
      <Popularity popularity={props.popularity} />
      <RealeseMovie releaseDate={props.realeseDate} />
      <GenderMovie genderList={props.genderList} />
    </div>
  )
}