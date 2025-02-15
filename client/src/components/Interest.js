import React, { useState } from "react";
import { Plus } from "lucide-react";

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

const Interest = () => {
  const [selected, setSelected] = useState([]);

  const handleSelect = (filter) => {
    if (selected.includes(filter)) {
      setSelected(selected.filter((item) => item !== filter));
    } else {
      setSelected([...selected, filter]);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20 bg-gray-100 p-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">
          What are you interested in?
        </h2>
        <p className="text-gray-600">Choose three or more.</p>
      </div>

      <div className="max-w-3xl w-full">
        <div className="flex flex-wrap gap-3 justify-center">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => handleSelect(filter)}
              className={`flex items-center gap-2 py-2 px-4 rounded-full text-sm border transition duration-300 ${
                selected.includes(filter)
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300"
              }`}
            >
              <span>{filter}</span>
              <Plus
                size={16}
                className={`transition-transform duration-300 ${
                  selected.includes(filter) ? "rotate-45" : ""
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <button
        className={`mt-8 py-3 px-8 rounded-full text-white text-sm font-semibold transition duration-300 ${
          selected.length >= 3
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-gray-400 cursor-not-allowed"
        }`}
        disabled={selected.length < 3}
      >
        Continue
      </button>
    </div>
  );
};

export default Interest;
