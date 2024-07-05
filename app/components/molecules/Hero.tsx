import React from "react";
import Btn from "../atoms/btn";
import "@/app/styles/hero.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdArrowForward } from "react-icons/md";
import Image from "next/image";

export default function Hero() {
	return (
		<section className="hero">
			<div className="text-section">
				<Btn
					className="font-bold px-6 py-4"
					styles={{
						backgroundColor: "#907cff80 ",
						color: "#907CFF",
						margin: "2rem 0",
					}}
				>👋  As Salaamu Alaykum...</Btn>
				<h1>
					The Converging Point for Muslim Students in the University of Lagos
				</h1>
				<p>
					Human makes a society. There is no us without you and that’s what
					makes your need our utmost concern. Human makes a society. There is no
					us without you.
				</p>

				<Btn
					className="font-bold px-6 py-4 gap-3"
					styles={{
						margin: "2rem 0",
					}}>
					Become a Member
					<MdArrowForward size={20} />
				</Btn>
			</div>

			{/* BACKGROUND IMAGE        */}
			<div className="image-section">
				<Image
					src={"/School Mosque.svg"}
					width={1248}
					height={500}
					className=""
					alt="School Mosque.svg"
				/>
			</div>
		</section>
	);
}
