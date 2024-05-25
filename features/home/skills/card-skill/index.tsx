import { Card } from "@/components/Card"
import { IData } from "../_common/type"

export const CardSkill = (props:IData) => {
    return (
        <Card className="flex flex-col items-center w-fit">
            <props.icon/>
            <p className="mt-[12px] text-[16px] font-e_medium text-typography-gray-light">{props.name}</p>
        </Card>
    )
}