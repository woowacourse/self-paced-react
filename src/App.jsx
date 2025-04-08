import "./App.css";

import Header from "./components/Header/Header";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import RestaurantList from "./components/RestaurantList/RestaurantList";
import RestaurantDetailModal from "./components/Modal/RestaurantDetailModal";
import AddRestaurantModal from "./components/Modal/AddRestaurantModal";
import restaurantsData from "./data/restaurantData";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("전체");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [restaurants, setRestaurants] = useState(restaurantsData);

  const handleClickRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsModalOpen(true);
  };

  const handleAddRestaurant = (newRestaurant) => {
    setRestaurants([...restaurants, newRestaurant]);
    setIsAddModalOpen(false);
  };
  const filteredRestaurants =
    category === "전체"
      ? restaurants
      : restaurants.filter((restaurant) => restaurant.category === category);

  return (
    <>
      <Header onClickAdd={() => setIsAddModalOpen(true)} />
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList
          restaurants={filteredRestaurants}
          onClickDetail={handleClickRestaurant}
        />
      </main>
      <aside>
        {isModalOpen && (
          <RestaurantDetailModal
            restaurant={selectedRestaurant}
            onClose={() => setIsModalOpen(false)}
          />
        )}
        {isAddModalOpen && (
          <AddRestaurantModal
            onSubmit={handleAddRestaurant}
            onClose={() => setIsAddModalOpen(false)}
          />
        )}
      </aside>
    </>
  );
}

export default App;
