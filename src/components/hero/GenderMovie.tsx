import Link from "next/link"
import { Genre } from "@/lib/types"

interface GenderMovieProps {
  genderList: Genre[]
  style?: string
}
export const GenderMovie = ({ genderList, style }: GenderMovieProps) => {


  return (
    <div className={style}>
      {genderList.map((genre) => (
        <Link key={genre.id} href={`/categories/${genre.id}`}>
          <span
            key={genre.id}
            className="px-3 py-1 text-sm bg-gray-800 rounded-full text-gray-200
            hover:bg-gray-700 cursor-pointer">
            {genre.name}
          </span>
        </Link>
      ))}
    </div>
  )
}