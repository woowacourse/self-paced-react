import "./App.css";
import Header from "./components/Header/Header.jsx";
import CategoryFilter from "./components/CategoryFilter/CategoryFilter.jsx";
import RestaurantList from "./components/RestaurantList/RestaurantList.jsx";
import RestaurantDetailModal from "./components/RestaurantDetailModal/RestaurantDetailModal.jsx";
import AddRestaurantModal from "./components/AddRestaurantModal/AddRestaurantModal.jsx";

function App() {
  return (
    <>
      <Header />
      <main>
        <CategoryFilter />
        <RestaurantList />
      </main>
      <aside>
        <RestaurantDetailModal />
        <AddRestaurantModal />
      </aside>
    </>
  );
}

export default App;
