import "./App.css";

import Header from "./components/Header/Header";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter";
import RestaurantList from "./components/RestaurantList/RestaurantList";
import RestaurantDetailModal from "./components/Modal/RestaurantDetailModal";
import AddRestaurantModal from "./components/Modal/AddRestaurantModal";
import { useEffect, useState } from "react";

function App() {
  const [category, setCategory] = useState("전체");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await fetch("http://localhost:3000/restaurants");
      const data = await response.json();
      console.log(data);
      setRestaurants(data);
    };
    fetchRestaurants();
  }, []);

  const handleClickRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setIsModalOpen(true);
  };

  const handleAddRestaurant = async (newRestaurant) => {
    const response = await fetch("http://localhost:3000/restaurants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRestaurant),
    });
    const data = await response.json();
    setRestaurants([...restaurants, data]);
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
