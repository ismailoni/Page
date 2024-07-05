"use client";
import Image from "next/image";
import React, { useState } from "react";
import Btn from "@/app/components/atoms/btn";
import data from "@/app/components/data.json";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import "@/app/styles/nav.css";

export default function Nav() {
	const { navList } = data;
	const [openSubLists, setOpenSubLists] = useState<{ [key: string]: boolean }>(
		{}
	);

	function handleToggle(index: number) {
		setOpenSubLists((prev) => {
			return {
				...prev,
				[index]: !prev[index],
			};
		});
	}

	return (
		<nav className="">
			<div className="nav-logo">
				<Image
					src={"/unilag-logo.svg"}
					width={40}
					height={40}
					alt="unilag-logo.svg"
				/>
				<p>University of Lagos </p>
			</div>

			<div className="nav-list">
				{navList.map((list, i) => (
					<div
						key={i}
						title={list.name}
						className="relative"
						onClick={() => handleToggle(i)}>
						{list.name} {list.subList && <MdOutlineKeyboardArrowDown />}
						{list.subList && openSubLists[i] && (
							<ul className="sublist absolute bg-white shadow-lg">
								{list.subList.map((sub, subIndex) => (
									<li className="text-sm capitalize shadow-sm" key={subIndex}>
										<a className="text-sm" href={sub.link}>{sub.name}</a>
									</li>
								))}
							</ul>
						)}
					</div>
				))}
			</div>

			<div className="nav-btn">
				<Btn
				className="font-bold px-6 py-4">Join Us</Btn>
			</div>
		</nav>
	);
}
