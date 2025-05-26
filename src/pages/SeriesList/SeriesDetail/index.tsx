import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getSeriesDetailAsync } from "../../../services/api/TMDBApi";
import type { SeriesDetailDataType } from "./SeriesDetail.type";
import Title from "../../../components/partials/Title";
import "./style.scss"
import 'react-circular-progressbar/dist/styles.css';
import SliderContainer from "../../../components/sections/Container/SliderContainer";
import { Pagination } from "swiper/modules";
import { Slider } from "../../../components/partials/Slider";
import MovieTvBannerContainer from "../../../components/sections/Container/MovieTvBannerContainer";

export function SeriesDetail() {
  const params = useParams();
  const pageId = params.id;
  const [seriesDetailData, setSeriesDetailData] = useState<SeriesDetailDataType>({
    getSeriesDetail: null,
  });

  useEffect(() => {
    const fetchSeries = async () => {
      const getSeriesDetail = await getSeriesDetailAsync({ seriesId: pageId });
      setSeriesDetailData({ ...seriesDetailData, getSeriesDetail });
    };
    fetchSeries();
  }, []);

  const series = seriesDetailData.getSeriesDetail;

  if (series) {
    const castList = seriesDetailData?.getSeriesDetail?.credits;
    return (
      <>
        <MovieTvBannerContainer id="banner" className="banner" type={"series"} data={seriesDetailData.getSeriesDetail} />
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
  } else {
    return (
      <p>Hataa</p>
    )
  }
}
