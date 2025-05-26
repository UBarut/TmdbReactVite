
import { useEffect, useState } from "react"
import { getMoviesTvAsync } from "@api/TMDBApi";
import { Slider } from "@partials/Slider";
import Title from "@partials/Title";
import SliderContainer from "@components/sections/Container/SliderContainer";
import { movieTvApiSections } from "@constants/movieTvApiSections";
import { useLoading } from "@context/LoadingContext";
import HelmetComp from "@HelmetComp";
import model from "./model";

export function Home() {
  const [movieData, setMovieData] = useState<Record<string, any[]>>({});
  const { setLoading } = useLoading();

  useEffect(() => {
    Object.keys(movieTvApiSections).forEach((key) => {
      setLoading(key, true);
    });
    const fetchMovies = async () => {
      const result: Record<string, any[]> = {};
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
            setLoading(key, false);
          } catch (err) {
            console.error(`Error fetching data for key: ${key}`, err);
            result[key] = [];
          }
        })
      );
      setMovieData(result);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <HelmetComp headData={model.languages["en"].seo} />
      {
        Object.entries(movieTvApiSections).map(
          ([key, configArray]) => {
            const config = configArray[0]
            const slides = movieData[key];

            return (
              <SliderContainer key={key} id={key} className={config.elementClassName}>
                {config.title != null &&
                  <Title title={"h2"}>
                    <span>{config.title}</span>
                  </Title>
                }
                <Slider
                  sectionName={key}
                  slides={slides}
                  config={config}
                />
              </SliderContainer>
            );
          }
        )
      }
    </>
  );

}
