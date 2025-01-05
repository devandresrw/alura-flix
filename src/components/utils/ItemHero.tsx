import { ImageBackground } from "@/components/hero/BackgroundImage"
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



export default function ItemHero({ ...props }: Movie) {

  return (
    <div className="w-full h-[90vh]">
      <ImageBackground
        src={props.backdropPath}
      >
        <h1>{props.title}</h1>
      </ImageBackground>
    </div>
  )
}