'use client';

import Image from 'next/image';
import { OrgansCard, OrgansCardProps } from './organscard';
import { Tag } from './tag';
import linkedin from '@/public/linkedin_symbol.svg.svg';
import instagram from '@/public/instagram_logo.svg.svg';
import X from '@/public/x_logo.svg.svg';
import { motion } from 'framer-motion';

const organsData: OrgansCardProps[] = [
  {
    name: "Engineering Muslim Students’ Association (EMSS)",
    content: "We are going to write a little explanation about spirituality here. We are going to write a little explanation about spirituality here.",
    tag: "Faculty Of Engineering"
  },
  {
    name: "Muslim Science Students’ Association (MUSSA)",
    content: "We are going to write a little explanation about spirituality here. We are going to write a little explanation about spirituality here.",
    tag: "Faculty of Science"
  },
  {
    name: "Muslim Medical Students’ Association (MUMSA)",
    content: "We are going to write a little explanation about spirituality here. We are going to write a little explanation about spirituality here.",
    tag: "Faculty of Premedical Sciences"
  },
  {
    name: "Muslim Environmental Sciences Students’ Association (MESSA)",
    content: "We are going to write a little explanation about spirituality here. We are going to write a little explanation about spirituality here.",
    tag: "Faculty of Environmental Sciences"
  },
  {
    name: "Faculty of Arts Muslim Students’ Association (FAMSA)",
    content: "We are going to write a little explanation about spirituality here. We are going to write a little explanation about spirituality here.",
    tag: "Faculty of Arts"
  },
  {
    name: "Faculty of Education Muslim Students’ Association (FEMSA)",
    content: "We are going to write a little explanation about spirituality here. We are going to write a little explanation about spirituality here.",
    tag: "Faculty of Education"
  },
  {
    name: "Association of Social Sciences Muslim Students (ASSMUS)",
    content: "We are going to write a little explanation about spirituality here. We are going to write a little explanation about spirituality here.",
    tag: "Faculty of Social Sciences"
  },
  {
    name: "Faculty of Business Administration Muslim Student’s Association (FABAMSA)",
    content: "We are going to write a little explanation about spirituality here. We are going to write a little explanation about spirituality here.",
    tag: "Faculty of Management Sciences"
  },
  {
    name: "Nigerian Association of Muslim Law Students (NAMLAS)",
    content: "We are going to write a little explanation about spirituality here. We are going to write a little explanation about spirituality here.",
    tag: "Faculty of Law"
  },
];

const icons = [linkedin, instagram, X];

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

      <div className="flex flex-col items-center justify-center border border-green-300 rounded-2xl p-6 md:p-14 mx-4 md:mx-0 my-8">
        <h1 className="font-semibold mb-2 text-center">
          Muslim Students&apos; Society of Nigeria, University of Lagos <br /> (MSSN Unilag) Branch
        </h1>
        <p className="text-gray-500 text-center text-sm">
          We are going to write a little explanation about spirituality here. We are
          going to write a little explanation here.
        </p>
        <div className="flex flex-col items-center mt-4">
          <Tag color="green" tag="University of Lagos" />
          <div className="flex gap-4 mt-2">
            {icons.map((icon, index) => (
              <Image key={index} src={icon} alt={`icon-${index}`} width={30} height={30} />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-4 md:m-16">
        {organsData.map((organ, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <OrgansCard name={organ.name} content={organ.content} tag={organ.tag} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
