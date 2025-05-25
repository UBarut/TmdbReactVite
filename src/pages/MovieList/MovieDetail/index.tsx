import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getMovieDetailAsync } from "../../../services/api/TMDBApi";
import type { MovieDetailDataType } from "./MovieDetail.types";
import Title from "../../../components/partials/Title";
import "./style.scss"
import 'react-circular-progressbar/dist/styles.css';
import SliderContainer from "../../../components/sections/Container/SliderContainer";
import { Pagination } from "swiper/modules";
import { Slider } from "../../../components/partials/Slider";
import MovieTvBannerContainer from "../../../components/sections/Container/MovieTvBannerContainer";

export function MovieDetail() {
  const params = useParams();
  const pageId = params.id;
  console.log(pageId);
  const [movieDetailData, setMovieDetailData] = useState<MovieDetailDataType>({
    getMovieDetail: null,
  });
  const [loading, setLoading] = useState<boolean>(false);
  
  useEffect(() => {
    const fetchMovies = async () => {
      const getMovieDetail = await getMovieDetailAsync({ movieId: pageId });
      setMovieDetailData({ ...movieDetailData, getMovieDetail });
      setTimeout(() => {        
        setLoading(true);
      }, 5000);
    };
    fetchMovies();
  }, [])
  const movie = movieDetailData.getMovieDetail;
  // if (movie) {
    const castList = movieDetailData?.getMovieDetail?.credits;
    return (
      <>
        <MovieTvBannerContainer loading={loading} id="banner" className="banner" type="movie" data={movieDetailData.getMovieDetail} />
        {/* <SliderContainer id="Cast" className="card-slider-container-01">
          <Title title={"h2"}>
            <span>Cast</span>
          </Title>
          <Slider
            slides={castList}
            slidesPerView={5}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            // loop={true}
            modules={[Pagination]}
            slideType="CastSlideCard"
            classNameSwiperOuterDiv="cast-slider"
          />
        </SliderContainer> */}
      </>
    )
  // } else {
  //   return (
  //     <p>Hataa</p>
  //   )
  // }
}
