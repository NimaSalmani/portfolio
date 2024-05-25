import { ContactUs } from "./contact-us"
import { Welcome } from "./welcome"


export const Intro = () => {
  return (
    <section>
        <Welcome/>
        <div>
            <ContactUs/>
        </div>
    </section>
  )
}
