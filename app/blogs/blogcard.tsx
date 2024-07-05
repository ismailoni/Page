import Image from "next/image";
import { NameAvatar } from "./nameavatar";
import { NameCard } from "./namecard";
import { DateRead } from "./dateread";
import { Tags, TagsProps } from "./tags";

export interface BlogCardProps {
    firstname: string;
    lastname: string;
    date: string;
    title: string;
    content: string;
    minsRead: number;
    image: string;
    post: string;
    tags: TagsProps[];
}



export const BlogCard = (props: BlogCardProps) => {
    return (
        <div className="card shadow-lg flex gap-16 cursor-pointer blogbg-custom-svg">
            <div className="w-3/4 m-10">
                <div className="flex justify-between">
                    <div className="flex gap-3 mb-4">
                        <NameAvatar firstname={props.firstname} lastname={props.lastname} />
                        <NameCard name={`${props.firstname} ${props.lastname}`} post={props.post} />
                        <DateRead date={props.date} minsRead={props.minsRead} />
                    </div>
                </div>
                <div className="card-text text-left ">
                    <h3 className="text-left font-bold text-2xl mb-3"> {props.title} </h3>
                    <p className="text-left text-gray-600">{props.content}</p>
                </div>
                <Tags tags={props.tags} />
            </div>
            <div className="w-1/4 mx-10 my-16">
                <Image src={props.image} height={260} width={346.67} alt={""} />
            </div>
        </div>
    )
}