import React from "react";

export default function NavBar() {
  return (
    <nav className="top-0 right-0 p-4 bg-pastel.purple">
      <div className="flex justify-center">
        <ul className="list-none p-0 space-x-4">
          <li className="inline-block">
            <a href="#projects" className="text-white text-sm md:text-base">Projects</a>
          </li>
          <li className="inline-block">
            <a href="#skills" className="text-white text-sm md:text-base">Skills</a>
          </li>
          <li className="inline-block">
            <a href="#education" className="text-white text-sm md:text-base">Education</a>
          </li>
          <li className="inline-block">
            <a href="#contact" className="text-white text-sm md:text-base">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
