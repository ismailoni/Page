import Nav from "@/app/components/molecules/Nav";
import Hero from "@/app/components/molecules/Hero";
import Calender from "@/app/components/molecules/calender";
// import JumptoNav from "@/app/omponents/molecules/JumptoNav";
import CoreValues from "@/app/components/molecules/CoreValues";
import Programs from "@/app/components/molecules/Programs";
import MVP from "@/app/components/molecules/MVP";
import Newsletters from "@/app/components/molecules/Newsletters";
import FAQs from "@/app/components/molecules/FAQs";
import Testimonials from "@/app/components/molecules/Testimonials";

export default function Home() {
	return (
		<main className="max-w-screen overflow-x-hidden">
			<Nav />
			<Hero />
			{/* <JumptoNav /> */}
			<Calender />
			<CoreValues />
			<Programs />
			<MVP />
			<Testimonials />
			<Newsletters />
			<FAQs />
		</main>
	);
}
