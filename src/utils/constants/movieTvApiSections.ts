import { Pagination } from "swiper/modules";

//Sliderlarda Kulanılan Değerler

export const movieTvApiSections = {
    popularMovieSeries: [
        {
            apiType: "movie",
            apiCategory: "popular",
            page: "1",
            title: null,
            urlPrefix: "/movie-list",
            successMethod: null,
            errorMethod: null,
            elementClassName: "main-slider-container",
            slideType: "MainSlide",
            swiperOuterClassName: "mainSlider",
            sliderFeatures: {
                slidesPerView: 1,
            },
            slidesMaxCount: 10,
        },
        {
            apiType: "tv",
            apiCategory: "popular",
            page: "1",
            title: null,
            urlPrefix: "/series-list",
            successMethod: null,
            errorMethod: null,
            elementClassName: "main-slider-container",
            slideType: "MainSlide",
            swiperOuterClassName: "mainSlider",
            sliderFeatures: {
                slidesPerView: 1,
            },
            slidesMaxCount: 5,
        }
    ],
    popularMovie: [{
        apiType: "movie",
        apiCategory: "popular",
        page: "1",
        title: "Popular Movies",
        urlPrefix: "/movie-list",
        successMethod: null,
        errorMethod: null,
        elementClassName: "card-slider-container-01",
        slideType: "CardSlide_01",
        swiperOuterClassName: "cardSlider-01",
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
    }],
    popularSeries: [{
        apiType: "tv",
        apiCategory: "popular",
        page: "1",
        title: "Popular Series",
        urlPrefix: "/series-list",
        successMethod: null,
        errorMethod: null,
        elementClassName: "card-slider-container-01",
        slideType: "CardSlide_01",
        swiperOuterClassName: "cardSlider-01",
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
    }],
    nowPlayingMovie: [{
        apiType: "movie",
        apiCategory: "now_playing",
        page: "1",
        title: "Now Playing Movies",
        urlPrefix: "/movie-list",
        successMethod: null,
        errorMethod: null,
        elementClassName: "card-slider-container-01",
        slideType: "CardSlide_01",
        swiperOuterClassName: "cardSlider-01",
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
    }],
    onTheAirSeries: [{
        apiType: "tv",
        apiCategory: "on_the_air",
        page: "1",
        title: "On The Air Series",
        urlPrefix: "/series-list",
        successMethod: null,
        errorMethod: null,
        elementClassName: "card-slider-container-01",
        slideType: "CardSlide_01",
        swiperOuterClassName: "cardSlider-01",
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
    }],
    topRatedMovie: [{
        apiType: "movie",
        apiCategory: "top_rated",
        page: "1",
        title: "Top Rated Movies",
        urlPrefix: "/movie-list",
        successMethod: null,
        errorMethod: null,
        elementClassName: "card-slider-container-01",
        slideType: "CardSlide_01",
        swiperOuterClassName: "cardSlider-01",
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
    }],
    topRatedSeries: [{
        apiType: "tv",
        apiCategory: "top_rated",
        page: "1",
        title: "Top Rated Series",
        urlPrefix: "/series-list",
        successMethod: null,
        errorMethod: null,
        elementClassName: "card-slider-container-01",
        slideType: "CardSlide_01",
        swiperOuterClassName: "cardSlider-01",
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
    }],
}