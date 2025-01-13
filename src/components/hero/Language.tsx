import { getLanguageFlag } from '@/utils/languajeToFlag'
interface LanguageProps {
  originalLanguage: string
}
export const Languege = ({ originalLanguage }: LanguageProps) => {
  const flag = getLanguageFlag(originalLanguage)
  return (
    <span>{flag}</span>
  )
}
