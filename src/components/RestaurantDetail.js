import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../config";
import Shimmer from "../components/Shimmer";

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.95250&lng=75.71050&restaurantId=" +
        id +
        "&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();

    const menuArray =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const items = [];
    console.log(menuArray);

    menuArray?.forEach((menuObj) => {
      if (menuObj?.card?.card?.itemCards) {
        menuObj.card.card.itemCards.forEach((item) => {
          if (item.card.info.name) {
            items.push(item.card.info.name);
          }
        });
      }
    });

    const modifiedData = {
      info: json?.data?.cards[2].card.card.info,
      menu: items,
    };

    setRestaurant(modifiedData);
    console.log(modifiedData);
    console.log(items);
  }

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
