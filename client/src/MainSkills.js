import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import nodejs from './images/nodejsLogo.png';
import react from './images/reactLogo.png';
import python from './images/pythonLogo.png';
import cpp from './images/cppLogo.png';
import html from './images/htmlLogo.png';
import css from './images/cssLogo.png';
import javascript from './images/javascriptLogo.png';
import java from './images/javaLogo.png';
import express from './images/expressLogo3.png';
import git from './images/gitLogo.png';
import linux from './images/linuxLogo.png';
import mongodb from './images/mongodbLogo.png';
import mysql from './images/mysqlLogo.png';
import aws from './images/awsLogo.png';

export default function MainSkills() {

  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  return (
    <section id="skills">
      <div className="container pb-28" data-aos="zoom-in">
        <h2 className="text-[18px] text-center text-pastel-green font-mono"> Main Skills </h2>
        <ul className="md:flex md:flex-wrap md:justify-center md:space-x-9 lg:p-28 lg:flex lg:flex-wrap lg:justify-center lg:space-x-9 text-center items-center grid grid-cols-3 justify-items-center p-6 gap-x-4 gap-y-14 lg:grid-cols-7 lg:gap-x-1 lg:gap-y-20 text-gray-200 font-mono text-sm place-items-baseline">
          <li className="w-20 h-20 lg:w-24">
            <div className="transform transition duration-200 hover:scale-150">
              <img src={nodejs} alt="NodeJs" />
              <span> NodeJS </span>
            </div>
          </li>
          <li className="w-20 h-20 lg:w-24">
            <div className="transform transition duration-200 hover:scale-150">
              <img src={react} alt="React" />
              <span> React </span>
            </div>
          </li>
          <li className="w-20 h-20 lg:w-24">
            <div className="transform transition duration-200 hover:scale-125">
              <img src={python} alt="Python" />
              <span> Python </span>
            </div>
          </li>
          <li className="w-20 h-20 lg:w-24">
            <div className="transform transition duration-200 hover:scale-150">
              <img src={java} alt="Java" />
              <span> Java </span>
            </div>
          </li>
          <li className="w-20 h-20 lg:w-24">
            <div className="transform transition duration-200 hover:scale-150">
              <img src={cpp} alt="C++" />
              <span> C++ </span>
            </div>
          </li>
          <li className="w-20 h-20 lg:w-24">
            <div className="transform transition duration-200 hover:scale-150">
              <img src={aws} alt="AWS" />
              <span> Amazon Web Services </span>
            </div>
          </li>
          <li className="w-20 h-20 lg:w-24">
            <div className="transform transition duration-200 hover:scale-150">
              <img src={html} alt="HTML" />
              <span> HTML </span>
            </div>
          </li>
          <li className="w-20 h-20 lg:w-24">
            <div className="transform transition duration-200 hover:scale-150">
              <img src={css} alt="CSS" />
              <span> CSS </span>
            </div>
          </li>
          <li className="w-20 h-20 lg:w-24">
            <div className="transform transition duration-200 hover:scale-125">
              <img src={javascript} alt="JavaScript" />
              <span> JavaScript </span>
            </div>
          </li>
          <li className="w-20 h-20 lg:w-24">
            <div className="transform transition duration-200 hover:scale-125">
              <img src={mysql} alt="MySQL" />
              <span> MySQL </span>
            </div>
          </li>
          <li className="w-20 h-20 lg:w-24">
            <div className="transform transition duration-200 hover:scale-150">
              <img src={express} alt="Express" />
              <span> Express </span>
            </div>
          </li>
          <li className="w-20 h-20 lg:w-24">
            <div className="transform transition duration-200 hover:scale-150">
              <img src={git} alt="Git" />
              <span> Git </span>
            </div>
          </li>
          <li className="w-20 h-20 lg:w-24">
            <div className="transform transition duration-200 hover:scale-125">
              <img src={linux} alt="Linux" />
              <span> Linux </span>
            </div>
          </li>
          <li className="w-20 h-20 lg:w-24">
            <div className="transform transition duration-200 hover:scale-125">
              <img src={mongodb} alt="MongoDB" />
              <span> MongoDB </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
