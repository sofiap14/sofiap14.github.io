import React, { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';
import pr from './images/premierproLogo.png';
import ae from './images/aftereffectsLogo.png';
import ps from './images/photoshopLogo.png';
import Languages from "./Languages";
import Hobbies from "./Hobbies";

export default function OtherSkills() {

    useEffect(() => {
        AOS.init({
        duration: 500,
    });
    }, []);

  return (
    <section id="skills" className="container">
      <div className="border border-gray-950 bg-gray-900 rounded-tl-full rounded-bl-full">
        <div className="container pb-28 text-center border border-gray-900 rounded-lg shadow-xl dark:default:shadow-dark" data-aos="zoom-in">
          <h1 className="text-[22px] text-pastel-green font-mono">
            {" "}
            More about me{" "}
          </h1>
          <br />
          <h1 className="text-[16px] text-pastel-green font-mono">
            {" "}
            Other tools{" "}
          </h1>
          <ul className="md:flex md:space-x-6 md:justify-center lg:flex lg:flex-wrap lg:justify-center lg:space-x-9 text-center grid grid-cols-3 p-6 gap-x-4 gap-y-14 lg:grid-cols-7 lg:gap-x-1 lg:gap-y-20 text-gray-200 font-mono text-sm place-items-baseline">
            <li><div className="transform w-18 h-18 md:w-20 lg:w-24 transition duration-200 hover:scale-150"><img src={ps} alt="Adobe Photoshop" /><span> Adobe Photoshop </span></div></li>
            <li><div className="transform w-18 h-18 md:w-20 lg:w-24 transition duration-200 hover:scale-125"><img src={pr} alt="Adobe Premiere Pro" /><span> Adobe Premiere Pro </span></div></li>
            <li><div className="transform w-18 h-18 md:w-20 lg:w-24 transition duration-200 hover:scale-125"><img src={ae} alt="Adobe After Effects" /><span> Adobe After Effects </span></div></li>
          </ul>
          <Languages/>
          <Hobbies />
        </div>
      </div>
    </section>
  );
}