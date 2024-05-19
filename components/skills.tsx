"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};
export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28  sm:mb-40"
    >
      <SectionHeading>My skills, Certificates</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
      <div className="mt-5  p-6 flex flex-col sm:flex-row items-center justify-between text-white rounded bg-sky-500">
  <div className="flex-1 mb-4 sm:mb-0">
    <h2 className="text-xl font-semibold mb-2 text-skyblue">
    Full Stack Web Development Training
    </h2>
    <p className="mb-4">
    Skills : Java | React | MySQL | Manual Testing | SQL 
  </p>
  <a
    className="bg-violet-500 p-2 hover:bg-violet-600 text-white  font-bold py-1 px-2 rounded text-sm"
    href="https://drive.google.com/file/d/1XCUtBp96XBFRVXMHsIH_9N0i9t4u60Zm/view"
    target="_blank"
  >
    View Certificate
  </a>
  </div>
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGj_ZZhAauKY-oDG9rA9fri3khaU5sJ1ap81JMb891-g&s"
    alt="Certification 3"
    className="w-49 h-36 object-cover rounded sm:ml-6"
  />
</div>
<div className="mt-5  p-6 flex flex-col sm:flex-row items-center justify-between text-white rounded bg-violet-700">
  <div className="flex-1 mb-4 sm:mb-0">
    <h2 className="text-xl font-semibold mb-2 text-skyblue">
   Bootcamp | Introduction to Python
    </h2>
    <p className="mb-4">
   Skills : Python | Data Structure | Algorithms
  </p>
  <a
    className="bg-blue-500 p-2 hover:bg-violet-600 text-white font-bold py-1 px-2 rounded text-sm"
    href="https://drive.google.com/file/d/15BP-Ay7MOhjDsCdd-fEBW4_7U2xf2dRM/view"
    target="_blank"
  >
    View Certificate
  </a>
  </div>
  <img
    src="https://assets.channelinsider.com/uploads/2022/04/CI.Infosys.Profile.png"
    alt="Certification 3"
    className="w-49 h-36 object-cover rounded sm:ml-6"
  />
</div>



    </section>
  );
}