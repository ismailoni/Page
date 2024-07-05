import Image from "next/image";
import React from "react";
import data from "@/app/components/data.json";
import Btn from "../atoms/btn";
import { MdArrowForward } from "react-icons/md";

export default function AnnualDues() {
	const { coreValues } = data;
	return (
		<section id="7" className="bg-[#212121 ] relative px-2 py-24">
			{/* BACKGRROUND IMAGE  */}
			<Image
				src={"Annual-bg.svg"}
				className="absolute bottom-0 left-0 w-full h-full -z-[1] object-cover"
				width={500}
				height={500}
				alt=""
			/>
			{/* BACKGRROUND IMAGE  */}
			<div className="mysection bg-white rounded-xl">
				<div className="text-section">
					<p className="subheading text-[#FF5A5F]">Annual Dues</p>
					<h2>Invest in our Future</h2>
					<p>
						Support our mission by paying your annual dues. Your contributions
						ensure the continued growth and success of MSSN Unilag, funding
						essential programs and activities that benefit our entire community.
					</p>
				</div>

				{/* BACKGROUND IMAGE        */}
				<div className="newscard-section max-w-[1200px] rounded-2xl mx-auto	p-16 my-4 flex flex-col md:flex-row-reverse justify-center items-center ">
					<Image
						src={"/Dues.svg"}
						className="mb-8"
						width={500}
						height={500}
						alt="Annual-Dues.svg"
					/>
					<div className="text-left col flex flex-col justify-between h-full gap-8 z-10">
						<h2 className="text-4xl font-bold">
							How Your Dues Make a Difference:
						</h2>

						<ul className=" list-disc ml-4 ">
							<li className="mt-4 text-lg font-thin">
								{" "}
								Program Funding: Your dues support regular and special programs,
								ensuring a wide range of activities and events for personal and
								community developmentE
							</li>
							<li className="mt-4 text-lg font-thin">
								{" "}
								Resource Allocation: Contributions help us acquire essential
								materials and resources for spiritual, intellectual, and moral
								growth
							</li>
							<li className="mt-4 text-lg font-thin">
								Community Support: Funds are used to support members in need,
								ensuring everyone has the opportunity to benefit from MSSN
								Unilag s offerings
							</li>
							<li className="mt-4 text-lg font-thin">
								Facility Maintenance: Dues contribute to the upkeep and
								improvement of our facilities, providing a comfortable and
								conducive environment for all activities.
							</li>
						</ul>
						<p className="text-lg font-semibold">
							Alone we can do little, together we can do so much. Join us on
							this journey to strengthen the ummah.
						</p>
						<Btn className=" self-start w-fit">
							Pay Your Dues Now <MdArrowForward />
						</Btn>
					</div>
				</div>
			</div>
		</section>
	);
}