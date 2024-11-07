import React, { useState } from "react";
import { restaurantList } from "/src/config";
import { RestaurantCard } from "../components/Card";

//What is state?
//What is Hooks?
//What is useState?

function filteredData(searchText, restaurants) {
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.info.name.includes(searchText)
  );
  return filteredRestaurants;
}

const Body = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState(""); //To create state variables

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filteredData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} restaurant={restaurant} />
        ))}
      </div>
    </>
  );
};

export default Body;
