import RestaurantList from "./RestaurantList/RestaurantList";

function RestaurantListLayout() {
  return (
    <>
      <section className="restaurant-list-layout">
        <h2 className="sr-only">식당 리스트</h2>
        <RestaurantList />
      </section>
    </>
  );
}
export default RestaurantListLayout;
