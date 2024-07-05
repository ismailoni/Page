import Nav from "../components/molecules/Nav";
import { Achievements } from "./achievements";
import { Classroom } from "./classroom";
import { CTA } from "./cta";
import { AcademicsHero } from "./hero";
import { PastMembers } from "./members";
import { AllResources } from "./resources";
import { Timetable } from "./timetable";
import { Tutorial } from "./tutorial";

export const AcademicsPage = () => {
    return (
        <div className="bg-white">
            <Nav />
            <AcademicsHero />
            <Tutorial />
            <Timetable />
            <AllResources />
            <Achievements />
            <Classroom />
            <PastMembers />
            <CTA />
        </div>
    )
}

export default AcademicsPage;