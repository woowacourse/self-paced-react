import "./App.css";
import Header from "./components/common/Header/Header";
import RestaurantListLayout from "./components/RestaurantListLayout/RestaurantListLayout";

function App() {
  return (
    <>
      <Header />
      <main>
        <RestaurantListLayout />
      </main>
      <aside></aside>
    </>
  );
}

export default App;
