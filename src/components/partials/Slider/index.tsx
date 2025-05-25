import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./style.scss"

import type { SwiperTypes, SwiperTypes2 } from "./Slider.types";
import SelectedSlideType from "./Slides";
import { useLoading } from "../../../context/LoadingContext";
import SelectedSkeletonType from "../Skeleton";

// export function Slider<T extends { id: number }>(
//     {
//         key,
//         slides,
//         classNameSwiperOuterDiv = "",
//         slideType,
//         ...swiperProps
//     }: SwiperTypes<T>
// ) {
//     return (
//         <div className={classNameSwiperOuterDiv + " outer-swiper"}>
//             <Swiper {...swiperProps}>
//                 {slides.map((slide) => (
//                     <SwiperSlide key={slide.id}>
//                         {/* {SelectedSlideType(key, slideType, slide)} */}
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     )
// }
export function Slider<T extends { id: number }>(
    {
        sectionName,
        slides,
        config
    }: SwiperTypes<T>
) {

    const { loadingMap, setLoading } = useLoading();
    const isLoading = loadingMap[sectionName];
    // console.log(isLoading);
    if (isLoading) {
        // console.log(config?.swiperOuterClassName)
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