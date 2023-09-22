import React from "react";
import 'aos/dist/aos.css';
import { FiDownload } from "react-icons/fi";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiLeetcode, SiDuolingo } from "react-icons/si";
import resume from "./resume/sofia-panuganti-resume.pdf";

function AboutSofia() {
  return (
    <div className="place-content-center lg:justify-start text-white" id="about">
      {/* About Sofia */}
      <h1 className="flex place-content-center text-3xl md:flex lg:flex md:place-content-center md:text-4xl lg:place-content-center lg:text-5xl font-mono font-bold lg:mt-12">
        about (<span className="text-pastel-purple">sofia</span>)
      </h1>

      {/* Icon Bar and CV Button */}
      <ul className="flex justify-center mt-5 space-x-4 text-2xl md:text-3xl lg:text-3xl">
        <li>
          <a href="https://www.linkedin.com/in/sofia-panuganti/">
            <button
              className="text-pastel-purple hover:text-white"
              title="Linkedin" data-aos="flip-left"
            >
              <AiFillLinkedin className="text-2xl md:text-3xl lg:text-3xl" />
            </button>
          </a>
        </li>

        <li>
          <a href="https://leetcode.com/sofiap14/">
            <button
              className="text-pastel-purple hover:text-white"
              title="Leetcode" data-aos="flip-left"
            >
              <SiLeetcode className="text-2xl md:text-3xl lg:text-3xl" />
            </button>
          </a>
        </li>

        <li>
          <a href="https://github.com/sofiap14">
            <button
              className="text-pastel-purple hover:text-white"
              title="Github" data-aos="flip-left"
            >
              <AiFillGithub className="text-2xl md:text-3xl lg:text-3xl" />
            </button>
          </a>
        </li>

        <li>
          <a href="https://www.duolingo.com/profile/sofiap14_">
            <button
              className="text-pastel-purple hover:text-white"
              title="Duolingo" data-aos="flip-left"
            >
              <SiDuolingo className="text-2xl md:text-3xl lg:text-3xl" />
            </button>
          </a>
        </li>

        {/* DOWNLOAD MY CV */}

        <li className="flex items-center">
          <span className="text-sm flex text-lg font-mono text-white mx-2 my-1">
            <span className="hidden sm:inline">Download my</span>{" "}
            <a href={resume} target="_blank">
              <button className="ml-0.5 rounded border border-pastel-purple flex bg-pastel-purple text-white hover:bg-white hover:text-pastel-purple font-bold uppercase text-xs md:text-sm lg:text-sm mx-0.5 sm:mx-3 -my-0.5 px-2 py-1 rounded-full shadow hover:shadow-md outline-none focus:outline-none"
                title="SofiaPanuganti.pdf"
              >
                <FiDownload class="mt-0.5 mx-0.5 my-0.5 text-md"></FiDownload>{" "}
                CV
              </button>
            </a>
          </span>
        </li>



      </ul>
    </div>
  );
}

export default AboutSofia;
