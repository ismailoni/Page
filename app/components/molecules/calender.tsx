"use client";
import { daysOfWeek } from "@/app/utils/daysOfWeek";
import { generateCalender } from "@/app/utils/generateCalender";
import { monthsOfHijirYear, monthsOfYear } from "@/app/utils/monthsOfYear";
import dayjs from "dayjs";
import { useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import "@/app/styles/calender.css";
import moment from "moment-hijri";

export default function Calender() {
	const currentDay = dayjs();
	const [dates, setDates] = useState(generateCalender());
	const [selectedDate, setSelectedDate] = useState(currentDay);
	const [today, setToday] = useState(currentDay);
	const hijrahfullDate = moment(
		`${today.year()}-${today.month()}-${today.date()}`,
		"YYYY-M-D"
	)
		.format("iYYYY/iM/iD")
		.split("/");
	const hijrahYear = hijrahfullDate[0];
	const hijrahMonth = hijrahfullDate[1];
	const hijrahDay = hijrahfullDate[2];

	function handleCurr() {
		setToday(currentDay);
	}

	function handlePrev() {
		setToday(today.month(today.month() - 1));
		setDates(generateCalender(today.month(), today.year()));
	}

	function handleNext() {
		setToday(today.month(today.month() + 1));
		setDates(generateCalender(today.month(), today.year()));
	}

	return (
		<section
			id="1"
			className="calender-section flex flex-col justify-center items-center p-8 min-h-">
			<div className="wrapper w-full grid gap-2 justify-center max-w-[1200px] md:grid-cols-2">
				{/* LEFT SIDE  */}
				<div className="calender ">
					<div className="px-2 pb-4 flex justify-between min-w-[270px] max-w-[500px] mx-auto my-2 font-bold">
						<h4 className="capitalize">
							{monthsOfHijirYear[parseInt(hijrahMonth)]},{hijrahYear}AH |{" "}
							{monthsOfYear[today.month()]}, {today.year()}
						</h4>
						<div className="navigate flex items-center gap-x-5">
							<GrFormPrevious
								size={20}
								className=" cursor-pointer rounded-full hover:bg-slate-900/50 dark:hover:bg-slate-300/50"
								onClick={handlePrev}
							/>
							<h4
								onClick={handleCurr}
								className="cursor-pointer"
								title={currentDay.toString()}>
								Today
							</h4>
							<GrFormNext
								size={20}
								className=" cursor-pointer rounded-full hover:bg-slate-900/50 dark:hover:bg-slate-300/50"
								onClick={handleNext}
							/>
						</div>
					</div>

					<div className="grid-wrap grid grid-cols-7 gap-y-2  min-w-[270px] max-w-[500px] mx-auto font-bold">
						{daysOfWeek.map((day, i) => (
							<h3 key={i} className={`text-center `}>
								{day.slice(0, 1)}
							</h3>
						))}
						{generateCalender(today.month(), today.year()).map(
							(dateData, i) => (
								<div className="border-t pt-2" key={i}>
									<p
										onClick={() => setSelectedDate(dateData.date)}
										className={`
										${!dateData.currentMonth && " current-month text-gray-700/60"} 
										${
											selectedDate === dateData.date && dateData.today
												? "today  bg-blue-600  "
												: selectedDate === dateData.date &&
												  " selected-date bg-slate-900/50 "
										}
									${dateData.today && "today bg-[#49c4a2]  "} 
									 font-bold hover:bg-[#0f172a80] rounded-lg text-center w-10  py-2 transition-colors ease-in-out duration-300 cursor-pointer`}>
										{dateData.date.date()}
									</p>
								</div>
							)
						)}
					</div>
				</div>

				{/* RIGHT SIDE  */}
				<div className="upcoming-event ">
					<div className="calender-card">
						<p>UP NEXT</p>
						<h2>
							{hijrahDay}th {monthsOfHijirYear[parseInt(hijrahMonth)]},{" "}
							{hijrahYear}AH{" "}
						</h2>
						<p className="event-date">
							{" "}
							{`${daysOfWeek[selectedDate.toDate().getDay()]},  ${selectedDate
								.toDate()
								.getDate()}th, ${
								monthsOfYear[selectedDate.toDate().getDay()]
							}, ${selectedDate.toDate().getFullYear()}`}
						</p>
					</div>
					<div className="calender-card">
						<p>LATER (THIS WEEK)</p>
						<h2>Fiqh Session</h2>
						<p className="event-date">
							{" "}
							{`${daysOfWeek[selectedDate.toDate().getDay()]},  ${selectedDate
								.toDate()
								.getDate()}th, ${
								monthsOfYear[selectedDate.toDate().getDay()]
							}, ${selectedDate.toDate().getFullYear()}`}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
