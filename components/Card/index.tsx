import { ICard } from "./type"
import { useMemo } from "react"

export const Card = (props:ICard) => {

    const { children,className,varient,color,glass } = props

    // Specify card color
    const color_card = useMemo(()=>{
        switch(color){
            case "purple" : 
                return "bg-common-purple-default"
            case "purple-dark" : 
                return "bg-common-purple-dark"
            case "gray-dark" : 
                return "bg-background-gray-dark"
            case "gray-default" : 
                return "bg-background-gray-default"
            case "gray-light" :
                return "bg-background-gray-default"
            case "red-dark" : 
                return "bg-common-red-dark"
            case "red" :
                return "bg-common-red-default"
            case "white" : 
                return "bg-white"
            case "transpaernt" : 
                return ""
            default :
                return ""
        }
    },[color])

    // Determine the color of the card border
    const outline_card = useMemo(()=>{
        switch (color){
            case "purple" :
                return "border-[1px] border-common-purple-dark"
            case "red" :
                return "border-[1px] border-common-red-dark"
        }
    },[color])

    // Specifying the appearance characteristics of the card such as border
    const varient_card = useMemo(()=>{
        switch(varient){
            case "fill" : 
                return color_card
            case "outline" :
                return outline_card
        }
    },[varient])

    // Determining the glass mode of the card
    const glass_card = useMemo(()=>{
        switch(glass){
            case true :
                return "bg-opacity-15"
            case false :
                return "bg-opacity-100"
            default :
                return ""
        }
    },[glass])
    
    return (
        <div className={className + " " + varient_card + " " + color_card + " " + glass_card}>
            { children }
        </div>
    )
}
