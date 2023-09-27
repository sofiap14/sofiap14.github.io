import React from "react";

export default function NavBar() {
  return (
    <nav className="container flex justify-center lg:justify-end font-mono">
      <div>
        <ul className="space-x-6 md:space-x-10 lg:space-x-14">
          <li className="inline-block">
            <a href="#projects" className="text-white text-xs md:text-md lg:text-md underline underline-offset-2 decoration-gray-600 hover:decoration-transparent hover:text-white link link-underline link-underline-black ">.projects()</a>
          </li>
          <li className="inline-block">
            <a href="#skills" className=" text-white text-xs md:text-md lg:text-md underline underline-offset-2 decoration-gray-600 hover:decoration-transparent  hover:text-white link link-underline link-underline-black">.skills()</a>
          </li>
          <li className="inline-block">
            <a href="#education" className="text-white text-xs md:text-md lg:text-md underline underline-offset-2 decoration-gray-600 hover:decoration-transparent hover:text-white link link-underline link-underline-black">.education</a>
          </li>
          <li className="inline-block">
            <a href="#contact-form" className="text-white text-xs md:text-md lg:text-md underline underline-offset-2 decoration-gray-600 hover:decoration-transparent hover:text-white link link-underline link-underline-black">.contact()</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
