import './App.css';
import CategoryFilter from './components/CategoryFilter';
import Header from './components/Header';
import RestaurantList from './components/RestaurantList';
import Modal from './components/Modal';
import AddRestaurantModal from './components/AddRestaurantModal';
import RestaurantDetailModal from './components/RestaurantDetailModal';
import { useEffect, useState } from 'react';

function App() {
    const [restaurants, setRestaurants] = useState([]);
    const [category, setCategory] = useState('전체');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [modalKind, setModalKind] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/restaurants')
            .then((response) => response.json())
            .then((data) => setRestaurants(data))
            .catch((error) => {
                console.error(error.message);
            });
    }, []);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await fetch('http://localhost:3000/restaurants');
                const restaurantsData = await response.json();

                if (category === '전체') {
                    setRestaurants(restaurantsData);
                    return;
                }

                const filteredRestaurants = restaurantsData.filter((restaurant) => restaurant.category === category);
                setRestaurants(filteredRestaurants);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchRestaurants();
    }, [category]);

    return (
        <>
            <Header onChangeModal={setIsModalOpen} onChangeModalKind={setModalKind} />
            <main>
                <CategoryFilter category={category} onChangeCategory={setCategory} />
                <RestaurantList
                    restaurants={restaurants}
                    onChangeModal={setIsModalOpen}
                    onChangeSelectRestaurant={setSelectedRestaurant}
                    onChangeModalKind={setModalKind}
                />
            </main>
            <aside>
                {isModalOpen && (
                    <Modal onChangeModal={setIsModalOpen}>
                        {modalKind === 'addForm' ? (
                            <AddRestaurantModal onChangeModal={setIsModalOpen} currentRestaurants={restaurants} handleRestaurant={setRestaurants} />
                        ) : (
                            <RestaurantDetailModal onChangeModal={setIsModalOpen} selectedRestaurant={selectedRestaurant} />
                        )}
                    </Modal>
                )}
            </aside>
        </>
    );
}

export default App;
