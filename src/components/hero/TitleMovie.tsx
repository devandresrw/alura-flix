'use client'
import Link from 'next/link'

interface TitleProps {
  title: string
  id: number
}

export const TitleMovie = ({ title, id }: TitleProps) => {



  return (
    <Link href={`/movie/${id}`} className='cursor-pointer hover:text-red-500'>
      {title}
    </Link>
  )
}