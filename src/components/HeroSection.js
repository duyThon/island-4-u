import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const chars = titleRef.current.querySelectorAll("span");
    gsap.fromTo(
      chars,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 1,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      subtitleRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1.5,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      buttonRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 2,
        ease: "power2.out",
      }
    );
  }, []);

  const renderText = (text) =>
    text.split("").map((char, index) => (
      <span key={index} className="inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <section
      style={{ zIndex: "1" }}
      className="w-full h-full text-white relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full -translate-y-1/2 text-center">
        <h1
          style={{ textShadow: "0px 2px 6px #000" }}
          ref={titleRef}
          className="text-[30px] md:text-[60px] lg:text-[100px] font-playfair mb-2 md:mb-4"
        >
          {renderText("Find Your Private Island")}
        </h1>
        <h2
          style={{ textShadow: "0px 2px 6px #000" }}
          ref={subtitleRef}
          className="text-[12px] md:text-[24px] lg:text-[30px] font-playfair mb-6"
        >
          A Lifestyle For The Independent Adventurous Personality
        </h2>
        <button
          ref={buttonRef}
          className="bg-primary font-roboto font-600 uppercase text-[16px] text-white px-[25px] md:px-[50px] lg:px-[30px] py-[10px] md:py-[20px] lg:py-[16px] tracking-wide shadow-lg hover:bg-opacity-80 transition"
        >
          Discover More
        </button>
      </div>
    </section>
  );
}
