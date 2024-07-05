import Image from "next/image";
import React from "react";

export default function HeroCard({
    id,
    src,
    name,
    title,
    children,
    isReversed,
}: {
    id: string;
    src: string;
    title: string;
    name: string;
    children: React.ReactNode;
    isReversed?: boolean;
}) {
    return (
        <div id={"/#" + id} className={`mvp-card ${isReversed && "is-reversed"} m-4`}>
            <div className={"text-section "}>{children}</div>

            <div className="profile-wrap">
                <div className="img-wrap w-[450px] h-[500px]">
                    <Image
                        src={src}
                        alt=""
                        height={150}
                        width={200}
                        className="object-cover w-full p-8 border border-[#84d7c0] border-b-0 rounded-3xl"
                    />
                </div>
                <div className="name img-wrap shadow-white flex justify-center shadow-xl">
                    <div className="img-wrap border p-4 rounded-2xl border-[#84d7c080] mt-1">
                        <p> {title} </p>
                        <p> {name} </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
