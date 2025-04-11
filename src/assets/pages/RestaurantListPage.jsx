import { useEffect, useState } from "react";
import RestaurantList from "../../components/RestaurantList/RestaurantList";

function RestaurantListPage() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/restaurants")
      .then((restaurant) => restaurant.json())
      .then((data) => {
        setRestaurants(data);
      });
  }, []);
  return <RestaurantList restaurants={restaurants} />;
}

export default RestaurantListPage;
