'use client'

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function ExecutiveCard({
  id,
  src,
  name,
  title,
}: {
  id: string;
  src: string;
  title: string;
  name: string;
}) {
  return (
    <motion.div
      id={id}
      className="mvp-card text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <div className="profile-wrap">
        {/* <div className="img-wrap"> */}
          <Image
            src={src}
            alt={`${name} profile picture`}
            height={250}
            width={250}
            className="object-cover w-full p-4 border border-[#84d7c0] rounded-3xl"
          />
        {/* </div> */}
        <div className="name mt-2">
          <p className="text-[#84D7C0] text-sm font-semibold">{title}</p>
          <p className="text-lg text-[#FBB400]">{name}</p>
        </div>
      </div>
    </motion.div>
  );
}
