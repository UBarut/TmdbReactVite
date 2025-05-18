
import { useEffect, useState } from "react"
import { getMovieTvListData, getMovieDetailData } from "../../services/api/TMDBApi3";
import { Slider } from "../../components/partials/Slider";
import type { MovieData } from "./Home.types";
import { Pagination } from "swiper/modules";
import Title from "../../components/partials/Title";
import SliderContainer from "../../components/sections/Container/SliderContainer";

export function Home() {
  const [movieData, setMovieData] = useState<MovieData>({
    popularMovie: [],
    nowPlayingMovie: [],
    topRatedMovie: [],
    nowPlayingSeries: [],
    topRatedSeries: [],
  });
  function successMethod() {
    console.log('callback success');
  }
  function errorMethod() {
    console.log('callback error');
  }
  useEffect(() => {
    const fetchMovies = async () => {
      const popularMovie = await getMovieTvListData({ apiType: "movie", apiCategory: "now_playing", page: "1", successMethod: successMethod, errorMethod: errorMethod });
      const nowPlayingMovie = await getMovieTvListData({ apiType: "movie", apiCategory: "popular", page: "1" })
        .then(data => {
          return data.map((movie: object[] | any) => ({
            url: `/movie-list/${movie.id}`,
            name: movie.original_title,
            target: false,
            image: movie.poster_path,
          }));
        });
      const topRatedMovie = await getMovieTvListData({ apiType: "movie", apiCategory: "top_rated", page: "1" })
        .then(data => {
          return data.map((movie: object[] | any) => ({
            url: `/movie-list/${movie.id}`,
            name: movie.original_title,
            target: false,
            image: movie.poster_path,
          }));
        });
      const nowPlayingSeries = await getMovieTvListData({ apiType: "tv", apiCategory: "popular", page: "1" })
        .then(data => {
          return data.map((series: object[] | any) => ({
            url: `/series-list/${series.id}`,
            name: series.original_title,
            target: false,
            image: series.poster_path,
          }));
        });
      const topRatedSeries = await getMovieTvListData({ apiType: "tv", apiCategory: "top_rated", page: "1" })
        .then(data => {
          return data.map((series: object[] | any) => ({
            url: `/series-list/${series.id}`,
            name: series.original_title,
            target: false,
            image: series.poster_path,
          }));
        });
      setMovieData({ ...movieData, popularMovie, nowPlayingMovie, topRatedMovie, nowPlayingSeries, topRatedSeries });
    };
    fetchMovies();
  }, [])

  return (
    <>
      <SliderContainer id="MainSliderContainer" className="main-slider-container">
        <Slider
          slides={movieData.popularMovie.slice(0, 5)}
          slidesPerView={1}
          slideType="MainSlide"
          classNameSwiperOuterDiv="mainSlider"
        />
      </SliderContainer>
      <SliderContainer id="NowPlayingMovies" className="card-slider-container-01">
        <Title title={"h2"}>
          <span>Now Playing Movies</span>
        </Title>
        <Slider
          slides={movieData.nowPlayingMovie}
          slidesPerView={5}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Pagination]}
          slideType="CardSlide_01"
          classNameSwiperOuterDiv="cardSlider-01"
        />
      </SliderContainer>
      <SliderContainer id="NowPlayingSeries" className="card-slider-container-01">
        <Title title={"h2"}>
          <span>Now Playing Series</span>
        </Title>
        <Slider
          slides={movieData.nowPlayingSeries}
          slidesPerView={5}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Pagination]}
          slideType="CardSlide_01"
          classNameSwiperOuterDiv="cardSlider-01"
        />
      </SliderContainer>
      <SliderContainer id="TopRatedMovies" className="card-slider-container-01">
        <Title title={"h2"}>
          <span>Top Rated Movies</span>
        </Title>
        <Slider
          slides={movieData.topRatedMovie}
          slidesPerView={5}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Pagination]}
          slideType="CardSlide_01"
          classNameSwiperOuterDiv="cardSlider-01"
        />
      </SliderContainer>
      <SliderContainer id="Top Rated Series" className="card-slider-container-01">
        <Title title={"h2"}>
          <span>Top Rated Series</span>
        </Title>
        <Slider
          slides={movieData.topRatedSeries}
          slidesPerView={5}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Pagination]}
          slideType="CardSlide_01"
          classNameSwiperOuterDiv="cardSlider-01"
        />
      </SliderContainer>
    </>
  )
}
