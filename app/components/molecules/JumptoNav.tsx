import React from "react";
import "@/app/styles/jumptoNav.css";
import Link from "next/link";
import data from "@/app/components/data.json";

export default function JumptoNav() {
	const { jumptoNavList } = data;
	return (
		<nav className="jumpto-nav rounded-full">
			<ul>
				{jumptoNavList.map((navlist, index) => (
					<li key={index}>
						<Link href={`/pages/#${index + 1}`}>{navlist}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
