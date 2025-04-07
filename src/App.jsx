import './App.css';
import AddRestaurantModal from './components/Modal/AddRestaurantModal/AddRestaurantModal';
import CategoryFilter from './components/CategoryFilter/CategoryFilter';
import Header from './components/Header/Header';
import RestaurantList from './components/RestaurantList/RestaurantList';

function App() {
  return (
    <>
      {/* GNB */}
      <Header />
      <main>
        {/* 카테고리/정렬 필터 */}
        <CategoryFilter />
        {/* 음식점 목록 */}
        <RestaurantList />
      </main>
      <aside>
        {/* 음식점 정보 모달 */}
        <RestaurantList />
        {/* 음식점 추가 모달 */}
        <AddRestaurantModal />
      </aside>
    </>
  );
}

export default App;
