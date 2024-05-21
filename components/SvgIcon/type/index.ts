import { IColorType } from "@/components/_common/types/color_type";
import { SVGAttributes } from "react";

export interface ISvgIcon extends SVGAttributes<HTMLOrSVGElement>{
    fillColor ?: IColorType
    strockColor ?: IColorType
}