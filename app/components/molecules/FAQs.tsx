import Image from "next/image";
import React from "react";
import data from "@/app/components/data.json";
import Accordion from "./accordion";

export default function FAQ() {
	const { FAQs } = data;
	return (
		<section id="7" className="mysection">
			<div className="text-section">
				<p className="subheading text-[#4BC1F0]">EXPLORE FAQs</p>
				<h2>Your Questions, Answered</h2>
				<p>
					Find answers to the most frequently asked questions about MSSN Unilag.
					Whether you re curious about our programs, events, or membership, we
					ve got you covered with detailed and helpful information to guide you.
				</p>
			</div>

			{/* BACKGROUND IMAGE        */}
			<div className=" cards-section flex-col">
				<Accordion sections={FAQs} />
			</div>
		</section>
	);
}