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
      <h1 className="flex text-5xl font-mono font-bold lg:mt-12" style={{ whiteSpace: 'nowrap' }}>
        about (<span className="text-pastel-purple">sofia</span>)
      </h1>

      {/* Icon Bar and CV Button */}
      <ul className="flex justify-center p-4 space-x-6 text-3xl"> 
        <li> {/* Linkedin Icon */}
          <a href="https://www.linkedin.com/in/sofia-panuganti/">
            <button
              className="text-pastel-purple hover:text-white"
              title="Linkedin" data-aos="flip-left"
            >
              <AiFillLinkedin className="text-3xl md:text-3xl lg:text-3xl" />
            </button>
          </a>
        </li>

        <li> {/* Leetcode Icon */}
          <a href="https://leetcode.com/sofiap14/">
            <button
              className="text-pastel-purple hover:text-white"
              title="Leetcode" data-aos="flip-left"
            >
              <SiLeetcode className="text-3xl" />
            </button>
          </a>
        </li>

        <li> {/* Github Icon */}
          <a href="https://github.com/sofiap14">
            <button
              className="text-pastel-purple hover:text-white"
              title="Github" data-aos="flip-left"
            >
              <AiFillGithub className="text-3xl" />
            </button>
          </a>
        </li>

        <li> {/* Duolingo Icon */}
          <a href="https://www.duolingo.com/profile/sofiap14_">
            <button
              className="text-pastel-purple hover:text-white"
              title="Duolingo" data-aos="flip-left"
            >
              <SiDuolingo className="text-3xl" />
            </button>
          </a>
        </li>

        {/* DOWNLOAD MY CV */}

        <li className="flex items-center">
          <span className="flex text-lg font-mono text-white">
            <span className="hidden sm:inline mr-2">Download my </span>{" "}
            <a href={resume}>
              <button className="ml-0.5 border border-pastel-purple flex bg-pastel-purple text-white hover:bg-white hover:text-pastel-purple font-bold uppercase text-sm -my-0.5 px-2 py-0.5 rounded-full shadow hover:shadow-md outline-none focus:outline-none"
                title="SofiaPanuganti.pdf"
              >
                <FiDownload class="m-0.5 text-md"></FiDownload>{" "}
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
