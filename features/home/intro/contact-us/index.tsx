import { SvgIcon } from "@/components/SvgIcon"
import { IcCall,IcEmail } from "@/components/Icon"

export const ContactUs = () => {
    return (
        <div className='flex gap-[20px] items-center'>
            <div className='flex gap-[8px] items-center'>
              <SvgIcon className='[&_path]:w-[20px] [&_path]:h-[20px]' fillColor="red">
                <IcCall/>
              </SvgIcon>
              <span className='text-[16px] font-e_medium text-typography-gray-light'>+989106942198</span>
            </div>
            <div className='w-[1px] h-[16px] bg-background-gray-dark'/>
            <div className='flex gap-[8px] items-center'>
              <SvgIcon className='[&_path]:w-[20px] [&_path]:h-[20px]' fillColor='red'>
                <IcEmail/>
              </SvgIcon>
              <span className='text-[16px] font-e_medium text-typography-gray-light'>nimasalmani2001@gmail.com</span>
            </div>
        </div>
    )
}