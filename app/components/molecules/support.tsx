import React from "react";
import Btn from "../atoms/btn";
import { MdArrowForward } from "react-icons/md";

export default function Support() {
	return (
		<div className="mx-10 my-6">
		<div className="py-4 px-2 flex flex-col items-center gap-4 bg-[#f2bf26] bg-opacity-10 max-w-[1600px] mx-auto my-10 rounded-xl">
			<div className="m-6">
			<h2 className="text-3xl md:text-4xl font-bold mt-4">
				Still have Some Questions?
			</h2>
			<p className="pb-4">
				Can’t find the answer you’re looking for? Please contact our support.
			</p>
			</div>
			<Btn className="font-bold text-xl px-6 py-4" styles={{}}>
				Get in Touch <MdArrowForward size={20} />
			</Btn>
		</div>
		</div>
	);
}