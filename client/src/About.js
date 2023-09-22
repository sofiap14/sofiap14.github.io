import "./styles.css";
import React, { useEffect } from "react";
import AboutSofia from "./AboutSofia";
import 'aos/dist/aos.css';

export default function About() {

  return (
    <div class="container">
      <AboutSofia />
      <div className="flex justify-center items-center" data-aos="fade-up" data-aos-duration="700">
        <div className="text-sm lg:mx-auto md:place-content-center md:text-lg md:mt-12 max-w-2xl lg:max-w-3xl font-mono text-pastel-purple">
          <p className="mt-5 mb-5 md:m-7 text-justify">
            Recent graduate with a Master's in Computer Science from University of Maryland, Baltimore County.
            I've honed my skills in Python, Java, JavaScript, React.js, and Node.js through hands-on experience, collaboration with diverse teams,
            and a commitment to personal projects.
          </p>
          <p className="mt-5 mb-5 md:m-7 text-justify">
            From India, based in the United States.
          </p>
          <p className="mt-5 mb-5 md:mt-6 text-gray-600 text-justify">
            // she / her <br />
            // Aspiring full-stack developer
          </p>
        </div>
      </div>
    </div>
  );
}