import "./App.css";
import BottomModalLayout from "./components/BottomModalLayout/BottomModalLayout";
import Header from "./components/common/Header/Header";
import RestaurantListLayout from "./components/RestaurantListLayout/RestaurantListLayout";

function App() {
  return (
    <>
      <Header />
      <main>
        <RestaurantListLayout />
      </main>
      <aside>
        <BottomModalLayout modalName="restaurantAdd" />
      </aside>
    </>
  );
}

export default App;
