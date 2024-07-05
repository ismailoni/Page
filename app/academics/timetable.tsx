import { TimetableText } from "./timetabletext"
import { TimetableView } from "./timetableview"

export const Timetable = () => {
    return (
        <div className="bg-gradient-to-r from-green-800 to-teal-600">
            <TimetableText />
            <TimetableView />
        </div>
    )
}