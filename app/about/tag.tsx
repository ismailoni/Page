import { BsDot } from "react-icons/bs"
import Btn from "../components/atoms/btn"

export interface TagsProps {
    tag: string;
    color?: string;
    rounded?: string;
}

export const Tag = ({ tag, color, rounded }: TagsProps) => {
    return (
        <div className="flex justify-between py-3">
            <div className="-ml-6">
                <Btn
                    styles={{
                        border: "1px solid  " + color,
                        color: color,
                        backgroundColor: "transparent",
                    }}
                    className={`card-btn  hover:bg-[${color}] rounded-[${rounded}]`}>
                    <BsDot className="" />
                    {tag}
                </Btn>
            </div>
        </div>
    )
}