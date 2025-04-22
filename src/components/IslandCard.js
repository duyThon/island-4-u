import React from "react";
import location from "../assets/location.png";
import { useNavigate, Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const IslandCard = ({ island, inDetailPage = false }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (!inDetailPage) {
      gsap.to(window, {
        scrollTo: { y: 0 },
        duration: 0.6,
        ease: "power2.out",
      });
    } else {
      navigate(`/island/${island.id}`);
    }
  };
  return (
    <Link to={`/island/${island.id}`}>
      <div onClick={handleClick} className="w-full">
        <div
          className={`${
            inDetailPage ? "bg-white" : "bg-sky"
          } overflow-hidden shadow-md hover:shadow-lg transition-all duration-300`}
        >
          <div className="overflow-hidden h-[250px] relative">
            <img
              src={island.image}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-[20px] md:p-[30px]">
            <h3 className="text-[24px] text-dark font-playfair tracking-wider leading-none hover:text-red transition-colors duration-300 pb-[16px]">
              {island.name}
            </h3>
            <div className="island-detail text-[14px] text-gray font-roboto">
              <p className="flex justify-start items-center text-[16px]">
                <img src={location} className="w-[12px] mr-[4px]" />
                {island.location}
              </p>
              <p
                style={{ borderBottom: "1px solid #ccc" }}
                className="flex justify-between py-[8px]"
              >
                <span className="text-dark">Type</span> For {island.type}
              </p>
              <p
                style={{ borderBottom: "1px solid #ccc" }}
                className="flex justify-between py-[8px]"
              >
                <span className="text-dark">Area</span> {island.area} Acres
              </p>
              <p className="flex justify-between py-[8px]">
                <span className="text-dark">Price</span> ${" "}
                {Number(island.price).toLocaleString()}
                {island.type === "rent" ? "/Night" : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default IslandCard;
