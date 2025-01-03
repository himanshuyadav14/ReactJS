import React, { useState, useEffect } from "react";
// import { restaurantList } from "/src/config";
import { RestaurantCard } from "../components/Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filteredData } from "../utils/helper";

//What is state?
//What is Hooks?
//What is useState?
//What is useEffect?
//How do we handle errors in this?

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState(""); //To create state variables

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

  const offline = useOnline();
  
  if (offline) {
    return <h1> 🔴 Offline, please check your internet connection!!</h1>;
  }

  const handleSearch = () => {
    const data = filteredData(searchText, allRestaurants);
    setFilteredRestaurants(data);
  };

  //Conditional rendering
  //if restaurant is empty then load shimmer UI
  //if my restaurant has data then load actual data UI
  //if my all restro is not there

  //Early return (Not render component)
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
