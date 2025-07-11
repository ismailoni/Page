'use client';
import React from "react";
import data from "@/app/components/data.json";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Footer() {
  const { contact, pages, others, office, downloads } = data.footerList;

  return (
    <footer className="bg-white border-t mt-12 p-6 md:p-12 max-w-[1600px] mx-auto w-full">
      <div className="flex flex-wrap gap-8 justify-between w-full">
        <Lists heading={contact.heading} lists={contact.body} />
        <Lists heading={pages.heading} lists={pages.body} />
        <Lists heading={others.heading} lists={others.body} />
        <div className="flex flex-col gap-6 min-w-[150px]">
          <Lists heading={office.heading} lists={office.body} />
          <Lists heading={downloads.heading} lists={downloads.body} />
        </div>
      </div>

      <div className="my-8 w-full border-t" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
        <div className="flex items-center gap-2">
          <Image src="/unilag-logo.svg" width={40} height={40} alt="Unilag logo" />
          <p className="text-gray-700 text-sm text-center md:text-left">
            University of Lagos <span className="font-thin">© 2025 MSSN Unilag</span>
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <SocialIcon href="https://linkedin.com" Icon={FaLinkedin} label="LinkedIn" />
          <SocialIcon href="https://facebook.com" Icon={FaFacebook} label="Facebook" />
          <SocialIcon href="https://instagram.com" Icon={FaInstagram} label="Instagram" />
          <SocialIcon href="https://x.com" Icon={FaXTwitter} label="X (Twitter)" />
        </div>
      </div>
    </footer>
  );
}

function Lists({
  heading,
  lists,
}: {
  heading: string;
  lists: { value: string; link: string }[];
}) {
  return (
    <div className="flex-1 min-w-[150px]">
      <h4 className="font-semibold mb-2">{heading}</h4>
      <ul className="space-y-1">
        {lists.map((item, i) => (
          <li key={i} className="max-w-[290px] text-sm">
            <Link
              href={item.link}
              className="text-gray-600 hover:text-green-600 transition-colors duration-200"
            >
              {item.value}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({
  href,
  Icon,
  label,
}: {
  href: string;
  Icon: React.ElementType;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-1 text-gray-600 hover:text-green-600 transition-all"
    >
      <motion.div
        whileHover={{ scale: 1.3, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center"
      >
        <Icon className="w-5 h-5" />
      </motion.div>
      <span className="hidden md:inline text-sm">{label}</span>
    </Link>
  );
}
