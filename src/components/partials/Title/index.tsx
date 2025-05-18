import type { JSX } from "react"
import type { TitleTypes } from "./Title.types"
import "./style.scss"

export default function Title({ title, className, children }: TitleTypes) {
    const Tag = title as keyof JSX.IntrinsicElements

    return <Tag className={className}>{children}</Tag>
}