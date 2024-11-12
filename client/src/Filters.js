import React, { useRef } from "react";

// Sample filter data
const filters = [
  "All",
  "Technology",
  "Health",
  "Science",
  "Sports",
  "Education",
  "Travel",
  "Music",
  "Movies",
  "Finance",
  "Food",
  "Art",
  "History",
  "Fashion",
  "Lifestyle",
  "Gaming",
  "Books",
  "Politics",
  "Nature",
];

const Filters = () => {
  const filterContainerRef = useRef(null);

  const scrollLeft = () => {
    if (filterContainerRef.current) {
      filterContainerRef.current.scrollBy({
        left: -200, // Scroll by 200px to the left
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (filterContainerRef.current) {
      filterContainerRef.current.scrollBy({
        left: 200, // Scroll by 200px to the right
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full py-4 relative">
      {/* Left scroll button outside the container (hidden on small screens) */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2  text-black rounded-full px-4 py-2 z-10 hover:bg-gray-100 transition md:block hidden"
        onClick={scrollLeft}
      >
        &lt;
      </button>

      {/* Filter buttons wrapper with scroll inside */}
      <div
        ref={filterContainerRef}
        className="w-full overflow-x-auto flex space-x-4 pb-4 hide-scrollbar pl-12 pr-12 sm:px-6 md:px-12" // Adjust padding on small screens
      >
        {filters.map((filter, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-gray-100 text-gray-600 rounded-full whitespace-nowrap hover:bg-gray-700 hover:text-white transition text-xs sm:text-sm md:text-base" // Adjust font size for responsiveness
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Right scroll button outside the container (hidden on small screens) */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2  text-black rounded-full px-4 py-2 z-10 hover:bg-gray-100 transition md:block hidden"
        onClick={scrollRight}
      >
        &gt;
      </button>
    </div>
  );
};

export default Filters;
