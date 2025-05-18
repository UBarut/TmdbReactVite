import axios from "axios"
import type { GetMovieTVListType } from "./TMDBApi.type";

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

export const getMovieTvListData = ({ apiType = "movie", apiCategory = "popular", page = "1", successMethod, errorMethod }: GetMovieTVListType) => {
    return axiosInstance.get(`/${apiType}/${apiCategory}?language=en-US&page=${page}`)
        .then(res => {
            const updatedMovies = res.data.results.map((movie: any) => ({
                ...movie,
                poster_path: movie.poster_path
                    ? `${TMDB_IMAGE_PATH}${movie.poster_path}`
                    : null,
                backdrop_path: movie.backdrop_path
                    ? `${TMDB_IMAGE_PATH}${movie.backdrop_path}`
                    : null
            }));
            if (successMethod) successMethod();
            // console.log(updatedMovies);
            return updatedMovies;
        })
        .catch(err => {
            if (errorMethod) errorMethod();
            console.log(err);
            return [];
        })
};

// export const getMovieTvDetailData2 = ({ apiType, apiCategory, successMethod, errorMethod }: GetMovieTVListType) => {https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US
//     return axiosInstance.get(`/${apiType}/${apiCategory}?language=en-US`)
//         .then(res => {
//             // const updatedMovies = res.data;
//             const updatedMovies = {
//                 ...res.data,
//                 poster_path: `${TMDB_IMAGE_PATH}${res.data.poster_path}`,
//                 backdrop_path: `${TMDB_IMAGE_PATH}${res.data.backdrop_path}`,
//             }
//             if (successMethod) successMethod();
//             // console.log(updatedMovies);
//             return updatedMovies;
//         })
//         .catch(err => {
//             if (errorMethod) errorMethod();
//             console.log(err);
//             return [];
//         })
// };

export const getMovieTvDetailData = ({
  apiType,
  apiCategory,
  successMethod,
  errorMethod
}: GetMovieTVListType) => {
  return Promise.all([
    axiosInstance.get(`/${apiType}/${apiCategory}?language=en-US`),
    axiosInstance.get(`/${apiType}/${apiCategory}/credits?language=en-US`)
  ])
    .then(([detailRes, creditsRes]) => {
      const detailData = {
        ...detailRes.data,
        poster_path: `${TMDB_IMAGE_PATH}${detailRes.data.poster_path}`,
        backdrop_path: `${TMDB_IMAGE_PATH}${detailRes.data.backdrop_path}`,
      };

    //   console.log(detailData);
      const combinedData = {
        ...detailData,
        credits: creditsRes.data,
      };
    //   console.log(combinedData);

      if (successMethod) successMethod();
      return combinedData;
    })
    .catch(err => {
      if (errorMethod) errorMethod();
      console.error("API hata:", err);
      return null;
    });
};
