import "./RestaurantList.css";

function RestaurantList({ restaurants, onItemClick }) {
  return (
    <section className="restaurant-list-container">
      <ul className="restaurant-list">
        {restaurants.map((restaurant) => (
          <li
            className="restaurant"
            key={restaurant.id}
            onClick={() => onItemClick(restaurant)}
          >
            <div className="restaurant__category">
              <img
                src={restaurant.image}
                alt={restaurant.category}
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
