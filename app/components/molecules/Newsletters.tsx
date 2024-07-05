import Image from "next/image";
import React from "react";

export default function Newsletters() {
	return (
		<section id="6" className="mysection">
			<div className="text-section">
				<p className="subheading text-[#907CFF]">NEWSLETTER</p>
				<h2>Stay Connected with Us</h2>
				<p>
					Stay informed and inspired with Al Mustaqeem, our official newsletter.
					Subscribe to receive the latest updates, insightful articles, and news
					about our community’s spiritual, intellectual, and moral endeavors.
					Keep up with MSSN Unilag and never miss out on important events and
					opportunities.
				</p>
			</div>

			{/* BACKGROUND IMAGE        */}
			<div className="newscard-section max-w-[1200px] rounded-2xl mx-auto	p-16 my-16 flex justify-center items-center bg-[#212121] text-white relative">
				{/* BACKGRROUND IMAGE  */}
				<Image
					src={"/Newsletter-bg.svg"}
					className="absolute top-0 opacity-20 w-full h-full object-cover"
					width={500}
					height={500}
					alt=""
				/>
				{/* BACKGRROUND IMAGE  */}

				<Image
					src={"/newsletter.svg"}
					className="z-10"
					width={500}
					height={500}
					alt="newsletter.svg"
				/>
				<div className="text-left col flex flex-col justify-between h-full gap-8 z-10">
					<h2 className="text-4xl font-bold">Welcome to Al-Mustaqeem...</h2>
					<p>
						...the official newsletter of MSSN Unilag. Our newsletter is
						designed to keep you informed and inspired with the latest updates,
						insightful articles, and news about our community’s spiritual,
						intellectual, and moral endeavors.
					</p>
					<ul className=" list-disc ml-4">
						<li>Regular updates on upcoming events and programA</li>
						<li>Thought-provoking articles and reflections</li>
						<li>
							Stories of transformation and growth from our members and alumni
						</li>
						<li>
							Announcements and opportunities within the MSSN Unilag community
						</li>
					</ul>
					<p>
						Stay connected with us and ensure you never miss out on the
						incredible experiences and knowledge shared within our community.
					</p>
					<form className="flex w-full">
						<input
							type="text"
							className="px-4 text-black  rounded-xl w-full  mr-4 items-center "
							placeholder="email address"
						/>
						<button className="bg-[#49C4A2] p-4  rounded-xl text-center ">
							Subscribe
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
