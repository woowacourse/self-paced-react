import { useEffect, useState } from "react";

import "./App.css";

import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetailModal from "./components/RestaurantDetailModal";
import AddRestaurantModal from "./components/AddRestaurantModal";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [category, setCategory] = useState("전체");
  const filteredRestaurants =
    category === "전체" ? restaurants : restaurants.filter((restaurant) => restaurant.category === category);

  const [isDetailModalOpen, setDetailModalOpen] = useState(false);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await fetch("http://localhost:3000/restaurants");
      const data = await response.json();

      setRestaurants(data);
    };

    fetchRestaurants();
  }, []);

  const openDetailModal = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setDetailModalOpen(true);
  };
  const closeDetailModal = () => {
    setSelectedRestaurant(null);
    setDetailModalOpen(false);
  };

  const openAddModal = () => {
    setAddModalOpen(true);
  };
  const closeAddModal = () => {
    setAddModalOpen(false);
  };
  const addRestaurant = (restaurant) => setRestaurants((prevRestaurants) => [...prevRestaurants, restaurant]);

  return (
    <>
      <Header onClickAddButton={openAddModal} />
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList restaurants={filteredRestaurants} onClickItem={openDetailModal} />
      </main>
      <aside>
        {isDetailModalOpen && <RestaurantDetailModal restaurant={selectedRestaurant} onClose={closeDetailModal} />}
        {isAddModalOpen && <AddRestaurantModal onClose={closeAddModal} onSubmit={addRestaurant} />}
      </aside>
    </>
  );
}

export default App;
