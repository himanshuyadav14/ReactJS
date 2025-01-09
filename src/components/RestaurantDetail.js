import React from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../config";
import Shimmer from "../components/Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const RestaurantDetail = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  const getItemQuantity = (itemId) => {
    const item = cart.find((cartItem) => cartItem.id === itemId);
    return item ? item.quantity : 0;
  };

  const handleAddItem = (item) => {
    console.log(item);
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="container mx-auto px-4 py-8">
      {/* Restaurant Info */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Restaurant Image */}
          <img
            src={CDN_URL + restaurant?.info?.cloudinaryImageId}
            alt={restaurant?.info?.name}
            className="w-full md:w-1/3 h-64 object-cover"
          />
          {/* Restaurant Details */}
          <div className="p-6 md:pl-10">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {restaurant?.info?.name}
            </h1>
            <p className="text-gray-600 mb-2">
              <strong>Area:</strong> {restaurant?.info?.area}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>City:</strong> {restaurant?.info?.city}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Rating:</strong> ⭐ {restaurant?.info?.avgRating || "N/A"}
            </p>
            <p className="text-gray-600">
              <strong>Cost for Two:</strong> ₹
              {restaurant?.info?.costForTwo || "N/A"}
            </p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="bg-gray-50 shadow-md rounded-lg p-6">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">Menu</h1>
        <ul data-testid="menu" className="space-y-2">
          {restaurant?.menu?.map((item) => {
            const quantity = getItemQuantity(item.id);
            return (
              <li
                key={item.id}
                className="flex justify-between items-center border-b pb-2 text-gray-700 last:border-none"
              >
                <span>{item.name}</span>
                <div className="flex items-center">
                  {quantity > 0 ? (
                    <>
                      <button
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                        onClick={() => handleRemoveItem(item)}
                      >
                        -
                      </button>
                      <span className="mx-2">{quantity}</span>
                      <button
                        data-testid="addBtn"
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                        onClick={() => handleAddItem(item)}
                      >
                        +
                      </button>
                    </>
                  ) : (
                    <button
                      data-testid="addBtn"
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                      onClick={() => handleAddItem(item)}
                    >
                      Add Item
                    </button>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantDetail;
