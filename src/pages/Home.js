import React from "react";
import "../styles/home.css";

import HomeHeader from "../components/HomeHeader";
import Hero from "../components/HeroSection";

const Home = () => {
  return (
    <>
      <div className="home-header w-screen h-screen">
        <Hero />
        <HomeHeader />
      </div>
    </>
  );
};

export default Home;
