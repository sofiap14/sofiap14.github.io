import React from "react";
import 'aos/dist/aos.css';
import Links from "./Links";

function AboutSofia() {
  return (
    <div className="container text-white lg:pt-20" id="about">
      {/* About Sofia */}
      <h1 className="flex justify-center text-5xl font-mono font-bold" style={{ whiteSpace: 'nowrap' }}>
        about (<span className="text-pastel-purple">sofia</span>)
      </h1>

      <Links />

    </div>
  );
}

export default AboutSofia;
