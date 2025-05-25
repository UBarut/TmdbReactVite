import type React from "react";
import type { MainSlide, CardSlide_01, CardSlide_02, CastSlideCard_01 } from "./Slider.types";
import { Link } from "react-router-dom";

function MainSlide(slide: MainSlide) {
    return (
        <>
            <div className="image">
                <img src={slide.bg_image} alt={slide.title} />
            </div>
            <div className="content">
                {slide.title && <h3>{slide.title}</h3>}
            </div>
        </>
    )
}
function CardSlide_01(slide: CardSlide_01) {
    return (
        <Link to={slide.url} target={slide.target ? "_blank" : ""}>
            <div className="image h-full">
                <img src={slide.card_image} alt={slide.title} className="h-full object-cover" />
            </div>
        </Link>
    )
}
function CardSlide_02(slide: CardSlide_02) {
    return (
        <Link to={slide.url} target={slide.target ? "_blank" : ""}>
            <div className="image">
                <img src={slide.card_image} alt={slide.title} />
            </div>
        </Link >
    )
}
function CastSlideCard(slide: CastSlideCard_01) {
    return (
        <Link to={`/cast-list/${slide.id}`}>
            <div className="card_image">
                <img src={slide.card_image} alt={slide.name} />
            </div>
            <div className="content">
                <p className="name">{slide.name}</p>
                <p className="character-name">{slide.characterName}</p>
            </div>
        </Link >
    )
}
// Daha dinamik yapılması için incelenecek.
export default function SelectedSlideType(slideName: string, slide: any) {
        console.log(slideName)
    const slides: Record<string, React.FC<any>> = {
        MainSlide,
        CardSlide_01,
        CardSlide_02,
        CastSlideCard,
    };

    const SlideComponent = slides[slideName];

    return SlideComponent ? <SlideComponent {...slide} /> : null;
}