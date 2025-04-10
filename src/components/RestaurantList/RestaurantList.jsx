import "./RestaurantList.css";

function RestaurantList({ restaurants, onItemClick }) {
  return (
    <section className="restaurant-list-container">
      <ul className="restaurant-list">
        {restaurants.map(({ id, image, category, name, description }) => (
          <li
            className="restaurant"
            key={id}
            onClick={() =>
              onItemClick({ id, image, category, name, description })
            }
          >
            <div className="restaurant__category">
              <img src={image} alt={category} className="category-icon" />
            </div>
            <div className="restaurant__info">
              <h3 className="restaurant__name text-subtitle">{name}</h3>
              <p className="restaurant__description text-body">{description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RestaurantList;
