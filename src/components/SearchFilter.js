import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

const SearchFilter = ({ onFilterChange, islandsData }) => {
  const [keyword, setKeyword] = useState("");
  const [sortType, setSortType] = useState("");
  const [sortArea, setSortArea] = useState("");
  const [sortPrice, setSortPrice] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [servicesList, setServicesList] = useState([]);

  // getFullServices
  useEffect(() => {
    const allServices = islandsData.flatMap((island) => island.services || []);
    const uniqueServices = [...new Set(allServices)];
    const result = uniqueServices.slice(2, 10);
    setServicesList(result);
  }, [islandsData]);

  // useEffect(() => {
  //   setServicesList([
  //     "Turn Key",
  //     "Private Dock",
  //     "Luxury Villa",
  //     "Snorkeling",
  //     "Infinity Pool",
  //     "Diving",
  //     "Hiking",
  //     "Hot Springs",
  //   ])
  // },[])

  const dropdownRefs = {
    type: useRef(null),
    area: useRef(null),
    price: useRef(null),
  };

  useEffect(() => {
    Object.keys(dropdownRefs).forEach((key) => {
      if (openDropdown === key) {
        gsap.to(dropdownRefs[key].current, {
          height: "auto",
          opacity: 1,
          duration: 0.4,
        });
      } else {
        gsap.to(dropdownRefs[key].current, {
          height: 0,
          opacity: 0,
          duration: 0.4,
        });
      }
    });
  }, [openDropdown]);

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const handleSortSelect = (key, value) => {
    if (key === "area") setSortArea(value);
    else if (key === "price") setSortPrice(value);
    else setSortType(value);
    setOpenDropdown(null);
  };

  const handleServiceToggle = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const clearFilters = () => {
    setKeyword("");
    setSortType("");
    setSortArea("");
    setSortPrice("");
    setSelectedServices([]);
    handleSearchClick();
  };

  const handleSearchClick = () => {
    onFilterChange({
      keyword,
      sortType,
      sortBy: { area: sortArea, price: sortPrice },
      services: selectedServices,
    });
  };

  return (
    <div className="space-y-[40px]">
      {/* Keyword Input */}
      <input
        type="text"
        placeholder="Search keyword..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="section6-input"
      />

      {/* Sort by Type */}
      <div>
        <div
          onClick={() => toggleDropdown("type")}
          className={`flex justify-between items-center text-[30px] font-roboto cursor-pointer ${
            sortType ? "text-dark" : "text-gray"
          }`}
        >
          <span>
            {sortType
              ? sortType == "rent"
                ? "Islands For Rent"
                : "Islands For Sale"
              : "Island Types"}
          </span>
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 ${
              openDropdown === "type" ? "rotate-180" : ""
            }`}
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

        <div ref={dropdownRefs.type} className="overflow-hidden h-0 opacity-0">
          <div
            className="p-[14px] font-roboto text-[24px] text-gray cursor-pointer hover:text-red"
            onClick={() => handleSortSelect("type", "rent")}
          >
            Islands For Rent
          </div>
          <div
            className="p-[14px] font-roboto text-[24px] text-gray cursor-pointer hover:text-red"
            onClick={() => handleSortSelect("type", "sale")}
          >
            Islands For Sale
          </div>
        </div>
      </div>

      {/* Sort by Area */}
      <div>
        <div
          onClick={() => toggleDropdown("area")}
          className={`flex justify-between items-center text-[30px] font-roboto cursor-pointer ${
            sortArea ? "text-dark" : "text-gray"
          }`}
        >
          <span>
            {sortArea
              ? sortArea == "asc"
                ? "Area: Low to High"
                : "Area: High to Low"
              : "Sort by Area"}
          </span>
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 ${
              openDropdown === "area" ? "rotate-180" : ""
            }`}
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

        <div ref={dropdownRefs.area} className="overflow-hidden h-0 opacity-0">
          <div
            className="p-[14px] font-roboto text-[24px] text-gray cursor-pointer hover:text-red"
            onClick={() => handleSortSelect("area", "asc")}
          >
            Low to High
          </div>
          <div
            className="p-[14px] font-roboto text-[24px] text-gray cursor-pointer hover:text-red"
            onClick={() => handleSortSelect("area", "desc")}
          >
            High to Low
          </div>
        </div>
      </div>

      {/* Sort by Price */}
      <div>
        <div
          onClick={() => toggleDropdown("price")}
          className={`flex justify-between items-center text-[30px] font-roboto cursor-pointer ${
            sortPrice ? "text-dark" : "text-gray"
          }`}
        >
          <span>
            {sortPrice
              ? sortPrice == "asc"
                ? "Price: Low to High"
                : "Price: High to Low"
              : "Sort by Price"}
          </span>
          <svg
            className={`w-6 h-6 transform transition-transform duration-300 ${
              openDropdown === "price" ? "rotate-180" : ""
            }`}
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
        <div ref={dropdownRefs.price} className="overflow-hidden h-0 opacity-0">
          <div
            className="p-[14px] font-roboto text-[24px] text-gray cursor-pointer hover:text-red"
            onClick={() => handleSortSelect("price", "asc")}
          >
            Low to High
          </div>
          <div
            className="p-[14px] font-roboto text-[24px] text-gray cursor-pointer hover:text-red"
            onClick={() => handleSortSelect("price", "desc")}
          >
            High to Low
          </div>
        </div>
      </div>

      {/* Service Filters */}
      <div>
        <span
          className={`text-[30px] font-roboto ${
            selectedServices.length > 0 ? "text-dark" : "text-gray"
          }`}
        >
          Services
        </span>
        <div className="grid grid-cols-2 pt-[10px]">
          {servicesList.map((service) => (
            <label
              key={service}
              className="flex items-center gap-[10px] py-[6px] font-roboto text-[24px] text-gray cursor-pointer hover:text-red"
            >
              <input
                className="accent-red w-[20px] h-[20px] cursor-pointer"
                type="checkbox"
                checked={selectedServices.includes(service)}
                onChange={() => handleServiceToggle(service)}
              />
              {service}
            </label>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center mt-[40px]">
        <button
          onClick={clearFilters}
          className="font-roboto text-[24px] text-gray cursor-pointer hover:text-red flex items-center group"
        >
          <svg
            className="fill-gray group-hover:fill-red"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 24 24"
          >
            <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
          </svg>
          Clear filters
        </button>
        <button
          onClick={handleSearchClick}
          className="bg-red font-roboto font-600 uppercase text-[16px] text-white px-[25px] md:px-[30px] py-[10px] md:py-[10px] tracking-wide shadow-lg hover:bg-opacity-80 transition"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
