import type { baseMovieDataType } from "../../services/api/TMDBApi.type";

export type MovieData = {
  popularMovie: baseMovieDataType[];
  nowPlayingMovie: baseMovieDataType[];
  topRatedMovie: baseMovieDataType[];
  nowPlayingSeries: baseMovieDataType[];
  topRatedSeries: baseMovieDataType[];
}