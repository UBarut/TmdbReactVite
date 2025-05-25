import type { SwiperProps } from "swiper/react"

export type BaseSlide = {
  id: number
}
//Type Render
// export type SwiperTypes<T extends BaseSlide> = Partial<SwiperProps> & {
//   key: string
//   slides: T[]
//   classNameSwiperOuterDiv?: string
//   slideType: string
// }
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
}
export type MainSlideOld = BaseSlide & {
  backdrop_path: string
  original_title?: string
}

export type CardSlide_01 = BaseSlide & {
  url: string
  card_image: string
  target: boolean
  title?: string
}
export type CardSlide_02 = BaseSlide & {
  url: string
  card_image: string
  target: boolean
  title?: string
}

export type CastSlideCard_01 = BaseSlide & {
  url: string
  card_image: string
  target: boolean
  name?: string
  characterName?: string
}