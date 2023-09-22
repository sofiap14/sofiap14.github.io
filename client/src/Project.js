import React, { useEffect, useState } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';

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
    <div className="container flex flex-col md:flex-row lg:flex-row xl:flex-row" data-aos="fade-up">
      <div className="project-left text-white w-full md:w-1/2 lg:w-1/2 xl:w-1/2 md:order-1 lg:order-1 xl:order-1">
        {imageLoadError ? (
          <div className="image-placeholder">Image Loading Error</div>
        ) : (
          <img src={imageSrc} alt="" onError={handleImageError} className="w-full h-auto" />
        )}
      </div>
      <div className="project-right ml-4 flex-1 md:ml-0 lg:ml-0 xl:ml-0 md:order-2 lg:order-2 xl:order-2">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
        <ul className="tech-stack-list mt-4">
          <p className="text-gray-400">
            <b>Made with: </b>
          </p>
          {techStack.map((tech, index) => (
            <li key={index} className="text-gray-300">{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}