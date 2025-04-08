import './App.css';
import CategoryFilter from './components/CategoryFilter';
import Header from './components/Header';
import RestaurantList from './components/RestaurantList';
import Modal from './components/Modal';
import AddRestaurantModal from './components/AddRestaurantModal';
import RestaurantDetailModal from './components/RestaurantDetailModal';
import { useEffect, useState } from 'react';
import { restaurantsData } from './data/restaurantsData';

function App() {
    const [restaurants, setRestaurants] = useState(restaurantsData);
    const [category, setCategory] = useState('전체');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [modalKind, setModalKind] = useState('');

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
                    <Modal
                        onChangeModal={setIsModalOpen}
                        selectedRestaurant={selectedRestaurant}
                        currentRestaurants={restaurants}
                        handleRestaurant={setRestaurants}
                    >
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
