import Image from "next/image";
import React from "react";
import data from "@/app/components/data.json";
import "@/app/styles/cards.css";
import "@/app/styles/globals.css";

export default function CoreValues() {
	const { coreValues } = data;
	return (
		<section id="2" className="mysection bg-white">
			<div className="text-section">
				<p className="subheading text-[#OF9932]">OUR CORE VALUES</p>
				<h2 className="text-[#141414]">Guiding Lights, in Every Step</h2>
				<p className="text-[#888888]">
					At MSSN Unilag, our core values are the foundation of our community.
					These golden principles guide our actions, shape our programs, and
					inspire our members to strive for excellence in building a balanced
					personality academically and spiritually
				</p>
			</div>

			{/* BACKGROUND IMAGE        */}
			<div className="cards-section flex-col md:flex-row">
				{coreValues.map((value, index) => (
					<div className="card " key={index}>
						<Image
							src={value.img}
							width={80}
							height={80}
							className=" object-center min-h-[20px]"
							alt="School Mosque.svg"
						/>
						<div className="text-center">
							<h3 className="text-[#141414]"> {value.name} </h3>
							<p className='text-[#888888]'>{value.desc}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
