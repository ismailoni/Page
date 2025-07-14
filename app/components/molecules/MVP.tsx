import React from "react";
import "@/app/styles/mvp.css";
import MVPCard from "./MVPCard";
import Image from "next/image";

export default function MVP() {
	return (
		<div className="MVP-section relative">
			{/* BACKGROUND IMAGE */}
			<Image
				src={"/MVP-bg.svg"}
				className="absolute top-0 opacity-30 w-full h-full object-cover"
				width={500}
				height={500}
				alt=""
			/>
			{/* BACKGROUND IMAGE */}

			<MVPCard id="3" name="AbdulRahman AbdulAzeez" title="Amir." src="/Amir.svg">
				<p className="section-heading">AMIR&apos;S LEADERSHIP</p>
				<h2>Inspiring Guidance, Dedicated Service</h2>
				<p>
					My journey at the University of Lagos (UNILAG) was profoundly shaped by the Muslim Students&apos; Society of Nigeria (MSSN) UNILAG chapter.

					As Male Coordinator and later Amir, I witnessed MSSN transformative power.
				</p>
				<p>MSSN UNILAG is a nurturing community fostering academic excellence, spiritual growth, and social responsibility.</p>
				<p>
					During challenges like the COVID-19 pandemic and ASUU strikes, MSSN supported students through online classes, mentorship, and welfare initiatives.
				</p>
				<p>
					As a proud member and leader, I can attest to its invaluable role in my success as a first-class graduate and the lifelong friendships forged.
				</p>
			</MVPCard>
			<div
				className="hr my-8 w-full h-1"
				style={{
					width: "100%",
					margin: "8rem 0",
				}}
			/>
			<MVPCard
				id="4"
				isReversed
				name="Khalid Adekoya"
				title="Prof."
				src="/Prof.svg">
				<p className="section-heading">GUIDANCE OF WISDOM</p>
				<h2>Mentorship, Support, Excellence</h2>
				<p>
				A distinguished professor in Cell Biology and Genetics, has profoundly impacted MSSN UNILAG over his five years of service. As the Ex-President of UMA and Director of the School of Foundation Studies, he has provided invaluable guidance, mentorship, and support.
				</p>
				<p>
				His efforts have enhanced our organizational development, and promoted Islamic values. His insights have been instrumental in shaping the strategic direction and activities of the society. Whether it&apos;s offering advice on event planning, organizational structure, or member engagement, his mentorship has been a cornerstone of our success.
				</p>
				<p>Under his leadership, MSSN UNILAG has grown significantly, benefiting from his extensive experience and dedication.</p>
			</MVPCard>
		</div>
	);
}
