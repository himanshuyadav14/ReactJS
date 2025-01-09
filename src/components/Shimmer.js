import React from "react";

const Shimmer = () => {
  return (
    <div data-testid="shimmer" className="restaurant-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {Array(20)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-lg h-48"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
