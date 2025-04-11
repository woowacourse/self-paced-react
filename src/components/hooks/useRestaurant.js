import { useState, useEffect } from "react";

function useRestaurants() {
  const [restaurants, setRestaurants] = useState([]);

  const fetchRestaurants = () => {
    fetch("http://localhost:3000/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return {
    restaurants,
    fetchRestaurants,
  };
}

export default useRestaurants;
