import { Intro } from "./intro";
import { Skills } from "./skills";
export const Home = () => {
  return (
    <div className="flex flex-col gap-[120px]">
        <Intro/>
        <Skills/>
    </div>
  )
}
