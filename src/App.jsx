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
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const handleClickRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsModalOpen(true);
  };

  const filteredRestaurants =
    category === "전체"
      ? restaurantsData
      : restaurantsData.filter(
          (restaurant) => restaurant.category === category
        );

  return (
    <>
      <Header />
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
        <AddRestaurantModal />
      </aside>
    </>
  );
}

export default App;
