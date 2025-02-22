import { base,data } from './_common/data'
import { CardSkill } from './card-skill'

export const Skills = () => {
    return (
        <section className="relative">
            <div className="pb-[32px] border-b-[1px] border-background-gray-dark flex justify-between">
                <div className="w-7/12">
                    <h1 className="text-[48px] font-e_semibold text-common-yellow-dark">My Skills</h1>
                    <span className="text-[80px] font-e_semibold text-white/5 absolute -top-[50px] -left-[40px]">My Skills</span>
                    <p className="mt-[8px] text-[16px] text-typography-gray-light">Every breath we surrender will turn back the death that continues to inflict on us ... Ultimately, this death is to be won, because it was part of </p>
                </div>
                <div className="w-4/12 flex gap-[24px] justify-end">
                    {
                        base.map((item,index) => 
                            <CardSkill key={index} icon={item.icon} name={item.name}/>
                        )
                    }
                </div>
            </div>
            <div className="flex pt-[32px] justify-between">
                {
                    data.map((item,index)=>
                        <CardSkill key={index} icon={item.icon} name={item.name}/>
                    )
                }
            </div>
        </section>
    )
}
