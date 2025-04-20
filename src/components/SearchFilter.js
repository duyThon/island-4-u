import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import filter from "../assets/filter.png";

const SearchFilter = ({ onFilterChange, islandsData }) => {
  const [keyword, setKeyword] = useState("");
  const [sortType, setSortType] = useState("");
  const [sortArea, setSortArea] = useState("");
  const [sortPrice, setSortPrice] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [servicesList, setServicesList] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownRefs = {
    type: useRef(null),
    area: useRef(null),
    price: useRef(null),
  };

  const serviceDropdownRef = useRef(null);

  useEffect(() => {
    const allServices = islandsData.flatMap((island) => island.services || []);
    const uniqueServices = [...new Set(allServices)];
    const result = uniqueServices.slice(2, 10);
    setServicesList(result);
  }, [islandsData]);

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

  useEffect(() => {
    if (openDropdown === "services") {
      gsap.to(serviceDropdownRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
      });
    } else {
      gsap.to(serviceDropdownRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
      });
    }
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
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile UI */}
      <div className="md:hidden">
        <div className="flex items-center gap-[10px]">
          <input
            type="text"
            placeholder="Search keyword..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearchClick();
            }}
            className="section6-input"
          />
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-[2px] bg-gray-200 rounded border"
          >
            <img src={filter} className="w-[30px]" />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div
            style={{ zIndex: "999" }}
            className="fixed inset-0 bg-white p-[30px] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-[30px]">
              <h2 className="text-dark text-[20px] font-roboto tracking-wide">
                Filter Options
              </h2>
              <button
                className="text-dark text-[20px] font-roboto"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                X
              </button>
            </div>

            {/* Type */}
            <div className="mb-[40px]">
              <label className="block text-gray font-roboto text-[16px] tracking-wide mb-[10px]">
                Type
              </label>
              <div className="flex gap-[20px] justify-center flex-col">
                <div className="relative">
                  <button
                    onClick={() => setSortType("rent")}
                    className={`px-4 py-2 border relative w-full ${
                      sortType === "rent" ? "border-red" : ""
                    }`}
                  >
                    Islands For Rent
                  </button>
                  {sortType === "rent" && (
                    <div class="absolute top-0 left-0 w-0 h-0 border-t-[14px] border-t-red border-r-[30px] border-r-transparent border-b-0 border-l-0"></div>
                  )}
                </div>
                <div className="relative">
                  <button
                    onClick={() => setSortType("sale")}
                    className={`px-4 py-2 border relative w-full ${
                      sortType === "sale" ? "border-red" : ""
                    }`}
                  >
                    Islands For Sale
                  </button>
                  {sortType === "sale" && (
                    <div class="absolute top-0 left-0 w-0 h-0 border-t-[14px] border-t-red border-r-[30px] border-r-transparent border-b-0 border-l-0"></div>
                  )}
                </div>
              </div>
            </div>

            {/* Sort by Area */}
            <div className="mb-[40px]">
              <label className="block text-gray font-roboto text-[16px] tracking-wide mb-[10px]">
                Sort by Area
              </label>
              <div className="flex gap-[20px] justify-center flex-col">
                <div className="relative">
                  <button
                    onClick={() => setSortArea("asc")}
                    className={`px-4 py-2 border relative w-full ${
                      sortArea === "asc" ? "border-red" : ""
                    }`}
                  >
                    Low to High
                  </button>
                  {sortArea === "asc" && (
                    <div class="absolute top-0 left-0 w-0 h-0 border-t-[14px] border-t-red border-r-[30px] border-r-transparent border-b-0 border-l-0"></div>
                  )}
                </div>
                <div className="relative">
                  <button
                    onClick={() => setSortArea("desc")}
                    className={`px-4 py-2 border relative w-full ${
                      sortArea === "desc" ? "border-red" : ""
                    }`}
                  >
                    High to Low
                  </button>
                  {sortArea === "desc" && (
                    <div class="absolute top-0 left-0 w-0 h-0 border-t-[14px] border-t-red border-r-[30px] border-r-transparent border-b-0 border-l-0"></div>
                  )}
                </div>
              </div>
            </div>

            {/* Sort by Price */}
            <div className="mb-4">
              <label className="block text-gray font-roboto text-[16px] tracking-wide mb-[10px]">
                Sort by Price
              </label>
              <div className="flex gap-[20px] justify-center flex-col">
                <div className="relative">
                  <button
                    onClick={() => setSortPrice("asc")}
                    className={`px-4 py-2 border relative w-full ${
                      sortPrice === "asc" ? "border-red" : ""
                    }`}
                  >
                    Low to High
                  </button>
                  {sortPrice === "asc" && (
                    <div class="absolute top-0 left-0 w-0 h-0 border-t-[14px] border-t-red border-r-[30px] border-r-transparent border-b-0 border-l-0"></div>
                  )}
                </div>
                <div className="relative">
                  <button
                    onClick={() => setSortPrice("desc")}
                    className={`px-4 py-2 border relative w-full ${
                      sortPrice === "desc" ? "border-red" : ""
                    }`}
                  >
                    High to Low
                  </button>
                  {sortPrice === "desc" && (
                    <div class="absolute top-0 left-0 w-0 h-0 border-t-[14px] border-t-red border-r-[30px] border-r-transparent border-b-0 border-l-0"></div>
                  )}
                </div>
              </div>
            </div>

            {/* Services Dropdown */}
            <div className="mb-4">
              <div
                className="block text-gray font-roboto text-[16px] tracking-wide mb-[10px] flex justify-between items-center"
                onClick={() =>
                  toggleDropdown(
                    openDropdown === "services" ? null : "services"
                  )
                }
              >
                Services
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    openDropdown === "services" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div
                ref={serviceDropdownRef}
                className="overflow-hidden h-0 opacity-0"
              >
                <div className="grid grid-cols-2 mt-2">
                  {servicesList.map((service) => (
                    <label
                      key={service}
                      className="text-sm flex items-center gap-2 py-1"
                    >
                      <input
                        type="checkbox"
                        className="accent-red"
                        checked={selectedServices.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                      />
                      {service}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between gap-4 mt-6">
              <button
                onClick={clearFilters}
                className="w-1/2 text-gray-600 border border-gray-400 py-2 rounded hover:text-red"
              >
                Clear
              </button>
              <button
                onClick={handleSearchClick}
                className="w-1/2 bg-red text-white py-2 rounded shadow hover:bg-opacity-90"
              >
                Search
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Desktop UI */}
      <div className="hidden md:block">
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

            <div
              ref={dropdownRefs.type}
              className="overflow-hidden h-0 opacity-0"
            >
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

            <div
              ref={dropdownRefs.area}
              className="overflow-hidden h-0 opacity-0"
            >
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
            <div
              ref={dropdownRefs.price}
              className="overflow-hidden h-0 opacity-0"
            >
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
      </div>
    </>
  );
};

export default SearchFilter;
