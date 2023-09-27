import "./styles.css";
import React from 'react';
import AboutMe from "./About";
import NavBar from "./Navbar";
import MainSkills from "./MainSkills";
import Education from "./Education";
import Projects from "./Projects";
import OtherSkills from "./OtherSkills";
import ContactCard from "./Contact";
import ScrollToTopButton from "./ScrollToTop";

function App() {
  return (
    <div className="bg-pastel pb-28">
      <NavBar />
      <AboutMe />
      <Projects />
      <MainSkills />
      <Education />
      <OtherSkills />
      <ContactCard />
      <ScrollToTopButton />
    <div className="fixed inset-x-0 bottom-0 pb-52"> </div>

    </div>
  );
}

export default App;
