import "./RestaurantList.css";

import RestaurantListItem from "./RestaurantListItem";

export default function RestaurantList({ restaurants, onClickItem }) {
  return (
    <section className="restaurant-list-container">
      <ul className="restaurant-list">
        {restaurants.map((restaurant) => (
          <RestaurantListItem key={restaurant.id} restaurant={restaurant} onClickItem={onClickItem} />
        ))}
      </ul>
    </section>
  );
}
