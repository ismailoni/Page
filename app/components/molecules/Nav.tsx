"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import data from "@/app/components/data.json";
import {
  MdOutlineKeyboardArrowDown,
  MdMenu,
  MdClose
} from "react-icons/md";
import "@/app/styles/nav.css";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Nav() {
  const { navList } = data;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLUListElement | null>(null);
  const pathname = usePathname();

  function handleToggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  function handleClickOutside(event: MouseEvent) {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setOpenIndex(null);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between bg-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <Image
          src={"/unilag-logo.svg"}
          width={40}
          height={40}
          alt="University of Lagos Logo"
          className="rounded-full"
        />
        <p className="font-bold text-lg">University of Lagos</p>
      </div>

      {/* Desktop Nav */}
      <ul ref={navRef} className="hidden md:flex gap-6 items-center">
        {navList.map((list, i) => (
          <li key={i} className="relative group cursor-pointer">
            {list.link && !list.subList ? (
              <Link
                href={list.link}
                className={`flex items-center gap-1 font-medium hover:text-[#0F9932] transition-colors ${
                  pathname === list.link ? "text-[#0F9932] font-semibold" : ""
                }`}
              >
                {list.name}
              </Link>
            ) : (
              <div
                className={`flex items-center gap-1 font-medium hover:text-[#0F9932] transition-colors ${
                  list.link && pathname === list.link ? "text-[#0F9932] font-semibold" : ""
                }`}
                onClick={() => handleToggle(i)}
              >
                {list.name}
                {list.subList && (
                  <motion.span
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MdOutlineKeyboardArrowDown />
                  </motion.span>
                )}
              </div>
            )}

            {/* Desktop Sublist */}
            <AnimatePresence>
              {list.subList && openIndex === i && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 bg-white rounded-lg shadow-lg py-2 mt-2 min-w-[150px] border z-50"
                >
                  {list.subList.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        href={sub.link}
                        className={`block px-4 py-2 text-sm capitalize hover:bg-gray-100 transition-colors ${
                          pathname === sub.link ? "text-[#0F9932] font-semibold" : ""
                        }`}
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>

      <div className="hidden md:block">
        <button className="px-4 py-2 bg-[#0F9932] text-white rounded-md hover:bg-transparent hover:outline hover:border-[#0F9932] hover:text-[#0F9932] transition-all">
          Join Us
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setMobileOpen(true)}
      >
        <MdMenu />
      </button>

      {/* Mobile Backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 flex flex-col p-6"
            >
              <button
                className="self-end text-3xl mb-4"
                onClick={() => setMobileOpen(false)}
              >
                <MdClose />
              </button>
              <ul className="flex flex-col gap-4">
                {navList.map((list, i) => (
                  <li key={i} className="flex flex-col">
                    {list.link && !list.subList ? (
                      <Link
                        href={list.link}
                        className={`font-medium hover:text-blue-600 transition-colors ${
                          pathname === list.link ? "text-[#0F9932] font-semibold" : ""
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {list.name}
                      </Link>
                    ) : (
                      <div
                        onClick={() => handleToggle(i)}
                        className="flex items-center justify-between font-medium cursor-pointer hover:text-blue-600 transition-colors"
                      >
                        {list.name}
                        {list.subList && (
                          <motion.span
                            animate={{ rotate: openIndex === i ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <MdOutlineKeyboardArrowDown />
                          </motion.span>
                        )}
                      </div>
                    )}

                    {list.subList && openIndex === i && (
                      <ul className="flex flex-col pl-4 pt-2">
                        {list.subList.map((sub, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={sub.link}
                              className={`block py-1 text-sm capitalize hover:text-blue-600 transition-colors ${
                                pathname === sub.link ? "text-[#0F9932] font-semibold" : ""
                              }`}
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <button className="w-full  mx-auto py-3 px-6 bg-[#0F9932] text-white rounded-md ">
                  Join Us
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
