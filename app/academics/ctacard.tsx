import Image from "next/image";
import { Tag, TagsProps } from "../blogs/tags";
import Btn from "../components/atoms/btn";

export interface CTACardProps {
    title: string;
    content: string;
    cta: string;
    tag: string;
    image: string;
}



export const CTACard = (props: CTACardProps) => {
    return (
        <div className='flex flex-col border-2 rounded-2xl w-[400px] border-[#84D7C0] my-16 mx-7'>
            <div className="mx-6 mt-10">
                <div className="flex justify-center">
                    <Tag tag={props.tag} color="#84D7C0" rounded="full" />
                </div>
                <div>
                    <h1 className="text-center text-white font-semibold text-2xl">{props.title}</h1>
                    <p className="text-center text-white text-sm">{props.content}</p>
                </div>
                <div className="flex justify-center my-6">
                    <Btn className="px-5 py-3 font-semibold">{props.cta}</Btn>
                </div>
            </div>
            <div className="flex justify-center">
                <Image height={420} width={280} src={props.image} alt={""} />
            </div>
        </div>
    )
}