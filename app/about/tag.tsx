import { BsDot } from "react-icons/bs"

export interface TagsProps {
    tag: string;
    color?: string;
    rounded?: string;
}

export const Tag = ({ tag, color, rounded }: TagsProps) => {
    return (
        <div className="flex justify-between py-3">
            <div className="ml-2 border boder-[#141414] p-2 rounded-full text-sm" >
                <button
                    className={`card-button  hover:bg-[${color}] rounded-[${rounded}] border border-[${color}] text-[${color}] bg-transparent`}>
                    <BsDot className="" />
                    {tag}
                </button>
            </div>
        </div>
    )
}