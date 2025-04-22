import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { fetchIslands } from "../utils/fetchIslands";
import { handleSearch } from "../utils/handleSearch";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import HomePageSection6 from "../components/home-page/HomePageSection6";
import IslandCard from "../components/IslandCard";
import SearchFilter from "../components/SearchFilter";
import PageTransition from "../components/PageTransition";
import gsap from "gsap";

import img1 from "../assets/islands-list/1.jpg";

gsap.registerPlugin(ScrollToPlugin);

const IslandsList = ({ dataIslandDetail }) => {
  const resultsRef = useRef();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get("type");
  const keyword = queryParams.get("keyword");

  const [islandsData, setIslandsData] = useState([]);
  const [filteredIslands, setFilteredIslands] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [type]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchIslands();
      setIslandsData(data);
      if (type) {
        setFilteredIslands(handleSearch(data, { sortType: type }));
      } else if (keyword) {
        setFilteredIslands(handleSearch(data, { keyword }));
      } else {
        setFilteredIslands(handleSearch(data, {}));
      }
    };

    loadData();
  }, [type, keyword]);

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setLoadingMore(false);
    }, 800);
  };

  const onFilterChange = (filters) => {
    const result = handleSearch(islandsData, filters);
    setFilteredIslands(result);
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: resultsRef.current.offsetTop - 150,
      },
      ease: "power2.out",
    });
  };

  return (
    <PageTransition>
      <div className="h-[60vh] overflow-hidden relative">
        <img src={img1} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute absolute inset-y-0 lg:left-0 left-[30px] lg:right-0 right-[30px] text-center flex items-center justify-center text-white font-playfair text-[42px] md:text-[40px] lg:text-[60px]">
          {type === "rent"
            ? "Find Your Next Island Vacation"
            : "Find Your Private Island"}
        </div>
      </div>

      <div className="islands-list-container grid grid-cols-12 md:gap-[40px] px-[30px] py-[50px] md:px-[50px] md:py-[80px] lg:p-[140px]">
        <div className="islands-filter col-span-12 lg:col-span-3 relative">
          <div className="islands-filter-container md:sticky md:top-[120px]">
            <SearchFilter
              islandsData={islandsData}
              onFilterChange={onFilterChange}
            />
          </div>
        </div>
        <div ref={resultsRef} className="col-span-12 lg:col-span-9">
          {filteredIslands && filteredIslands.length > 0 ? (
            <>
              <div className="islands-list-result-inputsearch flex items-center pt-[20px] md:pt-0 pb-[20px]">
                <p className="text-dark text-[20px] md:text-[40px] font-roboto">
                  {filteredIslands.length <= 6 ||
                  visibleCount >= filteredIslands.length ? (
                    <>
                      Showing all{" "}
                      <span className="text-red">{filteredIslands.length}</span>{" "}
                      islands
                    </>
                  ) : (
                    <>
                      Showing{" "}
                      <span className="text-red">
                        {Math.min(visibleCount, filteredIslands.length)}
                      </span>{" "}
                      {`of
                     ${filteredIslands.length} islands`}
                    </>
                  )}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-[40px]">
                {filteredIslands.slice(0, visibleCount).map((island) => (
                  <IslandCard key={island.id} island={island} />
                ))}
              </div>

              {visibleCount < filteredIslands.length && (
                <div className="text-center mt-8">
                  <button
                    onClick={handleLoadMore}
                    className="bg-red font-roboto font-600 uppercase text-[16px] text-white px-[25px] md:px-[30px] py-[10px] md:py-[10px] tracking-wide shadow-lg hover:bg-opacity-80 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={loadingMore}
                  >
                    {loadingMore ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          />
                        </svg>
                      </span>
                    ) : (
                      "Load More"
                    )}
                  </button>
                </div>
              )}
            </>
          ) : (
            <p className="font-playfair text-gray text-[30px] text-center py-[50px]">
              No islands were found matching your selection.
            </p>
          )}
        </div>
      </div>

      <HomePageSection6 />
    </PageTransition>
  );
};

export default IslandsList;
