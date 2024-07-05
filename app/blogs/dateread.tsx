export interface DateReadProps {
    date: string;
    minsRead: number;
}

export const DateRead = ({ date, minsRead }: DateReadProps) => {
    return (
        <div className="flex gap-4 mt-5 ml-3">
            <hr className="border border-gray-500 font-light py-3" />
            <p className="text-gray-500 text-sm mt-1"> {date} </p>
            <hr className="border border-gray-500 font-light py-3" />
            <p className="text-gray-500 text-sm mt-1"> {minsRead} mins read </p>
        </div>
    )
}