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
import Link from 'next/link'

interface SideLeftProps {
  id: number
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
    <div className='pl-14 flex flex-col justify-center gap-3'>
      <div className='flex items-center justify-start gap-3'>
        <TitleMovie title={props.title} id={props.id} />
        <PublicMode adult={props.adult} />
        <Languege originalLanguage={props.originalLanguage} />
      </div>
      <div className=''>
        <OverviewMovie overview={props.overview} />
      </div>
      <div className='flex justify-start items-center gap-3'>
        <Popularity popularity={props.popularity} />
        <RealeseMovie releaseDate={props.realeseDate} />
      </div>

      <GenderMovie genderList={props.genderList} />
    </div>
  )
}