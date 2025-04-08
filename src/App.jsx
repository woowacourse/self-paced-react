import './App.css';
import AddRestaurantModal from './components/AddRestaurantModal';
import CategoryFilter from './components/CategoryFilter';
import Header from './components/Header';
import RestaurantDetailModal from './components/RestaurantDetailModal';
import RestaurantList from './components/RestaurantList';

function App() {
    return (
        <>
            <Header />
            <main>
                <CategoryFilter />
                <RestaurantList />
            </main>
            <aside>
                <RestaurantDetailModal />
                <AddRestaurantModal />
            </aside>
        </>
    );
}

export default App;
