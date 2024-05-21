import { Button } from '@/components/Button'
import { SvgIcon } from '@/components/SvgIcon'
import { IcCall,IcBehance,IcBootstrap,IcChevronLeft,IcChevronRight,IcDribble,IcEmail,IcEye,IcFigma,IcGoogleMap,IcInstagram,IcJira,IcLinkdin,IcMaterialUi,IcReact,IcRedux,IcSass,IcTailwind,IcTelegram,IcTrello,IcTypescript,IcWatsApp,IcZeplin } from '@/components/Icon'


const page = () => {
  return (
    <div className='bg-neutral-900 p-[40px] min-h-screen'>
        <div>
            <h1 className='text-typography-default font-e_semibold text-2xl mb-5'>Buttons</h1>
            <div>
               <Button varient="outline" color="purple" className="mr-[12px]">Download My Resume</Button>
               <Button varient="outline" color="transpaernt">Download My Resume</Button>
            </div>
        </div>

        <hr className='my-7' />

        <div>
          <h1 className='text-typography-default font-e_semibold text-2xl mb-5'>Icons</h1>
          <div className="flex gap-[12px]">
          <SvgIcon className="[&_svg]:w-[24px] [&_svg]:h-[24px]" fillColor="white">
            <IcCall/>
          </SvgIcon>
          <SvgIcon className="[&_svg]:w-[24px] [&_svg]:h-[24px]" fillColor="white">
            <IcEmail/>
          </SvgIcon>
          <SvgIcon className="[&_svg]:w-[24px] [&_svg]:h-[24px]" fillColor="white">
            <IcInstagram/>
          </SvgIcon>
          <SvgIcon className="[&_svg]:w-[24px] [&_svg]:h-[24px]" fillColor="white">
            <IcTelegram/>
          </SvgIcon>
          <SvgIcon className="[&_svg]:w-[24px] [&_svg]:h-[24px]" fillColor="white">
            <IcWatsApp/>
          </SvgIcon>
          <SvgIcon className="[&_svg]:w-[24px] [&_svg]:h-[24px]" fillColor="white">
            <IcLinkdin/>
          </SvgIcon>
          <SvgIcon className="[&_svg]:w-[24px] [&_svg]:h-[24px]" fillColor="white">
            <IcBehance/>
          </SvgIcon>
          <SvgIcon className="[&_svg]:w-[24px] [&_svg]:h-[24px]" strockColor="white">
            <IcChevronLeft/>
          </SvgIcon>
          <SvgIcon className="[&_svg]:w-[24px] [&_svg]:h-[24px]" strockColor="white">
            <IcChevronRight/>
          </SvgIcon>
          <SvgIcon className="[&_svg]:w-[24px] [&_svg]:h-[24px]" fillColor="white">
            <IcDribble/>
          </SvgIcon>
          <SvgIcon className="[&_svg]:w-[24px] [&_svg]:h-[24px]" fillColor="white">
            <IcEye/>
          </SvgIcon>
          <SvgIcon className="[&_svg]:w-[24px] [&_svg]:h-[24px]">
            <IcFigma/>
          </SvgIcon>
          <SvgIcon className="[&_svg]:w-[24px] [&_svg]:h-[24px]">
            <IcJira/>
          </SvgIcon>
          <SvgIcon className="[&_svg]:w-[24px] [&_svg]:h-[24px]">
            <IcMaterialUi/>
          </SvgIcon>
          <SvgIcon className="[&_svg]:w-[24px] [&_svg]:h-[24px]">
            <IcGoogleMap/>
          </SvgIcon>
          <SvgIcon className="[&_svg]:w-[24px] [&_svg]:h-[24px]">
            <IcReact/>
          </SvgIcon>
          <SvgIcon className="[&_svg]:w-[24px] [&_svg]:h-[24px]">
            <IcRedux/>
          </SvgIcon>
          <SvgIcon className="[&_svg]:w-[24px] [&_svg]:h-[24px]">
            <IcSass/>
          </SvgIcon>
          <SvgIcon className="[&_svg]:w-[24px] [&_svg]:h-[24px]">
            <IcTailwind/>
          </SvgIcon>
          <SvgIcon className="[&_svg]:w-[24px] [&_svg]:h-[24px]">
            <IcTrello/>
          </SvgIcon>
          <SvgIcon className="[&_svg]:w-[24px] [&_svg]:h-[24px]">
            <IcTypescript/>
          </SvgIcon>
          <SvgIcon className="[&_svg]:w-[24px] [&_svg]:h-[24px]">
            <IcZeplin/>
          </SvgIcon>
          <SvgIcon className="[&_svg]:w-[24px] [&_svg]:h-[24px]">
            <IcBootstrap/>
          </SvgIcon>
          </div>
        </div>
    </div>
  )
}

export default page