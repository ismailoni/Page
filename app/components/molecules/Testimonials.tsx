// import Image from "next/image";
import TestimonialCard from "@/app/components/atoms/testimonialCard";
import "@/app/styles/testimonial.css";

export default function Testimonials() {
	return (
		<section id="5" className="mysection ">
			<div className="text-section flex flex-col gap-4">
				<p className="subheading text-[#4BC1F0]">TESTIMONIALS</p>
				<h2 className="text-[#141414]">Words from our Community</h2>
				<p className="text-[#888888]">
					Discover heartfelt stories and experiences from our members and
					alumni, showcasing the transformative impact of MSSN Unilag on their
					spiritual, intellectual, and moral growth.
				</p>
			</div>
			{/* BACKGROUND IMAGE        */}
			<div className="cards-section flex-col md:flex-row w-full">
				<TestimonialCard
					comment={
						"My admission to the University of Lagos came with excitement and anticipation. Despite coming from a practicing Muslim home, it was the Muslim Students' Society of Nigeria (MSSN) UNILAG that solidified my faith. Initially skeptical due to misconceptions, I discovered MSSN's true intent and fell in love with my faith. Through weekly programs, my connection with Allah deepened, and my sense of modesty increased. MSSN UNILAG greatly impacted my lifestyle and contributed significantly to my overall growth."
					}
					author="Fareedah Bello"
					dep="English Education"
					lvl="200 Level"
					img="/aisha.svg"
				/>

				<TestimonialCard
					comment={
						" wish to express my heartfelt gratitude for your immense guidance and support throughout my time at UNILAG. MSSN has been a constant source of inspiration, motivation, and direction, helping me overcome challenges in practicing my Deen in a university environment. Programs like Dawah camp, Faculty forums, Mubaf, Daily Tahfiz, and An-Nashrah have strengthened my faith, developed valuable skills, and built lasting relationships. I am forever grateful for being part of this community and look forward to giving back."
					}
					author="Abdulkareem Abdul Quddus "
					dep="Pet and Gas."
					lvl="300 Level"
					img="/ahmed.svg"
				/>
			</div>

			{/* PAGINATION FUNCTION */}
			{/* <div></div> */}
		</section>
	);
}
