import { CDN_URL } from "/src/config";

export const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="card bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out">
      {/* Restaurant Image */}
      <img
        src={CDN_URL + restaurant.info.cloudinaryImageId}
        alt={restaurant.info.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-4">
        {/* Restaurant Name */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{restaurant.info.name}</h2>

        {/* Cuisines */}
        <h3 className="text-lg text-gray-600 mb-2">{restaurant.info.cuisines.join(", ")}</h3>

        {/* Average Rating */}
        <h4 className="text-xl text-yellow-500 font-semibold mb-2">
          {restaurant.info.avgRating} stars
        </h4>

        {/* Additional Details (Cost for Two, Location) */}
        <div className="text-gray-500 text-sm flex justify-between items-center">
          <span>{restaurant.info.costForTwo} for two</span>
          <span>{restaurant.info.area}, {restaurant.info.city}</span>
        </div>
      </div>
    </div>
  );
};
