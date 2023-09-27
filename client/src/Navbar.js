import React from "react";

export default function NavBar() {
  return (
    <nav className="container flex justify-center font-mono">
      <div>
        <ul className="space-x-6">
          <li className="inline-block">
            <a href="#projects" className="text-white text-xs">.projects()</a>
          </li>
          <li className="inline-block">
            <a href="#skills" className="text-white text-xs">.skills()</a>
          </li>
          <li className="inline-block">
            <a href="#education" className="text-white text-xs">.education</a>
          </li>
          <li className="inline-block">
            <a href="#contact-form" className="text-white text-xs">.contact()</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
