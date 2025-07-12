import { MdArrowForward } from "react-icons/md"

export const HeroText = () => {
    return (
        <div className="-mt-10 m-4">
            <h1 className="font-bold text-5xl mb-2">An Association that Cares 
            <br />
            for your Needs</h1>
            <p className="py-2 text-gray-600">Human makes a society. There is no us without you <br /> and that’s what makes your need our utmost concern.</p>
            <button
                className="font-bold px-6 py-4 mx-4 -my-8">
                Join Our Members List.
                <MdArrowForward size={20} />
            </button>
        </div>
    )
}