import Image from "next/image";
import React from "react";
import { BsDot } from "react-icons/bs";
import "@/app/styles/testimonial.css";

export default function TestimonialCard({
	img,
	comment,
	author,
	dep,
	lvl,
}: {
	img: string;
	author: string;
	comment: string;
	dep: string;
	lvl: string;
}) {
	return (
		<div className="testimonial-card">
			{/* BACKGRROUND IMAGE  */}
			<Image
				src={"testimonial-bg.svg"}
				className="absolute bottom-0 left-0 w-full h-full -z-[1] object-cover"
				width={500}
				height={500}
				alt=""
			/>
			{/* BACKGRROUND IMAGE  */}

			<Image
				src={"/testimonial.svg"}
				alt={img}
				height={200}
				width={200}
				className="svg"
			/>

			<p className="z-10">"{comment}"</p>
			<div className="info">
				<Image src={img} alt={img} height={60} width={60} />
				<div>
					<p>{author}</p>
					<p className="details">
						{dep} <BsDot /> {lvl}
					</p>
				</div>
			</div>
		</div>
	);
}
