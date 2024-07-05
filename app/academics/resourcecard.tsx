import { Tags, TagsProps } from "../blogs/tags";

export interface ResourceCardProps {
    title: string;
    content: string;
    tags: TagsProps[];
}


export const ResourceCard = (data: ResourceCardProps) => {
    return (
        <div style={{ backgroundColor: '#FAFAFA' }} className="flex flex-col gap-4 rounded-2xl">
            <div className="m-8">
                <h1 className="font-semibold mb-2">{data.title}</h1>
                <p className="text-gray-500">{data.content}</p>
                <div>
                    <Tags tags={data.tags} />
                </div>
            </div>
        </div>
    )
}