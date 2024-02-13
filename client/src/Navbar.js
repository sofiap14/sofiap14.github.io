import React, { useState, useEffect } from "react";

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Add event listener to track scroll position and update active section
    const handleScroll = () => {
      // Calculate the offset and determine the active section
      // Adjust the offset based on your layout
      const offset = window.scrollY + 100; // Adjust as needed
      const projectsSection = document.getElementById("projects").offsetTop;
      const skillsSection = document.getElementById("skills").offsetTop;
      const educationSection = document.getElementById("education").offsetTop;
      const contactSection = document.getElementById("contact-form").offsetTop;

      if (offset < skillsSection) {
        setActiveSection("projects");
      } else if (offset < educationSection) {
        setActiveSection("skills");
      } else if (offset < contactSection) {
        setActiveSection("education");
      } else {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-[4.5rem] w-full sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full text-gray-300 text-sm">
      <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 p-5 mt-3 h-10 flex justify-center items-center bg-opacity-80 border border-pastel-purpledeep rounded-full border-opacity-40 shadow-lg shadow-black/[0.01] backdrop-blur-[0.5rem] dark:bg-pastel-purple dark:bg-opacity-75">
        <ul className="flex space-x-6 md:space-x-10 lg:space-x-14">
          <li className={`inline-block ${activeSection === "projects" ? "active-section" : ""}`}>
            <a href="#projects" className="nav-link">Projects</a>
          </li>
          <li className={`inline-block ${activeSection === "skills" ? "active-section" : ""}`}>
            <a href="#skills" className="nav-link">Skills</a>
          </li>
          <li className={`inline-block ${activeSection === "education" ? "active-section" : ""}`}>
            <a href="#education" className="nav-link">Education</a>
          </li>
          <li className={`inline-block ${activeSection === "contact" ? "active-section" : ""}`}>
            <a href="#contact-form" className="nav-link">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
