import React from "react";
import Project from "./Project";
import { Element } from 'react-scroll';
import nodejs from './images/nodejsLogo.png';
import react from './images/reactLogo.png';
import cpp from './images/cppLogo.png';
import python from './images/pythonLogo.png';
import ubuntu from './images/ubuntuLogo.png';
import jupyter from './images/jupyterLogo.png';
import opencv from './images/opencvLogo.png';
import numpy from './images/numpyLogo.png';
import scikit from './images/scikitLogo.png';
import matplot from './images/matplotlibLogo.png';
// import html from './images/htmlLogo.png';
// import css from './images/cssLogo.png';
import javascript from './images/javascriptLogo.png';
// import java from './images/javaLogo.png';
import express from './images/express-js.png';
// import git from './images/gitLogo.png';
import mongodb from './images/mongodbLogo.png';
import googlemaps from './images/googleMapsLogo.png';
import auth0 from './images/auth0Logo1.png';


function Projects() {

  const projects = [
    {
      title: "Texture Synthesis",
      imageSrc: "/texturesynthesis.gif",
      description: " I implemented an advanced texture synthesis algorithm using graphcut technique to create an output image from a sample texture image that is seamless without misfitting edges and a larger size. I implemented the Ford-Fulkerson algorithm for maximum flow and minimum cut - which was a crucial component to acheiving an optimal texture synthesis. This project has applications in computer graphics, gaming and virtual environments to generate high quality textures for various in-game surfaces, terrains and objects.",
      techStack: [<img src = {python} alt="Python" className="project-logo p-0.5 mt-0.5"/>, <img src = {jupyter} alt="Jupyter Notebook" className="project-logo p-0.5"/>, <img src = {matplot} alt="Matplot" className="project-logo py-0.5"/>, <img src = {scikit} alt="scikit-learn" className="project-logo mt-2"/>, <img src = {numpy} alt="numpy" className="project-logo"/>, <img src = {opencv} alt="opencv" className="project-logo p-0.5"/>],
      codeLink: "https://github.com/sofiap14/graph-cut",
    },
    {
      title: "Thread-safe Banking System with C++",
      imageSrc: "",
      description: "I developed a banking system where the server-side program manages customer records, handling operations like withdrawl, deposits, and balances inquiries through socket-based model. Clients interact with the server by sending transaction details with the server processing them using mutex locks to prevent race conditions. The program includes a clock for calculating transaction execution time. Built using C++ on Ubuntu.",
      techStack: [<img src = {cpp} alt="CPP" className="project-logo"/>, <img src = {ubuntu} alt="Ubuntu" className="project-logo p-0.5"/>],
      codeLink: "https://github.com/sofiap14/clientserver/",
    },
    { 
      title: "Virtual Garden",
      imageSrc: "/virtualgarden.png",
      description: "I made this Garden Management web application incorporating the MERN stack. The web application has Auth0 authentication on both the frontend and backend. Users can create gardens and add plants to the gardens (perform CRUD operations seamlessly) - to virtually track and manage their home gardens. I styled the React frontend using TailwindCSS. Work in progress.",
      techStack: [<img src = {mongodb} alt="MongoDB" className="project-logo"/>, <img src = {express} alt="Express.js" className="project-logo p-0.5"/>, <img src = {nodejs} alt="NodeJS" className="project-logo"/>, <img src = {react} alt="ReactJS" className="project-logo"/>, <img src = {auth0} alt="Auth0" className="project-logo mt-1.5"></img> ],
      codeLink: "https://github.com/sofiap14/virtual-garden",
    },
    // {
    //   title: "Weather App",
    //   imageSrc: "/weather1.png",
    //   description: "Weather web application that fetches real-time weather data from OpenWeatherMap API, displaying temperature and humidity information for any city that the user inputs. The app also integrates the Google Maps API for location visualization. Built using Node.js and Express.js, with a CSS frontend.",
    //   techStack: [<img src = {nodejs} alt="Node.js" className="project-logo"/>, <img src = {express} alt="Express.js" className="project-logo p-0.5"/>, <img src = {googlemaps} alt="Google Maps API" className="project-logo"/>, <img src = {javascript} alt="JavaScript" className="project-logo"/> ],
    //   codeLink: "https://github.com/sofiap14/node-weather-app",
    // },
    // {
    //   title: "Dictionary App",
    //   imageSrc: "/dictionary2.png",
    //   description: "Dictionary web application that uses Merriam-Webster Dictionary API for the user to explore the meaning of any word they enter. Built using Node.js and Express.js with a clean CSS frontend.",
    //   techStack: [<img src = {nodejs} alt="Node.js" className="project-logo"/>, <img src = {express} alt="Express.js" className="project-logo p-0.5"/>],
    //   demoLink: "https://youtu.be/eSuvpIrVjHE",
    //   codeLink: "https://github.com/sofiap14/dictionary-webapp",
    // },
  ];

  return (
    <div className="bg-gray-900 rounded-e-full pb-28">
    <Element name="projects" className="container flex pb-10 justify-center">
      <section id="projects" className="projects ">
        <div className='text-center text-white'>
          <h2 className="text-[18px] text-pastel-green font-mono pb-6">
            My
            <span className=""> Projects </span>
          </h2>
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              imageSrc={project.imageSrc}
              description={project.description}
              techStack={project.techStack}
              demoLink={project.demoLink}
              codeLink={project.codeLink}
              liveLink={project.liveLink}
            />
          ))}
        </div>
      </section>
    </Element>
    </div>
  );
}

export default Projects;