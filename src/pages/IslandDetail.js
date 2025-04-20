import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { fetchIslands } from "../utils/fetchIslands";
import { getRandomIslandsByType } from "../utils/getRandomIslandsByType";
import { useNavigate } from "react-router-dom";
import IslandCard from "../components/IslandCard";
import PageTransition from "../components/PageTransition";
import gsap from "gsap";

import img1 from "../assets/island-detail/1.jpg";
import img2 from "../assets/island-detail/2.jpg";
import img3 from "../assets/island-detail/3.jpg";
import img4 from "../assets/island-detail/4.jpg";

export default function IslandDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [island, setIsland] = useState(null);
  const [islandsForRent, setIslandsForRent] = useState(null);
  const [islandsForSale, setIslandsForSale] = useState(null);
  const [activeTab, setActiveTab] = useState("rent");
  const contentRef = useRef();

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchIslands();
      setIsland(data.find((item) => item.id === Number(id)));
      setIslandsForRent(getRandomIslandsByType(data, "rent", 2));
      setIslandsForSale(getRandomIslandsByType(data, "sale", 2));
    };
    loadData();
  }, [id]);

  const handleServiceClick = (service) => {
    const params = new URLSearchParams({
      keyword: service,
    });
    navigate(`/islands?${params.toString()}`);
  };

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;

    gsap.to(contentRef.current, {
      opacity: 0,
      scale: 0.99,
      duration: 0.4,
      ease: "power2.out",
      onComplete: () => {
        setActiveTab(tab);

        setTimeout(() => {
          gsap.fromTo(
            contentRef.current,
            { opacity: 0, scale: 0.99 },
            { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
          );
        }, 50);
      },
    });
  };

  const currentIslands = activeTab === "rent" ? islandsForRent : islandsForSale;

  if (!island) {
    return <div className="text-white text-center p-10">Loading...</div>;
  }

  return (
    <PageTransition>
      <div className="h-[30vh] md:h-[60vh] overflow-hidden relative">
        <img src={island.image} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center text-white font-playfair text-[30px] md:text-[60px] lg:text-[80px]">
          {island.name}
        </div>
        <div className="absolute bottom-[40px] md:bottom-[100px] left-1/2 -translate-x-1/2 text-white">
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

      <div className="island-detail-container px-[30px] py-[50px] md:px-[50px] md:py-[80px] lg:p-[100px] grid grid-cols-12 space-y-[50px] md:space-y-0 md:gap-[40px]">
        <div className="col-span-12 md:col-span-5 lg:col-span-4 relative">
          <div className="grid grid-cols-3 md:sticky md:top-[150px]">
            <div className="col-span-1 text-dark text-[14px] md:text-[24px] font-roboto space-y-[10px]">
              <p>Location</p>
              <p>Price</p>
              <p>Area</p>
              <p>Services</p>
            </div>
            <div className="col-span-2 text-[14px] md:text-[24px] text-gray font-roboto space-y-[10px]">
              <p>{island.location}</p>
              <p>
                {Number(island.price).toLocaleString()}$
                {island.type === "rent" ? "/Night" : ""}
              </p>
              <p>{island.area} Acres</p>
              <ul className="list-none text-[14px] md:text-[24px] flex flex-wrap gap-1 pt-[10px]">
                {island.services?.map((service, i) => (
                  <li
                    className=" w-max text-gray bg-sky px-[7px] py-[4px] hover:text-red cursor-pointer"
                    key={i}
                    onClick={() => handleServiceClick(service)}
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-7 lg:col-span-8">
          <img src={img1} className="mb-[30px]" />
          <h2 className="text-center md:text-start text-dark text-[30px] md:text-[60px] font-playfair tracking-wide leading-none mb-[20px]">
            {island.name}
          </h2>
          <p className="text-gray font-roboto text-[12px] lg:text-[20px] tracking-wider">
            Few places in the South Pacific are as iconic as Bora Bora, with its
            jungle-clad volcanic peaks, Mount Otemanu and Mount Pahia, soaring
            more than 2,000 feet above its white sands and turquoise lagoon. The
            shallow, crystal-clear waters are home to some 800 species of
            tropical fish, along with sharks, rays and sea turtles.
          </p>
          <div className="grid grid-cols-2 gap-[12px] mt-[30px]">
            <img src={img2} className="col-span-1 object-bottom" />
            <img src={img3} className="col-span-1 object-center" />
          </div>
          <img src={img4} className="mt-[10px]" />
        </div>
      </div>

      <div className="bg-sky w-screen px-[30px] py-[50px] md:px-[50px] md:py-[80px] lg:p-[100px]">
        <h2 className="text-dark text-[30px] lg:text-[60px] font-playfair tracking-wide leading-[1.3] md:leading-none text-center">
          Inquire About <br className="block md:hidden" /> This Island
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

            <div className="w-full flex items-center justify-between">
              <div className="space-x-[10px] flex">
                <input type="checkbox" name="agree" />
                <p className="text-gray text-[8px] md:text-[20px] font-roboto">
                  I agree to the{" "}
                  <span className="underline underline-offset-4 cursor-pointer">
                    Privacy Policy.
                  </span>
                </p>
              </div>
              <button className="bg-red font-roboto font-600 uppercase text-[12px] md:text-[16px] text-white px-[16px] md:px-[50px] py-[6px] md:py-[20px] tracking-wide shadow-lg hover:bg-opacity-80 transition">
                Inquire About This Island
              </button>
            </div>
          </div>
          <div className="hidden md:block md:col-span-2 lg:col-span-3"></div>
        </div>
      </div>

      <div className="w-full px-[30px] py-[50px] md:px-[50px] md:py-[80px] lg:p-[100px] bg-white">
        <h2 className="text-dark text-[30px] lg:text-[60px] font-playfair tracking-wide leading-[1.3] md:leading-none text-center">
          Other Islands You May Be Interested In
        </h2>
        <div className="flex justify-center gap-[40px] my-[20px] md:my-[40px] font-roboto text-[16px] md:text-[24px]">
          <button
            className="group relative inline-block overflow-hidden transition text-dark"
            onClick={() => handleTabChange("rent")}
          >
            Island for Rent
            <span
              className={`absolute left-0 bottom-0 h-[2px] w-0 bg-dark transition-all duration-500 group-hover:w-full ${
                activeTab === "rent" ? "w-full" : ""
              }`}
            ></span>
          </button>
          <button
            className="group relative inline-block overflow-hidden transition text-dark"
            onClick={() => handleTabChange("sale")}
          >
            Island for Sale
            <span
              className={`absolute left-0 bottom-0 h-[2px] w-0 bg-dark transition-all duration-500 group-hover:w-full ${
                activeTab === "sale" ? "w-full" : ""
              }`}
            ></span>
          </button>
        </div>

        <div
          ref={contentRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-[40px] transition-opacity transform-gpu"
        >
          {currentIslands.map((island) => (
            <IslandCard key={island.id} island={island} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
