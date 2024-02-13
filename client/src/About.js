import "./styles.css";
import React from "react";
import AboutSofia from "./AboutSofia";
import 'aos/dist/aos.css';

export default function About() {

  return (
    <div className="pb-28">
      <AboutSofia />
      <div className="container flex items-center justify-between" data-aos="fade-up" data-aos-duration="700">
        <div className="text-lg font-mono text-white font-medium">
          <p className="container p-4 md:pl-36 md:pr-36 md:text-left lg:pl-36 lg:pr-36 text-center lg:text-left">
            Recent graduate with a Master's in Computer Science from <a
              href="https://gradschool.umbc.edu/"
              className=" md:truncate  lg:truncate underline underline-offset-2 text-pastel-purple decoration-gray-600 hover:decoration-transparent hover:text-pastel-purpledeep link link-underline link-underline-black"
              title="Graduate School UMBC"
            >
              University of Maryland, Baltimore County. <br />
            </a><br />

            I spend my day working on projects using Python, Java, JavaScript, React.js, and Node.js.
            <br/><br/>

            From India, based in the United States. <br/> <br/>

          <span className="text-gray-600 text-justify">
            // she / her <br />
            // Aspiring full-stack developer
          </span>
          </p>
        </div>
      </div>
    </div>
  );
}