'use client';
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Newsletters() {
  return (
    <section id="6" className="mysection">
      <div className="text-section">
        <p className="subheading text-[#907CFF]">NEWSLETTER</p>
        <h2 className="text-[#141414]">Stay Connected with Us</h2>
        <p className="text-[#888888]">
          Stay informed and inspired with Al Mustaqeem, our official newsletter.
          Subscribe to receive the latest updates, insightful articles, and news
          about our community’s spiritual, intellectual, and moral endeavors.
          Keep up with MSSN Unilag and never miss out on important events and
          opportunities.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="newscard-section max-w-[1200px] rounded-2xl mx-auto p-6 md:p-16 my-16 flex flex-col md:flex-row justify-center items-center bg-[#212121] text-white relative overflow-hidden"
      >
        <Image
          src={"/Newsletter-bg.svg"}
          className="absolute top-0 left-0 opacity-20 w-full h-full object-cover"
          width={500}
          height={500}
          alt=""
        />

        <Image
          src={"/newsletter.svg"}
          className="z-10 mb-8 md:mb-0 md:mr-8 w-full max-w-[400px]"
          width={500}
          height={500}
          alt="newsletter.svg"
        />

        <div className="flex flex-col justify-between h-full gap-6 z-10 w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold">Welcome to Al-Mustaqeem...</h2>
          <p>
            ...the official newsletter of MSSN Unilag. Our newsletter is designed to
            keep you informed and inspired with the latest updates, insightful articles,
            and news about our community’s spiritual, intellectual, and moral endeavors.
          </p>
          <ul className="list-disc ml-4 space-y-1">
            <li>Regular updates on upcoming events and programs</li>
            <li>Thought-provoking articles and reflections</li>
            <li>Stories of transformation and growth from our members and alumni</li>
            <li>Announcements and opportunities within the MSSN Unilag community</li>
          </ul>
          <p>
            Stay connected with us and ensure you never miss out on the incredible
            experiences and knowledge shared within our community.
          </p>
          <form className="flex flex-col sm:flex-row w-full">
            <input
              type="text"
              className="px-4 py-3 text-black rounded-xl w-full mb-4 sm:mb-0 sm:mr-4"
              placeholder="Email address"
            />
            <button
              type="submit"
              className="bg-[#49C4A2] p-3 px-6 rounded-xl text-center font-medium hover:bg-[#3da88d] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
