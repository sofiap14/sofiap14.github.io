import { AiFillLinkedin, AiOutlineLoading, AiFillGithub } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { SiLeetcode, SiDuolingo } from "react-icons/si";
import resume from "./resume/sofia-panuganti-resume.pdf";
import "./styles.css";

export default function AboutMe() {
  return (
    <div className="mt-14 place-content-center lg:justify-start text-white" id="about">
      {/* About Sofia */}
      <h1 className="flex place-content-center text-4xl md:flex lg:flex md:place-content-center md:text-4xl lg:place-content-center lg:text-5xl font-mono font-bold lg:mt-12">
        about (<span className="text-pastel-purple">sofia</span>)
      </h1>

      {/* Icon Bar */}
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
          <span className="text-sm md:flex md:text-lg lg:flex font-mono lg:text-lg text-white mx-1 my-1">
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

        {/* TO DONWLOAD PDF ENDS */}
      </ul>

      {/* Intro Paragraph Section */}
      <div className="flex justify-center items-center">
        <div className="text-sm max-w-sm lg:mx-52 md:place-content-center md:text-lg md:mt-12 md:max-w-2xl lg:max-w-5xl font-mono text-pastel-purple">
          <p className="flex mt-5 mb-5 m-10 text-justify">
            Recent graduate with a Master's in Computer Science from University of Maryland, Baltimore County.
            I've honed my skills in Python, Java, JavaScript, React.js, and Node.js through hands-on experience, collaboration with diverse teams,
            and a commitment to personal projects.
          </p>
          <p className="flex mt-5 mb-5 m-10 text-justify">
            From India, based in the United States.
          </p>
          <p className="flex mt-5 mb-10 m-10 text-gray-600 text-justify">
            // she / her <br />
            // Computer Science Graduate Student
          </p>
        </div>
      </div>

    </div>
  );
}
