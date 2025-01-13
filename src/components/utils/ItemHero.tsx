import { SideLeft, SideRight, ImageBackground } from "@/components"
import { Movie } from '@/lib/types'

/**
Recibe una imagen de fondo
Recibe un titulo
Recibe un genero 
Recibe un rating
recibe un realese date
recibe VoteAverague
Recibe vote counst
Recibe una descripcion
Recibe una imagen de poster

*/

export default function ItemHero({
  backdropPath,
  originalTitle,
  adult,
  originalLanguage,
  overview,
  popularity,
  releaseDate,
  genres,
  voteAverage,
  voteCount,
  posterPath,
  id,

}: Movie) {

  return (
    <div className="w-full h-[90vh]">
      <ImageBackground
        src={backdropPath}
      >
        <div className="w-full h-full flex items-center">
          <div className="flex flex-col z-10 w-1/2 justify-center items-center">
            <SideLeft
              id={id}
              title={originalTitle}
              adult={adult}
              originalLanguage={originalLanguage}
              overview={overview}
              popularity={popularity}
              realeseDate={releaseDate}
              genderList={genres}

            />
          </div>
          <div className="flex flex-col z-10 w-1/2 justify-center items-center">
            <SideRight
              id={id}
              posterPath={posterPath || '/images/default-poster.jpg'}
              voteAverage={voteAverage}
              voteCount={voteCount}
            />
          </div>
        </div>
      </ImageBackground>
    </div>
  )
}