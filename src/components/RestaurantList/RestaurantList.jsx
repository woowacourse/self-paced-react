import "./RestaurantList.css";

import restaurantCategory from "../../data/RestaurantCategory";
function RestaurantList({ restaurants }) {
  return (
    <section className="restaurant-list-container">
      <ul className="restaurant-list">
        {restaurants.map((restaurant) => (
          <li key={restaurant.id} className="restaurant">
            <div className="restaurant__category">
              <img
                src={`/category-${restaurantCategory[restaurant.category]}.png`}
                alt="한식"
                className="category-icon"
              />
            </div>
            <div className="restaurant__info">
              <h3 className="restaurant__name text-subtitle">
                {restaurant.name}
              </h3>
              <p className="restaurant__description text-body">
                {restaurant.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
export default RestaurantList;
