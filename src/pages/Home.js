import React, { useEffect, useRef } from "react";
import "../styles/home.css";
import gsap from "gsap";

import HomeHeader from "../components/HomeHeader";
import Hero from "../components/HeroSection";
import HomePageSection2 from "../components/home-page/HomePageSection2";
import HomePageSection3 from "../components/home-page/HomePageSection3";
import HomePageSection4 from "../components/home-page/HomePageSection4";
import HomePageSection5 from "../components/home-page/HomePageSection5";
import HomePageSection6 from "../components/home-page/HomePageSection6";

const Home = () => {
  const arrowRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      arrowRef.current,
      { y: 0, opacity: 0 },
      {
        opacity: 1,
        delay: 2.75,
        duration: 0.5,
        ease: "power1.out",
        onComplete: () => {
          gsap.to(arrowRef.current, {
            y: 10,
            repeat: -1,
            yoyo: true,
            duration: 1.2,
            ease: "power1.inOut",
          });
        },
      }
    );
  }, []);
  return (
    <>
      <div className="home-header w-screen h-screen overflow-hidden">
        <Hero />
        <HomeHeader />

        <div
          ref={arrowRef}
          className="absolute bottom-[100px] left-1/2 -translate-x-1/2 text-white opacity-80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* section-2 */}
      <HomePageSection2 />

      {/* section-3 */}
      <HomePageSection3 />

      {/* section-4 */}
      <HomePageSection4 />

      {/* section-5 */}
      <HomePageSection5 />

      {/* section-6 */}
      <HomePageSection6 />
    </>
  );
};

export default Home;
