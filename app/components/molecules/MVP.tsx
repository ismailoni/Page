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

			<MVPCard id="3" name="Khalid Adekoya" title="Amir." src="/Amir.svg">
				<p className="section-heading">AMIR'S LEADERSHIP</p>
				<h2>Inspiring Guidance, Dedicated Service</h2>
				<p>
					My experience with MSSN UNILAG is that of a timid young boy entering
					the University of Lagos with no kini and that. Within my stay on
					campus, I am transformed to become kinikan. Morally, spiritually and
					intellectually and I help transformed others when given the baton and
					mandate. My experience with MSSN UNILAG is that of a timid young boy
					entering the University of Lagos with no kini and that.
				</p>
				<p>MSSN UNILAG is the best that has happened to me.</p>
				<p>
					For the sake of structure, I will populate this space with words that
					would later be edited. But the koko is that you get it and if you don&apos;t get it my brother, you have no option but to forget about it.
				</p>
				<p>
					So how is your experience as well with UNILAG? Maybe we can have
					series of them here and a clear picture of those saying them at the
					left. It&apos;s damn important.
				</p>
				<p>You get?</p>
			</MVPCard>
			<div
				className="hr my-8 w-full h-1"
				style={{
					width: "100%",
					margin: "8rem 0",
					// border:
					// 	"5px solid linear-gradient(to right, #beeade00, #beeade, #beeade00)",
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
					Learn about the invaluable contributions and guidance of our Staff
					Adviser, whose experience and wisdom drive the mission and values of
					MSSN Unilag, ensuring continuous growth and development.
				</p>
				<p>
					My experience with MSSN UNILAG is that of a timid young boy entering
					the University of Lagos with no kini and that. Within my stay on
					campus, I am transformed to become kinikan. Morally, spiritually and
					intellectually and I help transformed others when given the baton and
					mandate.
				</p>
				<p>MSSN UNILAG is the best that has happened to me.</p>
				<p>
					For the sake of structure, I will populate this space with words that
					would later be edited. But the koko is that you get it and if you don&apos;t get it my brother, you have no option but to forget about it.
				</p>
				<p>
					So how is your experience as well with UNILAG? Maybe we can have
					series of them here and a clear picture of those saying them at the
					left. It&apos;s damn important.
				</p>
				<p> You get?</p>
				<p>Staff Adviser, 2023/2024</p>
			</MVPCard>
		</div>
	);
}
