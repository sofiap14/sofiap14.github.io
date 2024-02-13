import React, { useState, useEffect } from "react";

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
  
      const projectsSection = document.getElementById("projects").offsetTop;
      const skillsSection = document.getElementById("skills").offsetTop;
      const educationSection = document.getElementById("education").offsetTop;
      const contactSection = document.getElementById("contact-form").offsetTop;
      const otherSection = document.getElementById("hobbies").offsetTop;
      const aboutSection = document.getElementById("about").offsetTop;
  
      if (offset < projectsSection) {
        setActiveSection("about")
      }
      else if (offset < skillsSection) {
        setActiveSection("projects");
      } else if (offset < educationSection) {
        setActiveSection("skills");
      } else if (offset < contactSection - 290) {
        setActiveSection("education");
      } else if (offset <= otherSection) {
        setActiveSection("contact");
      } else {
        setActiveSection("contact");
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 80;
      const topPos = section.offsetTop - offset;
      window.scrollTo({ top: topPos, behavior: "smooth" });
    }
  };

  return (
    <div className="h-[4.5rem] w-full sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full text-gray-300 text-sm">
      <nav className="sm: text-xs sm:top-6 fixed top-0 left-1/2 transform -translate-x-1/2 p-5 mt-3 h-10 flex justify-center items-center bg-opacity-80 border border-pastel-purpledeep rounded-full border-opacity-40 shadow-lg shadow-black/[0.01] backdrop-blur-[0.5rem] dark:bg-pastel-purpledeep dark:bg-opacity-75">
        <ul className="flex space-x-6 md:space-x-10 lg:space-x-14 ">
          <li className={`inline-block ${activeSection === "about" ? "active-section" : ""}`}>
            <button className="hover:text-pastel-purple" onClick={() => scrollToSection("about")}>Home</button>
          </li>
          <li className={`inline-block ${activeSection === "projects" ? "active-section" : ""}`}>
            <button className="hover:text-pastel-purple" onClick={() => scrollToSection("projects")}>Projects</button>
          </li>
          <li className={`inline-block ${activeSection === "skills" ? "active-section" : ""}`}>
            <button className="hover:text-pastel-purple" onClick={() => scrollToSection("skills")}>Skills</button>
          </li>
          <li className={`inline-block ${activeSection === "education" ? "active-section" : ""}`}>
            <button className="hover:text-pastel-purple" onClick={() => scrollToSection("education")}>Education</button>
          </li>
          <li className={`inline-block ${activeSection === "contact" ? "active-section" : ""}`}>
            <button className="hover:text-pastel-purple" onClick={() => scrollToSection("contact-form")}>Contact</button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
