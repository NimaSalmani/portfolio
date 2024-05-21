import { IButton } from './type'
import { useMemo } from 'react'

export const Button = (props:IButton) => {
    const {
        children , color , className , varient , buttonStyle
    } = props


    // Specify button color
    const color_button = useMemo (()=>{
        switch (color) {
            case "purple" : 
                return "bg-common-purple-dark text-typography-default"
            case "transpaernt" :
                return "bg-none text-typography-default"
            default : return "bg-common-purple-dark"
        }
    },[color])

    // Specifying the appearance characteristics of the button such as border
    const varient_button = useMemo(()=>{
        switch(varient) {
            case "fill" :
            case "outline" : 
                switch (color) {
                    case "purple" :
                        return "border-[3px] border-white/20"
                    case "transpaernt" : 
                        return "border-[3px] border-white/20" 
                }
            default : return "text-typography-default"
        }
    },[varient])

    // Detect whether the button is square or rectangular
    const style_button = useMemo(()=>{
        switch(buttonStyle){
            case "rectangle" : 
                return  "py-[12px] px-[32px]"
            case "square" : 
                return "w-12 h-12 flex justify-center items-center"

            default : 
                return "py-[12px] px-[32px]"
        }
    },[buttonStyle])

    return (
        <button className={`font-e_medium text-[16px] rounded-[12px] ${className} ${color_button} ${varient_button} ${style_button}`}>
            {children}
        </button>
    )
}

