import { IColorType } from "@/components/_common/types/color_type";
import { HTMLAttributes } from "react";

export interface ICard extends HTMLAttributes<HTMLDivElement>{
    varient ?: "outline" | "fill"
    color ?: IColorType
    glass ?: boolean
}