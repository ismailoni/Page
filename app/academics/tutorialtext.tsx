import { MdArrowForward } from "react-icons/md"
import Btn from "../components/atoms/btn"

export const TutorialText = () => {
    return (
        <div className="mt-10">
            <h1 className="font-bold text-3xl mb-2">MSSN Tutorial</h1>
            <p className="py-2 text-gray-600">Human makes a society. There is no us without you and that’s what makes your need our utmost concern.</p>

            <p className="py-2 text-gray-600">We have curated resources to aid your academic surgeon on campus. Check the files via the link below</p>

            <p className="py-2 text-gray-600"> We are a team of engineers, entrepreneurs, designers and artists working together with a singular mission of building a new and better future of successful and permission-less entrepreneurship for everyone.We have curated resources to aid your academic surgeon on campus. Check the files via the link below</p>

            <p className="py-2 text-gray-600"> We are a team of engineers, entrepreneurs, designers and artists working together with a singular mission of building a new and better future of successful and permission-less entrepreneurship for everyone.</p>
            <Btn
                className="font-bold px-6 py-4"
                styles={{
                    margin: "1rem -2rem",
                }}>
                Join Our Members List.
                <MdArrowForward size={20} />
            </Btn>
        </div>
    )
}