import "./styles.css";
import React, { useEffect } from 'react';
import { AiOutlineLoading} from "react-icons/ai";
import AboutMe from "./About";
import NavBar from "./Navbar";
import MainSkills from "./MainSkills";
import Education from "./Education";
import Projects from "./Projects";

function App() {
  return (
    <div className="bg-pastel pb-28">
      <NavBar />
      <AboutMe />
      <Projects />
      <MainSkills />
      <Education />





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
