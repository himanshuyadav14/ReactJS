import { CDN_URL } from "/src/config";
export const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="card">
      <img src={CDN_URL + restaurant.info.cloudinaryImageId} alt="" />
      <h2>{restaurant.info.name}</h2>
      <h3>{restaurant.info.cuisines.join(", ")}</h3>
      <h4>{restaurant.info.avgRating} stars</h4>
    </div>
  );
};
