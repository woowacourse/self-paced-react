import './RestaurantList.css';

  return (
    <section className="restaurant-list-container">
      <ul className="restaurant-list">
        {restaurants.map((restaurant) => (
            <div className="restaurant__category">
              <img
                src={`/category-${getCategoryImageName(restaurant.category)}.png`}
                alt={restaurant.category}
                className="category-icon"
              />
            </div>
            <div className="restaurant__info">
              <h3 className="restaurant__name text-subtitle">{restaurant.name}</h3>
              <p className="restaurant__description text-body">{restaurant.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function getCategoryImageName(category) {
  const map = {
    한식: 'korean',
    중식: 'chinese',
    일식: 'japanese',
    양식: 'western',
    아시안: 'asian',
    기타: 'etc',
  };
  return map[category] || 'etc';
}

export default RestaurantList;
