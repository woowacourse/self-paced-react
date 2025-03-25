import CategoryFilter from "./CategoryFilter";
import Header from "./Header";
import RestaurantList from "./RestaurantList";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CategoryFilter />
        <RestaurantList />
      </main>
    </div>
  );
}

export default App;
