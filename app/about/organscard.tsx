import Image from "next/image";
// import { Tags } from "../blogs/tags";
import { Tag } from "./tag";

export interface OrganImagesProps {
    src: string;
    alt: string;
    name: string;
}

export interface OrgansCardProps {
    name: string;
    content: string;
    tag: string;
    images?: OrganImagesProps[];
}




export const OrgansCard = ({ name, content, tag, images }: OrgansCardProps) => {
    return(
        <div className="flex flex-col gap-4 rounded-2xl border border-gray-300">
            <div className="m-8">
                <h1 className="font-semibold mb-2 -mt-4 text-left">{name}</h1>
                <p className="text-gray-500 text-left text-sm">{content}</p>
                <div className="-mb-3">
                    <Tag color="black" tag={tag} />
                    <div>
                        {images?.map((image, index) => (
                            <Image key={index} src={image.src} alt={image.alt} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}