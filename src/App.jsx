import "./App.css";
import Header from "./Header/Header";
import RestaurantList from "./RestaurantList/RestaurantList";
import RestaurantDetailModal from "./Modal/RestaurantDetailModal";
import AddRestaurantModal from "./Modal/AddRestaurantModal";
import CategoryFilter from "./Filter/CategoryFilter";
import { restaurants } from "./Restaurants";

function App() {
  return (
    <>
      <Header />
      <main>
        <CategoryFilter />
        <RestaurantList restaurants={restaurants} />
      </main>
      <aside>
        <RestaurantDetailModal />
        <AddRestaurantModal />
      </aside>
    </>
  );
}

export default App;
