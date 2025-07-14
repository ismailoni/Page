"use client";
import Image from "next/image";
import React from "react";
import data from "@/app/components/data.json";
import "@/app/styles/cards.css";
import "@/app/styles/globals.css";
import { motion } from "framer-motion";

export default function CoreValues() {
	const { coreValues } = data;

	// Variants for parent container
	const containerVariants = {
		hidden: {},
		show: {
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	};

	// Variants for each card
	const cardVariants = {
		hidden: { opacity: 0, y: 30 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
	};

	return (
		<section id="2" className="mysection bg-white">
			<div className="text-section">
				<p className="subheading text-[#OF9932]">OUR CORE VALUES</p>
				<h2 className="text-[#141414]">Guiding Lights, in Every Step</h2>
				<p className="text-[#888888]">
					At MSSN Unilag, our core values are the foundation of our community.
					These golden principles guide our actions, shape our programs, and
					inspire our members to strive for excellence in building a balanced
					personality academically and spiritually.
				</p>
			</div>

			<motion.div
				className="cards-section flex-col md:flex-row"
				variants={containerVariants}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.2 }}
			>
				{coreValues.map((value, index) => (
					<motion.div
						className="card"
						key={index}
						variants={cardVariants}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.97 }}
					>
						<Image
							src={value.img}
							width={80}
							height={80}
							className="object-center min-h-[20px]"
							alt={value.name}
						/>
						<div className="text-center">
							<h3 className="text-[#141414]">{value.name}</h3>
							<p className="text-[#888888]">{value.desc}</p>
						</div>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
}
