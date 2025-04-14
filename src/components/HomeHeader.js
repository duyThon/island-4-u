import React from "react";
import "../styles/home.css";

const HomeHeader = () => {
  return (
    <>
      <div className="absolute top-0 left-0 homepage-bg w-screen h-screen bg-cover bg-center">
        <div className="absolute top-0 left-0 waves w-screen h-screen bg-cover bg-center"></div>
      </div>
      <svg>
        <filter id="turbulence" x="0" y="0" width="100%" height="100%">
          <feTurbulence
            id="sea-filter"
            numOctaves="3"
            seed="2"
            baseFrequency="0.02 0.05"
          ></feTurbulence>
          <feDisplacementMap scale="20" in="SourceGraphic"></feDisplacementMap>
          <animate
            href="#sea-filter"
            attributeName="baseFrequency"
            dur="60s"
            keyTimes="0;0.5;1"
            values="0.02 0.06;0.04 0.08;0.02 0.06"
            repeatCount="indefinite"
          ></animate>
        </filter>
      </svg>
    </>
  );
};

export default HomeHeader;
