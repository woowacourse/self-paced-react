import CategoryFilter from "./CategoryFilter/CategoryFilter";
import RestaurantList from "./RestaurantList/RestaurantList";

function RestaurantListLayout() {
  return (
    <>
      <section>
        <CategoryFilter />
        <RestaurantList />
      </section>
    </>
  );
}
export default RestaurantListLayout;
