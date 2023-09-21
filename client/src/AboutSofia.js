import React from "react";
import { FiDownload } from "react-icons/fi";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiLeetcode, SiDuolingo } from "react-icons/si";
import resume from "./resume/sofia-panuganti-resume.pdf";

function AboutSofia() {
  return (
    <div className="mt-14 place-content-center lg:justify-start text-white" id="about">
      {/* About Sofia */}
      <h1 className="flex place-content-center text-4xl md:flex lg:flex md:place-content-center md:text-4xl lg:place-content-center lg:text-5xl font-mono font-bold lg:mt-12">
        about (<span className="text-pastel-purple">sofia</span>)
      </h1>

      {/* Icon Bar and CV Button */}
      <ul className="flex justify-center place-content-center font-mono md:flex lg:flex md:place-content-center lg:place-content-center">
        <li className="md:flex lg:flex">
          <a href="https://www.linkedin.com/in/sofia-panuganti/">
            <button
              className="text-2xl md:flex md:mx-1 md:text-3xl lg:flex lg:text-3xl text-pastel-purple hover:text-white"
              title="Linkedin"
            >
              <AiFillLinkedin className="shadow hover:shadow-md outline-none"></AiFillLinkedin>
            </button>
          </a>
        </li>

        <li className="lg:flex">
          <a href="https://leetcode.com/sofiap14/">
            <button
              className="text-2xl md:flex md:mx-1 md:text-3xl lg:flex lg:mx-1 lg:text-3xl text-pastel-purple hover:text-white"
              title="Leetcode"
            >
              <SiLeetcode className="shadow hover:shadow-md outline-none"></SiLeetcode>
            </button>
          </a>
        </li>

        <li className="lg:flex">
          <a href="https://github.com/sofiap14">
            <button
              className="mx-1 text-2xl md:flex md:mx-1 md:text-3xl lg:flex lg:mx-1 lg:text-3xl text-pastel-purple hover:text-white"
              title="Github"
            >
              <AiFillGithub className="shadow hover:shadow-md outline-none"></AiFillGithub>
            </button>
          </a>
        </li>

        <li className="lg:flex">
          <a href="https://www.duolingo.com/profile/sofiap14_">
            <button
              className="mx-1 text-2xl md:flex md:mx-1 md:text-3xl lg:flex lg:mx-1 lg:text-3xl text-pastel-purple hover:text-white"
              title="Duolingo"
            >
              <SiDuolingo className="shadow hover:shadow-md outline-none"></SiDuolingo>
            </button>
          </a>
        </li>

        {/* DOWNLOAD MY CV */}

        <li className="flex items-center">
          <span className="text-sm md:flex md:text-lg lg:flex font-mono lg:text-lg text-white mx-2 my-1">
            Download my
            <a href={resume} target="_blank">
              <button
                className="ml-2 rounded border border-pastel-purple flex bg-pastel-purple text-white hover:bg-white hover:text-pastel-purple font-bold uppercase text-xs md:text-sm lg:text-sm md:mx-3 lg:mx-3 md:-my-0.5 lg:-my-0.5 md:px-2 lg:px-2 md:py-1 lg:py-1 md:rounded-full lg:rounded-full shadow hover:shadow-md outline-none focus:outline-none"
                title="SofiaPanuganti.pdf"
              >
                <FiDownload class="mt-0.5 md:mx-0.5 md:my-0.5 lg:mx-0.5 lg:my-0.5 text-md"></FiDownload> CV {/* Adjusted button and icon size */}
              </button>
            </a>
          </span>
        </li>

      </ul>
    </div>
  );
}

export default AboutSofia;
