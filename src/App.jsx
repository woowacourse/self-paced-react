import './App.css';
import AddRestaurantModal from './components/AddRestaurantModal';
import CategoryFilter from './components/CategoryFilter';
import Header from './components/Header';
import RestaurantDetailModal from './components/RestaurantDetailModal';
import RestaurantList from './components/RestaurantList';
import { useEffect, useState } from 'react';
import { restaurantsData } from './data/restaurantsData';

function App() {
    const [restaurants, setRestaurants] = useState(restaurantsData);
    const [category, setCategory] = useState('전체');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    useEffect(() => {
        if (category === '전체') {
            setRestaurants(restaurantsData);
        } else {
            const filteredRestaurants = restaurantsData.filter((restaurant) => restaurant.category === category);
            setRestaurants(filteredRestaurants);
        }
    }, [category]);

    return (
        <>
            <Header onChangeModal={setIsAddModalOpen} />
            <main>
                <CategoryFilter category={category} onChangeCategory={setCategory} />
                <RestaurantList restaurants={restaurants} onChangeModal={setIsModalOpen} onChangeSelectRestaurant={setSelectedRestaurant} />
            </main>
            <aside>
                {isModalOpen && <RestaurantDetailModal onChangeModal={setIsModalOpen} selectedRestaurant={selectedRestaurant} />}
                {isAddModalOpen && <AddRestaurantModal onChangeModal={setIsAddModalOpen} currentRestaurants={restaurants} handleRestaurant={setRestaurants} />}
            </aside>
        </>
    );
}

export default App;
