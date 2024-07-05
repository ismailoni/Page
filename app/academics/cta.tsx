import image1 from "@/public/suggest.svg";
import image2 from "@/public/volunteer.svg";
import { CTACard, CTACardProps } from "./ctacard";

const CTAData: CTACardProps[] = [{ title: "Suggest A Course", cta: "Suggest", content: "Adding funds to your wallet is seamless and secure. Use the deposit feature to store funds, so you're always ready to make fast transactions.", tag: 'Students', image: image1 }, { title: "Volunteer to be a tutor", cta: "Volunteer", content: "Adding funds to your wallet is seamless and secure. Use the deposit feature to store funds, so you're always ready to make fast transactions.", tag: 'Tutors', image: image2 }]


export const CTA = () => {
    return (
        <div className="ctabg-custom-svg bg-green-800">
            <div className="my-12">
                <div className="flex gap-[-6] justify-center my-12">
                    {CTAData.map((cta, i) => (
                        <CTACard key={i} title={cta.title} content={cta.content} cta={cta.cta} tag={cta.tag} image={cta.image} />
                    ))}
                </div>
            </div>
        </div>
    )
}