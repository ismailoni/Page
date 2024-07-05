import { HeroText } from "./herotext"
import Image from "next/image"
import image from "@/public/about masjid.svg"
// import HeroCard from "./herocard"

export const AboutHero = () => {
    return (
        <div className="bg-white mt-16">
            {/* BACKGRROUND IMAGE  */}
			<Image
				src={image}
				className="absolute top-0  opacity-30 w-full h-full object-cover"
				width={500}
				height={500}
				alt=""
			/>
			{/* BACKGRROUND IMAGE  */}
            <div className="hero flex gap-5">
                <div className='w-2/3 m-8 mt-16'>
                    <HeroText />
                </div>
                <div className='w-1/3 m-8'>
                    {/* <HeroCard id={""} src={image} title={"DOS, Branch"} name={'Yusuf Habeeb'} children={undefined} /> */}
                </div>
            </div>
        </div>
    )
}