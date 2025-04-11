import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter.jsx";
import RestaurantList from "./components/RestaurantList/RestaurantList.jsx";
import RestaurantDetailModal from "./components/RestaurantDetailModal/RestaurantDetailModal.jsx";
import AddRestaurantModal from "./components/AddRestaurantModal/AddRestaurantModal.jsx";
import useRestaurants from "./components/hooks/useRestaurant.js";

function App() {
  const { restaurants, fetchRestaurants } = useRestaurants();
  const [category, setCategory] = useState("전체");
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const filteredRestaurants =
    category === "전체"
      ? restaurants
      : restaurants.filter((r) => r.category === category);

  const handleAddModalClose = () => setAddModalOpen(false);
  const handleDetailModalClose = () => setDetailModalOpen(false);

  const handleAddRestaurant = (newRestaurant) => {
    fetch("http://localhost:3000/restaurants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRestaurant),
    }).then(() => {
      fetchRestaurants();
    });
  };

  const handleRestaurantItemClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setDetailModalOpen(true);
  };

  return (
    <>
      <Header onAddClick={() => setAddModalOpen(true)} />
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList
          restaurants={filteredRestaurants}
          onItemClick={handleRestaurantItemClick}
        />
      </main>
      <aside>
        {detailModalOpen && selectedRestaurant && (
          <RestaurantDetailModal
            restaurant={selectedRestaurant}
            onClose={handleDetailModalClose}
          />
        )}
        {addModalOpen && (
          <AddRestaurantModal
            onAdd={handleAddRestaurant}
            onClose={handleAddModalClose}
          />
        )}
      </aside>
    </>
  );
}

export default App;
