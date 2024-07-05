import CoreValues from "../components/molecules/CoreValues"
import FAQs from "../components/molecules/FAQs"
import Nav from "../components/molecules/Nav"
import Footer from "../components/molecules/footer"
import Support from "../components/molecules/support"
import { About } from "./about"
import { Executives } from "./executives"
import { AboutHero } from "./hero"
import { Organs } from "./organs"

export default function AboutPage () {
    return (
        <div className="bg-white">
            <Nav />
            <div className="">
            <AboutHero />
            </div>
            <div className="mt-64">
                <CoreValues />
            </div>
            <div className="flex justify-center">
                <About />
            </div>
            <Organs />
            <Executives />
            <FAQs />
            <Support />
            <Footer />
        </div>
    )
}

