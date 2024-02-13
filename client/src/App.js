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
      <AboutMe />
      <Projects />
      <MainSkills />
      <Education />
      <OtherSkills />
      <ContactCard />
      <ScrollToTopButton />
      <NavBar />
      </div>
  );
}

export default App;
