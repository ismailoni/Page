import Image from "next/image"
import image from '@/public/classroom.svg'

export const ClassroomCard = () => {
    return (
        <div>
            <h1 className="font-bold text-5xl mb-6">Beyond The <br /> Classroom</h1>
            <div>
                <Image className="" src={image} alt={""} />
            </div>
        </div>
    )
}