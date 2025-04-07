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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const filteredRestaurants = restaurants.filter(
    (restaurant) => category === "" || restaurant.category === category
  );

  const handleOpenModal = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <Header />
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList
          restaurants={filteredRestaurants}
          onRestaurantClick={handleOpenModal}
        />
      </main>
      <aside>
        {isModalOpen && (
          <RestaurantDetailModal
            isModalOpen={isModalOpen}
            onCloseEvent={handleCloseModal}
            selectedRestaurant={selectedRestaurant}
          />
        )}

        <AddRestaurantModal />
      </aside>
    </>
  );
}

export default App;
