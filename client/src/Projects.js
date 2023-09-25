// ProjectsSection.js
import React from "react";
import Project from "./Project";
import { Element } from 'react-scroll';

function Projects() {
  const projects = [
    {
      title: "Weather App",
      imageSrc: "/weather.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nulla nec metus interdum euismod. Sed id sapien id arcu eleifend egestas.",
      techStack: ["Tech 1", "Tech 2", "Tech 3", "Tech 3", "Tech 3","Tech 3", "Tech 3"],
    },
    {
        title: "Dictionary App",
        imageSrc: "/dictionary.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nulla nec metus interdum euismod. Sed id sapien id arcu eleifend egestas.",
        techStack: ["Tech 1", "Tech 2", "Tech 3"],
      },
    {
        title: "Cryptocurrency analysis",
        imageSrc: "/img/cryptocrowd2.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nulla nec metus interdum euismod. Sed id sapien id arcu eleifend egestas.",
        techStack: ["Tech 1", "Tech 2", "Tech 3"],
    },

  ];

  return (
    <Element name="projects" class="container">
        <section id="projects" className="projects">
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
            />
            ))}
          </div>
        </section>
    </Element>
  );
};

export default Projects;
