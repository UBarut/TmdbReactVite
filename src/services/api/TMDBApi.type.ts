export type GetMovieTVListType = {
  apiType?: string
  apiCategory?: string
  page?: string
  successMethod?: (() => void) | null
  errorMethod?: (() => void) | null
};
export type GetMoviesTvType = {
  type: string
  category: string
  page: string
  urlPrefix: string
  successMethod: (() => void) | null
  errorMethod: (() => void) | null
}

export type GetMoviesTvType2 = {
  type: string[]
  category: string[]
  page: string[]
  urlPrefix: string[]
  successMethod?: ((data: any) => void)[] | null
  errorMethod?: ((error: any) => void)[] | null
}

export interface GetMovieDetailType {
  movieId?: string
  successMethod?: (() => void) | null
  errorMethod?: (() => void) | null
}

export interface GetSeriesDetailType {
  seriesId?: string
  successMethod?: (() => void) | null
  errorMethod?: (() => void) | null
}

export type baseMovieDataType = {
  adult?: boolean
  backdrop_path?: string
  genre_ids?: number[]
  id: number
  original_language?: string
  original_title?: string
  overview?: string
  popularity?: number
  poster_path?: string
  release_date?: string
  title?: string
  video?: boolean
  vote_average?: number
  vote_count?: number
}

// export type baseMovieDetailDataType2 = {
//   adult?: boolean
//   backdrop_path?: string
//   belongs_to_collection?: any
//   budget?: number
//   genres?: MovieCastListType[]
//   homepage: string
//   id: number
//   imdb_id: string,
//   origin_country: string[]
//   original_language?: string
//   original_title?: string
//   overview?: string
//   popularity?: number
//   poster_path?: string
//   production_companies?: object[]
//   production_countries?: object[]
//   release_date?: string
//   revenue?: number
//   runtime?: number
//   spoken_languages?: object[]
//   status?: string
//   tagline?: string
//   title?: string
//   video?: boolean
//   vote_average?: number
//   vote_count?: number
// }
export type baseMovieDetailDataType = {
  card_image: string
  bg_image: string
  title: string
  original_title: string
  release_year: string
  release_date: string
  genres: any
  movie_time: string
  tagline: string
  overview: string
  homepage: string
  imdb_id: string
  vote_average: string
  vote_count: string
  credits: any
}

type MovieCastListType = {
  id: number
  cast: CastCrewInfoType[]
  crew: CastCrewInfoType[]
}
type CastCrewInfoType = {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  orginal_name: string
  popularity: number
  profile_path: string
  cast_id: number | null
  character: string | null
  credit_id: string
  department: string | null
  job: string | null
  order: number | null
}