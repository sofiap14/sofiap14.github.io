import React, { useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-4 bottom-4 bg-blue-500 text-white px-4 py-2 rounded-full transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      ↑ Top
    </button>
  );
};

export default ScrollToTopButton;
