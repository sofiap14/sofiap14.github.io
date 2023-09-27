import "./styles.css";
import React from "react";
import AboutSofia from "./AboutSofia";
import 'aos/dist/aos.css';

export default function About() {

  return (
    <div class="">
      <AboutSofia />
      <div className="container flex items-center justify-between" data-aos="fade-up" data-aos-duration="700">
        <div className="text-lg  font-mono text-white font-medium">
          <p class="container" className="p-4 text-center">
            Recent graduate with a Master's in Computer Science from <a
              href="https://gradschool.umbc.edu/"
              className="underline underline-offset-2 text-pastel-purple decoration-gray-600hover:decoration-transparent  hover:text-white link link-underline link-underline-black"
              title="University of Maryland Baltimore County"
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