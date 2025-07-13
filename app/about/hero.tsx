import { HeroText } from "./herotext"
import Image from "next/image"
// import HeroCard from "./herocard"

export const AboutHero = () => {
    return (
        <div
            className="bg-white mt-16 max-w-[95%] min-h-[660px] border rounded-lg mx-auto"
            style={{
                backgroundImage: "url('/aboutmasjid.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                opacity: 0.97,
            }}
        >
            {/* BACKGROUND IMAGE replaced with CSS */}
            <div className="hero flex flex-col md:flex-row gap-5">
                <div className='w-full md:w-2/3 mx-8 mt-8 md:mt-20'>
                    <HeroText />
                </div>
                <div className='w-full md:w-1/3 m-8'>
                    {/* <HeroCard id={""} src={image} title={"DOS, Branch"} name={'Yusuf Habeeb'} children={undefined} /> */}
                </div>
            </div>
        </div>
    )
}