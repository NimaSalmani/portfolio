import { SvgIcon } from "@/components/SvgIcon"
import { IcWatsApp,IcInstagram,IcTelegram,IcLinkdin,IcBehance,IcDribble } from "@/components/Icon"


export const SocialMedia = () => {
    return (
        <div className='flex gap-6 items-center'>
            <SvgIcon className='[&_path]:w-[18px] [&_path]:h-[18px]' fillColor='gray-default'>
              <IcInstagram/>
            </SvgIcon>
            <SvgIcon className='[&_path]:w-[18px] [&_path]:h-[18px]' fillColor='gray-default'>
              <IcTelegram/>
            </SvgIcon>
            <SvgIcon className='[&_svg]:w-[20px] [&_svg]:h-[20px]' fillColor='gray-default'>
              <IcLinkdin/>
            </SvgIcon>
            <SvgIcon className='[&_path]:w-[18px] [&_path]:h-[18px]' fillColor='gray-default'>
              <IcWatsApp/>
            </SvgIcon>
            <SvgIcon className='[&_path]:w-[18px] [&_path]:h-[18px]' fillColor='gray-default'>
              <IcBehance/>
            </SvgIcon>
            <SvgIcon className='[&_path]:w-[18px] [&_path]:h-[18px]' fillColor='gray-default'>
              <IcDribble/>
            </SvgIcon>
        </div>
    )
}