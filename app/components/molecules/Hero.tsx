import React from "react";
import "@/app/styles/hero.css";
import { MdArrowForward } from "react-icons/md";
import Image from "next/image";

export default function Hero() {
	return (
		<section className="hero">
			<div className="text-section">
				<button
					className="font-medium px-8 py-2 bg-[#FBB40026] text-[#141414] my-[2rem] mx-0"
				
				>👋  As Salaamu Alaykum...</button>
				<h1 className="text-[#141414] font-bold text-5xl">
					Welcome to MSSN UNILAG – your Growth Community.
				</h1>
				<p>
					We are a student led body that caters for the well-being of all Muslim students on campus. We are poised towards helping you achieve unprecedented growth in your spiritual and academic life.
				</p>

				<button
					className="font-bold px-6 py-4 gap-3 bg-[#0F9932] my-[2rem] mx-0"
					>
					Become a Member
					<MdArrowForward size={20} />
				</button>
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
