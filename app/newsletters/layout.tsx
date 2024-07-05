import Nav from "../components/molecules/Nav"
import Footer from "../components/molecules/footer"
import NewsletterList from "./list"
import { Mustaqeem } from "./mustaqeem"
import { NewsletterGantt } from "./newsgantt"
import Timeline from "./timeline"

const NewsletterLayout = () => {
    return (
        <div className="bg-white">
            <Nav />
            <div className="">
                <div>
                    <Mustaqeem />
                </div>
                <div className="my-24 bg-black">
                    <div className="flex justify-center mt-24 mb-24">
                        <NewsletterGantt />
                    </div>
                    <div>
                        <Timeline />
                    </div>
                    <NewsletterList />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default NewsletterLayout;