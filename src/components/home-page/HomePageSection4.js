import React from "react";
import { Link } from "react-router-dom";

import about1 from "../../assets/home-bg/section4/section4-about1.jpg";
import about2 from "../../assets/home-bg/section4/section4-about2.jpg";
import services1 from "../../assets/home-bg/section4/section4-services1.jpg";
import services2 from "../../assets/home-bg/section4/section4-services2.jpg";

const HomePageSection4 = () => {
  return (
    <>
      <div className="section4 bg-white w-screen px-[30px] py-[50px] md:px-[50px] md:py-[80px] lg:p-[140px] space-y-[50px] md:space-y-[100px]">
        <div className="section4-container-about grid grid-cols-12">
          <div className="hidden lg:block lg:col-span-2">
            <img className="object-cover" src={about1} />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-5 px-[20px] md:px-[40px] lg:px-[60px] space-y-[24px] py-[24px] bg-sand">
            <h3 className="text-dark md:text-[16px] lg:text-[16px] font-playfair tracking-wide lg:font-bold">
              ABOUT US
            </h3>
            <h2 className="text-dark text-[40px] lg:text-[50px] font-playfair tracking-wide leading-none">
              Who We Are
            </h2>
            <p className="text-gray font-roboto text-[12px] lg:text-[16px] tracking-wider">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link to="/about">
              <div className="text-dark flex items-center justify-end">
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
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <img src={about2} className=" w-full h-full object-cover" />
          </div>
        </div>

        <div className="section4-container-services grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 lg:col-span-5 order-2 md:order-1">
            <img
              src={services1}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-5 order-1 md:order-2 px-[20px] md:px-[40px] lg:px-[60px] space-y-[24px] py-[24px] bg-sky text-end">
            <h3 className="text-dark md:text-[16px] lg:text-[16px] font-playfair tracking-wide lg:font-bold">
              OUR SERVICES
            </h3>
            <h2 className="text-dark text-[40px] lg:text-[50px] font-playfair tracking-wide leading-none">
              What We Do
            </h2>
            <p className="text-gray font-roboto text-[12px] lg:text-[16px] tracking-wider">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link to="/about">
              <div className="text-dark flex items-center justify-end">
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
          </div>
          <div className="hidden lg:order-3 lg:block lg:col-span-2 overflow-hidden">
            <img
              className="w-full h-full object-cover object-center"
              src={services2}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageSection4;
