import Image from "next/image";
import React from "react";
import { ArrowRight } from "lucide-react";

export default function AnnualDues() {
	return (
    <section
      id="7"
      className="relative px-2 py-24 bg-[url('/Annual-bg.svg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="mysection bg-white rounded-xl">
        <div className="text-section">
          <p className="subheading text-[#FF5A5F]">Annual Dues</p>
          <h2 className="text-[#141414]">Invest in our Future</h2>
          <p className="text-[#888888] font-normal text-base">
            Support our mission by paying your annual dues. Your contributions
            ensure the continued growth and success of MSSN Unilag, funding
            essential programs and activities that benefit our entire community.
          </p>
        </div>

        <div className="newscard-section max-w-[1200px] rounded-2xl mx-auto p-16 my-4 flex flex-col md:flex-row-reverse justify-center items-center">
          <Image
            src={"/Dues.svg"}
            className="mb-8"
            width={500}
            height={500}
            alt="Annual-Dues.svg"
          />
          <div className="text-left col flex flex-col justify-between h-full gap-8 z-10 text-[#888888]">
            <h2 className="text-4xl font-bold text-[#141414]">
              How Your Dues Make a Difference:
            </h2>

            <ul className="list-disc ml-4">
              <li className="mt-4 text-lg font-thin">
                Program Funding: Your dues support regular and special programs,
                ensuring a wide range of activities and events for personal and
                community development
              </li>
              <li className="mt-4 text-lg font-thin">
                Resource Allocation: Contributions help us acquire essential
                materials and resources for spiritual, intellectual, and moral
                growth
              </li>
              <li className="mt-4 text-lg font-thin">
                Community Support: Funds are used to support members in need,
                ensuring everyone has the opportunity to benefit from MSSN
                Unilag&apos;s offerings
              </li>
              <li className="mt-4 text-lg font-thin">
                Facility Maintenance: Dues contribute to the upkeep and
                improvement of our facilities, providing a comfortable and
                conducive environment for all activities.
              </li>
            </ul>
            <p className="text-lg font-semibold text-[#141414]">
              Alone we can do little, together we can do so much. Join us on
              this journey to strengthen the ummah.
            </p>
            <button className="block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-all max-w-60">
              Pay Your Dues Now <ArrowRight size={20} className="inline ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}