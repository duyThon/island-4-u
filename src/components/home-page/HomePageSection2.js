import React from "react";
import { Link } from "react-router-dom";
import horizontal from "../../assets/home-bg/section2/horizontal-bg.jpg";
import section2Island from "../../assets/home-bg/section2/section2-island.jpg";

const HomePageSection2 = () => {
  return (
    <>
      <section className="section2 bg-white w-screen px-[30px] py-[50px] md:px-[50px] md:py-[80px] lg:p-[140px]">
        <div className="section2-container grid grid-cols-12 gap-y-[20px] gap-x-0 md:gap-x-[40px] flex justify-start items-start">
          <div className="col-span-12 md:col-span-6 flex justify-start">
            <img className="w-[700px]" src={horizontal} />
          </div>
          <div className="col-span-12 md:col-span-6 flex flex-col justify-start space-y-[24px]">
            <h3 className="text-dark md:text-[16px] lg:text-[16px] font-playfair tracking-wide lg:font-bold">
              TOP OFFER
            </h3>
            <h2 className="text-dark text-[40px] lg:text-[50px] font-playfair tracking-wide leading-none">
              Island charter
              <br /> must-haves
            </h2>
            <p className="text-gray font-roboto text-[12px] lg:text-[16px] lg:w-2/3 tracking-wider">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <Link to="/about">
              <div className="text-dark flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 -rotate-90 scale-[0.4]"
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
                <span className="font-roboto text-[12px] lg:text-[14px]">
                  Read More
                </span>
              </div>
            </Link>
            <img className=" md:pt-[20px] lg:pt-[60px]" src={section2Island} />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePageSection2;
