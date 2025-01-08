import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, [id]);  // Make sure to refetch when the id changes

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + id + "&catalog_qa=undefined&submitAction=ENTER");
    const json = await data.json();

    const menuArray =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const items = [];
    const seenItems = new Set();  // To track already added items

    menuArray?.forEach((menuObj) => {
      if (menuObj?.card?.card?.itemCards) {
        menuObj.card.card.itemCards.forEach((item) => {
          if (item.card.info) {
            // Ensure item is unique by checking if its ID is in the seenItems Set
            const itemId = item.card.info.id;
            if (!seenItems.has(itemId)) {
              items.push(item.card.info);
              seenItems.add(itemId);  // Mark this item as added
            }
          }
        });
      }
    });

    const modifiedData = {
      info: json?.data?.cards[2].card.card.info,
      menu: items,
    };

    console.log(modifiedData);
    setRestaurant(modifiedData);
  }

  return restaurant;
};

export default useRestaurant;
