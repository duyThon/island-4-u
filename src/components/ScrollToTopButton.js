// src/components/ScrollToTopButton.js
import { useEffect, useState } from "react";
import up from "../assets/up.png";

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    show && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-dark shadow-lg hover:bg-red  transition duration-300 z-50"
        aria-label="Scroll to top"
      >
        <img
          src={up}
          className="w-[30px] brightness-[200%] hover:brightness-0"
        />
      </button>
    )
  );
};

export default ScrollToTopButton;
