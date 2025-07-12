import { BsDot } from "react-icons/bs";

export interface TagsProps {
    tag: string;
    color?: string;
    rounded?: string;
}

export const Tag = ({ tag, color, rounded }: TagsProps) => {
    return (
        <div className="flex justify-between py-3">
            <div>
                <button
                    className={`card-button  hover:bg-[${color}] rounded-[${rounded}] border-[${color}] text-[${color}] bg-transparent`}>
                    <BsDot />
                    {tag}
                </button>
            </div>
        </div>
    )
}

export const Tags = ({ tags }: { tags: TagsProps[] }) => {
    return (
        <div className="flex flex-wrap">
            {tags.map((tag, index) => (
                <Tag key={index} tag={tag.tag} color={tag.color} />
            ))}
        </div>
    )
}