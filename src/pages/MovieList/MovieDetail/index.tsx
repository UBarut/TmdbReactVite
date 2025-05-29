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
import HelmetComp from "@HelmetComp";
import { useLoading } from "@context/LoadingContext";

export function MovieDetail() {
  const params = useParams();
  const pageId = params.id;

  const [movieDetailData, setMovieDetailData] = useState<MovieDetailDataType>({
    getMovieDetail: null,
  });
  const { setLoading } = useLoading();

  useEffect(() => {
    //sekronizasyon problemi var!!!
    setLoading("movieDetailBanner", false);
    setLoading("castSlider", true);
    // debugger;
    const fetchMovies = async () => {
      const getMovieDetail = await getMovieDetailAsync({ movieId: pageId });
      setMovieDetailData({ ...movieDetailData, getMovieDetail });
      // debugger;
    };
    fetchMovies();
  }, [pageId]);

  useEffect(() => {
    if (movieDetailData.getMovieDetail != null) {
      // setTimeout(() => {
      setLoading("movieDetailBanner", true);
      setLoading("castSlider", false);
      // debugger;
      // }, 1000);
    }
  }, [movieDetailData.getMovieDetail]);


  const castList = movieDetailData?.getMovieDetail?.credits;

  const headData = {
    title: movieDetailData.getMovieDetail?.title.toString() || "",
    desc: movieDetailData.getMovieDetail?.tagline
  }
  const sliderConfig = {
    elementClassName: "cast-card-slider-container-01",
    slideType: "CastSlideCard",
    swiperOuterClassName: "cast-slider",
    sliderFeatures: {
      slidesPerView: 5,
      spaceBetween: 20,
      pagination: {
        clickable: true,
      },
      loop: true,
      modules: [Pagination],
    },
    slidesMaxCount: null
  }
  return (
    <>
      <HelmetComp headData={headData} />
        <MovieTvBannerContainer id="banner" className="banner" type="movie" data={movieDetailData.getMovieDetail} />
      <SliderContainer id="Cast" className="card-slider-container-01">
        <Title title={"h2"}>
          <span>Cast</span>
        </Title>
        <Slider
          sectionName={"castSlider"}
          slides={castList}
          config={sliderConfig}
        />
      </SliderContainer>
    </>
  )
}
