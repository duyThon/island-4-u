import React, { useState, useEffect } from "react";
import IslandCard from "../IslandCard";
import { fetchIslands } from "../../utils/fetchIslands";
import { getRandomIslandsByType } from "../../utils/getRandomIslandsByType";

const HomePageSection3 = () => {
  const [rentIslands, setRentIslands] = useState([]);
  const [saleIslands, setSaleIslands] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchIslands();
      setRentIslands(getRandomIslandsByType(data, "rent", 6));
      setSaleIslands(getRandomIslandsByType(data, "sale", 6));
    };
    loadData();
  }, []);

  return (
    <>
      <section className="section3 w-screen px-[30px] py-[50px] md:px-[50px] md:py-[80px] lg:p-[140px] bg-sky">
        <div className="section3-container">
          <div className="flex flex-col justify-center items-center space-y-[24px]">
            <h3 className="text-dark md:text-[16px] lg:text-[20px] font-playfair tracking-wide font-bold">
              FOR RENT
            </h3>
            <h2 className="text-dark text-[30px] lg:text-[60px] font-playfair tracking-wide leading-none">
              Trending Islands
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[40px] pt-[40px] md:pt-[60px]">
            {rentIslands.map((island) => (
              <IslandCard key={island.id} island={island} inDetailPage={true} />
            ))}
          </div>
          <div className="w-full flex justify-center pt-[50px]">
            <button className="bg-red font-roboto font-600 uppercase text-[16px] text-white px-[25px] md:px-[50px] lg:px-[30px] py-[10px] md:py-[20px] lg:py-[16px] tracking-wide shadow-lg hover:bg-opacity-80 transition">
              DISCOVER MORE
            </button>
          </div>

          <div className="flex flex-col justify-center items-center space-y-[24px] pt-[50px] md:pt-[100px]">
            <h3 className="text-dark md:text-[16px] lg:text-[20px] font-playfair tracking-wide font-bold">
              FOR SALE
            </h3>
            <h2 className="text-dark text-[30px] lg:text-[60px] font-playfair tracking-wide leading-none">
              Trending Islands
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[40px] pt-[40px] md:pt-[60px]">
            {saleIslands.map((island) => (
              <IslandCard key={island.id} island={island} inDetailPage={true} />
            ))}
          </div>
          <div className="w-full flex justify-center pt-[50px]">
            <button className="bg-red font-roboto font-600 uppercase text-[16px] text-white px-[25px] md:px-[50px] lg:px-[30px] py-[10px] md:py-[20px] lg:py-[16px] tracking-wide shadow-lg hover:bg-opacity-80 transition">
              DISCOVER MORE
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePageSection3;
