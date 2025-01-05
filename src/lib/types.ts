export interface Genre {
  id: number
  tmdbId: number
  name: string
}

export interface Movie {
  id: number
  tmdbId: number
  adult: boolean
  backdropPath?: string
  originalLanguage: string
  originalTitle: string
  overview: string
  popularity: number
  posterPath?: string
  releaseDate: string
  title: string
  video: boolean
  voteAverage: number
  voteCount: number
  genres: Genre[]
}