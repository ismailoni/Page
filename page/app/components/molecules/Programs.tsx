import Image from "next/image";
import data from "@/app/components/data.json";
import Btn from "@/app/components/atoms/btn";
import { BsDot } from "react-icons/bs";

export default function Programs() {
	const { programs } = data;
	return (
		<section id="3" className="mysection">
			<div className="text-section">
				<p className="subheading text-[#907cff]">OUR PROGRAMS</p>
				<h2>Engage, Learn, and Grow</h2>
				<p>
					Explore our comprehensive range of programs, from regular and weekly
					sessions to special adhoc events, designed to enrich your journey with
					MSSN Unilag.
				</p>
			</div>

			{/* BACKGROUND IMAGE        */}
			<div className="cards-section overflow-x-auto">
				{programs.map((value, index) => (
					<div className="card shadow-lg" key={index}>
						<Image
							src={value.img}
							width={240}
							height={240}
							className=" object-center object-cover rounded-xl"
							alt={value.img}
						/>
						<div className="card-text text-left ">
							<h3 className="text-left font-bold"> {value.name} </h3>
							<p className="text-left">{value.desc}</p>
							<Btn
								styles={{
									border: "1px solid  " + value.color,
									color: value.color,
									backgroundColor: "transparent",
								}}
								className={`card-btn  hover:bg-[${value.color}]`}>
								<BsDot />
								{value.btn}
							</Btn>
						</div>
					</div>
				))}
			</div>

			<Btn>Explore All Programs</Btn>
		</section>
	);
}
