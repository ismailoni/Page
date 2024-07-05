
export interface NameCardProps {
    name: string;
    post: string;
}

export const NameCard = ({ name, post }: NameCardProps) => {
    return (
        <div className="flex flex-col">
            <h3 className="font-semibold"> {name} </h3>
            <p className="text-gray-500 text-sm"> {post} </p>
        </div>
    )
}