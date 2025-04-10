import { useState } from "react";

import CategoryFilter from "./CategoryFilter/CategoryFilter";
import RestaurantList from "./RestaurantList/RestaurantList";

function RestaurantListLayout({ onClickRestaurant, restaurants }) {
  const [category, setCategory] = useState("전체");
  const filteredRestaurants = restaurants.filter((restaurant) => {
    if (category === "전체") return true;
    return restaurant.category === category;
  });

  return (
    <>
      <section>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList
          restaurants={filteredRestaurants}
          onClickRestaurant={onClickRestaurant}
        />
      </section>
    </>
  );
}
export default RestaurantListLayout;
