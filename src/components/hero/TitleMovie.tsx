
interface titleProps {
  title: string
}
export const TitleMovie = ({ title }: titleProps) => {
  return (
    <h1>{title}</h1>
  )
}