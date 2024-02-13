import React, { useEffect, useState } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css';
import lfjc from './images/lfjc.png';
import jntu from './images/JNTU_Hyderabad_logo.png';
import umbc from './images/UMBCLogo.png';
import imageError from './images/imageError.png';

const educationData = [
  {
    uniLogo: umbc,
    href: "https://gradschool.umbc.edu/",
    year: 'August 2021 - August 2023',
    university: 'University of Maryland, Baltimore County',
    degree: 'Master of Science',
    gpa: 'GPA 3.76/4.0',
    details: ['Major in Computer Science', 'Graduate Student Assistant - Principles of Computer Security (Spring 22, Fall 22), Discrete Mathematics (Spring 23)', 'Baltimore, USA'],
  },
  {
    uniLogo: jntu,
    href: "https://cvr.ac.in/home4/",
    year: '2017 - 2021',
    university: 'Jawaharlal Nehru Technological University',
    degree: 'Bachelor of Technology',
    gpa: 'GPA 3.82/4.0',
    details: ['Major in Computer Science and Engineering', 'Magna cum laude', 'Student Volunteer Organization Head', 'Hyderabad, India'],
  },
  {
    uniLogo: lfjc,
    href: "https://lfjc.co.in/",
    year: '2017',
    university: 'LFJC',
    degree: 'Associates',
    gpa: 'GPA 3.9/4.0',
    details: ['Secondary education in Math, Physics and Chemistry', 'Hyderabad, India'],
  }
];

export default function EducationCard() {

  const [imageLoadError, setImageLoadError] = useState(false);

  const handleImageError = () => {
    setImageLoadError(true);
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <section id="education" className='container'>
      <div className="education pb-28 border rounded-lg border-gray-900 shadow-xl dark:default:shadow-dark lg:text-sm lg:font-normal lg:text-gray-300">
        <h2 className="text-[18px] text-center text-pastel-green font-mono mt-4" data-aos="zoom-in">Education</h2> {/*Main Title*/}
        
        {/*Education Card*/}
        {educationData.map((data, index) => ( 
          <div key={index} className="container md:pl-36 md:pr-36 lg:pl-36 lg:pr-36" data-aos='zoom-in'>
            <div className="border border-gray-950 bg-gray-900 rounded-large flex md:justify-center lg:justify-center">
              <div className="p-2 w-1/3 md:w-1/6 lg:w-1/6"> {/*Uni Logo, left column*/}
                {imageLoadError ? (
                  <div className="image-placeholder"><img src={imageError} alt="Error" /></div>
                  ) : (
                  <img src={data.uniLogo} alt="University Logo" onError={handleImageError} />
                  )}
              </div>

              <div className="education p-4 w-2/3 text-gray-350"> {/*Education details, right column*/}
                <h4>{data.year}</h4>
                <h4 className='font-semibold'>
                <a href={data.href} className="underline underline-offset-2 decoration-gray-600 hover:decoration-transparent text-gray-350 hover:text-white link link-underline link-underline-black"> 
                  {data.university} - {data.degree}
                </a>
                </h4>
                <p className='pt-1 pb-1'>{data.gpa}</p>
                <ul className="list-disc list-inside"> {/* Style list items using Tailwind CSS classes */}
                  {data.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
