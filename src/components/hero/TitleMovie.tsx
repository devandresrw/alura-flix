
import Link from 'next/link'

interface TitleProps {
  title: string
  id: number
  styles?: string
}

export const TitleMovie = ({ title, id, styles }: TitleProps) => {

  const truncateTitle = (title: string, maxLength: number) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + '...'
    } else {
      return title
    }
  }

  return (
    <div className=''>
      <Link href={`/movie/${id}`} className={styles}>
      {truncateTitle(title, 30)}
    </Link>
    </div>
    
  )
}