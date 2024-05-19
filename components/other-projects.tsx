"use client"
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";

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
  const { ref } = useSectionInView("Other");

  return (
    <section
      id="other-projects"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28  sm:mb-40"
    >
      <SectionHeading>Other Activities</SectionHeading>

      <div className="flex flex-wrap">
        
      {/* first box of project 
      <div className=" text-white rounded p-4 m-1 flex-1 mx-2 sm:mx-4 flex flex-col justify-between" style={{ background: 'linear-gradient(to bottom, indigo 75%, Dodgerblue 25%)' }}>
          <div className="mb-4">
            <h5 className="text-lg font-semibold mb-2">
              Quickgist
            </h5>
            <p className="text-sm">
              Rapid API | Vite | Tailwind CSS | Netlify
            </p>
          </div>
       
          <a
            className="bg-indigo-500 mt-3 p-1 hover:bg-indigo-700 text-white font-bold rounded text-center text-sm"
            href="https://quickgist-chetan.netlify.app/"
            target="_blank"
          >
            View
          </a>
      </div>
    */}

      {/* first box of project */}
      <div className=" text-white rounded p-4 m-1 flex-1 mx-2 sm:mx-4 flex flex-col justify-between" style={{ background: 'linear-gradient(to bottom, Dodgerblue 75%, indigo 25%)' }}>
          <div className="mb-4">
            <h5 className="text-lg font-semibold mb-2">
              LinkedIn
            </h5>
            <p className="text-sm">
             Profile 
            </p>
          </div>
       
          <a
            className="bg-indigo-500 mt-3 p-1 hover:bg-indigo-700 text-white font-bold rounded text-center text-sm"
            href="https://www.linkedin.com/in/chetan-chavan-003537251/"
            target="_blank"
          >
            View
          </a>
      </div>


      {/* first box of project */}
      <div className=" text-white rounded p-4 m-1 flex-1 mx-2 sm:mx-4 flex flex-col justify-between" style={{ background: 'linear-gradient(to bottom, indigo 75%, Dodgerblue 25%)' }}>
          <div className="mb-4">
            <h5 className="text-lg font-semibold mb-2">
              My Portfoio
            </h5>
            <p className="text-sm">
              
            </p>
          </div>
         
          <a
            className="bg-indigo-500 mt-3 p-1 hover:bg-indigo-600 text-white font-bold rounded text-center text-sm"
            href="https://github.com/Chaitanya0202"
            target="_blank"
          >
            GitHub
          </a>
      </div>

      {/* first box of project */}
      <div className=" text-white rounded p-4 m-1 flex-1 mx-2 sm:mx-4 flex flex-col justify-between" style={{ background: 'linear-gradient(to bottom, Dodgerblue 75%, indigo 25%)' }}>
          <div className="mb-4">
            <h5 className="text-lg font-semibold mb-2">
              Google Cloud
            </h5>
            <p className="text-sm">
            Joined the Google Developer Program
            </p>
          </div>
       
          <a
            className="bg-indigo-500 mt-3 p-1 hover:bg-indigo-600 text-white font-bold rounded text-center text-sm"
            href="https://developers.google.com/profile/u/chetanchavan07"
            target="_blank"
          >
           View Profile
          </a>
      </div>

      


    {/* My acheivemnets */}

      </div>
      <div className="mt-3 rounded p-4 flex flex-col sm:flex-row items-center text-white justify-between bg-gray-500">
  <div className="flex-1 mb-4 sm:mb-0">
    <h6 className="text-md font-semibold mb-2 text-skyblue">
      
      Cracked Kpit Nova Hiring Hackathon 2022 | KPIT

      <a
    className="bg-yellow-500 p-2 ml-4 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded text-sm"
    href="https://drive.google.com/file/d/1N9xoQMXzOPaUp_0xcwmo2CGpHJi4srg0/view?usp=sharing"
    target="_blank"
  >
    View
  </a>
    </h6>
   
  
  </div>
  
</div>



    </section>
  );
}
