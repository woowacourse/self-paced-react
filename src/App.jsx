import './App.css';
import CategoryFilter from './components/CategoryFilter/CategoryFilter';
import Header from './components/Header/Header';
import RestaurantList from './components/RestaurantList/RestaurantList';
import RestaurantDetailModal from './components/Modal/RestaurantDetailModal/RestaurantDetailModal';
import { useState } from 'react';
import { useRestaurants } from './hook/useRestaurants';
import AddRestaurantModal from './components/Modal/AddRestaurantModal/AddRestaurantModal';
import { useModal } from './hook/useModal';
import Loading from './components/Loading';
import Error from './components/Error';

function App() {
  const { restaurants, isLoading, error, addRestaurant } = useRestaurants();
  const { modalState, openDetailModal, openAddModal, closeModals } = useModal();
  const [category, setCategory] = useState('전체');

  const filteredRestaurants = restaurants.filter(
    (restaurant) => category === '전체' || restaurant.category === category
  );

  if (isLoading) return <Loading message="음식점 목록을 불러오는 중입니다" />;

  if (error) return <Error message={error} onRetry={() => window.location.reload()} />;

  return (
    <>
      <Header onAddClick={openAddModal} />
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList restaurants={filteredRestaurants} onClickItem={openDetailModal} />
      </main>
      {modalState.isDetailOpen && (
        <RestaurantDetailModal restaurant={modalState.selectedRestaurant} onClose={closeModals} />
      )}
      {modalState.isAddOpen && <AddRestaurantModal onClose={closeModals} onSubmit={addRestaurant} />}
    </>
  );
}

export default App;
