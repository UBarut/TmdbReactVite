
import { useEffect, useState } from "react"
import { getMoviesTvAsync } from "../../services/api/TMDBApi";
import { Slider } from "../../components/partials/Slider";
// import type { MovieData } from "./Home.types";
import Title from "../../components/partials/Title";
import SliderContainer from "../../components/sections/Container/SliderContainer";
import { movieTvApiSections } from "../../utils/constants/movieTvApiSections";

export function Home() {
  const [movieData, setMovieData] = useState<Record<string, any[]>>({});

  useEffect(() => {
    const fetchMovies = async () => {
      const result: Record<string, any[]> = {};
      // await Promise.all(
      //   movieTvApiSections.map(async ({ key, apiType, page, successMethod, errorMethod, apiCategory, urlPrefix }) => {
      //     try {
      //       const data = await getMovieTvListData({ apiType, apiCategory, page, successMethod, errorMethod });
      //       result[key] = data.map((item: any) => ({
      //         url: `${urlPrefix}${item.id}`,
      //         name: item.original_title,
      //         target: false,
      //         image: item.poster_path,
      //         bg_image: item.backdrop_path
      //       }));
      //     } catch (err) {
      //       console.error(`Error fetching ${key}`, err);
      //       result[key] = [];
      //     }
      //   })
      // );
      await Promise.all(

        Object.entries(movieTvApiSections).map(async ([key, configArray]) => {
          try {
            const dataArray = await Promise.all(
              configArray.map(async (config) => {
                return await getMoviesTvAsync({
                  type: config.apiType,
                  category: config.apiCategory,
                  page: config.page,
                  urlPrefix: config.urlPrefix,
                  successMethod: config.successMethod,
                  errorMethod: config.errorMethod,
                });
              })
            );

            // result[key] = dataArray.flat();
            result[key] = dataArray.flat().sort((a, b) => {
              return new Date(b.release_date).getTime() - new Date(a.release_date).getTime();
            });

          } catch (err) {
            console.error(`Error fetching data for key: ${key}`, err);
            result[key] = [];
          }
          // console.log(result);
        })
      );
      setMovieData(result);
    };
    fetchMovies();
  }, []);

  return (
    <>
      {console.log(movieData)}
      {
        Object.entries(movieTvApiSections).map(
          ([key, configArray]) => {
            const config = configArray[0]
            const slides = movieData[key];
            if (!slides) return null;

            return (
              <SliderContainer key={key} id={key} className={config.elementClassName}>
                {config.title != null &&
                  <Title title={"h2"}>
                    <span>{config.title}</span>
                  </Title>
                }
                <Slider
                  slides={config.slidesMaxCount != null ? slides.slice(0, config.slidesMaxCount) : slides}
                  {...config.sliderFeatures}
                  slideType={config.slideType}
                  classNameSwiperOuterDiv={config.swiperOuterClassName}
                />
              </SliderContainer>
            );
          }
        )
      }
    </>
  );

}
