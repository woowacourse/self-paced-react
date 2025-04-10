import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter.jsx";
import RestaurantList from "./components/RestaurantList/RestaurantList.jsx";
import RestaurantDetailModal from "./components/RestaurantDetailModal/RestaurantDetailModal.jsx";
import AddRestaurantModal from "./components/AddRestaurantModal/AddRestaurantModal.jsx";

function App() {
  const [restaurants, setRestaurants] = useState([
    {
      id: "a01",
      name: "피양콩할마니",
      description:
        "평양 출신의 할머니가 수십 년간 운영해온 비지 전문점 피양콩 할마니...",
      category: "한식",
    },
    {
      id: "a02",
      name: "친친",
      description: "정통 중식의 세계를 펼쳐갑니다",
      category: "중식",
    },
    {
      id: "a03",
      name: "잇쇼우",
      description: "정통 자가제면 사누끼 우동이 대표메뉴입니다.",
      category: "일식",
    },
    {
      id: "a04",
      name: "이태리키친",
      description: "늘 변화를 추구하는 이태리키친입니다.",
      category: "양식",
    },
    {
      id: "a05",
      name: "호아빈 삼성점",
      description: "푸짐한 양에 국물이 일품인 쌀국수",
      category: "아시안",
    },
    {
      id: "a06",
      name: "도스타코스 선릉점",
      description: "멕시칸 캐주얼 그릴",
      category: "기타",
    },
  ]);

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
    setRestaurants((prev) => [...prev, newRestaurant]);
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
