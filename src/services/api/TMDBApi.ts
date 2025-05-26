import axios from "axios"
import type { GetMovieDetailType, GetMoviesTvType, GetSeriesDetailType } from "./TMDBApi.type";
import slugify from 'react-slugify';

const TMDB_ACCOUNT_ID = import.meta.env.VITE_TMDB_TOKEN;
const TMDB_API_URL = import.meta.env.VITE_TMDB_API_URL;
const TMDB_IMAGE_PATH = import.meta.env.VITE_TMDB_IMAGE_PATH;

const axiosInstance = axios.create({
  method: 'GET',
  baseURL: TMDB_API_URL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${TMDB_ACCOUNT_ID}`
  }
});

export const getMoviesTvAsync = ({ type, category, page, urlPrefix, successMethod, errorMethod }: GetMoviesTvType) => {
  return axiosInstance.get(`/${type}/${category}?language=en-US&page=${page}`)
    .then(res => {
      const results = res.data.results.map((item: any) => ({
        id: item.id,
        title: item.title || item.name,
        url: `${urlPrefix}/${item.id}/${slugify(item.title || item.name)}`,
        card_image: item.poster_path ? `${TMDB_IMAGE_PATH}${item.poster_path}` : null,
        bg_image: item.backdrop_path ? `${TMDB_IMAGE_PATH}${item.backdrop_path}` : null,
        release_date: item.release_date,
        desc: item.overview,
        vote_average: item.vote_average,
        
      }));
      if (successMethod) successMethod();
      return results;
    })
    .catch(err => {
      if (errorMethod) errorMethod();
      console.log(err);
      return [];
    })
}

export const getMovieDetailAsync = ({
  movieId,
  successMethod,
  errorMethod }: GetMovieDetailType) => {
  return Promise.all([
    axiosInstance.get(`/movie/${movieId}?language=en-US`),
    axiosInstance.get(`/movie/${movieId}/credits?language=en-US`)
  ])
    .then(([detailRes, creditsRes]) => {
      const movie = detailRes.data;
      const casts = creditsRes.data.cast;
      const crews = creditsRes.data.crew;
      const detailData = {
        // ...detailRes.data,
        card_image: `${TMDB_IMAGE_PATH}${movie.poster_path}`,
        bg_image: `${TMDB_IMAGE_PATH}${movie.backdrop_path}`,
        title: movie.title,
        original_title: movie.original_title,
        release_year: new Date(movie.release_date).getFullYear().toString(),
        release_date: movie.release_date,
        genres: movie.genres.map((genre: object[] | any) => genre.name).join(', '),
        movie_time: `${Math.round(movie.runtime / 60)}h ${movie.runtime % 60}m`,
        tagline: movie.tagline,
        overview: movie.overview,
        homepage: movie.homepage,
        imdb_id: movie.imdb_id,
        vote_average: movie.vote_average,
        vote_count: movie.vote_count
      };
      const combinedData = {
        ...detailData,
        credits: casts.slice(0, 10).map((cast: object[] | any) => ({
          url: `/cast-list/${cast.id}`,
          name: cast.name,
          characterName: cast.character,
          target: false,
          card_image: `${TMDB_IMAGE_PATH}${cast.profile_path}`,
        })),
      };
      if (successMethod) successMethod();
      return combinedData;
    })
    .catch(err => {
      if (errorMethod) errorMethod();
      console.error("API hata:", err);
      return null;
    });
};

export const getSeriesDetailAsync = ({
  seriesId,
  successMethod,
  errorMethod }: GetSeriesDetailType) => {
  return Promise.all([
    axiosInstance.get(`/tv/${seriesId}?language=en-US`),
    axiosInstance.get(`/tv/${seriesId}/credits?language=en-US`)
  ])
    .then(([detailRes, creditsRes]) => {
      const series = detailRes.data;
      const casts = creditsRes.data.cast;
      const crews = creditsRes.data.crew;

      //Values
      console.log(detailRes);
      
      const detailData = {
        // ...detailRes.data,
        card_image: `${TMDB_IMAGE_PATH}${series.poster_path}`,
        bg_image: `${TMDB_IMAGE_PATH}${series.backdrop_path}`,
        title: series.name,
        original_title: series.original_name,
        first_air_year: new Date(series.first_air_date).getFullYear().toString(),
        first_air_date: series.first_air_date,
        genres: series.genres.map((genre: object[] | any) => genre.name).join(', '),
        tagline: series.tagline,
        overview: series.overview,
        homepage: series.homepage,
        // imdb_id: series.imdb_id,
        vote_average: series.vote_average,
        vote_count: series.vote_count,
        number_of_seasons: series.number_of_seasons
      };
      const combinedData = {
        ...detailData,
        credits: casts.slice(0, 10).map((cast: object[] | any) => ({
          url: `/cast-list/${cast.id}`,
          name: cast.name,
          characterName: cast.character,
          target: false,
          card_image: `${TMDB_IMAGE_PATH}${cast.profile_path}`,
        })),
      };
      if (successMethod) successMethod();
      return combinedData;
    })
    .catch(err => {
      if (errorMethod) errorMethod();
      console.error("API hata:", err);
      return null;
    });
};