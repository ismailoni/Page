import React from "react";
import "@/app/styles/hero.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdArrowForward } from "react-icons/md";
import Image from "next/image";
import Btn from "../components/atoms/btn";

export const BlogHero: React.FC = () => {
    return (
        <section className="hero">
            <div className="text-section">
                <h1>
                    Blog - The central place for all Muslim students on campus
                </h1>
                <p>
                    Human makes a society. There is no us without you and that’s what
                    makes your need our utmost concern. Human makes a society. There is no
                    us without you.
                </p>

                <Btn
                    className="font-bold px-6 py-4 gap-3"
                    styles={{
                        margin: "2rem 0",
                    }}>
                    Publish A Post
                    <MdArrowForward size={20} />
                </Btn>
            </div>
        </section>
    );
}
