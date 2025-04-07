import "./App.css";
import Header from "./Header/Header";
import RestaurantList from "./RestaurantList/RestaurantList";
import RestaurantDetailModal from "./Modal/RestaurantDetailModal";
import AddRestaurantModal from "./Modal/AddRestaurantModal";
import CategoryFilter from "./Filter/CategoryFilter";
import { restaurants } from "./Restaurants";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("");

  const filteredRestaurants = restaurants.filter(
    (restaurant) => category === "" || restaurant.category === category
  );

  return (
    <>
      <Header />
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList restaurants={filteredRestaurants} />
      </main>
      <aside>
        <RestaurantDetailModal />
        <AddRestaurantModal />
      </aside>
    </>
  );
}

export default App;
