'use client';
import { motion } from "framer-motion";

export const HeroText = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="gap-6 max-w-full flex flex-col md:-mt-10 mt-10 mx-auto"
    >
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-3 leading-tight md:leading-[70px]">
        An Association that Cares
        <br />
        for your Needs
      </h1>
      <p className="py-2 text-gray-600 mb-3 text-base sm:text-lg max-w-[90%] md:max-w-[100%]">
        Human makes a society. There is no us without you.
        <br />Experience a community where faith and knowledge thrive together.
      </p>
      <button className="block max-w-[190px] bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-all w-full sm:w-auto">
        Join Us Today
      </button>
    </motion.div>
  );
};
