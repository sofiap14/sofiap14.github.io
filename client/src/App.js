import "./styles.css";
import React from "react";
import { AiFillLinkedin, AiOutlineLoading, AiFillGithub } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { SiLeetcode, SiDuolingo } from "react-icons/si";
import { Link } from "react-scroll";
import resume from "./resume/sofia-panuganti-resume.pdf";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-pastel flex flex-col h-screen">
      <nav className="sticky top-0 z-10 flex bg-gray-700 w-full h-28 text-sm font-mono backdrop-filter backdrop-blur-[10px] bg-opacity-20 border-b border-gray-500">
        <div className="mx-3 p-7 text-pastel-white">
          <Link to="about" spy={true} smooth={true} duration={500}>
            <button className="link link-underline link-underline-black text-white">
              .about()
            </button>
          </Link>
        </div>
        <div className="mx-1 p-7 text-white">
          <Link to="education" spy={true} smooth={true} duration={500}>
            <button className="link link-underline link-underline-black text-white">
              .experience()
            </button>
          </Link>
        </div>
        <div className="mx-1 p-7 text-white">
          <Link to="skills" spy={true} smooth={true} duration={500}>
            <button className="link link-underline link-underline-black text-white">
              .education()
            </button>
          </Link>
        </div>
        <div className="mx-1 p-7 text-white">
          <button className="link link-underline link-underline-black text-white">
            <a href="mailto:sofiapanuganti@gmail.com" title="Send me an email">
              .contact()
            </a>
          </button>
        </div>
      </nav>
      {/* NavBar ends  */}

      <div className="w-full h-max bg-pastel-dark text-white" id="about">
        {/* About Sofia */}
        <h1 className="flex place-content-center text-5xl font-mono font-bold mt-12">
          about (<span className="text-pastel-purple">sofia</span>)
        </h1>

        <ul className="flex place-content-center font-mono">
          <li className="flex">
            <a href="https://www.linkedin.com/in/sofia-panuganti/">
              <button
                className="flex text-3xl text-pastel-purple hover:text-white"
                title="Linkedin"
              >
                <AiFillLinkedin className="shadow hover:shadow-md outline-none"></AiFillLinkedin>
              </button>
            </a>
          </li>

          <li className="flex">
            <a href="https://leetcode.com/sofiap14/">
              <button
                className="flex ml-3 text-3xl text-pastel-purple hover:text-white"
                title="Leetcode"
              >
                <SiLeetcode className="shadow hover:shadow-md outline-none"></SiLeetcode>
              </button>
            </a>
          </li>

          <li className="flex">
            <a href="https://github.com/sofiap14">
              <button
                className="flex mx-3 text-3xl text-pastel-purple hover:text-white"
                title="Github"
              >
                <AiFillGithub className="shadow hover:shadow-md outline-none"></AiFillGithub>
              </button>
            </a>
          </li>

          <li className="flex">
            <a href="https://www.duolingo.com/profile/sofiap14_">
              <button
                className="flex mx-1 text-3xl text-pastel-purple hover:text-white"
                title="Duolingo"
              >
                <SiDuolingo className="shadow hover:shadow-md outline-none"></SiDuolingo>
              </button>
            </a>
          </li>

          {/* DOWNLOAD MY CV */}

          <li className="flex">
            <span className="flex font-mono text-lg text-white mx-2 my-1">
              Download my
              <a href={resume} target="_blank">
                <button
                  className="flex bg-pastel-purple text-white hover:bg-white hover:text-pastel-purple font-bold uppercase text-sm mx-3 -my-0.5 px-6 py-1.5 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-2 mb-6"
                  title="SofiaPanuganti.pdf"
                >
                  <FiDownload class="mx-1 my-1"></FiDownload> CV
                </button>
              </a>
            </span>
          </li>

          {/* TO DONWLOAD PDF ENDS */}
        </ul>
        <div className="mx-52 max-w-3xl font-mono text-pastel-purple">
          <p className="flex mt-5 mb-5 m-10 text-justify">
            Although I discovered my interest in Computer Science late in high
            school, my passion for this subject has helped me keep up with my
            peers and continues to keep me interesting in learning.
          </p>
          <p className="flex  mt-5 mb-5 m-10 text-justify">
            I have gained soft skills and hard skills from my years of
            education, interaction with my peers and professors, personal
            projects and hackathons. I love to connect with people from all
            walks of life.
          </p>
          <p className="flex mt-5 mb-5 m-10 text-justify">
            I am currently attending University of Maryland Baltimore County,
            exploring different fields in Computer Science. Graduating in May
            2023.
          </p>
          <p className="flex mt-5 mb-5 m-10 text-justify">
            From India, based in United States.
          </p>
          <p className="flex mt-5 mb-10 m-10 text-gray-600 text-justify">
            // she / her <br />
            // Computer Science Graduate Student
          </p>
        </div>

        {/* Main Skills Section  */}

        <div
          className="text-white mt-10 mb-6 rounded-md w-full h-max font-mono"
          id="skills"
        >
          <h1 className="text-2xl font-[900] mx-52 text-pastel-green">
            {" "}
            Main Skills{" "}
          </h1>
          <div className="mt-6 mx-52 grid grid-cols-3 gap-15">
            <div>Problem solving</div>
            <div>
              JavaScript, HTML, <br /> CSS, React
            </div>
            <div>
              C, C++, Java, <br /> Python
            </div>
            <div>Critical thinking</div>
            <div className="text-gray-600">
              // Adobe Photoshop, <br /> // After Effects, Premiere Pro
            </div>
            <div>MySQL, MongoDB</div>
          </div>
        </div>

        {/* Education Section  */}

        <div
          className="text-white mt-10 mb-6 rounded-md w-full h-max"
          id="education"
        >
          <h1 className="font-mono text-2xl font-[900] mx-52 text-pastel-green">
            {" "}
            Education{" "}
          </h1>

          <div className="mt-6 flex bg-pastel">
            <ul className="flex text-white font-mono grid grid-cols-2 gap-15 ">
              <li className="mx-52 flex text-lg text-pastel-purple font-[900]">
                Master's in <br /> Computer Science
              </li>
              <li className="flex text-lg text-pastel-purple font-[900]">
                Bachelor's in <br /> Computer Science and Engineering
              </li>

              <li className="mx-52 text-gray-400 ">
                <a
                  href="https://gradschool.umbc.edu/"
                  className="underline underline-offset-2 decoration-gray-600 hover:decoration-transparent text-gray-300 hover:text-white link link-underline link-underline-black text-white"
                  title="University of Maryland Baltimore County"
                >
                  @ University of Maryland Baltimore County <br />
                </a>
                Aug 2021 - May 2023
              </li>

              <li className="text-gray-400">
                <a
                  href="https://cvr.ac.in/home4/"
                  className="underline underline-offset-2 decoration-gray-600 hover:decoration-transparent text-gray-300 hover:text-white link link-underline link-underline-black text-white"
                  title="CVR College of Engineering"
                >
                  @ Jawaharlal Nehru Technological University <br />
                </a>
                2017 - 2021
              </li>
              <li className="mx-52 mt-10 flex text-lg text-pastel-purple font-[900]">
                Higher Secondary Certificate / Pre-university Course in <br />{" "}
                Mathematics, Physics and Chemistry
              </li>
              <li></li>
              <li className="mx-52 text-gray-400 ">
                <a
                  href="https://lfjc.co.in/"
                  className="underline underline-offset-2 decoration-gray-600 hover:decoration-transparent text-gray-300 hover:text-white link link-underline link-underline-black text-white"
                  title="Little Flower Junior College"
                >
                  @ LFJC, India <br />
                </a>
                2015 - 2017
              </li>
            </ul>
          </div>

          {/* Experience Section */}

          <div
            className="text-white mt-10 mb-6 rounded-md w-full h-max"
            id="exp"
          >
            <span className="flex font-mono text-2xl font-[900] mx-52 text-pastel-green">
              {" "}
              Experience
              <AiOutlineLoading className="mx-3 mt-2 animate-spin h-5 w-5 mr-3"></AiOutlineLoading>
            </span>
            <div className="mt-6 flex bg-pastel">
              <ul className="flex text-white font-mono grid grid-cols-2 gap-15 ">
                <li className="mx-52 flex text-lg text-pastel-purple font-[900]">
                  Graduate Student Assistant <br /> GSA
                </li>
                <li className="flex text-lg text-pastel-purple font-[900]">
                  Teaching Assistant <br /> (Computational Mathematics)
                </li>
                <li className="mx-52 flex text-gray-500">
                  @ UMBC <br /> Spring 2022
                </li>
                <li className="text-gray-500">
                  @ JNTU <br />
                  2018 - 2019
                </li>
              </ul>
            </div>
          </div>

          {/* Volunteer Experience Section */}

          <div
            className="text-white mt-10 mb-6 rounded-md w-full h-max"
            id="experience"
          >
            <h1 className="font-mono text-2xl font-[900] mx-52 text-pastel-green">
              {" "}
              Leadership Experience{" "}
            </h1>
            <div className=" mt-6 flex bg-pastel">
              <ul className="flex text-white font-mono grid grid-cols-2 gap-15 ">
                <li className="mx-52 flex text-lg text-pastel-purple font-[900]">
                  Vice Chair <br /> NGO Volunteer
                </li>
                <li className="flex text-lg text-pastel-purple font-[900]">
                  Level-1 Organizer <br /> Fundraiser Marathon
                </li>
                <li className="mx-52 text-gray-400 ">
                  <a
                    href="https://www.instagram.com/hyderabadyouthassembly/?hl=en"
                    className="underline underline-offset-2 decoration-gray-600 hover:decoration-transparent text-gray-300 hover:text-white link link-underline link-underline-black text-white"
                    title="Hyderabad Youth Assembly"
                  >
                    @ HYA
                  </a>{" "}
                  2018 - 2019 <br />
                  <text className="text-gray-500">
                    // Lead a team of 25 to conduct 8 events working towards
                    United Nations Sustainable Development Goals{" "}
                  </text>
                </li>
                <li className="text-gray-400 ">
                  <a
                    href="https://www.streetcause.org/index"
                    className="underline underline-offset-2 decoration-gray-600 hover:decoration-transparent text-gray-300 hover:text-white link link-underline link-underline-black text-white"
                    title="Street Cause"
                  >
                    @ Street for Cause
                  </a>
                  , Run for a Cause <br />
                  2018 - 2019 <br />
                  <text className="text-gray-500">
                    // Managed a team of 30 to organise and conduct fundraiser
                    marathon <br /> with 16,000 atendees.
                  </text>
                </li>
              </ul>
            </div>
          </div>

          {/* Lanugages Section */}
          <div
            className="text-white mt-10 mb-6 rounded-md w-full h-max font-mono"
            id="lang"
          >
            <h1 className="text-2xl font-[900] mx-52 text-pastel-green font-mono">
              {" "}
              Languages{" "}
            </h1>
            <div className="mx-52 mt-6 grid grid-cols-3 gap-15">
              <div className="text-gray-600">//advanced</div>
              <div className="text-gray-600">//intermediate</div>
              <div className="text-gray-600">//basic</div>
              <div className="text-gray-400">
                <text className="italic text-pastel-purple">en-US</text> English
                <br />
                <text className="italic text-pastel-purple">te-IN </text> Telugu
              </div>
              <div className="text-gray-400">
                <text className="italic text-pastel-purple">hi-IN </text> Hindi
              </div>
              <div className="text-gray-400">
                <text className="italic text-pastel-purple">ja-JP</text>{" "}
                Japanese
              </div>
            </div>
          </div>

          {/* Also busy with Section */}

          <div className="text-white mt-10 w-full h-max font-mono" id="hobbies">
            <h1 className="text-2xl font-[900] mx-52 text-pastel-green">
              {" "}
              Also busy with..{" "}
            </h1>
            <div className="mt-6 flex bg-pastel">
              <ul className="flex text-white font-mono grid grid-cols-2 gap-15 mb-32">
                <li className="mx-52 flex text-gray-500 ">Petting my cat</li>
                <li className="flex text-gray-500 ">Video Games</li>
                <li className="mx-52 flex text-gray-500 ">Photography</li>
              </ul>
            </div>
          </div>

          <button
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            className="opacity-10 hover:opacity-100 rounded-md bg-pastel-darkest border border-gray-500 text-white p-1 fixed bottom-0 right-0 mb-20 text-sm font-serif"
          >
            Scroll to top
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
