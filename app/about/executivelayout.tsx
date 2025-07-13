import React from "react";
import "@/app/styles/mvp.css";
import ExecutiveCard from "./executivescard";

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

const maleExcos = [
  { id: "1", name: "Muhammad Ademola", title: "Naibul Amir (Admin)", src: namiradmin },
  { id: "2", name: "Toyyib Talabi", title: "Amir", src: amir },
  { id: "3", name: "Ibrahim Ajibade", title: "Naibul Amir (Da’wah)", src: namirdawah },
];

const otherMaleExcos = [
  { id: "4", name: "Al-Amin Oseni", title: "General Secretary", src: gsec },
  { id: "5", name: "Abdulfattah Abdurraheem", title: "Ass. General Secretary", src: agsec },
  { id: "6", name: "Abdullah Abdurrazaq", title: "Financial Secretary", src: finsec },
  { id: "7", name: "Al-Ameen Abolare", title: "Public Relation Officer", src: pro },
  { id: "8", name: "Muhammad Abdussalaam", title: "Ass. Public Relation Officer", src: apro },
  { id: "9", name: "Mustapha Muhammad Jamiu", title: "Welfare Officer", src: welfare },
  { id: "10", name: "Sulaimon Sulaimon", title: "Ass. Welfare Officer", src: awelfare },
  { id: "11", name: "Miftahudeen Abdulqadr", title: "Asset Maintenance Officer", src: amo },
  { id: "12", name: "Habeeb Musa", title: "Ass. Asset Maintenance Officer", src: aamo },
  { id: "13", name: "Habibu Yusuf", title: "Director of Studies", src: dos },
  { id: "14", name: "Qazeem Akanbi", title: "Ass. Director of Studies", src: ados },
  { id: "15", name: "AbdurRoheem Bankole", title: "Editor", src: editor },
];

const femaleExcos = [
  { id: "16", name: "Sakeenah Abdussalaam", title: "Amirah", src: amirah },
  { id: "17", name: "Aishah Abdulwaheed", title: "Naibatul Amirah", src: namirah },
];

const otherFemaleExcos = [
  { id: "18", name: "Rofiat Hammed", title: "Secretary (Sisters’ Circle)", src: sissec },
  { id: "19", name: "Khadijah Abdul Awwal", title: "P.R.O (Sisters’ Circle)", src: sispro },
  { id: "20", name: "Haleemah Lawal", title: "Treasurer", src: treasurer },
  { id: "21", name: "Maryam Adeleke", title: "Welfare Officer (Sisters)", src: siswelfare },
  { id: "22", name: "Aisha Abdulrahmon", title: "Asst. Welfare Officer (Sisters)", src: asiswelfare },
  { id: "23", name: "Balikis Aponmade", title: "Editor (Sisters)", src: editorSis },
];

export default function ExecutiveLayout() {
  return (
    <div className="MVP-section executive-bg">
      <div className="text-section text-center mb-8">
        <p className="subheading text-[#FBB400] font-bold text-3xl">
          OUR ORGANS
        </p>
        <h2>Leadership with Vision</h2>
        <p>
          Meet the dedicated executive team of MSSN Unilag, committed to guiding
          our community with integrity, wisdom, and a shared purpose. Discover
          the individuals who lead with passion and dedication to uphold our
          values and drive our mission forward.
        </p>
      </div>

      {/* Male excos top row */}
      <div className="mt-8">
        <div className="flex justify-center gap-6">
          {maleExcos.map((exco, index) => (
            <div
              key={exco.id}
              className={index === 1 ? "transform -translate-y-10" : ""}
            >
              <ExecutiveCard
                id={exco.id}
                name={exco.name}
                title={exco.title}
                src={exco.src}
              />
            </div>
          ))}
        </div>

        {/* Male excos lower grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-4 px-4 mt-4">
          {otherMaleExcos.map((exco) => (
            <ExecutiveCard
              key={exco.id}
              id={exco.id}
              name={exco.name}
              title={exco.title}
              src={exco.src}
            />
          ))}
        </div>

        <div className="hr my-16 w-full border-t" />

        {/* Female excos top row */}
        <div className="flex justify-center mt-4 flex-wrap gap-6">
          {femaleExcos.map((exco, index) => (
            <div
              key={exco.id}
              className={index === 0 ? "transform -translate-y-8" : ""}
            >
              <ExecutiveCard
                id={exco.id}
                name={exco.name}
                title={exco.title}
                src={exco.src}
              />
            </div>
          ))}
        </div>

        {/* Female excos lower grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 px-4 mt-4">
          {otherFemaleExcos.map((exco) => (
            <ExecutiveCard
              key={exco.id}
              id={exco.id}
              name={exco.name}
              title={exco.title}
              src={exco.src}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
