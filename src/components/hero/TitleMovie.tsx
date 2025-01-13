
import Link from 'next/link'

interface TitleProps {
  title: string
  id: number
}

export const TitleMovie = ({ title, id }: TitleProps) => {

  const truncateTitle = (title: string, maxLength: number) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + '...'
    } else {
      return title
    }
  }


  return (
    <Link href={`/movie/${id}`} className='cursor-pointer
    font-roboto font-medium text-4xl hover:cursor-pointer
  hover:text-gray-300'>
      {truncateTitle(title, 30)}
    </Link>
  )
}