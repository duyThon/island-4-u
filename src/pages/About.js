import React from "react";
import "../styles/about.css";
import HomePageSection2 from "../components/home-page/HomePageSection2";
import PageTransition from "../components/PageTransition";

import img1 from "../assets/about/1.jpg";
import img2 from "../assets/about/2.jpg";

const About = () => {
  return (
    <PageTransition>
      <div className="h-[30vh] md:h-[60vh] overflow-hidden relative">
        <img src={img1} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center text-white font-playfair text-[30px] md:text-[60px] lg:text-[80px]">
          About Us
        </div>
      </div>

      <div className="about-container px-[30px] py-[50px] md:px-[50px] md:py-[80px] lg:p-[100px]">
        <div className="pb-[30px] space-y-[20px] md:py-[60px] md:space-y-[30px]">
          <div className="flex items-center justify-start space-x-[20px] ">
            <div className="border-b-2 border-[#d7b184] w-[50px] h-0"></div>
            <h3 className="text-dark md:text-[16px] lg:text-[20px] font-playfair tracking-wide lg:font-bold">
              Who We Are
            </h3>
          </div>
          <h2 className="text-dark text-[40px] lg:text-[60px] font-playfair tracking-wide leading-none capitalize">
            Curators of Paradise
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-[20px] md:gap-[40px] md:gap-[80px]">
          <div className="col-span-2 md:col-span-1 space-y-[30px] md:space-y-[60px]">
            <p className="text-gray font-roboto text-[12px] lg:text-[20px] tracking-wider">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex justify-start items-center space-x-[30px]">
              <div className="rounded-[50%] bg-dark w-[80px] h-[80px] overflow-hidden">
                <img src={img1} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-[10px]">
                <h3 className="text-dark md:text-[20px] lg:text-[26px] font-playfair tracking-widest lg:font-bold">
                  Nguyen Duy Thong
                </h3>
                <p className="text-gray font-roboto text-[14px] lg:text-[22px] tracking-wide">
                  CEO Director
                </p>
              </div>
            </div>
            {/* <h2 className="text-dark text-[40px] lg:text-[60px] font-playfair tracking-wide leading-none">
              Exploring Exotic <br /> Destinations
            </h2> */}
          </div>
          <div className="col-span-2 md:col-span-1 space-x-0 space-y-[20px] md:space-x-[60px] md:space-y-0 grid grid-cols-1 md:grid-cols-2">
            <div className="space-y-[40px]">
              <p className="text-gray font-roboto text-[12px] lg:text-[20px] tracking-wider">
                <span className="drop-cap text-dark font-playfair text-[30px] lg:text-[60px] leading-none">
                  L
                </span>
                ontrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </p>
              <p className="text-gray font-roboto text-[12px] lg:text-[20px] tracking-wider">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div className="space-y-[40px]">
              <p className="text-gray font-roboto text-[12px] lg:text-[20px] tracking-wider">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble that are bound to ensue
              </p>
              <p className="text-gray font-roboto text-[12px] lg:text-[20px] tracking-wider">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore.
              </p>
            </div>
          </div>
        </div>
        <div className="py-[30px] pt-[50px] md:py-[60px] md:pt-[100px] space-y-[20px] md:space-y-[30px]">
          <div className="flex items-center justify-center space-x-[20px] ">
            <div className="border-b-2 border-[#d7b184] w-[50px] h-0"></div>
            <h3 className="text-dark md:text-[16px] lg:text-[20px] font-playfair tracking-wide lg:font-bold">
              What We Do
            </h3>
            <div className="border-b-2 border-[#d7b184] w-[50px] h-0"></div>
          </div>
          <h2 className="text-dark text-[40px] lg:text-[60px] font-playfair tracking-wide leading-none capitalize text-center">
            Exploring Exotic Destinations
          </h2>
        </div>
        <div className="grid grid-cols-12 md:px-[100px]">
          <div className="md:col-span-7 md:w-5/6 md:pl-[100px] col-span-12 space-y-[20px]">
            <div className="text-gray text-center md:text-start text-[18px] lg:text-[36px] font-playfair tracking-wider leading-none capitalize">
              CREATE YOUR DREAM VACATION <br /> WITH ISLAND LUXURY
            </div>
            <p className="text-gray font-roboto text-[12px] lg:text-[20px] tracking-wider">
              At Island Luxury, helping you find the perfect vacation retreat is
              just the beginning. We're dedicated to making your tropical dreams
              a reality, whether that means arranging a shipwreck dive or
              booking a day of spa treatments right in your very own villa. Our
              complimentary concierge service is standing by to assist you with
              transportation, provisioning, excursions and so much more. Our
              goal? Help you create vacation memories you'll cherish for a
              lifetime.
            </p>
          </div>
          <div className="md:col-span-5 col-span-12 pt-[40px] md:pt-0 space-x-[60px]">
            <div className="md:space-x-[60px] flex">
              <div className=" border-l-2 border-[#d7b184] w-0 h-[200px] md:h-[300px] mt-[80px]"></div>
              <div className="space-y-[30px]">
                <h3 className="text-gray md:text-[16px] lg:text-[20px] font-playfair tracking-wide lg:font-bold capitalize">
                  our core values
                </h3>
                <div className="space-y-[30px] pl-[60px] md:pl-0">
                  <div className="text-dark text-[20px] lg:text-[36px] font-playfair tracking-wider leading-none capitalize">
                    AUTHENTICITY
                  </div>
                  <div className="text-dark text-[20px] lg:text-[36px] font-playfair tracking-wider leading-none capitalize">
                    PROFESSIONALISM
                  </div>
                  <div className="text-dark text-[20px] lg:text-[36px] font-playfair tracking-wider leading-none capitalize">
                    TRANSPARENCY
                  </div>
                  <div className="text-dark text-[20px] lg:text-[36px] font-playfair tracking-wider leading-none capitalize">
                    EXCEPTIONALISM
                  </div>
                  <div className="text-dark text-[20px] lg:text-[36px] font-playfair tracking-wider leading-none capitalize">
                    GROWTH
                  </div>
                  <div className="text-dark text-[20px] lg:text-[36px] font-playfair tracking-wider leading-none capitalize">
                    COMMUNITY
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomePageSection2 />

      <div className=" w-screen h-[220px] md:h-[390px] overflow-hidden relative">
        <img src={img2} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-y-0 left-[30px] right-[30px] md:left-[100px] md:right-[100px] flex items-center justify-center text-white text-[30px] lg:text-[60px] font-playfair leading-none">
          <div className="md:flex items-center justify-center md:justify-between w-full">
            <h2>
              Making memories: island owner <br className="hidden md:block" />{" "}
              experiences to remember
            </h2>
            <button className="mt-[40px] md:mt-0 bg-red font-roboto font-600 uppercase text-[16px] text-white px-[25px] md:px-[50px] py-[10px] md:py-[20px] tracking-wide shadow-lg hover:bg-opacity-80 transition">
              See now
            </button>
          </div>
        </div>
      </div>

      <div className="w-screen px-[30px] py-[50px] md:px-[50px] md:py-[80px] lg:p-[100px]">
        <h2 className="text-dark text-[30px] lg:text-[60px] font-playfair tracking-wide leading-none text-center">
          Leave A Message
        </h2>
        <div className="grid grid-cols-12 space-y-[40px]">
          <div className="hidden md:block md:col-span-2 lg:col-span-3"></div>
          <div className="col-span-12 md:col-span-10 lg:col-span-6 space-y-[40px]">
            <div className="grid grid-cols-2 gap-[20px] md:gap-[40px]">
              <input
                className="section6-input col-span-2 md:col-span-1"
                placeholder="First Name"
              />
              <input
                className="section6-input col-span-2 md:col-span-1"
                placeholder="Email"
              />
            </div>

            <div className="grid grid-cols-2 gap-[20px] md:gap-[40px]">
              <input
                className="section6-input col-span-2 md:col-span-1"
                placeholder="Last Name"
              />
              <input
                className="section6-input col-span-2 md:col-span-1"
                placeholder="Phone"
              />
            </div>

            <textarea
              id="message"
              className="section6-input"
              placeholder="Message"
            ></textarea>

            <div className="w-full flex items-center justify-center">
              <button className="bg-red font-roboto font-600 uppercase text-[16px] text-white px-[25px] md:px-[50px] py-[10px] md:py-[20px] tracking-wide shadow-lg hover:bg-opacity-80 transition">
                get in touch
              </button>
            </div>
          </div>
          <div className="hidden md:block md:col-span-2 lg:col-span-3"></div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
