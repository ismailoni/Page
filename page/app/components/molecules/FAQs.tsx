import Image from "next/image";
import React from "react";
import data from "@/app/components/data.json";

export default function Newsletters() {
	const { coreValues } = data;
	return (
		<section id="7" className="mysection">
			<div className="text-section">
				<p className="subheading">EXPLORE FAQs</p>
				<h2>Your Questions, Answered</h2>
				<p>
					Find answers to the most frequently asked questions about MSSN Unilag.
					Whether you re curious about our programs, events, or membership, we
					ve got you covered with detailed and helpful information to guide you.
				</p>
			</div>

			{/* BACKGROUND IMAGE        */}
			<div className="cards-section">
				{coreValues.map((value, index) => (
					<div className="card " key={index}>
						<Image
							src={value.img}
							width={80}
							height={80}
							className=""
							alt="School Mosque.svg"
						/>
						<div>
							<h3> {value.name} </h3>
							<p>{value.desc}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
