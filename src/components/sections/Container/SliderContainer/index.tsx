import type { SliderContainerType } from "./SliderContainer.type";
import "./style.scss"

export default function SliderContainer({ id, className, children }: SliderContainerType) {
    return (
        <section id={id} className={className}>
            <div className="inner-section">
                {children}
            </div>
        </section>
    )
}
