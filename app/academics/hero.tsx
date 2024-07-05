import { HeroText } from "./herotext"
import Image from "next/image"
import image from "@/public/dosbranch.svg"
import HeroCard from "./herocard"

export const AcademicsHero = () => {
    return (
        <div className="bg-white">
            <div className="hero flex gap-5">
                <div className='w-2/3 m-8 mt-16'>
                    <HeroText />
                </div>
                <div className='w-1/3 m-8'>
                    <HeroCard id={""} src={image} title={"DOS, Branch"} name={'Yusuf Habeeb'} children={undefined} />
                </div>
            </div>
        </div>
    )
}