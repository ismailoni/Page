import React from "react";
import "@/app/styles/hero.css";
import { MdArrowForward } from "react-icons/md";

export const BlogHero: React.FC = () => {
    return (
        <section className="hero">
            <div className="text-section">
                <h1>
                    Blog - The central place for all Muslim students on campus
                </h1>
                <p>
                    Human makes a society. There is no us without you and that&apos;s what
                    makes your need our utmost concern. Human makes a society. There is no
                    us without you.
                </p>

                <button
                    className="font-bold px-6 py-4 gap-3 my-8 mx-0">
                    Publish A Post
                    <MdArrowForward size={20} />
                </button>
            </div>
        </section>
    );
}
