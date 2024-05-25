import { ContactUs } from "./contact-us"
import { SocialMedia } from "./social-media"
import { Welcome } from "./welcome"


export const Intro = () => {
  return (
    <section>
        <Welcome/>
        <div className='flex justify-between py-[32px] border-t-[1px] border-background-gray-dark items-center'>
            <ContactUs/>
            <SocialMedia/>
        </div>
    </section>
  )
}
