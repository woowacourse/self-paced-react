import "./App.css";
import "../src/components/Header.jsx";
import Header from "../src/components/Header.jsx";
import CategoryFilter from "./components/CategoryFilter.jsx";
import RestaurantList from "./components/RestaurantList.jsx";
import RestaurantDetailModal from "./components/RestaurantDetailModal.jsx";
import AddRestaurantModal from "./components/AddRestaurantModal.jsx";

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
