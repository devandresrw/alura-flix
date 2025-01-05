export const getFullImagePath = (path: string | undefined) => {
  const baseUrl = 'https://image.tmdb.org/t/p/w500'
  return `${baseUrl}${path}`
}