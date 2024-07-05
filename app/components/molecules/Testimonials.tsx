// import Image from "next/image";
import TestimonialCard from "@/app/components/atoms/testimonialCard";
import "@/app/styles/testimonial.css";

export default function Testimonials() {
	return (
		<section id="5" className="mysection ">
			<div className="text-section">
				<p className="subheading text-[#4BC1F0]">TESTIMONIALS</p>
				<h2>Words from our Community</h2>
				<p>
					Discover heartfelt stories and experiences from our members and
					alumni, showcasing the transformative impact of MSSN Unilag on their
					spiritual, intellectual, and moral growth.
				</p>
			</div>
			{/* BACKGROUND IMAGE        */}
			<div className="cards-section flex-col md:flex-row w-full">
				<TestimonialCard
					comment={
						"MSSN Unilag played a pivotal role in my journey through university. The organization provided a supportive community that enriched my spiritual and intellectual life. The programs and activities not only strengthened my faith but also equipped me with the moral compass needed to navigate the professional world. I am grateful for the lifelong friendships and invaluable lessons I gained.."
					}
					author="Ahmed Oluwaseun"
					dep="Mechanical Engineering"
					lvl="300 Level"
					img="/ahmed.svg"
				/>

				<TestimonialCard
					comment={
						"Being part of MSSN Unilag has been an enlightening experience. The	regular and weekly programs have deepened my understanding of Islam and			have been crucial in my personal development. The community here feels		like a second family, always ready to offer support and guidance. MSSN 		Unilag has truly been a cornerstone of my university life."
					}
					author="Aisha Muhammed"
					dep="Medicine and Surgery"
					lvl="Class of 2022"
					img="/aisha.svg"
				/>
			</div>

			{/* PAGINATION FUNCTION */}
			{/* <div></div> */}
		</section>
	);
}
