import Image from "next/image";
import button from "../components/atoms/button";
import { BsDot } from "react-icons/bs";


export interface Program {
    img: string;
    name: string;
    desc: string;
    color: string;
    button: string;
}


export const ProgramsCard = ({ program }: { program: Program }) => {
    return (
        <div className="program-card shadow-md rounded-2xl">
            <Image
                src={program.img}
                width={400}
                height={400}
                className=" object-center object-cover rounded-xl m-6"
                alt={program.img}
            />
            <div className="card-text text-left m-6">
                <h3 className="text-left font-bold"> {program.name} </h3>
                <p className="text-left">{program.desc}</p>
                <button
                    styles={{
                        border: "1px solid  " + program.color,
                        color: program.color,
                        backgroundColor: "transparent",
                    }}
                    className={`card-btn  hover:bg-[${program.color}]`}>
                    <BsDot />
                    {program.btn}
                </button>
            </div>
        </div>
    );
}