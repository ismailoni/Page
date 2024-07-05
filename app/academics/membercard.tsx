import Image from "next/image";

export interface MemberCardProps {
    name: string;
    course: string;
    cgpa: number;
    image: string;
    position: string;
}

export const MemberCard = (props: MemberCardProps) => {
    return (
        <div>
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image
                    src={props.image}
                    alt="Member"
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-6 -left-12 bg-purple-500 text-white text-xs px-2 py-1 rounded-lg transform -rotate-45">
                    {props.position}
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-75 px-4 py-2 flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="bg-green-500 text-white text-sm font-bold px-2 py-1 rounded-full mr-2">
                            {props.cgpa}
                        </div>
                        <div>
                            <p className="text-sm font-bold">{props.name}</p>
                            <p className="text-xs text-gray-600">{props.course}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};