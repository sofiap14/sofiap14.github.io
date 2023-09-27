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
      <div className="container pb-28 text-center border border-gray-900 shadow-xl dark:default:shadow-dark" data-aos="zoom-in">
        <h1 className="text-[22px] text-pastel-green font-mono">
          {" "}
          More about me{" "}
        </h1>
        <br />
        <h1 className="text-[16px] text-pastel-green font-mono">
          {" "}
          Other skills{" "}
        </h1>
        <ul className="grid grid-cols-3 p-6 gap-x-4 gap-y-14 text-gray-400 font-mono text-sm justify-items-center place-items-baseline">
          <li><div className="transform w-18 h-18 transition duration-200 hover:scale-150"><img src={ps} alt="Adobe Photoshop" /><span> Adobe Photoshop </span></div></li>
          <li><div className="transform w-18 h-18 transition duration-200 hover:scale-125"><img src={pr} alt="Adobe Premiere Pro" /><span> Adobe Premiere Pro </span></div></li>
          <li><div className="transform w-18 h-18 transition duration-200 hover:scale-125"><img src={ae} alt="Adobe After Effects" /><span> Adobe After Effects </span></div></li>
        </ul>
        <Languages/>
        <Hobbies />
      </div>
    </div>
    </section>
  );
}