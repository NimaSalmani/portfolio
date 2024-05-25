import { SvgIcon } from "@/components/SvgIcon"
import { IcCall } from "@/components/Icon"
import { Button } from "@/components/Button"

export const Welcome = () => {
  return (
    <div className='my-[80px] xl:my-[100px] 2xl:h-[40vh] 2xl:flex 2xl:flex-col 2xl:justify-center'>
        <h1 className=' font-e_semibold text-[48px] text-center text-common-yellow-dark lg:px-[200px] xl:px-[8%] 2xl:px-[14%]'>When Large Fortunes <br/> Fall Into The Hands Of Some</h1>
        <p className='text-[16px] text-typography-gray-light mt-[12px] text-center lg:px-[180px] xl:px-[6%] 2xl:px-[10%]'>When large fortunes fall into the hands of some people, they become strong in the light of it, and in the shadow of strength and wealth they dream that they can live out of their homeland and be happy and proud, they will soon realize </p>
        <div className='flex pt-[48px] gap-[24px] justify-center'>
          <Button varient='outline' color='transpaernt' className='flex gap-[4px]'>
            <SvgIcon className='[&_path]:w-[20px] [&_path]:h-[20px]' fillColor='gray-light'>
              <IcCall/>
            </SvgIcon>
            Contact Me
          </Button>
          <Button varient='outline' color='purple'>Download My Resume</Button>
        </div>
    </div>
  )
}

