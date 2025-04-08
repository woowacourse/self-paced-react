import '../css/Modal.css';
import { useEffect } from 'react';

function RestaurantDetailModal({ onChangeModal, selectedRestaurant }) {
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            onChangeModal(false);
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <>
            <div className='modal modal--open'>
                <div className='modal-backdrop' onClick={() => onChangeModal(false)}></div>
                <div className='modal-container'>
                    <h2 className='modal-title text-title'>{selectedRestaurant.name}</h2>
                    <div className='restaurant-info'>
                        <p className='restaurant-info__description text-body'>{selectedRestaurant.description}</p>
                    </div>
                    <div className='button-container'>
                        <button className='button button--primary text-caption' onClick={() => onChangeModal(false)}>
                            닫기
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RestaurantDetailModal;
