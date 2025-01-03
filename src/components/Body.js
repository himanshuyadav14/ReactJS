import React, { useState, useEffect } from "react";
import { RestaurantCard } from "../components/Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filteredData } from "../utils/helper";
import useOnline from "../utils/useOnline"

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

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
    return <h1> 🔴 Offline, please check your internet connection!!</h1>;
  }

  const handleSearch = () => {
    const data = filteredData(searchText, allRestaurants);
    setFilteredRestaurants(data);
  };

  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          search
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants?.map((restaurant, index) => (
            <Link to={"/restaurant/" + restaurant.info.id}>
              {console.log("ress++", restaurant)}
              <RestaurantCard key={index} restaurant={restaurant} />
            </Link>
          ))
        ) : (
          <h1>No Restaurants found</h1>
        )}
      </div>
    </>
  );
};

export default Body;
