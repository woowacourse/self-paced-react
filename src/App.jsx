import './App.css';
import AddRestaurantModal from './components/AddRestaurantModal';
import CategoryFilter from './components/CategoryFilter';
import Header from './components/Header';
import RestaurantDetailModal from './components/RestaurantDetailModal';
import RestaurantList from './components/RestaurantList';
import { useState } from 'react';
import { restaurantsData } from './data/restaurantsData';

function App() {
    const [category, setCategory] = useState('전체');
    const filteredRestaurants = category === '전체' ? restaurantsData : restaurantsData.filter((restaurant) => restaurant.category === category);
    return (
        <>
            <Header />
            <main>
                <CategoryFilter category={category} onChangeCategory={setCategory} />
                <RestaurantList restaurants={filteredRestaurants} />
            </main>
            <aside>
                <RestaurantDetailModal />
                <AddRestaurantModal />
            </aside>
        </>
    );
}

export default App;
