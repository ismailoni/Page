"use client";
import Image from "next/image";
import data from "@/app/components/data.json";
import { BsDot } from "react-icons/bs";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import React, { useRef, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function Programs() {
  const { programs } = data;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cardWidth = 280; // Adjust to actual card width + margin

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const newScroll = direction === "left" ? scrollLeft - cardWidth : scrollLeft + cardWidth;
      scrollRef.current.scrollTo({ left: newScroll, behavior: "smooth" });

      const newIndex = Math.round(newScroll / cardWidth);
      setActiveIndex(newIndex);
    }
  };

  // Update active dot on manual scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const index = Math.round(container.scrollLeft / cardWidth);
      setActiveIndex(index);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="3" className="py-16 px-4 md:px-12 relative">
      <div className="text-center max-w-3xl mx-auto mb-8">
        <p className="text-[#907cff] tracking-widest text-sm font-medium mb-2">
          OUR PROGRAMS
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#141414]">
          Engage, Learn, and Grow
        </h2>
        <p className="text-gray-500">
          Explore our comprehensive range of programs, from regular and weekly
          sessions to special adhoc events, designed to enrich your journey with
          MSSN Unilag.
        </p>
      </div>
      <div className="flex px-4 justify-end gap-2">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="bg-green-500 text-white rounded-full shadow-md p-2 z-10"
        >
          <MdArrowBack size={20} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="bg-green-500 text-white rounded-full shadow-md p-2 z-10"
        >
          <MdArrowForward size={20} />
        </button>
      </div>
      <div className="relative">
        {/* Cards container */}
        <div
          ref={scrollRef}
          className="p-4 flex gap-1 max-w-[1200px] w-full my-8 md:flex-row overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {programs.map((value, index) => (
            <div
              key={index}
              className="border border-[#BEEADE] flex flex-col justify-center items-center rounded-lg gap-6 mx-2 max-w-[250px]  flex-shrink-0 bg-white  shadow-lg transition-transform duration-300"
            >
              <Image
                src={value.img}
                width={240}
                height={240}
                className="rounded-t-xl object-cover h-48 w-full"
                alt={value.name}
              />
              <div className="p-4">
                <h3 className="font-medium text-lg mb-1 text-[#141414]">
                  {value.name}
                </h3>
                <p className="text-gray-500 text-sm mb-3">{value.desc}</p>
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                  ${
                    value.tag === "Regular"
                      ? "bg-purple-50 text-purple-600"
                      : value.tag === "Weekly"
                      ? "bg-yellow-50 text-yellow-600"
                      : "bg-red-50 text-red-600"
                  }`}
                >
                  <BsDot className="text-lg" />
                  {value.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {programs.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === activeIndex ? "bg-green-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-all">
          Explore All Programs <ArrowRight size={20} className="inline ml-2" />
        </button>
      </div>
    </section>
  );
}