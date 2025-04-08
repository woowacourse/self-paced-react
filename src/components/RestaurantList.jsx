import '../css/RestaurantList.css';
import { convertCategoryData } from '../data/convertCategoryData.js';

function RestaurantList({ restaurants, onChangeModal, onChangeSelectRestaurant, onChangeModalKind }) {
    return (
        <>
            <section className='restaurant-list-container'>
                <ul className='restaurant-list'>
                    {restaurants.map((restaurant) => (
                        <li
                            key={restaurant.id}
                            className='restaurant'
                            onClick={() => {
                                onChangeSelectRestaurant(restaurant);
                                onChangeModalKind('detail');
                                onChangeModal(true);
                            }}
                        >
                            <div className='restaurant__category'>
                                <img src={`./category-${convertCategoryData[restaurant.category]}.png`} alt={restaurant.category} className='category-icon' />
                            </div>
                            <div className='restaurant__info'>
                                <h3 className='restaurant__name text-subtitle'>{restaurant.name}</h3>
                                <p className='restaurant__description text-body'>{restaurant.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}

export default RestaurantList;
