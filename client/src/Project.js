import React, { useEffect, useState } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';
import imageError from './images/imageError.png';
import { AiOutlineYoutube, AiFillGithub } from "react-icons/ai";
import { CgWebsite } from 'react-icons/cg';

export default function Project({ title, imageSrc, description, techStack, demoLink, codeLink, liveLink }) {
  const [imageLoadError, setImageLoadError] = useState(false);

  const handleImageError = () => {
    setImageLoadError(true);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <div className="project-row" data-aos="fade-up">
      {/* Project Left */}
      <div className="project-left pt-4 pb-4 w-342 h-300">
        <div>
          {imageLoadError ? (
            <div className="image-placeholder"><img src={imageError} alt="Error" /></div>
          ) : (
            <img src={imageSrc} alt="" className="rounded" onError={handleImageError} />
          )}
        </div>
      </div>

      {/* Project Right */}
      <div className="flex flex-col space-y-2 project-right pb-8"> {/* <div className="md:ml-0 lg:ml-0 xl:ml-0 md:order-2 lg:order-2 xl:order-2"> */}

          <h3 className="font-sans font-semibold text-2xl">{title}</h3> {/* Project Title */}

          <ul className="flex flex-wrap space-x-3 "> {/* Project Tech Stack */}
            <p className="text-gray-500 font-mono font-light pt-3"> Made with: </p>
            {techStack.map((tech, index) => (
              <li key={index} className="text-gray-300">{tech}</li>
            ))}
          </ul>

          <p className="text-gray-300">{description}</p> {/* Project Description */}

          <div className="flex space-x-4 pt-2"> {/* Project Links */}

            {demoLink && (
              <a href={demoLink}>
                <button className="border border-pastel-purple flex bg-pastel-purple text-white hover:bg-white hover:text-pastel-purple text-sm -my-0.5 px-2 py-0.5 rounded-full shadow hover:shadow-md outline-none focus:outline-none" title="Demo">
                  <AiOutlineYoutube className="m-0.5 mr-1 text-xl" /> Demo
                </button>
              </a>
            )}

            {codeLink && (
              <a href={codeLink}>
                <button className="border border-pastel-purple flex bg-pastel-purple text-white hover:bg-white hover:text-pastel-purple text-sm -my-0.5 px-2 py-0.5 rounded-full shadow hover:shadow-md outline-none focus:outline-none" title="Code">
                  <AiFillGithub className="m-0.5 mr-1 text-xl" /> Code
                </button>
              </a>
            )}

            {liveLink && (
              <a href={liveLink}>
                <button className="border border-pastel-purple flex bg-pastel-purple text-white hover:bg-white hover:text-pastel-purple text-sm -my-0.5 px-2 py-0.5 rounded-full shadow hover:shadow-md outline-none focus:outline-none" title="Live">
                  <CgWebsite className="m-0.5 mr-1 text-xl" /> Live
                </button>
              </a>
            )}

          </div>
      </div>
    </div>
  );
}