import Image from "next/image";
import React from "react";

export default function MVPCard({
	id,
	src,
	name,
	title,
	children,
	isReversed,
}: {
	id: string;
	src: string;
	title: string;
	name: string;
	children: React.ReactNode;
	isReversed?: boolean;
}) {
	return (
		<div id={"/#" + id} className={`mvp-card ${isReversed && "is-reversed"}`}>
			<div className={"text-section "}>{children}</div>

			<div className="profile-wrap">
				<div className="img-wrap">
					<Image
						src={src}
						alt=""
						height={200}
						width={300}
						className="object-cover w-full p-8 border border-[#84d7c0] border-b-0 rounded-3xl"
					/>
				</div>
				<div className="name shadow-white shadow-xl">
					<p> {title} </p>
					<p> {name} </p>
				</div>
			</div>
		</div>
	);
}
