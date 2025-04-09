import { useState } from "react";
import "./App.css";
import BottomModalLayout from "./components/BottomModalLayout/BottomModalLayout";
import Header from "./components/common/Header/Header";
import RestaurantListLayout from "./components/RestaurantListLayout/RestaurantListLayout";
import RestaurantDetailModal from "./components/BottomModalLayout/RestaurantDetailModal/RestaurantDetailModal";
import AddRestaurantModal from "./components/BottomModalLayout/AddRestaurantModal/AddRestaurantModal";
import { useEffect } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalName, setModalName] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const response = await fetch("http://localhost:3000/restaurants");
      const data = await response.json();
      setRestaurants(data);
    };

    fetchRestaurants();
  }, []);

  const openRestaurantDetailModal = ({ restaurant }) => {
    setModalName("restaurantDetail");
    setSelectedRestaurant(restaurant);
    setIsModalOpen(true);
  };

  const onAddRestaurant = async (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const newRestaurant = {
      id: Date.now().toString(),
      name: form.get("name"),
      description: form.get("description"),
      category: form.get("category"),
    };

    const response = await fetch("http://localhost:3000/restaurants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRestaurant),
    });

    if (!response.ok) {
      alert("레스토랑 추가에 실패했습니다.");
      return;
    }

    setRestaurants([...restaurants, newRestaurant]);
    closeModal();
  };

  const openAddRestaurantModal = () => {
    setModalName("restaurantAdd");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalName("");
    setSelectedRestaurant("");
    setIsModalOpen(false);
  };

  return (
    <>
      <Header onAddRestaurant={openAddRestaurantModal} />
      <main>
        <RestaurantListLayout
          restaurants={restaurants}
          onClickRestaurant={openRestaurantDetailModal}
        />
      </main>
      <aside>
        {isModalOpen && (
          <BottomModalLayout onClose={closeModal}>
            {modalName === "restaurantDetail" && (
              <RestaurantDetailModal
                restaurant={selectedRestaurant}
                onClose={closeModal}
              />
            )}
            {modalName === "restaurantAdd" && (
              <AddRestaurantModal
                onAddRestaurant={onAddRestaurant}
                onClose={closeModal}
              />
            )}
          </BottomModalLayout>
        )}
      </aside>
    </>
  );
}

export default App;
