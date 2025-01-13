'use client'
import Link from 'next/link'

interface TitleProps {
  title: string
  id: number
}

export const TitleMovie = ({ title, id }: TitleProps) => {



  return (
    <Link href={`/movie/${id}`} className='cursor-pointer
    font-roboto font-bold text-4xl hover:cursor-pointer
  hover:text-gray-300 overflow-hidden whitespace-nowrap
  text-ellipsis'>
      {title}
    </Link>
  )
}