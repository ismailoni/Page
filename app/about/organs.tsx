import Image from 'next/image';
import { OrgansCard, OrgansCardProps } from './organscard';
import { Tag } from './tag';
import linkedin from '@/public/linkedin_symbol.svg.svg'
import instagram from '@/public/instagram_logo.svg.svg'
import X from '@/public/x_logo.svg.svg'

const organsData: OrgansCardProps[] = [{ name: 'Engineering Muslim Students’ Association (EMSS)', content: 'We are going to write a little explanation about spirituality here. We are going to write a little explanation about spirituality here.', tag: 'Faculty Of Engineering', images: [{ src: '', alt: '', name: '' }] }, { name: 'Muslim Science Students’ Association (MUSSA)', content: 'We are going to write a little explanation about spirituality here. We are going to write a little explanation about spirituality here.', tag: 'Faculty of Science', images: [{ src: '', alt: '', name: '' }] }, { name: 'Muslim Medical Students’ Association (MUMSA)', content: 'We are going to write a little explanation about spirituality here. We are going to write a little explanation about spirituality here.', tag: 'Faculty of Premedical Sciences', images: [{ src: '', alt: '', name: '' }] }, { name: 'Muslim Environmental Sciences Students’ Association (MESSA)', content: 'We are going to write a little explanation about spirituality here. We are going to write a little explanation about spirituality here.', tag: 'Faculty of Environmental Sciences', images: [{ src: '', alt: '', name: '' }] }, { name: 'Faculty of Arts Muslim Students’ Association (FAMSA)', content: 'We are going to write a little explanation about spirituality here. We are going to write a little explanation about spirituality here.', tag: 'Faculty of Arts', images: [{ src: '', alt: '', name: '' }] }, { name: 'Faculty of Education Muslim Students’ Association (FEMSA)', content: 'We are going to write a little explanation about spirituality here. We are going to write a little explanation about spirituality here.', tag: 'Faculty of Education', images: [{ src: '', alt: '', name: '' }] }, { name: 'Association of Social Sciences Muslim Students (ASSMUS)', content: 'We are going to write a little explanation about spirituality here. We are going to write a little explanation about spirituality here.', tag: 'Faculty of Social Sciences', images: [{ src: '', alt: '', name: '' }] }, { name: 'Faculty of Business Administration Muslim Student’s Association (FABAMSA)', content: 'We are going to write a little explanation about spirituality here. We are going to write a little explanation about spirituality here.', tag: 'Faculty of Management Sciences', images: [{ src: '', alt: '', name: '' }] }, { name: 'Nigerian Association of Muslim Law Students (NAMLAS)', content: 'We are going to write a little explanation about spirituality here. We are going to write a little explanation about spirituality here.', tag: 'Faculty of Law', images: [{ src: '', alt: '', name: '' }] },]
const images: any[] = [linkedin, instagram, X]

export const Organs = () => {
    return (
        <section id="2" className="mysection bg-white">
            <div className="text-section">
                <p className="subheading text-[#49c4a2]">OUR ORGANS</p>
                <h2>United in Diversity. One Body, Many Hearts</h2>
                <p>
                    Explore the various organs of MSSN Unilag, each dedicated to serving the Muslim students within their respective faculties. Together, we create a strong, supportive, and inclusive community across the entire university.
                </p>
            </div>

            {/* BACKGROUND IMAGE        */}
            <div className="cards-section justify-center flex-col md:flex-row">
                <div className="flex flex-col gap-4 rounded-2xl border border-green-300">
                    <div className="m-14">
                        <h1 className="font-semibold mb-2 -mt-4 text-center">Muslim Students’ Society of Nigeria, University of Lagos <br/> (MSSN Unilag) Branch</h1>
                        <p className="text-gray-500 text-center whitespace-pre-wrap text-sm">We are going to write a little explanation about spirituality here. We are <br/> going to write a little explanation  here.</p>
                        <div className='flex justify-center'>
                        <div className="-mb-3 flex flex-col">
                            <Tag color="green" tag={'University of Lagos'} />
                            <div className='flex gap-5'>
                                {images?.map((image, index) => (
                                    <Image width={30} height={30} key={index} src={image.src} alt={image.alt} />
                                ))}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-8 m-16">
                {organsData.map((organ, i) => (
                    <OrgansCard name={organ.name} content={organ.content} tag={organ.tag} images={organ.images} />
                ))}
            </div>
        </section>
    )
}