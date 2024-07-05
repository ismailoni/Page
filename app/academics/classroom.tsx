import { ClassroomCard } from "./classroomcard"
import { ClassroomText } from "./classroomtext"

export const Classroom = () => {
    return (
        <div className="flex bg-white m-12 mt-36">
            <div className="w-2/5">
                <ClassroomCard />
            </div>
            <div className="w-3/5">
                <ClassroomText />
            </div>
        </div>
    )
}