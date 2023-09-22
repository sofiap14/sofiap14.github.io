// ProjectsSection.js
import React from "react";
import Project from "./Project";
import { Element } from 'react-scroll';

function Projects() {
  const projects = [
    {
      title: "CryptoCrowd Sentiment Analysis",
      imageSrc: "/mm.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nulla nec metus interdum euismod. Sed id sapien id arcu eleifend egestas.",
      techStack: ["Tech 1", "Tech 2", "Tech 3"],
    },
    {
        title: "Weather App",
        imageSrc: "/mm2.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nulla nec metus interdum euismod. Sed id sapien id arcu eleifend egestas.",
        techStack: ["Tech 1", "Tech 2", "Tech 3"],
      },
    {
        title: "Dictionary App",
        imageSrc: "/img/cryptocrowd2.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nulla nec metus interdum euismod. Sed id sapien id arcu eleifend egestas.",
        techStack: ["Tech 1", "Tech 2", "Tech 3"],
    },

  ];

  return (
    <Element name="projects" className="projects">
        <section id="projects" className="projects">
            <div className="">
                <h2 className="text-lg ml-7 md:text-2xl lg:text-2xl lg:font-[900] md:mx-24 lg:mx-52 text-pastel-green py-4 md:py-8 lg:py-8 text-pastel-green mb-14">
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
