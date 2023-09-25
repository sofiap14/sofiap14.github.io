import React from "react";

export default function NavBar() {
  return (
    <nav className="flex justify-center pt-8 pb-10 font-mono">
      <div>
        <ul className="space-x-6">
          <li className="inline-block">
            <a href="#projects" className="text-white text-sm">Projects</a>
          </li>
          <li className="inline-block">
            <a href="#skills" className="text-white text-sm">Skills</a>
          </li>
          <li className="inline-block">
            <a href="#education" className="text-white text-sm">Education</a>
          </li>
          <li className="inline-block">
            <a href="#contact" className="text-white text-sm">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
