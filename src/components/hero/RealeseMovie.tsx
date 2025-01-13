interface RealeseMovieProps {
  releaseDate: string
}
export const RealeseMovie = ({ releaseDate }: RealeseMovieProps) => {

  const formattedDate = new Date(releaseDate).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });


  return (
    <div className="flex flex-col">
      <span>🗓️{formattedDate}</span>
    </div>
  )
}