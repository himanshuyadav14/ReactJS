import { useState, useEffect } from "react";
import {FETCH_MENU_URL} from "../config";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + id + "&catalog_qa=undefined&submitAction=ENTER");

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

  return restaurant;
};

export default useRestaurant;
