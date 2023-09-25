import React, { useEffect, useState } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';
import imageError from './images/imageError.png';

export default function Project({ title, imageSrc, description, techStack }) {
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

      <div className="project-left pt-4 pb-4">
        <div className="text-white">
          {imageLoadError ? (
            <div className="image-placeholder"><img src={imageError} alt="Error" /></div>
          ) : (
            <img src={imageSrc} alt="" onError={handleImageError} className="w-full h-auto" />
          )}
        </div>
      </div>

      <div className="flex flex-col space-y-2 project-right">
        {/* <div className="md:ml-0 lg:ml-0 xl:ml-0 md:order-2 lg:order-2 xl:order-2"> */}
          <h3 className="font-sans font-semibold text-2xl">{title}</h3>
          <ul className="flex flex-wrap space-x-3">
            <p className="text-gray-400"> <b> Made with: </b> </p>
            {techStack.map((tech, index) => (
              <li key={index} className="text-gray-300">{tech}</li>
            ))}
          </ul>
          <p className="text-gray-300">{description}</p>
          <div className="flex space-x-4">
            <a href="https://www.youtube.com/watch?v=uhyC0M4WIl4" className="text-pastel-purple hover:text-white bg-transparent hover:bg-pastel-purple border border-pastel-purple rounded-full px-3 py-2 items-center mx-1" target="_blank">
              <i class="fab fa-youtube text-2xl mr-1"></i> Demo
            </a>
            <a href="https://github.com/ben04rogers/cab432-assignment-2" className="text-pastel-purple hover:text-white bg-transparent hover:bg-pastel-purple border border-pastel-purple rounded-full px-3 py-2 flex items-center mx-1" target="_blank">
              <i class="fab fa-github text-2xl mr-1"></i> Code
            </a>
          </div>

            

        </div>
    </div>
  );
}