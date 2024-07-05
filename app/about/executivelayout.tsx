import React from "react";
import "@/app/styles/mvp.css";
import ExecutiveCard from "./executivescard";
import Image from "next/image";
import image from '@/public/MVP-bg.svg'
import namiradmin from '@/public/excos/nameeradmin.svg'
import namirdawah from '@/public/excos/namirdawah.svg'
import amir from '@/public/excos/amir.svg'
import gsec from '@/public/excos/gsec.svg'
import agsec from '@/public/excos/agsec.svg'
import finsec from '@/public/excos/fsec.svg'
import pro from '@/public/excos/pro.svg'
import apro from '@/public/excos/apro.svg'
import welfare from '@/public/excos/welf.svg'
import awelfare from '@/public/excos/awelf.svg'
import amo from '@/public/excos/amo.svg'
import aamo from '@/public/excos/aamo.svg'
import dos from '@/public/excos/dos.svg'
import ados from '@/public/excos/ados.svg'
import editor from '@/public/excos/edi.svg'
import amirah from '@/public/excos/ameerah.svg'
import namirah from '@/public/excos/nameerah.svg'
import treasurer from '@/public/excos/treasurer.svg'
import siswelfare from '@/public/excos/welfsis.svg'
import asiswelfare from '@/public/excos/awelfsis.svg'
import sispro from '@/public/excos/prosis.svg'
import sissec from '@/public/excos/secsis.svg'
import editorSis from '@/public/excos/edisis.svg'

const maleExcos: any[] = [{ id: "1", name: "Muhammad Ademola", title: "Naibul Amir (Admin)", src: namiradmin }, { id: "2", name: "Toyyib Talabi", title: "Amir", src: amir }, { id: "3", name: "Ibrahim Ajibade", title: "Naibul Amir (Da’wah)", src: namirdawah }]
const otherMaleExcos: any[] = [{ id: "4", name: "Al-Amin Oseni", title: "General Secretary", src: gsec }, { id: "4", name: "Abdulfattah Abdurraheem", title: "Ass. General Secretary", src: agsec }, { id: "4", name: "Abdullah Abdurrazaq", title: "Financial Secretary", src: finsec }, { id: "4", name: "Al-Ameen Abolare", title: "Public Relation Officer", src: pro }, { id: "4", name: "Muhammad Abdussalaam", title: "Ass. Public Relation Officer", src: apro }, { id: "4", name: "Mustapha Muhammad Jamiu", title: "Welfare Officer", src: welfare }, { id: "4", name: "Sulaimon Sulaimon", title: "Ass. Welfare Officer", src: awelfare }, { id: "4", name: "Miftahudeen Abdulqadr", title: "Asset Maintenance Officer", src: amo }, { id: "4", name: "Habeeb Musa", title: "Ass. Asset Maintenance Officer", src: aamo }, { id: "4", name: "Habibu Yusuf", title: "Director of Studies", src: dos }, { id: "4", name: "Qazeem Akanbi", title: "Ass. Director of Studies", src: ados }, { id: "4", name: "AbdurRoheem Bankole", title: "Editor", src: editor }];
const femaleExcos: any[] = [{ id: "4", name: "Sakeenah Abdussalaam", title: "Amirah", src: amirah }, { id: "4", name: "Aishah Abdulwaheed", title: "Naibatul Amirah", src: namirah },]
const otherFemaleExcos: any[] = [{ id: "4", name: "Rofiat Hammed", title: "Secretary (Sisters’ Circle)", src: sissec }, { id: "4", name: "Khadijah Abdul Awwal", title: "P.R.O (Sisters’ Circle)", src: sispro }, { id: "4", name: "Haleemah Lawal", title: "Treasurer", src: treasurer }, { id: "4", name: "Maryam Adeleke", title: "Welfare Officer (Sisters)", src: siswelfare }, { id: "4", name: "Aisha Abdulrahmon", title: "Asst. Welfare Officer (Sisters)", src: asiswelfare }, { id: "4", name: "Balikis Aponmade", title: "Editor (Sisters)", src: editorSis },]

export default function ExecutiveLayout() {
    return (
        <div className="MVP-section relative executive-bg">
            <div className="flex flex-col justify-center">
                <div className="text-section">
                    <p className="subheading text-[#FBB400] font-bold text-3xl text-center">OUR ORGANS</p>
                    <h2 className="text-center">Leadership with Vision</h2>
                    <p className="text-center">
                    Meet the dedicated executive team of MSSN Unilag, committed to guiding our community with integrity, wisdom, and a shared purpose. Discover the individuals who lead with passion and dedication to uphold our values and drive our mission forward.
                    </p>
                </div>
            </div>
            {/* BACKGRROUND IMAGE  */}
            {/* <Image
                src={image}
                className="absolute top-0  opacity-30 w-full h-full object-cover"
                width={500}
                height={1000}
                alt=""
            /> */}
            {/* BACKGRROUND IMAGE  */}

            <div className="flex flex-col justify-center">
                <div className="flex justify-center">
                    <div className="flex gap-6 -mb-64">
                        {maleExcos.map((exco, index) => (
                            <div
                                key={exco.id}
                                className={index === 1 ? 'transform -translate-y-36' : ''}
                            >
                                <ExecutiveCard id={exco.id} name={exco.name} title={exco.title} src={exco.src} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 -mb-64">
                        {otherMaleExcos.slice(0, 4).map((exco) => (
                            <ExecutiveCard key={exco.id} id={exco.id} name={exco.name} title={exco.title} src={exco.src} />
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6 -mb-64">
                        {otherMaleExcos.slice(4, 8).map((exco) => (
                            <ExecutiveCard key={exco.id} id={exco.id} name={exco.name} title={exco.title} src={exco.src} />
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
                        {otherMaleExcos.slice(8, 12).map((exco) => (
                            <ExecutiveCard key={exco.id} id={exco.id} name={exco.name} title={exco.title} src={exco.src} />
                        ))}
                    </div>
                </div>
            </div>

            <div
                className="hr my-8 w-full h-1"
                style={{
                    width: "100%",
                    margin: "8rem 0",
                    // border:
                    // 	"5px solid linear-gradient(to right, #beeade00, #beeade, #beeade00)",
                }}
            />

            <div className="flex flex-col justify-center">
                <div className="flex justify-center">
                    <div className="flex gap-6 -mb-64">
                        {femaleExcos.map((exco) => (
                            <ExecutiveCard key={exco.id} id={exco.id} name={exco.name} title={exco.title} src={exco.src} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mb-64">
                        {otherFemaleExcos.slice(0, 3).map((exco) => (
                            <ExecutiveCard key={exco.id} id={exco.id} name={exco.name} title={exco.title} src={exco.src} />
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                        {otherFemaleExcos.slice(3, 6).map((exco) => (
                            <ExecutiveCard key={exco.id} id={exco.id} name={exco.name} title={exco.title} src={exco.src} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
