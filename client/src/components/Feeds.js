import React from "react";

const photos = [
  // Array of photo URLs for demonstration
  "https://via.placeholder.com/300x400",
  "https://via.placeholder.com/300x500",
  "https://via.placeholder.com/300x300",
  "https://via.placeholder.com/300x450",
  "https://via.placeholder.com/300x350",
  "https://via.placeholder.com/300x400",
  "https://via.placeholder.com/300x500",
  "https://via.placeholder.com/300x600",
  "https://via.placeholder.com/300x400",
  "https://via.placeholder.com/300x500",
  "https://via.placeholder.com/300x300",
  "https://via.placeholder.com/300x450",
  "https://via.placeholder.com/300x350",
  "https://via.placeholder.com/300x400",
  "https://via.placeholder.com/300x500",
  "https://via.placeholder.com/300x600",
  "https://via.placeholder.com/300x400",
  "https://via.placeholder.com/300x500",
  "https://via.placeholder.com/300x300",
  "https://via.placeholder.com/300x450",
  "https://via.placeholder.com/300x350",
  "https://via.placeholder.com/300x400",
  "https://via.placeholder.com/300x500",
  "https://via.placeholder.com/300x600",
  "https://via.placeholder.com/300x400",
  "https://via.placeholder.com/300x500",
  "https://via.placeholder.com/300x300",
  "https://via.placeholder.com/300x450",
  "https://via.placeholder.com/300x350",
  "https://via.placeholder.com/300x400",
  "https://via.placeholder.com/300x500",
  "https://via.placeholder.com/300x600",
  "https://via.placeholder.com/300x400",
  "https://via.placeholder.com/300x500",
  "https://via.placeholder.com/300x300",
  "https://via.placeholder.com/300x450",
  "https://via.placeholder.com/300x350",
  "https://via.placeholder.com/300x400",
  "https://via.placeholder.com/300x500",
  "https://via.placeholder.com/300x600",
];

const Feeds = () => {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
      {photos.map((photo, index) => (
        <div key={index} className="mb-4 break-inside-avoid">
          <img
            src={photo}
            alt={`Photo ${index + 1}`}
            className="w-full rounded-lg shadow-md"
          />
        </div>
      ))}
    </div>
  );
};

export default Feeds;
