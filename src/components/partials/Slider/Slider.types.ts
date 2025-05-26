import type { SwiperProps } from "swiper/react"

export type BaseSlide = {
  id: number
}

export type SwiperTypes<T extends BaseSlide> = Partial<SwiperProps> & {
  sectionName: string
  slides?: T[]
  config?: Record<string, any>
}

//Slider Types
export type MainSlide = BaseSlide & {
  url: string
  bg_image: string
  target: boolean
  title?: string
  desc?: string
  release_date: string
  vote_average: number
}

export type CardSlide_01 = BaseSlide & {
  url: string
  card_image: string
  target: boolean
  title?: string
  desc?: string
}

export type CastSlideCard_01 = BaseSlide & {
  url: string
  card_image: string
  target: boolean
  name?: string
  characterName?: string
}