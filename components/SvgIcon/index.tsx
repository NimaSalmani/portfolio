import { useMemo } from "react"
import { ISvgIcon } from "./type"

export const SvgIcon = (props:ISvgIcon) => {
    const { children,className,fillColor,strockColor } = props

    const strokeClass = useMemo(()=>{
        switch(strockColor){
            case "purple" : 
                return "[&_path]:stroke-common-purple-dark"
            break;
            case "white" :
                return "[&_path]:stroke-white"
            break;
            case "gray-light" : 
                return "[&_path]:stroke-typography-gray-light"
            break;
            case "gray-default" : 
                return "[&_path]:stroke-typography-gray-default"
            break;
            case "red-default" : 
                return "[&_path]:stroke-common-red-default"
            break;
            case "red-dark" : 
                return "[&_path]:stroke-common-red-dark"
            break;
        }
    },[])

    const fillClass = useMemo(()=>{
        switch(fillColor){
            case "purple" : 
                return "[&_path]:fill-common-purple-dark"
            break;
            case "white" :
                return "[&_path]:fill-white"
            break;
            case "gray-light" : 
                return "[&_path]:fill-typography-gray-light"
            break;
            case "gray-default" : 
                return "[&_path]:fill-typography-gray-default"
            break;
            case "red-default" : 
                return "[&_path]:fill-common-red-default"
            break;
            case "red-dark" : 
                return "[&_path]:fill-common-red-dark"
            break;
        }
    },[])
    
    return (
        <div className={`${className} ${strokeClass} ${fillClass}`}>{ children }</div>
    )
}

