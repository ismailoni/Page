import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Support() {
	return (
		<div className="mx-10 my-6">
		<div className="py-4 px-2 flex flex-col items-center gap-4 bg-[#f2bf26] bg-opacity-10 max-w-[1600px] mx-auto my-10 rounded-xl">
			<div className="m-6">
			<h2 className="text-3xl md:text-4xl font-bold my-4">
				Still have Some Questions?
			</h2>
			<p className="pb-4">
				Can&apos;t find the answer you&apos;re looking for? Please contact our support.
			</p>
			</div>
			<Link href="mailto:mssnunilagbranch">
				<button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-all">
					Get in Touch <ArrowRight size={20} className="inline ml-2" />
				</button>
			</Link>
		</div>
		</div>
	);
}