import { useState } from "react";
import "./App.css";
import BottomModalLayout from "./components/BottomModalLayout/BottomModalLayout";
import Header from "./components/common/Header/Header";
import RestaurantListLayout from "./components/RestaurantListLayout/RestaurantListLayout";
import RestaurantDetailModal from "./components/BottomModalLayout/RestaurantDetailModal/RestaurantDetailModal";
import AddRestaurantModal from "./components/BottomModalLayout/AddRestaurantModal/AddRestaurantModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalName, setModalName] = useState("");
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const openRestaurantDetailModal = ({ restaurant }) => {
    setModalName("restaurantDetail");
    setSelectedRestaurant(restaurant);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalName("");
    setSelectedRestaurant("");
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />
      <main>
        <RestaurantListLayout onClickRestaurant={openRestaurantDetailModal} />
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
              <AddRestaurantModal onClose={closeModal} />
            )}
          </BottomModalLayout>
        )}
      </aside>
    </>
  );
}

export default App;
