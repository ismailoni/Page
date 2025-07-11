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

	const hijrahfullDate = moment(
		`${today.year()}-${today.month() + 1}-${today.date()}`,
		"YYYY-M-D"
	)
		.format("iYYYY/iM/iD")
		.split("/");

	const hijrahYear = hijrahfullDate[0];
	const hijrahMonth = hijrahfullDate[1];
	const hijrahDay = hijrahfullDate[2];

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

	return (
    <section
      id="1"
      className="flex flex-col justify-center items-center py-[120px] px-40 text-[#141414]"
    >
      <div className="wrapper w-full grid gap-2 justify-center max-w-[1200px] md:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="p-4 rounded-xl border border-[#54545480] bg-[#E6E6E6]">
          <div className="px-2 pb-4 flex justify-between min-w-[270px] max-w-[500px] mx-auto my-2 font-bold items-center gap-x-5">
            <h4 className="capitalize">
              {monthsOfHijirYear[parseInt(hijrahMonth) - 1]}, {hijrahYear}AH |{" "}
              {monthsOfYear[today.month()]}, {today.year()}
            </h4>
            <div className="navigate flex items-center gap-x-2">
              <GrFormPrevious
                size={20}
                className="cursor-pointer rounded-full hover:bg-slate-900/50 dark:hover:bg-slate-300/50"
                onClick={handlePrev}
              />
              <button
                onClick={handleCurr}
                title={`Jump to today: ${currentDay.format(
                  "dddd, MMMM D, YYYY"
                )}`}
                className="px-3 py-1 rounded-full bg-[#49c4a2] text-white font-bold shadow hover:bg-[#3aa589] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#49c4a2] focus:ring-offset-2"
              >
                Today
              </button>

              <GrFormNext
                size={20}
                className="cursor-pointer rounded-full hover:bg-slate-900/50 dark:hover:bg-slate-300/50"
                onClick={handleNext}
              />
            </div>
          </div>

          <div className="grid-wrap grid grid-cols-7 gap-y-2 min-w-[270px] max-w-[500px] mx-auto font-bold">
            {daysOfWeek.map((day, i) => (
              <h3 key={i} className="text-center">
                {day.slice(0, 1)}
              </h3>
            ))}
            <AnimatePresence>
              {calenderDates.map((dateData, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="border-t pt-2 flex justify-center"
                >
                  <motion.p
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedDate(dateData.date)}
                    className={`
											${!dateData.currentMonth && "current-month text-gray-700/60"} 
											${
                        selectedDate.isSame(dateData.date, "date") &&
                        dateData.today
                          ? "today bg-blue-600 text-white"
                          : selectedDate.isSame(dateData.date, "date")
                          ? "selected-date bg-slate-900/50 text-white"
                          : ""
                      }
											${dateData.today && "today bg-[#49c4a2] text-white"}
											font-bold hover:bg-[#0f172a80] rounded-lg text-center w-10 py-2 transition-colors ease-in-out duration-300 cursor-pointe text-[#141414]r`}
                  >
                    {dateData.date.date()}
                  </motion.p>
                </motion.div>
              ))}
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
          >
            <p>TODAY'S DATE</p>
            <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl">
              {hijrahDay}th {monthsOfHijirYear[parseInt(hijrahMonth) - 1]},{" "}
              {hijrahYear}AH
            </h2>
            <p className="event-date">
              {`${daysOfWeek[currentDay.toDate().getDay()]}, ${currentDay
                .toDate()
                .getDate()}th, ${
                monthsOfYear[currentDay.toDate().getMonth()]
              }, ${currentDay.toDate().getFullYear()}`}
            </p>
          </motion.div>

          <motion.div
            className="bg-[#E6E6E6] p-4 rounded-xl border border-[#54545480] text-center flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p>UP NEXT</p>
            {todaysEvents.length > 0 ? (
              todaysEvents.map((event, idx) => (
                <h2
                  key={idx}
                  className="font-extrabold text-3xl md:text-4xl lg:text-5xl"
                >
                  {event.title}
                </h2>
              ))
            ) : (
              <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl">
                No Event
              </h2>
            )}
            <p className="event-date">
              {`${daysOfWeek[selectedDate.toDate().getDay()]}, ${selectedDate
                .toDate()
                .getDate()}th, ${
                monthsOfYear[selectedDate.toDate().getMonth()]
              }, ${selectedDate.toDate().getFullYear()}`}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
