import React, { useState, useEffect, useContext } from "react";
import { RestaurantCard } from "../components/Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filteredData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext"

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const {user} = useContext(UserContext);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9434854&lng=75.7349248&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setAllRestaurants(restaurants || []);
    setFilteredRestaurants(restaurants || []);
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return (
      <h1 className="text-center text-xl font-semibold text-red-500 mt-20">
        🔴 Offline, please check your internet connection!!
      </h1>
    );
  }

  const handleSearch = () => {
    const data = filteredData(searchText, allRestaurants);
    setFilteredRestaurants(data);
  };

  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container mx-auto px-6 sm:px-8 lg:px-12 my-10">
      {/* Search Bar */}
      <div className="flex justify-center items-center gap-4 mt-10 mb-6">
        <input
          type="text"
          className="w-full max-w-md px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search for restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {/* Restaurant List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants?.map((restaurant, index) => (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={index}
              className="block transform transition hover:scale-105"
            >
              <RestaurantCard restaurant={restaurant} user={user} />
            </Link>
          ))
        ) : (
          <h1 className="col-span-full text-center text-lg font-medium text-gray-600">
            No Restaurants found
          </h1>
        )}
      </div>
    </div>
  );
};

export default Body;
