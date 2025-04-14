import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const charsRef = useRef([]);

  const text = "Find Your Private Island";

  useEffect(() => {
    // Xóa ref cũ nếu có
    charsRef.current = charsRef.current.slice(0, text.length);

    gsap.fromTo(
      charsRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1.1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div
      style={{ zIndex: 1 }}
      className="absolute w-screen h-screen flex items-center justify-center text-white"
    >
      <h1 className="text-[120px] font-playfair flex flex-wrap justify-center text-center">
        {text.split("").map((char, i) => (
          <span
            key={i}
            ref={(el) => (charsRef.current[i] = el)}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default Hero;
