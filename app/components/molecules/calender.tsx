"use client";
import { daysOfWeek } from "@/app/utils/daysOfWeek";
import { generateCalender } from "@/app/utils/generateCalender";
import { monthsOfHijirYear, monthsOfYear } from "@/app/utils/monthsOfYear";
import dayjs from "dayjs";
import { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import "@/app/styles/calender.css";
import moment from "moment-hijri";
import { motion, AnimatePresence } from "framer-motion";
import events from "@/app/data/events.json";

export default function Calender() {
  const currentDay = dayjs();
  const [today, setToday] = useState(currentDay);
  const [selectedDate, setSelectedDate] = useState(currentDay);

  const hijrahfullDate = moment(`${today.year()}-${today.month() + 1}-${today.date()}`, "YYYY-M-D")
    .format("iYYYY/iD/iM")
    .split("/");

  const hijrahYear = hijrahfullDate[0];
  const hijrahMonth = hijrahfullDate[2];
  const hijrahDay = hijrahfullDate[1];

  function handleCurr() {
    setToday(currentDay);
    setSelectedDate(currentDay);
  }

  function handlePrev() {
    const newDate = today.month(today.month() - 1);
    setToday(newDate);
    setSelectedDate(newDate);
  }

  function handleNext() {
    const newDate = today.month(today.month() + 1);
    setToday(newDate);
    setSelectedDate(newDate);
  }

  const calenderDates = generateCalender(today.month(), today.year());
  const selectedDayOfWeek = selectedDate.toDate().getDay();
  const todaysEvents = events.filter(event => event.dayOfWeek === selectedDayOfWeek);

  // 🎥 Parent variant for the wave effect
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1,
      },
    },
  };

  // ✨ Child variant
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
  };

  return (
    <section id="1" className="flex flex-col justify-center items-center py-[120px] px-4 md:px-40 text-[#141414]">
      <div className="wrapper w-full grid gap-6 justify-center max-w-[1200px] md:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="p-4 rounded-xl border border-[#54545480] bg-[#E6E6E6]">
          <div className="px-2 pb-4 flex justify-between max-w-[500px] mx-auto my-2 font-bold items-center gap-x-5">
            <h4 className="capitalize">
              {monthsOfHijirYear[parseInt(hijrahMonth) - 1]}, {hijrahYear}AH | {monthsOfYear[today.month()]}, {today.year()}
            </h4>
            <div className="flex items-center gap-x-2">
              <GrFormPrevious
                size={20}
                className="cursor-pointer rounded-full hover:bg-slate-900/20"
                onClick={handlePrev}
              />
              <button
                onClick={handleCurr}
                title={`Jump to today: ${currentDay.format("dddd, MMMM D, YYYY")}`}
                className="px-3 py-1 rounded-full bg-[#49c4a2] text-white font-bold shadow hover:bg-[#3aa589] transition-all"
              >
                Today
              </button>
              <GrFormNext
                size={20}
                className="cursor-pointer rounded-full hover:bg-slate-900/20"
                onClick={handleNext}
              />
            </div>
          </div>

          <div className="grid grid-cols-7 gap-y-2 max-w-[500px] mx-auto font-bold">
            {daysOfWeek.map((day, i) => (
              <h3 key={i} className="text-center">
                {day[0]}
              </h3>
            ))}

            <AnimatePresence mode="wait">
              <motion.div
                key={today.month()} // unique key to trigger exit/enter
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="contents"
              >
                {calenderDates.map((dateData, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className="border-t pt-2 flex justify-center"
                  >
                    <motion.p
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedDate(dateData.date)}
                      className={`
                        ${!dateData.currentMonth ? "text-gray-500/60" : ""}
                        ${selectedDate.isSame(dateData.date, "date") && "bg-slate-900/50 text-white"}
                        ${dateData.today && "bg-[#49c4a2] text-white"}
                        font-bold hover:bg-[#0f172a80] rounded-lg text-center w-10 py-2 transition-colors duration-300 cursor-pointer
                      `}
                    >
                      {dateData.date.date()}
                    </motion.p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid gap-4">
          <motion.div
            className="bg-[#E6E6E6] p-4 rounded-xl border border-[#54545480] text-center flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <p>TODAY&apos;S DATE</p>
            <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl">
              {hijrahDay}th {monthsOfHijirYear[parseInt(hijrahMonth) - 1]}, {hijrahYear}AH
            </h2>
            <p>
              {`${daysOfWeek[currentDay.toDate().getDay()]}, ${currentDay.toDate().getDate()}th, ${
                monthsOfYear[currentDay.toDate().getMonth()]
              }, ${currentDay.toDate().getFullYear()}`}
            </p>
          </motion.div>

          <motion.div
            className="bg-[#E6E6E6] p-4 rounded-xl border border-[#54545480] text-center flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <p>UP NEXT</p>
            {todaysEvents.length > 0 ? (
              todaysEvents.map((event, idx) => (
                <h2 key={idx} className="font-extrabold text-3xl md:text-4xl lg:text-5xl">
                  {event.title}
                </h2>
              ))
            ) : (
              <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl">No Event</h2>
            )}
            <p>
              {`${daysOfWeek[selectedDate.toDate().getDay()]}, ${selectedDate.toDate().getDate()}th, ${
                monthsOfYear[selectedDate.toDate().getMonth()]
              }, ${selectedDate.toDate().getFullYear()}`}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
