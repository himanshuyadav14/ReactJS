import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../config";
import Shimmer from "../components/Shimmer";
import useRestaurant from "../utils/useRestaurant"

const RestaurantDetail = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu">
      <div>
        <h1>Restaurant id : {id}</h1>
        <h2>{restaurant?.info?.name}</h2>
        <img src={CDN_URL + restaurant?.info?.cloudinaryImageId} alt="" />
        <h3>{restaurant?.info?.area}</h3>
        <h3>{restaurant?.info?.city}</h3>
        <h3>{restaurant?.info?.avgRating}</h3>
        <h3>{restaurant?.info?.costForTwo}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {restaurant?.menu?.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantDetail;
