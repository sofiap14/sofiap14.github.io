import "./styles.css";
import React from "react";
import { AiOutlineLoading} from "react-icons/ai";
import AboutMe from "./About";
import NavBar from "./Navbar";
import MainSkills from "./MainSkills";
import Education from "./Education";

function App() {
  return (
    <div className="bg-pastel pb-28 pt-4">
      <NavBar />
      <AboutMe />
      <MainSkills />
      <Education />

      {/* Experience Section */}
      <div className="font-mono" id="exp">
        <span className="mt-8 text-lg ml-7 md:mx-24 md:text-2xl lg:text-2xl lg:flex lg:mt-10 lg:font-[900] md:text-2xl md: mt-md:mx-24 lg:mx-52 text-pastel-green">
          Experience
          <AiOutlineLoading className="invisible lg:visible lg:mx-3 lg:mt-2 animate-spin lg:h-5 lg:w-5 lg:mr-3"></AiOutlineLoading>
        </span>
        <div className="mt-6">
          <ul className="mx-7 grid grid-cols-2 gap-6 lg:flex text-white font-mono lg:grid lg:grid-cols-2 lg:gap-15 ">
            <li className="lg:mx-52 md:mx-24 lg:flex lg:text-lg text-pastel-purple lg:font-[900]">
              Graduate Student Assistant <br /> GSA
            </li>
            <li className="lg:flex lg:text-lg text-pastel-purple lg:font-[900]">
              Teaching Assistant <br /> (Computational Mathematics)
            </li>
            <li className="text-[14px] lg:text-lg md:mx-24 lg:mx-52 lg:flex text-gray-500">
              @ UMBC <br /> Jan 2022 - Present
            </li>
            <li className="text-[14px] lg:text-lg text-gray-500">
              @ JNTU <br />
              2019
            </li>
          </ul>
        </div>
      </div>
      {/* Experience Section Ends */}

      {/* Volunteer Experience Section */}
      <div
        className="mt-10 mb-6 font-mono"
        id="experience"
      >
        <h1 className="text-[16px] ml-7 md:text-2xl md:mx-24 lg:text-2xl lg:font-[900] lg:mx-52 text-pastel-green">
          {" "}
          Leadership Experience{" "}
        </h1>
        <div className="mt-6">
          <ul className="mx-7 text-[14px] grid grid-cols-2 gap-6 lg:flex text-white font-mono lg:grid lg:grid-cols-2 lg:gap-15 ">
            <li className="text-[16px] md:mx-24 md:flex md:text-lg lg:mx-52 lg:flex lg:font-[900] text-pastel-purple lg:font-[900]">
              Vice Chair <br /> NGO Volunteer
            </li>
            <li className="text-[16px] md:flex md:text-lg lg:flex text-pastel-purple lg:font-[900]">
              Level-1 Organizer <br />
            </li>
            <li className="text-[16px] md:mx-24 lg:mx-52 lg:text-lg text-gray-400 ">
              <a
                href="https://www.instagram.com/hyderabadyouthassembly/?hl=en"
                className="underline underline-offset-2 decoration-gray-600 hover:decoration-transparent text-gray-300 hover:text-white link link-underline link-underline-black text-white"
                title="Hyderabad Youth Assembly"
              >
                @ HYA
              </a>{" "}
              2018 - 2019 <br />
              <p className="text-[14px] lg:text-lg text-gray-400">
                // Lead a team of 25 to conduct 8 events working towards United
                Nations Sustainable Development Goals{" "}
              </p>
            </li>
            <li className="text-[14px] lg:text-lg text-gray-400 ">
              <a
                href="https://www.streetcause.org/index"
                className="underline underline-offset-2 decoration-gray-600 hover:decoration-transparent text-gray-300 hover:text-white link link-underline link-underline-black text-white"
                title="Street Cause"
              >
                @ Street for Cause
              </a>
              , Run for a Cause <br />
              2018 - 2019 <br />
              <p className="text-[14px] lg:text-lg text-gray-400">
                // Managed a team of 30 to organise and conduct fundraiser
                marathon <br /> with 16,000 atendees.
              </p>
            </li>
          </ul>
        </div>
      </div>
      {/* Volunteer Experience Ends */}

      {/* Lanugages Section */}
      <div
        className="mt-10 mb-6 font-mono"
        id="lang"
      >
        <h1 className="text-[16px] ml-7 md:text-2xl md:mx-24 lg:text-2xl lg:font-[900] lg:mx-52 text-pastel-green">
          {" "}
          Languages{" "}
        </h1>
        <div className="grid grid-cols-3 gap-8 max-w-sm mx-7 md:max-w-md md:mx-24 md:grid md:grid-cols-3 md:gap-18 lg:max-w-lg lg:mx-52 mt-6 lg:grid lg:grid-cols-3 lg:gap-15">
          <div className="text-[16px] lg:font-[900] text-gray-600">//fluent</div>
          <div className="text-[16px] lg:font-[900] text-gray-600">//advanced</div>
          <div className="text-[16px] lg:font-[900] text-gray-600">//basic</div>

          <div className="text-[14px] md:text-[18px] lg:font-[900] text-gray-400">
            <span className="italic text-pastel-purple">en-US</span> English
            <br />
            <span className="italic text-pastel-purple">te-IN </span> Telugu
          </div>
          <div className="text-[14px] md:text-[18px] lg:font-[900] text-gray-400">
            <span className="italic text-pastel-purple">hi-IN </span><br /> Hindi
            <br />
          </div>
          <div className="text-[14px] md:text-[18px] lg:font-[900] text-gray-400">
            <span className="italic text-pastel-purple">ja-JP</span> Japanese
          </div>
        </div>
      </div>
      {/* Languages Ends */}
      
      {/* hobbies Section    */}
      <div className="mt-1 font-mono" id="hobbies">
        <h1 className="mx-7 text-[16px] md:text-2xl lg:text-2xl lg:font-[900] md:mx-24 lg:mx-52 text-pastel-green">
          {" "}
          Also busy with..{" "}
        </h1>
        <div className="mt-6">
          <ul className="text-[14px] md:text-[18px] lg:text-[900] grid grid-cols-2 gap-6 lg:flex  text-white font-mono lg:grid lg:grid-cols-2 lg:gap-15">
            <li className="mx-7 md:mx-24 lg:mx-52 lg:flex text-gray-400 ">Petting my cat</li>
            <li className="mx-7 md:flex md:mx-24 lg:flex text-gray-400">Video Games</li>
            <li className="mx-7 md:mx-24 lg:mx-52 md:flex lg:flex text-gray-400 ">Photography</li>
          </ul>
        </div>
      </div>
      {/* Hobbies section Ends  */}
      <div className="fixed inset-x-0 bottom-0"> </div>

    </div>
  );
}

export default App;
