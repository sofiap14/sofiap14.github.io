// Projects.js
import React from "react";
import Project from "./Project";
import { Element } from 'react-scroll';
import nodejs from './images/nodejsLogo.png';
import react from './images/reactLogo.png';
import html from './images/htmlLogo.png';
import css from './images/cssLogo.png';
import javascript from './images/javascriptLogo.png';
import java from './images/javaLogo.png';
import express from './images/expressLogo2.png';
import git from './images/gitLogo.png';



function Projects() {

  const projects = [
    {
      title: "Weather App",
      imageSrc: "/weather1.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nulla nec metus interdum euismod. Sed id sapien id arcu eleifend egestas.",
      techStack: [<img src = {nodejs} alt="Node.js" className="project-logo"/>, <img src = {express} alt="Express.js" className="project-logo"/>, <img src = {javascript} alt="JavaScript" className="project-logo"/>, <img src = {react} alt="React.js" className="project-logo"/>, <img src = {react} alt="React.js" className="project-logo"/>, <img src = {react} alt="React.js" className="project-logo"/>, <img src = {react} alt="React.js" className="project-logo"/>],
      demoLink: "https://www.example.com/demo1",
      codeLink: "https://www.example.com/code1",
      liveLink: "https://www.example.com/live1",
    },
    {
      title: "Dictionary App",
      imageSrc: "/dictionary2.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nulla nec metus interdum euismod. Sed id sapien id arcu eleifend egestas.",
      techStack: ["Tech 1", "Tech 2", "Tech 3"],
      demoLink: "https://www.example.com/demo2",
      codeLink: "https://www.example.com/code2",
    },
    {
      title: "Cryptocurrency Analysis",
      imageSrc: "/img/cryptocrowd2.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nulla nec metus interdum euismod. Sed id sapien id arcu eleifend egestas.",
      techStack: ["Tech 1", "Tech 2", "Tech 3"],
      codeLink: "https://www.example.com/code3",
    },
  ];

  return (
    <div className="bg-gray-800 rounded-e-full">
    <Element name="projects" className="container ">
      <section id="projects" className="projects ">
        <div className='text-center text-white'>
          <h2 className="text-lg text-pastel-green pb-6">
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