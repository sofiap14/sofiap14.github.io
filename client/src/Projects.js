import React from "react";
import Project from "./Project";
import { Element } from 'react-scroll';
import nodejs from './images/nodejsLogo.png';
import react from './images/reactLogo.png';
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
      title: "Virtual Garden",
      imageSrc: "/img/cryptocrowd2.png",
      description: "I made this Virtual Garden web application incorporating the MERN stack. The web application has Auth0 authentication on both the frontend and backend. Users can create gardens and add plants to the gardens - to virtually track and manage their home gardens. I styled the frontend using TailwindCSS. Work in progress.",
      techStack: [<img src = {mongodb} alt="MongoDB" className="project-logo"/>, <img src = {express} alt="Express.js" className="project-logo"/>, <img src = {nodejs} alt="NodeJS" className="project-logo"/>, <img src = {react} alt="ReactJS" className="project-logo"/>, <img src = {auth0} alt="Auth0" className="project-logo mt-1.5"></img> ],
      codeLink: "https://github.com/sofiap14/virtual-garden",
    },
    {
      title: "Weather App",
      imageSrc: "/weather1.png",
      description: "Weather web application that fetches real-time weather data from OpenWeatherMap API, displaying temperature and humidity information for any city that the user inputs. The app also integrates the Google Maps API for location visualization. Built using Node.js and Express.js, with a CSS frontend.",
      techStack: [<img src = {nodejs} alt="Node.js" className="project-logo"/>, <img src = {express} alt="Express.js" className="project-logo"/>, <img src = {googlemaps} alt="Google Maps API" className="project-logo"/>, <img src = {javascript} alt="JavaScript" className="project-logo"/> ],
      codeLink: "https://github.com/sofiap14/node-weather-app",
    },
    {
      title: "Dictionary App",
      imageSrc: "/dictionary2.png",
      description: "Dictionary web application that uses Merriam-Webster Dictionary API for the user to explore the meaning of any word they enter. Built using Node.js and Express.js with a clean CSS frontend.",
      techStack: [<img src = {nodejs} alt="Node.js" className="project-logo"/>, <img src = {express} alt="Express.js" className="project-logo"/>],
      demoLink: "https://youtu.be/eSuvpIrVjHE",
      codeLink: "https://github.com/sofiap14/dictionary-webapp",
    },
  ];

  return (
    <div className="bg-gray-900 rounded-e-full">
    <Element name="projects" className="container pb-28 flex justify-center">
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