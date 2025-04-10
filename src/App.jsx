import { useState, useEffect } from "react";

import "./App.css";
import AddRestaurantModal from "./components/BottomModalLayout/AddRestaurantModal/AddRestaurantModal";
import BottomModalLayout from "./components/BottomModalLayout/BottomModalLayout";
import RestaurantDetailModal from "./components/BottomModalLayout/RestaurantDetailModal/RestaurantDetailModal";
import Header from "./components/common/Header/Header";
import RestaurantListLayout from "./components/RestaurantListLayout/RestaurantListLayout";

function App() {
  const [modalState, setModalState] = useState({
    isModalOpen: false,
    modalName: "",
  });
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
    setSelectedRestaurant(restaurant);
    setModalState({
      isModalOpen: true,
      modalName: "restaurantDetail",
    });
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
    setModalState({
      isModalOpen: true,
      modalName: "restaurantAdd",
    });
  };

  const closeModal = () => {
    setModalState({
      isModalOpen: false,
      modalName: "",
    });
    setSelectedRestaurant("");
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
        {modalState.isModalOpen && (
          <BottomModalLayout onClose={closeModal}>
            {modalState.modalName === "restaurantDetail" && (
              <RestaurantDetailModal
                restaurant={selectedRestaurant}
                onClose={closeModal}
              />
            )}
            {modalState.modalName === "restaurantAdd" && (
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
