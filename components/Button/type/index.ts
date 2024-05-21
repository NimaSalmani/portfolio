import { IColorType } from "@/components/_common/types/color_type"
import { ButtonHTMLAttributes } from "react"


export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    color ?: IColorType
    varient ?: "outline" | "fill" | "text"
    buttonStyle ?: "square" | "rectangle"
}