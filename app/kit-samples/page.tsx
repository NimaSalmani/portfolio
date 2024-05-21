import { Button } from '@/components/Button'
import React from 'react'

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
    </div>
  )
}

export default page