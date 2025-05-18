import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./style.scss"

import type { SwiperTypes } from "./Slider.types";
import SelectedSlideType from "./Slides";

export function Slider<T extends { id: number }>(
    {
        slides,
        classNameSwiperOuterDiv = "",
        slideType,
        ...swiperProps
    }: SwiperTypes<T>
) {
    return (
        <div className={classNameSwiperOuterDiv + " outer-swiper"}>
            <Swiper {...swiperProps}>
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        {SelectedSlideType(slideType, slide)}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}