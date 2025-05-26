import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import "./style.scss"

import type { SwiperTypes } from "./Slider.types";
import SelectedSlideType from "./Slides";
import { useLoading } from "../../../context/LoadingContext";
import SelectedSkeletonType from "../Skeleton";

export function Slider<T extends { id: number }>(
    {
        sectionName,
        slides,
        config
    }: SwiperTypes<T>
) {
    const { loadingMap } = useLoading();
    const isLoading = loadingMap[sectionName];
    
    if (isLoading) {
        return (
            <div className={config?.swiperOuterClassName + " outer-swiper"}>
                <Swiper {...config?.sliderFeatures}>
                    {Array.from({ length: 10 }).map((_, i) => (
                        <SwiperSlide key={i}>
                            {SelectedSkeletonType(config?.slideType, null)}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        );
    }
    else {
        const data = config?.slidesMaxCount != null ? slides?.slice(0, config.slidesMaxCount) : slides;
        return (
            <div className={config?.swiperOuterClassName + " outer-swiper"}>
                <Swiper {...config?.sliderFeatures}>
                    {data?.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            {SelectedSlideType(config?.slideType, slide)}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        )
    }
}