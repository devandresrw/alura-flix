
interface LanguageProps {
  originalLanguage: string
}
export const Languege = ({ originalLanguage }: LanguageProps) => {
  return (
    <span>{originalLanguage}</span>
  )
}