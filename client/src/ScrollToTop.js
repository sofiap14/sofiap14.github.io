import React, { useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1500) {
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
      className={`fixed right-4 bottom-4 bg-pastel-purple text-white px-3 py-0.5 transition-opacity ${
        isVisible ? "opacity-90" : "opacity-0"
      }`}
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
